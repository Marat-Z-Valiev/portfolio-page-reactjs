import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import footerLinks from "../footerLinks";
class App extends React.Component {
	render() {
		const links = [
			{label: "Home", link: "#home"},
			{label: "About", link: "#about"},
			{label: "Projects", link: "#projects"},
			{label: "Contact", link: "#contact"}
		];
		return (
			<div>
				<Header links={links} />
				<Banner />
				<About />
				<Projects />
				<Footer footerLinks={footerLinks} />
			</div>
		);
	}
}

export default App;
