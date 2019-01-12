import React from "react";
import "../css/button.css";

class Button extends React.Component {
	handleClick(props) {
		window.open(props, "_blank").opener = null;
	}
	render() {
		return (
			<button
				className="button"
				onClick={() => this.handleClick(this.props.link)}
			>
				<i className={this.props.icon} aria-hidden="true" />
				<span>{this.props.label}</span>
			</button>
		);
	}
}

export default Button;
