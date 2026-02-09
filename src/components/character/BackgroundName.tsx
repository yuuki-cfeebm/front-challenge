import { Character } from "@/types/character"

type BackgroundNameProps = { character: Character | null }

export default function BackgroundName({ character }: BackgroundNameProps) {
  return(
    <div className="flex flex-wrap max-w-[900px] text-end absolute text-8xl right-0 font-bold uppercase text-white">
      {character?.name}
    </div>
  )
}