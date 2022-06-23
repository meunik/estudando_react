import { HospitalsList } from "./HospitalsList";

export function Resultado() {
    return (
        <div>
            <header className="w-full mt-5 py-5 flex items-center justify-center">
                <span className="w-full font-semibold text-xl pb-5 border-b block">Filtro</span>
            </header>
            <main>
                <HospitalsList/>
            </main>
        </div>
    )
}