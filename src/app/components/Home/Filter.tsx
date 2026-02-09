"use client"
import useFavorites from "@/context/FavoritesContext";
import Image from "next/image";
import { useState } from "react";

export default function Filter() {

  const { handleFilter, filter } = useFavorites()

  return(
    <div className="flex justify-between items-center text-orange w-full py-6">
      <p className="text-gray-2">Encontrados 40 Heróis</p>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image 
            src={"images/icons/hero.svg"}
            alt="icon-hero"
            width={20}
            height={20}
          />
          <span>Ordenar por nome - A/Z</span>
        </div>
        <button onClick={handleFilter}>
          { filter ? 
            <Image 
              src={"images/toggle/right.svg"}
              alt="icon-toggle-right"
              width={100}
              height={50}
            />
            :
            <Image 
              src={"images/toggle/left.svg"}
              alt="icon-toggle-left"
              width={100}
              height={50}
            />
          }
        </button>
        <div className="flex items-center gap-2">
          <Image 
            src={"images/icons/heart/heart-item.svg"}
            alt="icon-heart-favorites"
            width={20}
            height={20}
          />
          <span>Somente Favoritos</span>
        </div>
      </div>
    </div>
  )
}