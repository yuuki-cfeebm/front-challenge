import { GetCharacters } from "@/app/api/characters/route"
import { Character } from "@/types/character"
import CharacterCard from "../CharacterCard"

export default function CharactersList( {characters }: {characters: Character[]}) {

  return(
    <div className="w-full flex justify-center pb-24">
      <div className="grid grid-cols-4 gap-6 justify-items-center w-full">
        {characters.map((character) => (
          <CharacterCard 
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </div>
  )
}