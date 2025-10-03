import type { Pokemon } from "./Type"

function CardPokemon({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div>{pokemon.name}</div>
    )
}

export default CardPokemon