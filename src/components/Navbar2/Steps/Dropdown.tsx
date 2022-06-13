import { Menu } from "@headlessui/react";

interface DropdownContentProps {
    dropdownContent: Object;
}

export function Dropdown({ dropdownContent }: DropdownContentProps) {
    return (<>
        {
            Object.entries(dropdownContent).map(([key, value]) => {
                return (
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                key={key}
                                href={value.href}
                                className={`
                                    ${active ? 'hover:bg-davita-black-2 bg-davita-black-2' : 'hover:bg-davita-black-2'} 
                                    group flex w-full items-center p-2 text-sm focus:outline-none focus:bg-davita-black-2 gap-2 rounded-md`
                                }
                            >
                                {value.icon}
                                {value.title}
                            </a>
                        )}
                    </Menu.Item>
                )
            })
        }
    </>)
}