import React from "react";
import {mount} from "enzyme";

import Footer from "../../Footer";

const component = mount(
	<Footer
		footerLinks={{
			linkedInLink: "https://ca.linkedin.com/in/marat-valiev-89352390",
			linkedInIcon: "fa fa-linkedin",
			githubLink: "https://github.com/Marat-Z-Valiev",
			githubIcon: "fa fa-github",
			mailLink: "mailto:mz.valiev@gmail.com",
			mailIcon: "fa fa-envelope"
		}}
	/>
);

describe("Footer", () => {
	it("should render correctly", () => {
		expect(component).toMatchSnapshot();
	});

	it("scrollToTop button should call function when clicked", () => {
		const spy = jest.spyOn(component.instance(), "scrollToTop");
		component.instance().forceUpdate();
		component.find(".scrollToTop").simulate("click");
		expect(spy).toHaveBeenCalled();
	});
});
