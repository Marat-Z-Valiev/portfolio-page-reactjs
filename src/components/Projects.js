import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/Projects/projects.css";
import projects from "../projects";

class Projects extends React.Component {
	render() {
		return (
			<section className="projects-section">
				<div id="projects" className="projects">
					<h2>Projects</h2>
					<div className="projects-grid-container">
						{Object.keys(projects).map(key => (
							<ProjectItem key={key} projects={projects[key]} />
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
