import { pokemonNameStartsWithQuery } from "./poke-query";

// export async function getPokemon({ query, page = 1, limit = 24 }: {
//     query?: string,
//     page?: number,
//     limit?: number
// }) {

//     const apiUrl: string = process.env.API_URL || "https://pokeapi.co/api/v2";

//     const pokeApiUrl = `${apiUrl}/pokemon?limit=${limit}&offset=${(page - 1) * 24}`;

//     try {
//         const response = await fetch(pokeApiUrl);
//         const data = await response.json();
//         console.log(`fetched data: ${data}`);

//         if (query) {
//             const filteredPokemon = data.results.filter((pokemon: { name: string }) =>
//                 pokemonNameStartsWithQuery(pokemon.name, query.toLowerCase())
//             )

//             return filteredPokemon.slice(0, 24);

//         } else {
//             return data.results.slice(0, 24);
//         }

//     } catch (error: unknown) {
//         console.error(error);
//         return null;
//     }
// }

export async function getPokemon({
    query,
    page = 1,
    limit = 24
}: {
    query?: string;
    page?: number;
    limit?: number;
}) {
    const apiUrl: string = process.env.API_URL || "https://pokeapi.co/api/v2";
    const pokeApiUrl = `${apiUrl}/pokemon?limit=${limit}&offset=${(page - 1) * limit}`;

    try {
        const response = await fetch(pokeApiUrl);
        const data = await response.json();

        if (query) {
            const filteredPokemon = data.results.filter((pokemon: { name: string }) =>
                pokemonNameStartsWithQuery(pokemon.name, query)
            );
            return filteredPokemon; // do NOT slice here
        } else {
            return data.results; // do NOT slice here
        }
    } catch (error: unknown) {
        console.error(error);
        return null;
    }
}