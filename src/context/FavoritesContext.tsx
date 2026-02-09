"use client"
import { Character } from "@/types/character"
import { error } from "console"
import { createContext, useActionState, useContext, useEffect, useState } from "react"

type FavoritesContextType = {
  favorites: Character[]
  handleFavorites: (character: Character) => void
  isFavorite: (id: string) => boolean

  filter: boolean
  handleFilter: () => void
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

export function FavoritesProvider({ children }: {children: React.ReactNode}) {

  const [filter, setFilter] = useState(false)
  
  const [favorites, setFavorites] = useState<Character[]>(() => {
    const stored = localStorage.getItem("favorites")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  },[favorites])

  function handleFavorites(character: Character) {
    setFavorites(prev => {
      const exists = prev.some(item => item.id === character.id)

      if(exists) {
        return prev.filter(item => item.id !== character.id)
      }

      if(prev.length >= 5) {
        alert("É possível adicionar somente 5 favoritos")
        return prev
      }

      return [...prev, character]
    })
  }
      console.log(favorites)


  function isFavorite(id: string) {
    return favorites.some(item => item.id === id)
  }

  function handleFilter() {
    setFilter(!filter)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, handleFavorites, isFavorite, handleFilter, filter }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default function useFavorites() {
  const context = useContext(FavoritesContext)
  if(!context) throw new Error("Deve ser usando dentro de FavoritesProvider")
    return context
}
