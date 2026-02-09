"use client"
import useFavorites from "@/context/FavoritesContext";
import { Character } from "@/types/character";
import Image from "next/image";
import { useState } from "react";

type CharacterFavoriteType = { character: Character | null}

export default function CharacterFavorite({ character }: CharacterFavoriteType) {

  if (!character) {
    return <div className="flex justify-center w-3/4">Personagem não encontrado</div>;
  }

  const { isFavorite, handleFavorites } = useFavorites()

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