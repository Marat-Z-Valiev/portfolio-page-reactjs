import React from "react";
import projects from "../projects";

class ProjectItem extends React.Component {
	render() {
		return Object.keys(projects).map((item, i) => {
			return (
				<div key={i}>
					<h3>{projects[item].name}</h3>
					<p>{projects[item].description}</p>
					<p>
						<strong>{projects[item].tools}</strong>
					</p>
					<img src={projects[item].image} alt={projects[item].name} />
				</div>
			);
		});
	}
}
export default ProjectItem;
