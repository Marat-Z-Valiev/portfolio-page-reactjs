import React from "react";
import HeaderLink from "./HeaderLink";
import headerLinks from "../headerLinks";
import "../css/MobileMenu/mobileMenu.css";

class MobileMenu extends React.Component {
	render() {
		const openClass = this.props.visible ? "open" : "";
		return (
			<nav className={`mobile-menu ${openClass}`}>
				<ul className="nav-list-mobile">
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

export default MobileMenu;
