import { Popover } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { optionsType } from "..";
import { Dropdown } from "./Dropdown";

export function Options() {
    return (
        <div className="w-full h-full flex items-center justify-end">
            {
                Object.entries(optionsType).map(([key, value]) => {
                    return (
                        <Popover className="h-full flex flex-col items-end focus-visible:outline-none">
                            <Popover.Button
                                key={key}
                                type="button"
                                className="h-full px-4 hover:bg-davita-black-1 flex items-center gap-2 focus:outdivne-none focus-visible:outline-none focus:bg-davita-black-1 transition-colors"
                            >
                                {value.icon}
                                {value.title}
                                { (value.dropdown) && (<CaretDown />) }
                            </Popover.Button>

                            { (value.dropdown) && (
                                <Popover.Panel className="fixed top-14 bg-davita-blue-1 shadow-lg rounded-b-md">
                                    <Dropdown dropdownContent={value.dropdownContent}/>
                                </Popover.Panel>
                            ) }
                        </Popover>
                    )
                })
            }
        </div>
    )
}