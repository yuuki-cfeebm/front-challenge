"use client"
import useSearch from "@/context/SearchContext";
import { Character } from "@/types/character";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SearchItem from "./SearchItem";
import { usePathname } from "next/navigation";

interface SearchBarProps {
  className: string
  width: string
  characters: Character[]
  page: "home" | "character"

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  value?: string
}

export default function SearchBar( { width, className, characters, page, onChange, onFocus, value }: SearchBarProps) {

  const [open, setOpen] = useState(false)
  const ref= useRef<HTMLDivElement>(null)
  const { search, setSearch} = useSearch()
  const pathName = usePathname()

  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if(ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)
  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
  }, [])


  useEffect(() => {
    setSearch("")
  }, [pathName])

  const filteredCharacters = search.length > 0 
  ? (characters || [])
    .filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5) 
  : []
  

  return(
    page === "home" ? (
      <div className={`flex justify-center gap-10 relative pt-6 ${width}`}
    >
      <div className="flex items-center w-full ">
        <Image 
          src={"/images/busca/lupa.svg"}
          alt="img-rectangle"
          width={30}
          height={30}
          className="absolute left-8 z-30"
        />
        <input 
          type="text"
          className={`rounded-full pl-24 outline-none z-20 ${className} w-full`}
          placeholder="Procure por Heróis"
          onChange={onChange}
          onFocus={onFocus}
          value={value}
        />
      </div>
    </div>
    ) : (
      <div 
      ref={ref}
      className={`flex justify-center gap-10 relative ${width}`}
    >
      <div className="flex items-center w-full">
        <Image 
          src={"/images/busca/lupa.svg"}
          alt="img-rectangle"
          width={30}
          height={30}
          className="absolute left-8 z-30"
        />
        <input 
          type="text"
          className={`rounded-full pl-24 outline-none z-20 ${className} w-full`}
          placeholder="Procure por Heróis"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOpen(true)}
          value={search}
        />
      </div>
      { open && filteredCharacters.length > 0 && (
        <div 
          className="flex flex-col w-full absolute top-20 left-0 rounded-b-xl z-20 shadow-lg bg-white"
        >
          { filteredCharacters.map(character => (
            <SearchItem key={character.id} character={character}/>
          ))}
        </div>
      )}
    </div>
    )
  )}
