import { getPredominantType } from '@/lib/poke-predominant-type';
import { PokeType } from '@/types/types';
import type { Poke, PokemonData } from '@/types/types';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getTypeColors } from '@/lib/poke-type-color';

type PokeDetailProps = {
    poke: Poke;
    index: number;
    onClose: () => void;
};

function PokeDetail({ poke, index, onClose }: PokeDetailProps) {
    const [data, setData] = useState<PokemonData | null>(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(poke.url);

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
        };

        fetchPokemonData();
    }, [poke.url]);

    const predominantType: string = getPredominantType(data?.types ?? (poke as Poke).types);
    const bgColour = PokeType[predominantType as keyof typeof PokeType] || 'rgb(255, 203, 5)';
    const typeColors = getTypeColors(data?.types ?? [])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            {/* Modal content */}
            <div
                className={`relative bg-white/70 shadow-lg rounded-lg
                max-w-md w-full
                min-h-md h-1/3/2
                mx-4 p-6 animate-fade-in`}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
                >
                    ✕
                </button>

                {/* Pokemon Image */}
                <Image
                    className="mx-auto"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`}
                    alt={poke.name}
                    width={150}
                    height={150}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '150px',
                        maxHeight: '150px',
                    }}
                />

                {/* Name and ID */}
                <div className="text-center mt-4">
                    <h1 className="text-5xl font-bold text-gray-800 capitalize">{poke.name}</h1>
                    <p className="text-2xl text-gray-600"># {index + 1}</p>
                </div>

                {/* Info section with two columns */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-3">
                        {/* Types */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Types</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {getTypeColors(data?.types || []).map((color, i) => (
                                    <span
                                        key={i}
                                        style={{ backgroundColor: color }}
                                        className="px-4 py-2 text-white rounded-full capitalize"
                                    >
                                        {data?.types[i].type.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Height & Weight */}
                        <div className="text-gray-800">
                            <h2 className="text-lg font-semibold">Height: {data?.height}</h2>
                            <h2 className="text-lg font-semibold">Weight: {data?.weight}</h2>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h2 className="text-xl font-semibold text-gray-800 animate-bounce">Add to Favs ↓</h2>
                        <button className="px-2 py-2 bg-white rounded-full w-fit hover:bg-red-600 transition">
                            <Image
                                className="mx-auto"
                                src={`/bw-pokeball.png`}
                                alt={poke.name}
                                width={40}
                                height={40}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '150px',
                                    maxHeight: '150px',
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokeDetail;