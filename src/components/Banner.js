import React from "react";
import PropTypes from "prop-types";
import "../css/Banner/banner.css";

const Banner = props => (
	<section>
		<div className="jumbotron top-section" id="home">
			<div className="welcome">
				<h2>Portfolio</h2>
				<i className="fa fa-code" aria-hidden="true" />
			</div>
		</div>
	</section>
);

Banner.propTypes = {
	bannerText: PropTypes.string
};

export default Banner;
