import { Menu, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { Fragment } from "react";

interface DropdownContentProps {
    dropdownContent: Object;
}

export function Dropdown({ dropdownContent }: DropdownContentProps) {
    return (<>
        {
            Object.entries(dropdownContent).map(([key, value]) => {
                return (
                    <Menu.Item>
                        {({ active }) => (<>
                            { (value.dropdown) ? (
                                <Menu as="div" className="flex flex-col items-end text-left h-full">
                                    <Menu.Button
                                        key={key}
                                        className={`${active ? 'hover:bg-davita-black-2 bg-davita-black-2' : 'hover:bg-davita-black-2'} group flex w-full items-center p-2 text-sm focus:outline-none focus:bg-davita-black-2 gap-2 rounded-md`}
                                    >
                                        {value.icon}
                                        {value.title}
                                        { (!!value.title) && (<CaretDown />) }
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        { (value.dropdown) && (
                                            <Menu.Items
                                                className={`w-full fixed mt-10 mr-20 bg-davita-blue-1 shadow-xl rounded-md focus-visible:outline-none p-1 ${value.css}`}
                                            >
                                                <Dropdown dropdownContent={value.dropdownContent}/>
                                            </Menu.Items>
                                        ) }
                                    </Transition>
                                </Menu>
                            ) : (
                                <a
                                    key={key}
                                    href={value.href}
                                    className={`${active ? 'hover:bg-davita-black-2 bg-davita-black-2' : 'hover:bg-davita-black-2'} flex items-center p-2 text-sm focus:outline-none focus:bg-davita-black-2 gap-2 rounded-md`}
                                >
                                    {value.icon}
                                    {value.title}
                                </a>
                            ) }
                        </>)}
                    </Menu.Item>
                )
            })
        }
    </>)
}