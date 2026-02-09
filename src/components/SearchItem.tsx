import { Character } from "@/types/character";
import Image from "next/image";
import Link from "next/link";

export default function SearchItem( {character }: {character: Character}) {
  return(
    <Link 
      href={`/character/${character.id}`}
      className="flex items-center gap-10 w-full p-4 hover:bg-gray-100 transition-all"
    >
      <Image 
        src={character.image.url}
        alt={`img-${character.name}`}
        width={40}
        height={60}
      />
      <span className="font-bold text-gray-1">{character.name}</span>
    </Link>
  )
}