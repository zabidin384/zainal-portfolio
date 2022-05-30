import { useContext } from "react";
import { ThemeContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo, faClipboardCheck, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default function Navbar() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="n">
			<div className="n-item">
				<a href="#home">
					<FontAwesomeIcon icon={faHouse} size="sm" /> Home
				</a>
			</div>
			<div className="n-item">
				<a href="#about">
					<FontAwesomeIcon icon={faCircleInfo} size="sm" /> About
				</a>
			</div>
			<div className="n-item">
				<a href="#skills">
					<FontAwesomeIcon icon={faClipboardCheck} size="sm" /> Skills
				</a>
			</div>
			<div className="n-item">
				<a href="#portfolio">
					<FontAwesomeIcon icon={faDesktop} size="xs" /> Portfolio
				</a>
			</div>
			<div className="n-item">
				<a href="#contact">
					<FontAwesomeIcon icon={faPhone} size="xs" /> Contact
				</a>
			</div>
		</div>
	);
}
