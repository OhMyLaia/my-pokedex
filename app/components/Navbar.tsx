
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

        // <div className="navbar flex h-24 shadow-sm mb-10 bg-amber-300">
        //     <div className="flex-1">
        //         <a
        //         href="/"
        //         className="btn btn-ghost text-xl">
        //             <Image
        //                 priority={true}
        //                 src={'/pokedex-logo.svg'}
        //                 alt="pokedex logo"
        //                 width={200}
        //                 height={100}
        //                 className="mx-5 my-2"
        //             />
        //         </a>
        //     </div>
        //     <div className="flex-none">
        //         <ul className="menu menu-horizontal px-4 pt-8 text-indigo-700 sm:text-md lg:text-2xl flex items-center gap-6">
        //             <li><a href="https://pokeapi.co/docs/v2#pokemon-section">PokeDocs</a></li>
        //             <li>
        //                 <details className="relative">
        //                     <summary>Account</summary>
        //                     <ul className="absolute bg-white rounded-t-none p-2">
        //                         <li><a>MyFavs</a></li>
        //                         <li><a>About</a></li>
        //                     </ul>
        //                 </details>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
        <div className="navbar bg-amber-400 shadow-sm mb-15">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-red-500 hover:scale-120">
                    <Image
                    priority={true}
                        src={'/pokeball-icon.png'}
                        alt="pokeball icon"
                        width={100}
                        height={50}
                        className="mx-5 my-2"
                    />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg> */}
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-amber-400 rounded-box
                        z-1 mt-3 w-52 p-2 shadow text-indigo-800
                        sm:text-md
                        md:text-xl
                        text-2xl
                        ">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hover:animate-pulse">
                <a href="/" className=" text-xl">
                        <Image
                        priority={true}
                        src={'/pokedex-logo.svg'}
                        alt="pokedex logo"
                        width={100}
                        height={50}
                        className="mx-5 my-2"
                    />
                </a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">

                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar