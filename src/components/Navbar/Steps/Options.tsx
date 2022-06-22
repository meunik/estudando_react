import { Menu, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { Dropdown } from "./Dropdown";
import { Fragment } from 'react'
import { Link } from "react-router-dom";
import { RoutesInterface } from "../../../AppRoutes/Configs";

export function Options(props: RoutesInterface) {
    return (
        (props.dropdown) ? (
            <Menu as="div" className="flex flex-col items-end text-left h-full">
                <Menu.Button className="h-full px-4 hover:bg-davita-black-1 flex items-center gap-2 focus:outdivne-none focus-visible:outline-none focus:bg-davita-black-1 transition-colors">
                    {props.icon}
                    {props.title}
                    { (!!props.title) && (<CaretDown />) }
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
                    { (props.dropdown) && (
                        <Menu.Items className={`fixed top-16 bg-davita-blue-1 shadow-xl rounded-md focus-visible:outline-none p-1 ${props.css}`}>
                            {Object.entries(props.dropdownContent).map(([key, value]) => {
                                return (
                                    <Dropdown 
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
                        </Menu.Items>
                    ) }
                </Transition>
            </Menu>
        ) : (
            <Link
                to={props.href}
                className="relative text-left h-full px-4 py-2 flex items-center hover:bg-davita-black-1 focus:outline-none focus:bg-davita-black-1 gap-2"
            >
                {props.icon}
                {props.title}
            </Link>
        )
    )
}