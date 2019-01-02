import React from "react";
import PropTypes from "prop-types";
import "../css/banner.css";

const Banner = props => (
	<div className="jumbotron top-section" id="home">
		<div className="welcome">
			<h2>{props.bannerText}</h2>
			<i className="fa fa-code" aria-hidden="true" />
		</div>
	</div>
);

Banner.propTypes = {
	bannerText: PropTypes.string
};

export default Banner;
