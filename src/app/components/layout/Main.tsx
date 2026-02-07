export default function Main({ children }: {children: React.ReactNode}) {
  return(
    <main className="flex flex-1 w-7xl px-4">
      {children}
    </main>
  )
}