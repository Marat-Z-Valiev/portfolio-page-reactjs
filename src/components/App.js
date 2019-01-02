import React, {Component} from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";

class App extends Component {
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
				<section>
					<Banner bannerText="Portfolio" />
				</section>
				<section>
					<About about="About" />
				</section>
			</div>
		);
	}
}

export default App;
