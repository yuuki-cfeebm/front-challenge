"use client"
import Image from "next/image";
import { Character } from "@/types/character";
import { useState } from "react";
import Link from "next/link";

export default function CharacterCard({ character }: { character: Character }) {

  const [favorites, setFavorites] = useState(false)

  return (
    <Link 
      href={`/src/app/api/character/${character.id}`} 
      className="flex flex-col gap-4 w-[250px] "
    >
      <div className="group size-[250px] relative overflow-hidden">
        <Image
          src={character.image.url}
          alt={`img-${character.name}`}
          fill
          objectFit="object-contain"
        />
        <div className="flex justify-center items-center absolute w-full h-full  bg-orange bottom-[-245px] transition-transform duration-500 ease-in-out group-hover:translate-y-[-245px]">
          <span className="text-xl font-bold">Ver mais</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-black">{character.name}</p>
        <button onClick={() => setFavorites(!favorites)}>
          { favorites ?
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
    </ Link>
  )
}