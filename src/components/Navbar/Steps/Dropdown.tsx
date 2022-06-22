import { Menu, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { RoutesInterface } from "../../../AppRoutes/Configs";

export function Dropdown(props: RoutesInterface) {
    return (
        <Menu.Item>
            {({ active }) => (
                (props.dropdown) ? (
                    <Menu as="div" className="flex flex-col items-end text-left h-full">
                        <Menu.Button
                            className={`${active ? 'hover:bg-davita-black-2 bg-davita-black-2' : 'hover:bg-davita-black-2'} flex w-full items-center p-2 text-sm focus:outline-none focus:bg-davita-black-2 gap-2 rounded-md`}
                        >
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
                                <Menu.Items
                                    className={`w-max fixed items-center mt-10 mr-20 bg-davita-blue-1 shadow-xl rounded-md focus-visible:outline-none p-1 ${props.css}`}
                                >
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
                        className={`${active ? 'hover:bg-davita-black-2 bg-davita-black-2' : 'hover:bg-davita-black-2'} flex items-center p-2 text-sm focus:outline-none focus:bg-davita-black-2 gap-2 rounded-md`}
                    >
                        {props.icon}
                        {props.title}
                    </Link>
                )
            )}
        </Menu.Item>
    )
}