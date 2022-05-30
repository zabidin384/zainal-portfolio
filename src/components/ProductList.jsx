import "./productList.css";
import quiz from "../img/imgProjects/zainal-quiz.jpg";
import candycrush from "../img/imgProjects/zainal-candycrush.jpg";
import zainal2048game from "../img/imgProjects/zainal-2048game.jpg";
import flagsgame from "../img/imgProjects/zainal-flagsmemorygame.jpg";
import blog from "../img/imgProjects/zainal-blog.jpg";

export default function ProductList() {
	return (
		<div className="pl" id="portfolio">
			<div className="pl-texts">
				<h1 className="pl-title">My Portfolio</h1>
				<p className="pl-desc">Here are some examples of projects I've worked on. Please click the "demo button" to view the full website!</p>
			</div>
			<div className="pl-list">
				<div className="pl-item">
					<img src={quiz} alt="" className="pl-img" />
					<div className="pl-name">Who Wants to Be a Millionaire!</div>
					<a href="https://zainal-quiz.vercel.app/" target="_blank">
						<button className="pl-button">Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src={candycrush} alt="" className="pl-img" />
					<div className="pl-name">Candy Crush Game</div>
					<a href="https://zainal-candycrush.vercel.app/" target="_blank">
						<button className="pl-button">Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src={zainal2048game} alt="" className="pl-img" />
					<div className="pl-name">2048 Game</div>
					<a href="https://zainal-2048.vercel.app/" target="_blank">
						<button className="pl-button">Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src={flagsgame} alt="" className="pl-img" />
					<div className="pl-name">Flags Memory Game</div>
					<a href="https://flagsmemorygame.vercel.app/" target="_blank">
						<button className="pl-button">Demo</button>
					</a>
				</div>
				<div className="pl-item">
					<img src={blog} alt="" className="pl-img" />
					<div className="pl-name">My Blog</div>
					<a href="https://https://zainal-blog.herokuapp.com//" target="_blank">
						<button className="pl-button">Demo</button>
					</a>
				</div>
				{/* <div className="pl-item">
					<img src={quiz} alt="" className="pl-img" />
					<div className="pl-name">Pizza Delivery</div>
					<a href="https://flagsmemorygame.vercel.app/" target="_blank">
						<button className="pl-button">Demo</button>
					</a>
				</div> */}
			</div>
		</div>
	);
}
