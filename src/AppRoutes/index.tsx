import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Form } from "../pages/Form";
import { Resultado } from "../pages/Resultado";
import { routesType } from "./Configs";

export function AppRoutes() {
    function routes() {
        return (
            Object.entries(routesType).map(([key, value]) => {
                if (value.dropdown) {
                    Object.entries(value.dropdownContent).map(([key, valueDropdownContent]) => {
                        return (!!valueDropdownContent.componet) && <Route key={'routes_'+key} path={valueDropdownContent.href} element={valueDropdownContent.componet} />
                        console.log(valueDropdownContent.href);
                        
                    })
                } else {
                    return (!!value.componet) && <Route key={'routes_'+key} path={value.href} element={value.componet} />
                }
            })
        )
    }

    return (
        <Router>
		    <Navbar />
            <Routes>
                <Route key={'routes_home'} path="/" element={<Home />} />
                {routes()}
            </Routes>
        </Router>
    )
}

export function Home() {
    return (<>
        <h1>HOME</h1>
    </>)
}