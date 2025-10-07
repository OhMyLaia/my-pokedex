"use client"

import type { Ablility } from "@/types/types";
import { fetchPokemon } from "@/app/actions/getPokemon";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";
import CardPokemon from "./CardPokemon";

export type Poke = {
    name: string,
    url: string
    number: number,
    abilities: Ablility,
    types: { type: { name: string } }[]
}

function LoadPokemon({ search, initialPokemonList
} : {
  search?: string | undefined;
  initialPokemonList?: Poke[] | undefined;
}) {

  const [pokemon, setPokemon] = useState(initialPokemonList);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {ref, inView} = useInView({
    // threshold: 0,
    // triggerOnce: false
  });

  const loadMorePokemon = async () => {
    setLoading(true)
    const nextPage = page + 1;
    const newPokemonList = await fetchPokemon({
      search,
      page: nextPage
    });

    setPage(nextPage);
    setPokemon((prev) => {
      if (!prev) return newPokemonList;

      const pokemonSet = newPokemonList.filter((pokemon: Poke) => {
        return !prev.some((poke) => poke.name === pokemon.name);
      });
      return [...prev, ...pokemonSet];
    });

    setLoading(false);
  }


  useEffect(() => {
    if (inView) {
      loadMorePokemon();
    }
  }, [inView])

  console.log(`hellooooo` )
  return (
    <div className="
    grid
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-4
    gap-15
    m-1
    ">
      {pokemon && 
        pokemon.map((poke: Poke, index: number) => (
          <CardPokemon
            key={poke.url}
            pokemon={poke}
            number={index+1}
          />
        ))
      }
      <div>

      </div>
      { pokemon && pokemon.length >= 24 && (
        <div className="flex justify-center items-center p-4 text-center mx-auto" ref={ref}>
          <ClipLoader />
        </div>
      )}
    </div>
  )
}

export default LoadPokemon