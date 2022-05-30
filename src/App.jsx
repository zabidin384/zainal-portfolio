import { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Skills from "./components/Skills";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

const App = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
			<Navbar />
			<Toggle />
			<Home />
			<About />
			<Skills />
			<ProductList />
			<Contact />
		</div>
	);
};

export default App;
