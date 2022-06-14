import { Page404 } from "./Error/Page404";
import { Form } from "./Mains/Form";
import { AbsenteismoTotal } from "./Mains/Relatorios/AbsenteismoTotal";
import { Resultado } from "./Mains/Resultado";

export function Routes() {
    const routes = {
        '/': null,
        '/form': <Form />,
        '/resultado': <Resultado />,
        '/relatorios/absenteismo-total': <AbsenteismoTotal />,
    }
    
    function url() {
        let url = window.location.pathname
        return (routes[url] !== undefined) ? routes[url] : <Page404 />;
    }

    return (<>
        {url()}
    </>)
}