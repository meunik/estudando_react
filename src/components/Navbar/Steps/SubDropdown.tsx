import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

interface SubDropdownContentProps {
    subDropdownContent: Object;
}

export function SubDropdown({ subDropdownContent }: SubDropdownContentProps) {
    return (<>
        {
            Object.entries(subDropdownContent).map(([key, value]) => {
                return (
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                key={key}
                                to={value.href}
                                className={`${active ? 'hover:bg-davita-black-2 bg-davita-black-2' : 'hover:bg-davita-black-2'} p-2 text-sm focus:outline-none focus:bg-davita-black-2 gap-2 rounded-md`}
                            >
                                {value.icon}
                                {value.title}
                            </Link>
                        )}
                    </Menu.Item>
                )
            })
        }
    </>)
}