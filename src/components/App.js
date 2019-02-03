import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import footerLinks from "../footerLinks";
import MobileMenu from "./MobileMenu";
class App extends React.Component {
	state = {
		isMobileMenuVisible: false
	};

	toggleMobileMenu = () => {
		this.setState({
			mobileMenuVisible: !this.state.mobileMenuVisible
		});
	};

	render() {
		return (
			<div>
				<Header toggleMobileMenu={this.toggleMobileMenu} />
				<MobileMenu visible={this.state.mobileMenuVisible} />
				<Banner />
				<About />
				<Projects />
				<Footer footerLinks={footerLinks} />
			</div>
		);
	}
}

export default App;
