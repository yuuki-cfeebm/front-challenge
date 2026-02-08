export default function Main({ children }: {children: React.ReactNode}) {
  return(
    <main className="flex flex-col items-center flex-1 max-w-[1350px] w-full h-full px-4 mx-auto">
      {children}
    </main>
  )
}