import { Page404 } from "./Error/Page404";
import { Form } from "./Mains/Form";
import { AbsenteismoTotal } from "./Mains/Relatorios/AbsenteismoTotal";
import { Resultado } from "./Mains/Resultado";

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