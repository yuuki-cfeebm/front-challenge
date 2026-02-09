"use client"

import Image from "next/image";
import { Character } from "@/types/character";

type CharacterImgProps = { character: Character | null}

export default function CharacterImg({ character }: CharacterImgProps) {
  if (!character) {
    return <div className="flex justify-center w-3/4">Personagem não encontrado</div>;
  }

  return (
    <div className="flex justify-center items-end w-3/4">
      <div className="size-[400px] relative overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="size-[400px] rounded-full border-2 border-white/40 bg-white/50 shadow-lg backdrop-blur-sm"></div>
        </div>
        <Image
          src={character.image.url}
          alt={`img-${character.name}`}
          fill
          objectFit="object-contain"
          className="relative z-10 rounded-xl"
        />
      </div>
    </div>
  )
}