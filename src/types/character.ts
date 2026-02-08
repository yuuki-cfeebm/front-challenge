export type Character = {
  id: string,
  name: string,
  image: {
    url: string
  },
  biography: {
    fullName: string,
  }
  powerstats: {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
  },
  appearance: {
    gender: string,
    race: string | null,
    height: string[],
    weight: string[]
  },
}
						