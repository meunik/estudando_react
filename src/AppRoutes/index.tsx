import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { RoutesType, routesType } from "./Configs";

export function AppRoutes() {
    function routes(routes: RoutesType) {
        return (
            Object.entries(routes).map(([key, value]) => {
                if (value.dropdown) {
                    return Object.entries(value.dropdownContent).map(([key, valueDropdownContent]) => {
                        return (!!valueDropdownContent.component) ? (
                            <Route key={'routes_'+key} path={valueDropdownContent.href} element={valueDropdownContent.component} />
                        ) : (
                            subRoutes(valueDropdownContent.dropdownContent)
                        )
                    })
                } else {
                    return (!!value.component) && <Route key={'routes_'+key} path={value.href} element={value.component} />
                }
            })
        )
    }

    function subRoutes(routes: RoutesType) {
        return (
            Object.entries(routes).map(([key, value]) => {
                if (value.dropdown) {
                    Object.entries(value.dropdownContent).map(([key, valueDropdownContent]) => {
                        return (!!valueDropdownContent.component) ? (
                            <Route key={'routes_'+key} path={valueDropdownContent.href} element={valueDropdownContent.component} />
                        ) : (
                            subRoutes(valueDropdownContent.dropdownContent)
                        )
                    })
                } else {
                    return (!!value.component) && <Route key={'routes_'+key} path={value.href} element={value.component} />
                }
            })
        )
    }

    return (
        <Router>
		    <Navbar />
            <div className="mx-8">
                <Routes>
                    <Route key={'routes_home'} path="/" element={<Navigate to="/form" replace />} />
                    {routes(routesType)}
                </Routes>
            </div>
        </Router>
    )
}