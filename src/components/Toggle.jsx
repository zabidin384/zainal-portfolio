import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../context";

export default function Toggle() {
	const theme = useContext(ThemeContext);
	const handleClick = () => {
		theme.dispatch({ type: "TOGGLE" });
	};

	return (
		<div className="t">
			<img src="images/sun.png" alt="" />
			<img src="images/moon.png" alt="" />
			<div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? -3 : 26 }}></div>
		</div>
	);
}
