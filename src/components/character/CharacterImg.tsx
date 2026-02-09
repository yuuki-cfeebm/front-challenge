"use client"

import Image from "next/image";
import { Character } from "@/types/character";

type CharacterImgProps = { character: Character | null}

export default function CharacterImg({ character }: CharacterImgProps) {
  if (!character) {
    return <div className="flex justify-center w-3/4">Personagem não encontrado</div>;
  }
  
  return (
    <div className="flex justify-center items-center lg:items-end w-3/4">
      <div className="size-[250px] md:size-[300px] lg:size-[400px] relative overflow-visible">
        <Image
          src={character.image.url}
          alt={`img-${character.name}`}
          fill
          className="z-10 rounded-xl object-cover"
        />
      </div>
    </div>
  )
}