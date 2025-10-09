'use client'

import Image from "next/image";
import { useState } from "react";

function Navbar() {

    return (
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
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-amber-400 rounded-box
                        z-1 mt-3 w-52 p-2 shadow
                        ">
                        <li><a className="text-indigo-800 text-2xl">My favs</a></li>
                        <li><a className="text-indigo-800 text-2xl">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end hover:animate-pulse flex justify-end">
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
        </div>
    )
}

export default Navbar