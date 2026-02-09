import { Character } from "@/types/character";

const BASE_URL = process.env.SUPERHERO_API_URL;

interface Appearance {
  gender: string
  race: string
  height: string[]
  weight: string[]
}

function normalizeAppearance(a: Appearance) {
  if (!a) return a;

  return {
    gender: a.gender,
    race: a.race,
    height: Array.isArray(a.height) ? a.height[1] : a.height,
    weight: Array.isArray(a.weight) ? a.weight[1] : a.weight,
  };
}


export async function fetchCharacter(id: string | number): Promise<Character | null> {
  if (!BASE_URL) return null;
  if (!id) return null;

  try {
    const res = await fetch(`${BASE_URL}/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;

    const data = await res.json();

    if (data.response !== 'success') return null;
    data.appearance = normalizeAppearance(data.appearance);
    return data
  } catch(err) {
    console.error("fetchCharacter error", err)
    return null
  }
}

export async function fetchCharacters(limit = 40): Promise<Character[]> {
  if (!BASE_URL) return [];

  const ids = Array.from(
    { length: limit },
    (_, i) => i + 1
  );
  const results = await Promise.all(
    ids.map(async (id) => {
      try {
        const res = await fetch(`${BASE_URL}/${id}`, {
           next: { revalidate: 60 } 
        });

        if (!res.ok) return null;
        const data = await res.json();
        return data.response === 'success' 
          ? { ...data, appearance: normalizeAppearance(data.appearance) } : null;
      } catch {
        return null;
      }
    })
  );
  return results.filter(Boolean) as Character[];
}
