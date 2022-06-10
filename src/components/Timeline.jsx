import React from "react";
import "./timeline.css";

export default function Timeline() {
	return (
		<div id="experiences">
			<div className="timeline-title">My Experiences</div>
			<div className="timeline">
				<div className="timeline-container">
					<div className="container left">
						<div className="content">
							<div className="timeline-date">January - May 2022</div>
							<div className="timeline-place">Junior Software Programmer - Infimech</div> <br />
							<div className="timeline-desc">
								<ul>
									<li>Add some features and change the appearance of front end website to be more elegant and interactive</li>
									<li>Make CFD (Computational Fluid Dynamics) simulation using OpenFoam</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="container right">
						<div className="content">
							<div className="timeline-date">2020-2021</div>
							<div className="timeline-place">Writer - Freelance</div> <br />
							<div className="timeline-desc">
								<ul>
									<li>Make several kinds of articles about engineering science and technology on an educational website</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="container left">
						<div className="content">
							<div className="timeline-date">2016-2021</div>
							<div className="timeline-place">Teacher - Sanggar Bimbel & Indonesia College</div> <br />
							<div className="timeline-desc">
								<ul>
									<li>Teach Math and Physics subject to Junior and Senior High School on Yogyakarta</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="container right">
						<div className="content">
							<div className="timeline-date">2015-2020</div>
							<div className="timeline-place">Owner - Kuota Center</div> <br />
							<div className="timeline-desc">
								<ul>
									<li>Serving the sale of pulses and quotas for all operators, as well as various kinds of bills and vouchers</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
