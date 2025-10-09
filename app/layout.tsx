import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoadPokemon from "@/app/components/LoadPokemon";
import { FavouritesProvider } from "./context/FavouritesContext";

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// const inter = Inter({
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "my-Pokedex",
  description: "Next.js Pokedex",
  icons: "pokeball-icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={vt323.className}>
      <body className={`bg-gradient-to-r from-indigo-100 to-indigo-500 min-h-screen antialiased`}>
        <FavouritesProvider>
          <Navbar />
          {children}
          <LoadPokemon />
          <Footer />
        </FavouritesProvider>
      </body>
    </html>
  );
}
