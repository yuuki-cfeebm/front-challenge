import { GetCharacters } from "./api/characters/route";
import HomeHeader from "./components/Header/HomeHeader";
import Home from "./components/Home/Home";

export default async function Page() {

  const characters = await GetCharacters()

  return (
    <>
      <HomeHeader />
      <Home characters={characters}/>
    </>
  )
}
