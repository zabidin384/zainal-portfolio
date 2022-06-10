import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo, faClipboardCheck, faBriefcase, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context";

export default function Navbar() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="n" style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
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
				<a href="#experiences">
					<FontAwesomeIcon icon={faBriefcase} size="sm" /> Experiences
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
