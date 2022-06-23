import { IdentificationBadge } from "phosphor-react";

export function Form() {
    return (
        <div>
            <header className="w-full mx-1 py-5 flex items-center justify-center">
                <IdentificationBadge className="text-[#333b3f] w-8 h-8" weight="fill"/>
            </header>
            <main>
                <div className="flex items-center gap-10">
                    <label htmlFor="filial">Filial:</label>
                    <input
                        type="text"
                        className="flex-1 form"
                        placeholder="Filial"
                    />
                </div>
            </main>
        </div>
    )
}