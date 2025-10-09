export type Poke = {
    name: string,
    url: string
    id: number,
    abilities: Ablility,
    height: number,
    weight: number,
    types: { type: { name: string } }[]
}


export interface Ablility {
    ability: {
        name: string;
    };
}

export interface PokemonData {
    id: number,
    height: number,
    weight: number,
    abilities: Ablility[],
    types: { type: { name: string } }[]
}

export enum PokeType {
    fire = "rgb(239, 68, 68)",
    bug = "rgb(34, 197, 94)",
    water = "rgb(59, 130, 246)",
    electric = "rgb(234, 179, 8)",
    poison = "rgb(168, 85, 247)",
    flying = "rgb(251, 146, 60)",
    fighting = "rgb(185, 28, 28)",
    normal = "rgb(230, 200, 156)",
    ground = "rgb(115, 82, 33)",
    fairy = "rgb(249, 168, 212)",
    psychic = "rgb(99, 102, 241)",
    rock = "rgb(226, 232, 240)",
    grass = "rgb(74, 222, 128)",
    ghost = "rgb(124, 58, 237)",
    ice = "rgb(103, 232, 249)",
    dragon = "rgb(67, 56, 202)",
    steel = "rgb(156, 163, 175)",
    dark = "rgb(31, 41, 55)",
    default = "rgb(255, 255, 255)"
}


