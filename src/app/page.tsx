import Image from "next/image";
import HomeHeader from "./components/Header/HomeHeader";
import Main from "./components/Main";

export default function Page() {
  return (
    <>
      <HomeHeader />
      <Main>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-1 text-2xl uppercase font-bold">explore o universo</p>
          <p className="text-gray-2">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
        </div>
        <div className="flex items-center px-8 py-10 gap-10 relative w-2/3">
          <Image 
            src={"/images/busca/lupa.svg"}
            alt="img-rectangle"
            width={30}
            height={30}
            className="absolute left-14"
          />
          <input 
            type="text"
            className="w-full h-16 pl-20 bg-light-orange rounded-full text-orange placeholder:text-orange outline-none"
            placeholder="Procure por Heróis"
          />
        </div>
        <div className="">
          
        </div>
      </Main>
    </>
  )
}
