import { Page404 } from "./Error/Page404";
import { AbsenteismoTotal } from "../pages/Relatorios/AbsenteismoTotal";
import { Form } from "../pages/Form";
import { Resultado } from "../pages/Resultado";

export function Routes() {
    const url = window.location.pathname

    const routes = {
        '/': null,
        '/form': <Form />,
        '/resultado': <Resultado />,
        '/relatorios/absenteismo-total': <AbsenteismoTotal />,
    }
    
    return (routes[url] !== undefined) ? routes[url] : <Page404 />;
}