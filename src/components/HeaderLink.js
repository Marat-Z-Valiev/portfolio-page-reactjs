import React from "react";

const HeaderLink = props => (
	<a href={this.props.link.link}>
		<li className={`menu-list-item ${this.props.activeLink}`}>
			{this.props.link.label}
		</li>
	</a>
);

export default HeaderLink;
