import React from "react";
import PropTypes from "prop-types";
import HeaderLink from "./HeaderLink";
import headerLinks from "../headerLinks";
import "../css/Header/header.css";

class Header extends React.Component {
	constructor(props) {
		super(props);
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

	handleScroll = () => {
		if (window.pageYOffset >= this.nav.offsetTop) {
			document.getElementById("root").style.marginTop = `${
				document.querySelector(".navbar").offsetHeight
			}px`;
			this.setState({
				isSticky: true
			});
		} else {
			document.getElementById("root").style.marginTop = 0;
			this.setState({
				isSticky: false
			});
		}
	};

	render() {
		const stickyClass = this.state.isSticky ? "sticky" : "";

		return (
			<nav
				className={`navbar ${stickyClass}`}
				ref={elem => {
					this.nav = elem;
				}}
			>
				<h1>Marat Valiev</h1>
				<button
					className="hamburger-button"
					onClick={this.props.toggleMobileMenu}
				>
					<i className="fa fa-bars fa-3x" />
				</button>
				<ul className="nav-list">
					{headerLinks.map((menuItem, index) => (
						<HeaderLink
							key={index}
							link={menuItem.link}
							label={menuItem.label}
						/>
					))}
				</ul>
			</nav>
		);
	}
}

Header.propTypes = {
	toggleMobileMenu: PropTypes.func
};

export default Header;
