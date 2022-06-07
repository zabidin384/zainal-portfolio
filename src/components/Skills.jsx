import "./skills.css";
import html from "../img/imgSkills/html.png";
import css from "../img/imgSkills/css.png";
import javascript from "../img/imgSkills/javascript.png";
import php from "../img/imgSkills/php.png";
import nodejs from "../img/imgSkills/nodejs.png";
import express from "../img/imgSkills/express.png";
import bootstrap from "../img/imgSkills/bootstrap.png";
import tailwind from "../img/imgSkills/tailwind.png";
import vue from "../img/imgSkills/vue.png";
import react from "../img/imgSkills/react.png";
import next from "../img/imgSkills/next.png";
import mongodb from "../img/imgSkills/mongodb.png";
import sass from "../img/imgSkills/sass.png";
import firebase from "../img/imgSkills/firebase.png";
import github from "../img/imgSkills/github.png";
import postman from "../img/imgSkills/postman.png";
import insomnia from "../img/imgSkills/insomnia.png";
import replit from "../img/imgSkills/replit.png";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="s" id="skills">
			<div className="s-wrapper" style={{ backgroundColor: darkMode && "white", color: darkMode && "#222" }}>
				<div className="s-title">My Skills</div>
				<p>
					You can see some of my skill certifications on my Linkedin{" "}
					<a href="https://www.linkedin.com/in/zainal-tf/" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin} className="linkedIn" />
					</a>
				</p>
				<div className="s-skills-wrapper">
				<div className="s-skills">
					<div className="s-item">
						<img src={html} alt="" className="s-img" />
						<div className="s-name">HTML</div>
					</div>
					<div className="s-item">
						<img src={css} alt="" className="s-img" />
						<div className="s-name">CSS</div>
					</div>
					<div className="s-item">
						<img src={javascript} alt="" className="s-img" />
						<div className="s-name">JavaScript</div>
					</div>
					<div className="s-item">
						<img src={php} alt="" className="s-img" />
						<div className="s-name">PHP</div>
					</div>
					<div className="s-item">
						<img src={nodejs} alt="" className="s-img" />
						<div className="s-name">NodeJs</div>
					</div>
					<div className="s-item">
						<img src={express} alt="" className="s-img" />
						<div className="s-name">ExpressJs</div>
					</div>
				</div>
				<div className="s-skills">
					<div className="s-item">
						<img src={bootstrap} alt="" className="s-img" />
						<div className="s-name">Bootstrap</div>
					</div>
					<div className="s-item">
						<img src={tailwind} alt="" className="s-img" />
						<div className="s-name">Tailwind</div>
					</div>
					<div className="s-item">
						<img src={vue} alt="" className="s-img" />
						<div className="s-name">VueJs</div>
					</div>
					<div className="s-item">
						<img src={react} alt="" className="s-img" />
						<div className="s-name">ReactJs</div>
					</div>
					<div className="s-item">
						<img src={next} alt="" className="s-img" />
						<div className="s-name">NextJs</div>
					</div>
					<div className="s-item">
						<img src={mongodb} alt="" className="s-img" />
						<div className="s-name">MongoDB</div>
					</div>
				</div>
				<div className="s-skills">
					<div className="s-item">
						<img src={sass} alt="" className="s-img" />
						<div className="s-name">SASS</div>
					</div>
					<div className="s-item">
						<img src={firebase} alt="" className="s-img" />
						<div className="s-name">Firebase</div>
					</div>
					<div className="s-item">
						<img src={github} alt="" className="s-img" />
						<div className="s-name">Github</div>
					</div>
					<div className="s-item">
						<img src={postman} alt="" className="s-img" />
						<div className="s-name">Postman</div>
					</div>
					<div className="s-item">
						<img src={insomnia} alt="" className="s-img" />
						<div className="s-name">Insomnia</div>
					</div>
					<div className="s-item">
						<img src={replit} alt="" className="s-img" />
						<div className="s-name">Replit</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}
