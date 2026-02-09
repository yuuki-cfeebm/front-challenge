"use client"
import { usePathname } from "next/navigation"

export default function BackgroundController() {

  const pathName = usePathname()

  return (
    <div 
      className={`fixed inset-0 -z-50 transition-colors duration-500 ${
        pathName === "/" ? "bg-white" : "bg-light-blue"
      }`}
    />
  )
}