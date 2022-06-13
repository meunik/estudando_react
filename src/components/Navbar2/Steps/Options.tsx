import { Menu, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { optionsType } from "..";
import { Dropdown } from "./Dropdown";
import { Fragment } from 'react'

export function Options() {
    return (
        <div className="w-full h-full flex justify-end">
            {
                Object.entries(optionsType).map(([key, value]) => {
                    return (<>
                        { (value.dropdown) ? (
                            <Menu as="div" className="relative text-left h-full items-center">
                                <Menu.Button className="h-full px-4 hover:bg-davita-black-1 flex items-center gap-2 focus:outdivne-none focus-visible:outline-none focus:bg-davita-black-1 transition-colors">
                                    {value.icon}
                                    {value.title}
                                    <CaretDown />
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
                                        <Menu.Items className="fixed top-16 flex flex-col bg-davita-blue-1 shadow-xl rounded-md focus-visible:outline-none p-1">
                                            <Dropdown dropdownContent={value.dropdownContent}/>
                                        </Menu.Items>
                                    ) }
                                </Transition>
                            </Menu>
                        ) : (
                            <a
                                key={key}
                                href={value.href}
                                className="relative text-left h-full px-4 py-2 flex items-center hover:bg-davita-black-1 focus:outline-none focus:bg-davita-black-1 gap-2"
                            >
                                {value.icon}
                                {value.title}
                            </a>
                        ) }  
                    </>)
                })
            }
        </div>
    )
}