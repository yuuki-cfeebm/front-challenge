import BackgroundName from "@/components/character/BackgroundName"
import CharacterFavorite from "@/components/character/CharacterFavorite"
import CharacterInfo from "@/components/character/CharacterInfo"
import CharacterImg from "@/components/character/CharacterImg"
import { fetchCharacter } from "@/lib/characters"
import CharacterComics from "@/components/character/CharacterComics"

type PageProps = { params: { id: string } }

export default async function page({ params }: PageProps) {
  const character = await fetchCharacter(params.id)

  return(
    <div className="flex flex-col w-full relative gap-20">
      <div className="flex">
        <BackgroundName character={character} />
        <CharacterInfo character={character}>
          <CharacterFavorite character={character}/>
        </CharacterInfo>
        <CharacterImg character={character} />
      </div>
      <CharacterComics character={character}/>
    </div>
  )
}