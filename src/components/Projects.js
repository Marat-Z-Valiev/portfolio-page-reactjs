import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/Projects/projects.css";

class Projects extends React.Component {
	render() {
		return (
			<section className="projects-header">
				<div id="projects" className="projects">
					<h2>Projects</h2>
					<div className="grid-container">
						<ProjectItem />
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
