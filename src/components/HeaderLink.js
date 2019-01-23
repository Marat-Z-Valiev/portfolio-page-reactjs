import React from "react";
import {Link} from "react-scroll";
class HeaderLink extends React.Component {
	render() {
		return (
			<li className="menu-list-item">
				<Link
					activeClass="active"
					to={this.props.link}
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
				>
					{this.props.label}
				</Link>
			</li>
		);
	}
}

export default HeaderLink;
