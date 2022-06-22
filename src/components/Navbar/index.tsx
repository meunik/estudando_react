import { Link } from "react-router-dom";
import { routesType } from "../../AppRoutes/Configs";
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

            <div className="w-full h-full flex justify-end">
                {Object.entries(routesType).map(([key, value]) => {
                    return (
                        <Options 
                            key={key}
                            title={value.title}
                            component={value.component}
                            icon={value.icon}
                            href={value.href}
                            css={value.css}
                            dropdown={value.dropdown}
                            dropdownContent={value.dropdownContent}
                        />
                    )
                })}
            </div>
        </nav>
    )
}
