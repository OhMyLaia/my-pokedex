export function pokemonNameStartsWithQuery(name: string, query: string) {
    return name.toLowerCase().startsWith(query.trim().toLowerCase());
}