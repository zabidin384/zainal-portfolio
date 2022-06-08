import "./about.css";

export default function About() {
	return (
		<div id="about">
			<div className="a-left">
				<div className="a-card">
					<img src="images/profile.png" alt="" />
				</div>
			</div>
			<div className="a-right">
				<div className="a-title">About Me</div>
				<div className="a-desc">
					I am a JavaScript programmer who is familiar with React Js, Next Js, and Vue Js frameworks. I graduated from Engineering Physics of Gadjah
					Mada University.
					<br /> <br />
					My main stack technology is{" "}
					<a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noreferrer">
						<b>MERN (MongoDB, ExpressJs, ReactJs, and NodeJS).</b>
					</a>
					<br /> <br />
					Coding has been my passion and hobby since I studied in college. I learned to code independently through courses and tutorials. I study and
					practice every day. I have completed many courses and worked on many projects.
					<br /> <br />
					With my current ability, I'm sure I can solve all of your problem.
					<br /> <br />
					So, what are you waiting for? Please <a href="#contact">contact</a> me right now!
				</div>
			</div>
		</div>
	);
}
