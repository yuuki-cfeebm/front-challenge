import { Character } from "@/types/character";
import Image from "next/image";

type CharacterComicsProps = { character: Character | null}

export default function CharacterComics({ character }: CharacterComicsProps) {
  if (!character) {
    return <div className="flex justify-center w-3/4">Personagem não encontrado</div>;
  }

  return(
    <div className="flex flex-col gap-20 w-full pb-52">
      <p className="font-bold text-2xl text-gray-1">Últimos Lançamentos</p>
      <div className="w-full flex flex-wrap gap-12">
        {Array.from({ length: 10}).map((_, index) => (
          <div 
            key={index}
            className="flex flex-col gap-6 w-[150px]"
          >
            <div className=" relative size-[150px]">
              <Image 
                src={character.image.url}
                alt={`img-${character.name}`}
                fill
                objectFit="object-contain"
              />
            </div>
            <p className="font-bold text-gray-1">Lorem Ipsum Dolor Sit Amet.</p>
          </div>
        ))}
      </div>
    </div>
  )
}