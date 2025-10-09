import { fetchPokemon } from "./actions/getPokemon";
import LoadPokemon from "@/app/components/LoadPokemon";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const search =
    typeof searchParams.search === "string"
      ? searchParams.search
      : undefined;

  const fetchedPokemon = await fetchPokemon({ search });

  return (
    <div className="max-w-[1500px] w-[95%] mx-auto">
      <ul key={Math.random()}>
        <LoadPokemon
          initialPokemonList={fetchedPokemon}
        />
      </ul>
    </div>
  );
};

export default Page;