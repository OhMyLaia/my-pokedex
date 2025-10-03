"use client";

import { fetchPokemon } from "@/app/actions/getPokemon";
import { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";
import CardPokemon from "./CardPokemon";

function LoadPokemon({ search, initialPokemonList
}: {
  search: string | undefined;
  initialPokemonList: Pokemon[] | undefined;
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
    const newPokemon = await fetchPokemon({
      search,
      page: nextPage
    });

    setPage(nextPage);
    setPokemon((prev) => {
      if (!prev) return newPokemon;

      const pokemonSet = newPokemon.filter((pokemon: Pokemon) => {
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
    <div className="grid
    sm:grid-cols-2 md:grid-col-3 gap-10
    ">
      {pokemon && loading === false && 
        pokemon.map((poke: Pokemon, index: number) => (
          <CardPokemon
            key={poke.url}
            pokemon={poke}
          />
        ))
      }
      <div>

      </div>
      { pokemon && pokemon.length >= 24 && (
        <div className="mx auto" ref={ref}>
          <ClipLoader />
        </div>
      )}
    </div>
  )
}

export default LoadPokemon