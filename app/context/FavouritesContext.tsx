"use client"

import { createContext, useContext, useState } from "react";
import type { Poke } from "../components/LoadPokemon";

type FavouritesContextType = {
    favourites: Poke[];
    toggleFav: (pokemon: Poke) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
    const [favs, setFavs] = useState<Poke[]>([]);

    const toggleFav = (pokemon: Poke) => {

        setFavs((prev: Poke[]) => {
            if (prev.some((poke: Poke) => poke.name.toLowerCase() === pokemon.name.toLowerCase())) {
                return prev.filter((poke: Poke) => poke.name !== pokemon.name);
            } else {
                return [...prev, pokemon];
            }
        });
    }

    return (
        <FavouritesContext.Provider value={{ favourites: favs, toggleFav }}>
            {children}
        </FavouritesContext.Provider>
    );
}

export function useFavourites() {
    const favsContext = useContext(FavouritesContext);
    if (!favsContext) throw new Error("useFavourites must be used within FavouritesProvider");
    return favsContext;
}

