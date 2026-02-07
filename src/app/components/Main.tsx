export default function Main({ children }: {children: React.ReactNode}) {
  return(
    <main className="flex flex-col items-center flex-1 w-7xl h-full px-4">
      {children}
    </main>
  )
}