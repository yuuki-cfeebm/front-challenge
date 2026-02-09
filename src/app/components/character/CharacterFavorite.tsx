"use client"
import Image from "next/image";
import { useState } from "react";

export default function CharacterFavorite() {

  const [toggle, setToggle] = useState(false)

  return(
    <button>
      <Image
        src={"/images/icons/heart/heart-item.svg"}
        alt="icon-heart"
        width={30}
        height={30}
      />
    </button>

  )
}