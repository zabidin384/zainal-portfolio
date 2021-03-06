import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare, faInstagramSquare, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
	return (
		<div id="contact">
			<div className="c-bg"></div>
			<div className="c-wrapper">
				<div className="c-left">
					<div className="c-info">
						<h1 className="c-title">Let's discuss your project</h1>
						<div className="c-info-item">
							<FontAwesomeIcon icon={faWhatsappSquare} style={{ color: "lime" }} />
							<div className="c-info-i">+62822 8509 6369 (WhatsApp)</div>
						</div>
						<div className="c-info-item">
							<FontAwesomeIcon icon={faEnvelope} className="email" style={{ color: "orange" }} />
							<div className="c-info-i">zabidin384@gmail.com</div>
						</div>
						<div className="c-info-item">
							<FontAwesomeIcon icon={faInstagramSquare} style={{ color: "red" }} />
							<div className="c-info-i">@zainal_tf</div>
						</div>
						<div className="c-info-item">
							<a href="https://github.com/zabidin384" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithubSquare} style={{ color: "slategray" }} />
								<div className="c-info-i">zabidin384</div>
							</a>
						</div>
						<div className="c-info-item">
							<a href="https://www.linkedin.com/in/zainal-tf/" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} style={{ color: "dodgerblue" }} />
								<div className="c-info-i">Zainal Abidin</div>
							</a>
						</div>
						<div className="c-info-item">
							<FontAwesomeIcon icon={faLocationDot} style={{ color: "green" }} />
							<div className="c-info-i">Pangkalan Kerinci, Pelalawan Regency, Riau Province, Indonesia</div>
						</div>
					</div>
				</div>
				<div className="c-right">
					<img src="images/meeting.png" alt="" />
					<div>
						<i className="c-desc">
							"One of the smartest things you can do as a manager is to hire the right person and then keep them happy. Happy workers tend to take
							less time off and are more likely to stay with their employer."
						</i>
						<br />
						<br /> <b className="c-author">- Reen Rose</b>
					</div>
				</div>
			</div>
		</div>
	);
}
