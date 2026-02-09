"use client"
import { Work_Sans } from 'next/font/google'
import "./globals.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import { FavoritesProvider } from '@/context/FavoritesContext';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname()
  const type = pathName.startsWith("/character") ? "character" : "home"

  return (
    <html lang="pt-BR">
      <body
        className={`${workSans.variable} min-h-screen flex flex-col ${type === "character" ? "bg-light-blue" : "bg-white"}`}
      >
        <FavoritesProvider>
          <Header page={type}/>
          <Main>
            {children}
          </Main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
