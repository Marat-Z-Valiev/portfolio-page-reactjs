import React from "react";
import PropTypes from "prop-types";
import "../css/Header/header.css";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			isSticky: false
		};
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll() {
		if (window.pageYOffset > this.nav.offsetTop) {
			this.setState({
				isSticky: true
			});
		} else {
			this.setState({
				isSticky: false
			});
		}
	}

	render() {
		const stickyClass = this.state.isSticky ? "sticky" : "";
		const linksMarkup = this.props.links.map((link, index) => {
			return (
				<a href={link.link} key={index}>
					<li className="menu-list-item">{link.label}</li>
				</a>
			);
		});
		return (
			<div className={`navbar-container ${stickyClass}`}>
				<nav
					className="menu"
					ref={elem => {
						this.nav = elem;
					}}
				>
					<h1>Marat Valiev</h1>
					<div className="menu-right">
						<ul className="menu-list">{linksMarkup}</ul>
					</div>
				</nav>
			</div>
		);
	}
}

Header.propTypes = {
	linksMarkup: PropTypes.array
};

export default Header;
