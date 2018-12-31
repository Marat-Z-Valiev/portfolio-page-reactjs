import React from "react";
import "../css/Header.css";

class Header extends React.Component {
	render() {
		const linksMarkup = this.props.links.map((link, index) => {
			return (
				<li className="menu-list-item" key={index}>
					<a href={link.link} />
					{link.label}
				</li>
			);
		});
		return (
			<div className="container">
				<nav className="menu">
					<h1>Marat Valiev</h1>
					<div className="menu-right">
						<ul className="menu-list">{linksMarkup}</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
