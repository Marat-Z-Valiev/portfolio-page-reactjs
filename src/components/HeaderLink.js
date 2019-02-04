import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-scroll";
class HeaderLink extends React.Component {
	render() {
		return (
			<li className="nav-list-item">
				<Link
					activeClass="active"
					to={this.props.link}
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
					onClick={this.props.closeMenu}
				>
					{this.props.label}
				</Link>
			</li>
		);
	}
}

HeaderLink.propTypes = {
	label: PropTypes.string
};

export default HeaderLink;
