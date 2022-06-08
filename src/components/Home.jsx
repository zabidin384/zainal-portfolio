import "./home.css";

export default function Home() {
	return (
		<div id="home">
			<div className="h-left">
				<div className="h-left-wrapper">
					<h2 className="h-intro">Hello, My name is</h2>
					<h1 className="h-name">Zainal Abidin</h1>
					<div className="h-title">
						<div className="h-title-wrapper">
							<div className="h-title-item">Web Developer - Designer - Writer - Lecturer</div>
						</div>
					</div>
					<div className="h-cv">
						<a href="https://www.tinyurl.com/cv-zainal" target="_blank" rel="noreferrer">
							<button>Download My CV</button>
						</a>
					</div>
					<div className="h-desc">
						<i>"The way to get started is to quit talking and begin doing."</i> <br />
						<br /> <b>- Walt Disney</b>
					</div>
				</div>
			</div>
			<div className="h-right">
				<div className="h-bg"></div>
				<img src="images/me.png" alt="" />
			</div>
		</div>
	);
}
