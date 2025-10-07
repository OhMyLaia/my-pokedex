export function pokemonNameStartsWithQuery(name: string, query: string) {

    return name.toLocaleLowerCase().startsWith(query);

}