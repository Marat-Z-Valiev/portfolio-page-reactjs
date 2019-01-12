import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/projects.css";

class Projects extends React.Component {
	render() {
		return (
			<div id="portfolio" className="portfolio">
				<section className="projects-header">
					<h2>Projects</h2>
					<div className="grid-container">
						<ProjectItem />
					</div>
				</section>
			</div>
		);
	}
}

export default Projects;
