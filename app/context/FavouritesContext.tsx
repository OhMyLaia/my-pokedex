"use client"

import { createContext, useContext, useEffect, useState } from "react";
import type { Pokemon } from "../components/Type";

type FavouritesContextType = {
    favourites: Pokemon[];
    toggleFav: (pokemon: Pokemon) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
    const [favs, setFavs] = useState<Pokemon[]>([]);

    const toggleFav = (pokemon: Pokemon) => {

        setFavs((prev: Pokemon[]) => {
            if (prev.some((poke: Pokemon) => poke.name.toLowerCase() === pokemon.name.toLowerCase())) {
                return prev.filter((poke: Pokemon) => poke.name !== pokemon.name);
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

