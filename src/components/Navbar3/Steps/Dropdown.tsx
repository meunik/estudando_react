interface DropdownContentProps {
    dropdownContent: Object;
}

export function Dropdown({ dropdownContent }: DropdownContentProps) {
    return (
        <div>
            {
                Object.entries(dropdownContent).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            type="button"
                            className="w-full h-full px-5 py-3 hover:bg-davita-black-1 flex items-center gap-2 focus:outline-none focus:bg-davita-black-1 transition-colors"
                        >
                            {value.icon}
                            {value.title}
                        </button>
                    )
                })
            }
        </div>
    )
}