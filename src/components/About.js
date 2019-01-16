import React from "react";
import "../css/About/about.css";
import profileImage from "../css/images/profile_photo.jpg";

const About = props => (
	<section>
		<div id="about" className="about-container">
			<h2 className="about-title">About</h2>
			<div className="about-text">
				<p>Hello and welcome to my portfolio page!</p>
				<p>
					I've been always fascinated by the world of web development. I'm
					currently learning about front-end development
				</p>
			</div>
			<img src={profileImage} className="img-round" alt="profile" />
		</div>
	</section>
);

export default About;
