import Image from "next/image";

interface SearchBarProps {
  className: string
  width: string
}

export default function SearchBar( { className, width }: SearchBarProps) {
  return(
    <div className={`flex items-center px-8 py-10 gap-10 relative ${width}`}>
      <Image 
        src={"/images/busca/lupa.svg"}
        alt="img-rectangle"
        width={30}
        height={30}
        className="absolute left-14"
      />
      <input 
        type="text"
        className={`rounded-full pl-20 outline-none ${className} w-full`}
        placeholder="Procure por Heróis"
      />
    </div>
  )
}