import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Form } from "../pages/Form";
import { Resultado } from "../pages/Resultado";
import { routesType } from "./Configs";

export function AppRoutes() {
    return (
        <Router>
		    <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/form" element={<Form />} />
                <Route path="/resultado" element={<Resultado />} /> */}
                {seila()}
            </Routes>
        </Router>
    )
}

export function Home() {
    return (<>
        <h1>HOME</h1>
    </>)
}
function seila() {
    return (
        Object.entries(routesType).map(([key, value]) => {
            if (value.dropdown) {
                Object.entries(value.dropdownContent).map(([key, valueDropdownContent]) => {
                    if (valueDropdownContent.dropdown) {
                        
                    } else {
                        return (!!valueDropdownContent.componet) && <Route path={valueDropdownContent.href} element={valueDropdownContent.componet} />
                    }
                })
            } else {
                return (!!value.componet) && <Route path={value.href} element={value.componet} />
            }
        })
    )
}