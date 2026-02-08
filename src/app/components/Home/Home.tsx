import HomeHeader from "../Header/HomeHeader";
import Main from "../Main";
import SearchBar from "./SearchBar";
import Favorites from "./Filter";
import { Character } from "@/types/character";
import CharactersList from "./CharactersList";

export default function Home( {characters}: {characters: Character[]}) {
  return(
      <Main>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-1 text-2xl uppercase font-bold">explore o universo</p>
          <p className="text-gray-2">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
        </div>
        <SearchBar />
        <Favorites />
        <CharactersList characters={characters}/>
      </Main>
  )
}