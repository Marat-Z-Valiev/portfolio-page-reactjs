import React from "react";
import Button from "./Button";
import projects from "../projects";
import "../css/projectItem.css";

class ProjectItem extends React.Component {
	render() {
		return Object.keys(projects).map((item, i) => {
			return (
				<div key={i}>
					<hr className="line" />
					<h3>{projects[item].name}</h3>
					<hr className="line" />
					<div className="project-description">
						<p>{`${projects[item].name} ${projects[item].description}`}</p>
						<p>
							<strong>{projects[item].tools}</strong>
						</p>
					</div>
					<img
						className="portfolio-image img"
						src={projects[item].image}
						alt={projects[item].name}
					/>
					<div className="buttons">
						<Button
							label="Website"
							link={projects[item].websiteLink}
							icon={projects[item].globeIcon}
						/>
						<Button
							label="Github"
							link={projects[item].githubLink}
							icon={projects[item].githubIcon}
						/>
					</div>
				</div>
			);
		});
	}
}
export default ProjectItem;
