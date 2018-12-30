import React, {Component} from "react";
import Header from "./Header";
import "../css/App.css";

class App extends Component {
	render() {
		const links = [
			{label: "Home", link: "#home"},
			{label: "About", link: "#about"},
			{label: "Projects", link: "#projects"},
			{label: "Contact", link: "#contact"}
		];
		return <Header links={links} />;
	}
}

export default App;
