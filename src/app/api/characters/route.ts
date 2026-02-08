import { Character } from "@/types/character"

const BASE_URL = process.env.SUPERHERO_API_URL
const limit = 40

export async function GetCharacters(): Promise<Character[]> {
  const ids = Array.from({ length: limit }, (_, i) => i + 1)

  const characters = await Promise.all(
    ids.map( async (id) => {
      const response = await fetch(`${BASE_URL}/${id}`)
      const data = await response.json()   

      return data.response === "success" ? data : null
    })
  )

  return characters.filter(Boolean) as Character[]

}