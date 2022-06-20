import { Navbar } from "./components/Navbar";
import { Navbar2 } from "./components/Navbar2";
import { Navbar3 } from "./components/Navbar3";
import { Widget } from "./components/Widget";
import { AppRoutes } from "./AppRoutes";

export function App() {
	return (<>
		{/* <Navbar /> */}
		{/* <Navbar2 /> */}
		{/* <Navbar3 /> */}
		
		<AppRoutes />
		<Widget />
	</>)
}