import "./portfolio.css";

export default function Portfolio() {
	return (
		<div id="portfolio">
			<div className="pl-texts">
				<h1 className="pl-title">My Portfolio</h1>
				<p className="pl-desc">Here are some examples of projects I've worked on. Please click the "demo button" to view the full website!</p>
			</div>
			<div className="pl-list">
				<div className="pl-item">
					<img src="images/projects/infimech.jpg" alt="infimech" />
					<div className="pl-name">Infimech</div>
					<a href="https://eng.infimech.co.id/" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src="images/projects/survey.jpg" alt="" />
					<div className="pl-name">Survey Website</div>
					<a href="https://zainal-survey.vercel.app/" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src="images/projects/zainal-blog.jpg" alt="" />
					<div className="pl-name">My Blog</div>
					<a href="https://https://zainal-blog.herokuapp.com//" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src="images/projects/zainal-quiz.jpg" alt="" />
					<div className="pl-name">Who Wants to Be a Millionaire!</div>
					<a href="https://zainal-quiz.vercel.app/" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src="images/projects/zainal-candycrush.jpg" alt="" />
					<div className="pl-name">Candy Crush Game</div>
					<a href="https://zainal-candycrush.vercel.app/" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src="images/projects/zainal-2048game.jpg" alt="" />
					<div className="pl-name">2048 Game</div>
					<a href="https://zainal-2048.vercel.app/" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src="images/projects/zainal-flagsmemorygame.jpg" alt="" />
					<div className="pl-name">Flags Memory Game</div>
					<a href="https://flagsmemorygame.vercel.app/" target="_blank" rel="noreferrer">
						<button>Demo</button>
					</a>
				</div>
			</div>
		</div>
	);
}
