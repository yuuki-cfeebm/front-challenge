import { fetchCharacters } from "@/lib/characters";
import Home from "../components/Home/Home";

export default async function Page() {
  const characters = await fetchCharacters();

  return <Home characters={characters || []} />;
}
