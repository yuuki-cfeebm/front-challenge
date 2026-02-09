import { Work_Sans } from 'next/font/google'
import "./globals.css";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import { FavoritesProvider } from '@/context/FavoritesContext';
import { SearchProvider } from '@/context/SearchContext';
import { fetchCharacters } from '@/lib/characters';
import BackgroundController from '@/components/BackgroundController';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const characters = await fetchCharacters()

  return (
    <html lang="pt-BR">
      <body
        className={`${workSans.variable} min-h-screen flex flex-col `}
      >
        <SearchProvider>
          <FavoritesProvider>
            <BackgroundController />
            <Header characters={characters}/>
            <Main>
              {children}
            </Main>
            <Footer />
          </FavoritesProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
