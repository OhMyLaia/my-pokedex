"use client"

import type { Ablility, Poke } from "@/types/types";
import { fetchPokemon } from "@/app/actions/getPokemon";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";
import CardPokemon from "./CardPokemon";
import PokeDetail from "./PokeDetail";
import { pokemonNameStartsWithQuery } from "@/lib/poke-query";

function LoadPokemon({ search, initialPokemonList
}: {
  search?: string | undefined;
  initialPokemonList?: Poke[] | undefined;
}) {

  const [pokemon, setPokemon] = useState<Poke[]>(initialPokemonList || []);
  const [allPokemon, setAllPokemon] = useState<Poke[]>(initialPokemonList || []);
  const [selectedPoke, setSelectedPoke] = useState<{ poke: Poke; index: number } | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const { ref, inView } = useInView({
    // threshold: 0,
    // triggerOnce: false
  });

  // const loadMorePokemon = async () => {
  //   setLoading(true)
  //   const nextPage = page + 1;
  //   const newPokemonList = await fetchPokemon({
  //     search,
  //     page: nextPage
  //   });

  //   const handleSearch = (query: string) => {
  //     setQuery(query);
  //     if (!query) setPokemon(initialPokemonList);
  //   }

  //   const filtered = pokemon?.filter((poke) =>
  //     pokemonNameStartsWithQuery(poke.name, query)
  //   );
  //   setPokemon(filtered);

  //   setPage(nextPage);
  //   setAllPokemon((prev) => {
  //     if (!prev) return newPokemonList;

  //     const pokemonSet = newPokemonList.filter((pokemon: Poke) => {
  //       return !prev.some((poke) => poke.name === pokemon.name);
  //     });
  //     return [...prev, ...pokemonSet];
  //   });

  //   setLoading(false);
  // }


  // useEffect(() => {
  //   if (inView) {
  //     loadMorePokemon();
  //   }
  // }, [inView])

  const loadMorePokemon = async () => {
    setLoading(true)
    const nextPage = page + 1;
    const newPokemonList = await fetchPokemon({ page: nextPage });

    setPage(nextPage);
    setAllPokemon((prev) => [...(prev || []), ...newPokemonList]);
    setPokemon((prev) => [...(prev || []), ...newPokemonList]);
    setLoading(false);
  };


  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setPokemon(allPokemon);
      return;
    }
  }

  //   const filtered = allPokemon?.filter((p) =>
  //     pokemonNameStartsWithQuery(p.name, q)
  //   );
  //   setPokemon(filtered);
  // };

  const filteredPokemon = query
  ? allPokemon.filter(p => pokemonNameStartsWithQuery(p.name, query))
  : pokemon

  useEffect(() => {
    if (inView) {
      loadMorePokemon();
    }
  }, [inView]);

  console.log(`hellooooo`)
  return (
    <>
      <div className="flex flex-row justify-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="input input-bordered w-1/3 mb-12 bg-white text-indigo-700 text-xl"
        />
      </div>

      {filteredPokemon?.length === 0 && !loading ? (
        <p className="text-center text-indigo-800 mt-6 text-lg">No coincidences</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-15 m-1">
          {filteredPokemon?.map((poke: Poke, index: number) => (
            <CardPokemon
              key={poke.url}
              pokemon={poke}
              id={poke.id}
              onClick={() => setSelectedPoke({ poke, index })}
            />
          ))}
        </div>
      )}
      <div>
        {selectedPoke && (
          <PokeDetail
            poke={selectedPoke.poke}
            index={selectedPoke.index}
            onClose={() => setSelectedPoke(null)}
          />
        )}
      </div>
      {pokemon && pokemon.length >= 24 && (
        <div className="flex justify-center items-center p-4 text-center mx-auto" ref={ref}>
          <ClipLoader />
        </div>
      )}
    </>
  )
}

export default LoadPokemon;