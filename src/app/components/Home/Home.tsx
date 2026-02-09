"use client"
import SearchBar from "../SearchBar";
import Favorites from "./Filter";
import { Character } from "@/types/character";
import CharactersList from "./CharactersList";
import { useEffect, useState } from "react";
import useFavorites from "@/context/FavoritesContext";
import { fetchCharacters } from "@/lib/characters";

export default function Home( {characters}: {characters: Character[]}) {

  const [search, setSearch] = useState("")
  const { favorites, filter } = useFavorites()

  const [page, setPage] = useState(1)
  const [charactersPage, setCharacteresPage] = useState<Character[]>([])
  
  useEffect(() => {
    fetchCharacters(page).then(setCharacteresPage)
  }, [page])

  useEffect(() => {
    setPage(1)
  }, [search])

  
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a,b) => a.name.localeCompare(b.name))

  return(
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-1 text-2xl uppercase font-bold">explore o universo</p>
        <p className="text-gray-2">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
      </div>
      <SearchBar value={search} onChange={setSearch} className="bg-light-orange text-orange placeholder:text-orange h-16" width="w-2/3"/>
      <Favorites children={filter ? favorites.length : filteredCharacters.length}/>
      <CharactersList characters={filteredCharacters}/>
      <div className="bg-black">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => Math.max(p - 1))}
        > 
          anterior
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
        >
          Próxima
        </button>
      </div>
    </>
  )
}