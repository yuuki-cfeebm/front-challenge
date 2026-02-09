import { Character } from "@/types/character";
import Image from "next/image";

type CharacterInfoProps = { 
  character: Character | null
  children?: React.ReactNode
}

export default function CharacterInfo( { character, children }: CharacterInfoProps) {
  return(
    <div className="flex flex-col gap-10 w-1/4 ">
      <div className="flex justify-between items-start uppercase ">
        <div className="flex flex-col">
          <p className="text-gray-1 font-bold text-4xl">{character?.name}</p>
          <p className="text-gray-2 font-bold ">{!character?.biography?.['full-name'] ? "Sem nome pessoal" : character?.biography?.['full-name']}</p>
        </div>
        {children}
      </div>
      <div className="flex gap-1">
        <div className="">
          <p className="text-gray-1 font-bold">Aparência: </p>
          <div>
            {character?.appearance && Object.entries(character.appearance).map(([key, value]) => (
              <ul className="flex list-disc pl-6 text-gray-2" key={key}>
                <li>{key}: {value}</li>
              </ul>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-1 font-bold">Status de Poder: </p>
          <div>
            {character?.powerstats && Object.entries(character.powerstats).map(([key, value]) => (
              <ul className=" flex list-disc pl-6 text-gray-2" key={key}>
                <li>{key}: {value}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-20 text-gray-1">
          <div className="flex flex-col gap-2">
            <span className="text-gray-1 font-bold">Quadrinhos</span>
            <div className="flex items-center gap-6">
              <Image 
                src={"/images/icons/book.svg"}
                alt="icon-book"
                width={30}
                height={30}
              />
              <span className="font-bold">3.000</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-1 font-bold">Filmes</span>
            <div className="flex items-center gap-6">
              <Image 
                src={"/images/icons/video.svg"}
                alt="icon-video"
                width={30}
                height={30}
              />
              <span className="font-bold">40</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <span className="text-gray-1 font-bold">Rating: </span>
        <Image 
          src={"/images/icons/stars/full.svg"}
          alt="icon-stars"
          width={80}
          height={80}
        />
      </div>
      <div>
        <span className="text-gray-1 font-bold">Último quadrinho: 13 fev. 2020</span>
      </div>
    </div>
  )
}