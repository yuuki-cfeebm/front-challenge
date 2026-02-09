"use client"
import SearchBar from "../SearchBar";
import Favorites from "./Filter";
import { Character } from "@/types/character";
import CharactersList from "./CharactersList";
import { useEffect, useState } from "react";
import useFavorites from "@/context/FavoritesContext";

const ITEMS_PER_PAGE = 20;

export default function Home( {characters}: {characters: Character[]}) {

  const [search, setSearch] = useState("")
  const { favorites, filter } = useFavorites()
  const [page, setPage] = useState(1)
  
  // const filteredCharacters = characters.filter(character =>
  //   character.name.toLowerCase().includes(search.toLowerCase())
  // ).sort((a, b) => a.name.localeCompare(b.name))

  // const totalPages = Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE)
  // const startIdx = (page - 1) * ITEMS_PER_PAGE
  // const endIdx = startIdx + ITEMS_PER_PAGE
  // const paginatedCharacters = filteredCharacters.slice(startIdx, endIdx)

  const baseCharacters = filter ? favorites : characters

  const filteredCharacters = baseCharacters
    .filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  const totalPages = Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE)

  const paginatedCharacters = filteredCharacters.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  useEffect(() => {
    setPage(1)
  }, [search, filter])

  return(
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-1 text-2xl uppercase font-bold">explore o universo</p>
        <p className="text-gray-2">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
      </div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} className="bg-light-orange text-orange placeholder:text-orange h-16" width="w-2/3"/>
      <Favorites count={filter ? favorites.length : filteredCharacters.length}/>
      <CharactersList characters={paginatedCharacters}/>
      
      <div className=" py-6 flex justify-center gap-4 items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-orange text-white disabled:opacity-50 disabled:cursor-not-allowed rounded"
        > 
          Anterior
        </button>
        <span className="text-gray-1">
          {page} / {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          className="px-4 py-2 bg-orange text-white disabled:opacity-50 disabled:cursor-not-allowed rounded"
        >
          Próxima
        </button>
      </div>
    </>
  )
}