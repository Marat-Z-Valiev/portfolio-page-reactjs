import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/Projects/projects.css";

class Projects extends React.Component {
	render() {
		return (
			<div id="projects" className="projects">
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
