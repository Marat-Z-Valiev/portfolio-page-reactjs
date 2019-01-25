import React from "react";
import PropTypes from "prop-types";
import {animateScroll as scroll} from "react-scroll";
import "../footerLinks";
import "../css/Footer/footer.css";

class Footer extends React.Component {
	displayCurrentYear() {
		document.getElementById(
			"currentYear"
		).textContent = new Date().getFullYear();
	}

	componentDidMount() {
		this.displayCurrentYear();
	}

	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render() {
		const {
			linkedInLink,
			linkedInIcon,
			githubLink,
			githubIcon,
			mailLink,
			mailIcon
		} = this.props.footerLinks;

		return (
			<div id="contact" className="contact">
				<h2>Contact</h2>
				<div className="footer-container">
					<div className="icons">
						<a
							className="icon-btn linkedin-icon"
							href={linkedInLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className={linkedInIcon} aria-hidden="true" />
						</a>
						<a
							className="icon-btn github-icon"
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className={githubIcon} aria-hidden="true" />
						</a>
						<a
							className="icon-btn mail-icon"
							href={mailLink}
							rel="noopener noreferrer"
						>
							<i className={mailIcon} aria-hidden="true" />
						</a>
						<p className="copyright">
							COPYRIGHT ©<span id="currentYear" />
						</p>
						<p>
							View the
							<a
								className="github-link"
								href="https://github.com/Marat-Z-Valiev/Marat-Z-Valiev.github.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github repository
							</a>
							for this project.
						</p>
					</div>
				</div>
				<i
					onClick={this.scrollToTop}
					className="fa fa-arrow-circle-up fa-4x scrollToTop"
					aria-hidden="true"
				/>
			</div>
		);
	}
}

Footer.propTypes = {
	footerLinks: PropTypes.object
};
export default Footer;
