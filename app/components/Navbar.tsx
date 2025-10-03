
import Image from "next/image"

function Navbar() {
    return (
        <div className="py-5">
            <div className="max-w-full w-[90%] mx-auto flex justify-center">
                <Image
                priority={true}
                src={'/pokedex-logo.svg'}
                alt="pokedex logo"
                width={300}
                height={150}
                />
            </div>
        </div>
    )
}

export default Navbar