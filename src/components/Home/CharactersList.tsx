"use client"
import { Character } from "@/types/character"
import CharacterCard from "../CharacterCard"
import useFavorites from "@/context/FavoritesContext"

export default function CharactersList( {characters }: {characters: Character[]}) {

  const { favorites, filter } = useFavorites()
  const sortedCharacters = [...characters].sort((a, b) => 
    a.name.localeCompare(b.name)
  )

  return(
    <div className="w-full flex justify-center pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
        {filter ? (
          favorites.map(fav => 
            <CharacterCard key={fav.id} character={fav}/>
          )
        ) : (
        sortedCharacters.map((character) => (
          <CharacterCard 
            key={character.id}
            character={character}
          />
        )))
        }
      </div>
    </div>
  )
}