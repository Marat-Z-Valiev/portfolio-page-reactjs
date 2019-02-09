import React from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import footerLinks from "../footerLinks";
class App extends React.Component {
	state = {
		isMobileMenuVisible: false
	};

	toggleMobileMenu = () => {
		this.setState({
			isMobileMenuVisible: !this.state.isMobileMenuVisible
		});
	};

	render() {
		return (
			<div>
				<Header toggleMobileMenu={this.toggleMobileMenu} />
				<MobileMenu
					isMobileMenuVisible={this.state.isMobileMenuVisible}
					closeMenu={this.closeMenu}
				/>
				<Banner />
				<About />
				<Projects />
				<Footer footerLinks={footerLinks} />
			</div>
		);
	}
}

export default App;
