import Image from "next/image";

export default function SearchBar() {
  return(
    <div className="flex items-center px-8 py-10 gap-10 relative w-2/3"> {/*barra de pesquisa*/}
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
  )
}