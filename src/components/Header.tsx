"use client"
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { Character } from "@/types/character";
import { usePathname } from "next/navigation";

interface HeaderProps {
  characters: Character[]
}

export default function Header( { characters }: HeaderProps) {

  const pathName = usePathname()

  return(
    <header className="w-full">
      { pathName == "/" ? (
      <nav className="flex justify-center max-w-[1500px] py-6 mx-auto">
        <Image 
          src={"/images/icons/logo.svg"} 
          alt="icon-logo" 
          width={300} 
          height={100}
          /> 
      </nav>
      ) : (
        <nav className="flex items-center gap-5  max-w-[1500px] p-4 mx-auto">
          <Link 
            href={"http://localhost:3000"}
          >
            <Image 
            src={"/images/icons/logo.svg"} 
            alt="icon-logo" 
            width={200} 
            height={100}
            /> 
          </Link>

          <div className="w-2/3">
            <SearchBar 
              page="character"
              characters={characters}
              className="bg-white text-gray-2 placeholder:text-gray-2 h-14" 
              width="w-full"
            />
          </div>
        </nav>
      )
      }
    </header>
  )
}