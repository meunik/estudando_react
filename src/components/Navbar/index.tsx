import { Link } from "react-router-dom";
import { Options } from './Steps/Options';

export function Navbar() {
    return (
        <nav
            className="h-14 flex text-zinc-100"
            style={{ background: `linear-gradient(25deg, #f4f8f9 13%, #004c77 25%)` }}
        >
            <Link to="/" className="focus-visible:outline-none">
                <img
                    src="../src/assets/davita/logo-davita-azul.svg"
                    alt="Logo da Davita"
                    className="ml-5 w-20 h-full flex items-center"
                />
            </Link>

            <Options />
        </nav>
    )
}
