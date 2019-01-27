import React from "react";
import Button from "./Button";
import "../css/Projects/ProjectItem/projectItem.css";

class ProjectItem extends React.Component {
	render() {
		const {
			name,
			description,
			tools,
			image,
			websiteLink,
			globeIcon,
			githubLink,
			githubIcon
		} = this.props.projects;
		return (
			<div>
				<hr className="line" />
				<h3>{name}</h3>
				<hr className="line" />
				<div className="project-description">
					<p>{`${name} ${description}`}</p>
					<p>
						<strong>{tools}</strong>
					</p>
				</div>
				<img className="portfolio-image img" src={image} alt={name} />
				<div className="buttons">
					<Button label="Website" link={websiteLink} icon={globeIcon} />
					<Button label="Github" link={githubLink} icon={githubIcon} />
				</div>
			</div>
		);
	}
}
export default ProjectItem;
