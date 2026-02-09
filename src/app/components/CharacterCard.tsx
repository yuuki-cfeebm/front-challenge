"use client"
import Image from "next/image";
import { Character } from "@/types/character";
import { useState } from "react";
import Link from "next/link";
import useFavorites from "@/context/FavoritesContext";

export default function CharacterCard({ character }: { character: Character }) {
  
  const { handleFavorites, isFavorite } = useFavorites()

  return (
    <div 
      className="flex flex-col gap-4 w-[250px] "
    >
      <Link 
        href={`/character/${character.id}`} 
        className="group size-[250px] relative overflow-hidden"
      >
        <Image
          src={character.image.url}
          alt={`img-${character.name}`}
          fill
          objectFit="object-contain"
        />
        <div className="flex justify-center items-center absolute w-full h-full  bg-orange bottom-[-245px] transition-transform duration-500 ease-in-out group-hover:translate-y-[-245px]">
          <span className="text-xl font-bold">Ver mais</span>
        </div>
      </Link>
      <div className="flex justify-between items-center w-full">
        <p className="text-black">{character.name}</p>
        <button onClick={() => handleFavorites(character)}>
          { isFavorite(character.id) ?
            <Image 
              src={"images/icons/heart/heart-home-on.svg"}
              alt="icon-heart"
              width={20}
              height={20}
            />
          :
            <Image 
              src={"images/icons/heart/heart-home-off.svg"}
              alt="icon-heart"
              width={20}
              height={20}
            />
          }
        </button>
      </div>
    </ div>
  )
}