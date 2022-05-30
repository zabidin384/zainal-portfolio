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
import { useContext } from "react";
import { ThemeContext } from "../context";

export default function Skills() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="s" id="skills">
			<div className="s-wrapper" style={{ backgroundColor: darkMode && "white", color: darkMode && "#222" }}>
				<div className="s-title">My Skills</div>
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
			</div>
		</div>
	);
}
