import Image from "next/image";

export default function HomeHeader() {
  return(
    <div className="w-full">
      <header className="flex justify-center w-full py-6">
        <Image 
          src={"/images/logo.svg"} 
          alt="icon-logo" 
          width={300} 
          height={100}
        /> 
      </header>
    </div>
  )
}