import BackgroundName from "@/app/components/character/BackgroundName"
import CharacterFavorite from "@/app/components/character/CharacterFavorite"
import CharacterInfo from "@/app/components/character/CharacterInfo"
import CharacterImg from "@/app/components/character/CharacterImg"
import { fetchCharacter } from "@/lib/characters"
import CharacterComics from "@/app/components/character/CharacterComics"

type PageProps = { params: { id: string } }

export default async function page({ params }: PageProps) {
  const character = await fetchCharacter(params.id)

  return(
    <div className="flex flex-col w-full relative gap-20">
      <div className="flex">
        <BackgroundName character={character} />
        <CharacterInfo character={character}>
          <CharacterFavorite />
        </CharacterInfo>
        <CharacterImg character={character} />
      </div>
      <CharacterComics character={character}/>
    </div>
  )
}