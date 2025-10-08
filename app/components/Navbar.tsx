
import Image from "next/image"

function Navbar() {
    return (
        // <div className="max-w-full w-ful mx-auto flex justify-center bg-white/40 mt-5 mb-10 p-5">
        //     <Image
        //     priority={true}
        //     src={'/pokedex-logo.svg'}
        //     alt="pokedex logo"
        //     width={300}
        //     height={150}
        //     />
        // </div>
        <div className="navbar min-h-30 shadow-sm mb-10 bg-amber-300">
            <div className="flex-1">
                <a
                href="/"
                className="btn btn-ghost text-xl">
                    <Image
                        priority={true}
                        src={'/pokedex-logo.svg'}
                        alt="pokedex logo"
                        width={200}
                        height={100}
                    />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-indigo-700 text-2xl">
                    <li><a href="https://pokeapi.co/docs/v2#pokemon-section">PokeDocs</a></li>
                    <li>
                        <details>
                            <summary>Account</summary>
                            <ul className="bg-white rounded-t-none">
                                <li><a>MyFavs</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar