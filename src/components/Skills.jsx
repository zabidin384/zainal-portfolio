import "./skills.css";
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
						<FontAwesomeIcon icon={faLinkedin} style={{ color: "dodgerblue" }} />
					</a>
				</p>
				<div className="s-skills-wrapper">
					<div className="s-skills">
						<div className="s-item">
							<img src="images/skills/html.png" alt="" />
							<div className="s-name">HTML</div>
						</div>
						<div className="s-item">
							<img src="images/skills/css.png" alt="" />
							<div className="s-name">CSS</div>
						</div>
						<div className="s-item">
							<img src="images/skills/javascript.png" alt="" />
							<div className="s-name">JavaScript</div>
						</div>
						<div className="s-item">
							<img src="images/skills/php.png" alt="" />
							<div className="s-name">PHP</div>
						</div>
						<div className="s-item">
							<img src="images/skills/nodejs.png" alt="" />
							<div className="s-name">NodeJs</div>
						</div>
						<div className="s-item">
							<img src="images/skills/express.png" alt="" />
							<div className="s-name">ExpressJs</div>
						</div>
					</div>
					<div className="s-skills">
						<div className="s-item">
							<img src="images/skills/bootstrap.png" alt="" />
							<div className="s-name">Bootstrap</div>
						</div>
						<div className="s-item">
							<img src="images/skills/tailwind.png" alt="" />
							<div className="s-name">Tailwind</div>
						</div>
						<div className="s-item">
							<img src="images/skills/vue.png" alt="" />
							<div className="s-name">VueJs</div>
						</div>
						<div className="s-item">
							<img src="images/skills/react.png" alt="" />
							<div className="s-name">ReactJs</div>
						</div>
						<div className="s-item">
							<img src="images/skills/next.png" alt="" />
							<div className="s-name">NextJs</div>
						</div>
						<div className="s-item">
							<img src="images/skills/mongodb.png" alt="" />
							<div className="s-name">MongoDB</div>
						</div>
					</div>
					<div className="s-skills">
						<div className="s-item">
							<img src="images/skills/sass.png" alt="" />
							<div className="s-name">SASS</div>
						</div>
						<div className="s-item">
							<img src="images/skills/firebase.png" alt="" />
							<div className="s-name">Firebase</div>
						</div>
						<div className="s-item">
							<img src="images/skills/github.png" alt="" />
							<div className="s-name">Github</div>
						</div>
						<div className="s-item">
							<img src="images/skills/postman.png" alt="" />
							<div className="s-name">Postman</div>
						</div>
						<div className="s-item">
							<img src="images/skills/insomnia.png" alt="" />
							<div className="s-name">Insomnia</div>
						</div>
						<div className="s-item">
							<img src="images/skills/replit.png" alt="" />
							<div className="s-name">Replit</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
