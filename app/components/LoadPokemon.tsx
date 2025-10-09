"use client"

import type { Poke } from "@/types/types";
import { getPokemon } from "@/lib/poke-fetch";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import CardPokemon from "./CardPokemon";
import PokeDetail from "./PokeDetail";
import { pokemonNameStartsWithQuery } from "@/lib/poke-query";

function LoadPokemon({ initialPokemonList }: { initialPokemonList?: Poke[] }) {

  const [allPokemon, setAllPokemon] = useState<Poke[]>(initialPokemonList || []);
  const [pokemon, setPokemon] = useState<Poke[]>(initialPokemonList || []);
  const [selectedPoke, setSelectedPoke] = useState<{ poke: Poke; index: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const all = await getPokemon({ page: 1, limit: 1000 });
      setAllPokemon(all || []);
      setPokemon(all || []);
      setLoading(false);
    };
    loadPokemon();
  }, []);


  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setPokemon(allPokemon);
      return;
    }
    const filtered = allPokemon.filter((p) =>
      pokemonNameStartsWithQuery(p.name, q)
    );
    setPokemon(filtered);
  };


  return (
    <>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="input input-bordered w-1/3 mb-12 bg-white text-indigo-700 text-xl"
        />
      </div>

      {pokemon.length === 0 && query.trim() !== "" ? (
        <p className="text-center text-red-600 mt-6 text-lg">No coincidences</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 m-1">
          {pokemon.map((poke, index) => (
            <CardPokemon
              key={poke.url}
              pokemon={poke}
              id={poke.id ?? parseInt(poke.url.split("/").slice(-2, -1)[0])}
              onClick={() => setSelectedPoke({ poke, index })}
            />
          ))}
        </div>
      )}

      {selectedPoke && (
        <PokeDetail
          poke={selectedPoke.poke}
          index={selectedPoke.index}
          onClose={() => setSelectedPoke(null)}
        />
      )}

      {loading && (
        <div className="flex justify-center items-center p-4">
          <ClipLoader />
        </div>
      )}
    </>
  );
}

export default LoadPokemon;