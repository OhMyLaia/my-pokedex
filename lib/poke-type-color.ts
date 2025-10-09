import { PokeType } from "@/types/types"

export function getTypeColors(types: { type: { name: string } }[]): PokeType[] | [] {
    if (!types || types.length === 0) return [PokeType.default];

    return types.map(({ type }) => {
        const key = type.name.toLowerCase() as keyof typeof PokeType
        return PokeType[key] || "rgb(255, 203, 5)"
    })
}