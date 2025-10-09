"use server";

import { getPokemon } from "@/lib/poke-fetch";

export async function fetchPokemon({ page = 1, search }: {
    page?: number;
    search?: string | undefined;
}) {

    try {
        const pokemonData = await getPokemon({ query: search, page });
        return pokemonData;

    } catch (error: unknown) {
        console.error(error);
        return null;
    }

}