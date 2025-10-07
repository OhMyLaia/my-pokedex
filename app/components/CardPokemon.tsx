'use client'

import { useEffect, useState } from "react";
import type { Poke } from "./LoadPokemon";
import { PokemonData } from "@/types/types";
import { motion } from "motion/react";
import Image from "next/image";
import { PokeType } from "@/types/types";


function CardPokemon({ pokemon, number }: { pokemon: Poke, number: number }) {

    const [data, setData] = useState<PokemonData | null>(null)

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(pokemon.url);

                if (!response.ok) {
                    throw new Error('failed to fetch pokemon url & image');
                }

                const fetchedData: PokemonData = await response.json();

                setData(fetchedData);
                console.log(`fetched abilities`);

            } catch (error: unknown) {
                console.error(error);
                return null;
            }

        }

        fetchPokemonData();

    }, [pokemon.url]);

    const getPredominantType = (types?: { type: { name: string } }[]) => {
        if (!types || types.length === 0) {
            return "rgb(255, 255, 255)";
        }
        // else {
        //     return types[0].type.name
        // }

        return types.length > 1
            ? types[1].type.name === "normal"
                ? types[0].type.name
                : types[1].type.name
                : types[0].type.name;
    }

    const predominantType: string = getPredominantType(data?.types ?? (pokemon as any).types);
    const bgColour = PokeType[predominantType as keyof typeof PokeType] || "rgb(255, 203, 5)";

    return (
        <motion.div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            whileHover={{
                scale: 1.05,
                backgroundColor: bgColour || "rgb(255, 203, 5)",
                transition: { duration: 0.4 },
            }}
            whileTap={{
                scale: 0.95,
                backgroundColor: "rgb(255 255 255)",
            }}
            className="
                w-60
                h-96
                grid
                grid-rows-[1fr_auto]
                mx-auto
                justify-center
                text-center
                rounded-xl
                shadow-lg/30
                inset-shadow-lg
                ">
            <div className="flex items-center justify-center h-full w-full font-mono">
                <Image
                    className="mx-auto"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`}
                    alt={pokemon.name}
                    width={150}
                    height={150}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '150px',
                        maxHeight: '150px'
                    }}
                />
            </div>
            <div>
                <div className=" flex flex-col place-items-center">
                    <h2 className="
                        text-4xl
                        text-indigo-800
                        text-shadow-sm
                        bg-indigo-100
                        rounded-xl px-4">
                        {pokemon.name.toUpperCase()}</h2>
                    {/* <div className="flex flex-col w-50 h-35">
                        <h3 className="m-1 text-indigo-700 text-shadow-sm px-4 text-center text-2xl">SKILLS</h3>
                        {data?.abilities && data.abilities.map((ability, index) => (
                            <span
                                className="text-indigo-700 italic text-xl"
                                key={index}>
                                {ability.ability.name}
                                </span>
                        ))}
                    </div> */}

                    <div className="flex flex-col w-50 h-35">
                        <h3 className="m-1 text-indigo-700 text-shadow-sm px-4 text-center text-2xl">TYPE</h3>
                        {data?.types && data.types.map((type, index) => (
                            <span
                                className="text-indigo-700 italic text-xl"
                                key={index}>
                                {(type.type.name).toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CardPokemon