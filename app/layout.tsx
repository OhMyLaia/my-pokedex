import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoadPokemon from "@/app/components/LoadPokemon";
import { FavouritesProvider } from "./context/FavouritesContext";

const inter = Inter({
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "my-Pokedex",
  description: "Next.js Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`bg-gradient-to-b from-indigo-100 to-indigo-400 min-h-screen antialiased`}>
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
