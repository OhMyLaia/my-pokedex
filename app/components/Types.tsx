export type Pokemon = {
    name: string,
    url: string
    number: number,
    abilities: string[]
}

export interface Ablility {
    ability: {
        name: string;
    };
}

export enum PokeType {
    fire = "bg-red-500",
    grass = "bg-green-500",
    water = "bg-blue-500",
    electric = "bg-yellow-500",
    poison = "bg-purple-500",
    flying = "bg-orange-400",
}

