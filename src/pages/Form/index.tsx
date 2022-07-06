import { IdentificationBadge } from "phosphor-react";

export function Form() {
    return (
        <div>
            <header className="w-full mx-1 py-5 flex items-center justify-center">
                <IdentificationBadge className="text-[#333b3f] w-8 h-8" weight="fill"/>
            </header>
            <main>
                <div className="flex flex-col gap-1">
                    <div className="items-center grid grid-cols-8">
                        <label className="" htmlFor="filial">Filial:</label>
                        <input
                            id="filial"
                            type="text"
                            className="form col-span-7"
                            placeholder="Filial"
                        />
                    </div>
                    <div className="items-center grid grid-cols-8">
                        <label className="" htmlFor="data">Data:</label>
                        <input
                            id="data"
                            type="date"
                            className="w-52 form col-span-7"
                            placeholder="data"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}