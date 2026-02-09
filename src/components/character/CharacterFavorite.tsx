"use client"
import useFavorites from "@/context/FavoritesContext";
import { Character } from "@/types/character";
import Image from "next/image";

type CharacterFavoriteType = { character: Character | null}

export default function CharacterFavorite({ character }: CharacterFavoriteType) {

  const { isFavorite, handleFavorites } = useFavorites()

  if (!character) {
    return <div className="flex justify-center w-3/4">Personagem não encontrado</div>;
  }

  return(
    <button onClick={() => handleFavorites(character)}>
      { isFavorite(character.id) ? 
      <Image
        src={"/images/icons/heart/heart-item.svg"}
        alt="icon-heart"
        width={30}
        height={30}
      />
      :
      <Image
        src={"/images/icons/heart/heart-home-off.svg"}
        alt="icon-heart"
        width={30}
        height={30}
      />
      }
    </button>

  )
}