import React from "react";
import PropTypes from "prop-types";
import HeaderLink from "./HeaderLink";
import headerLinks from "../headerLinks";
import "../css/MobileMenu/mobileMenu.css";

class MobileMenu extends React.Component {
	closeMenu = () => {
		document.querySelector(".hamburger-button").click();
	};

	render() {
		const openClass = this.props.isMobileMenuVisible ? "open" : "";
		return (
			<nav className={`mobile-menu ${openClass}`}>
				<ul className="nav-list-mobile">
					{headerLinks.map((menuItem, index) => (
						<HeaderLink
							key={index}
							link={menuItem.link}
							label={menuItem.label}
							closeMenu={this.closeMenu}
						/>
					))}
				</ul>
			</nav>
		);
	}
}

MobileMenu.propTypes = {
	visible: PropTypes.bool
};

export default MobileMenu;
