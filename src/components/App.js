import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import footerLinks from "../footerLinks";
class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Banner />
				<About />
				<Projects />
				<Footer footerLinks={footerLinks} />
			</div>
		);
	}
}

export default App;
