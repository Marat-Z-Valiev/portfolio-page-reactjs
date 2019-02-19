import React from "react";
import {shallow} from "enzyme";

import ProjectItem from "../../ProjectItem";

const component = shallow(
	<ProjectItem
		projects={{
			name: "Test",
			description: "Test",
			tools: "Test",
			image: "Test",
			websiteLink: "Test",
			globeIcon: "Test",
			githubLink: "Test",
			githubIcon: "Test"
		}}
	/>
);

describe("ProjectItem", () => {
	it("should render correctly", () => {
		expect(component).toMatchSnapshot();
	});
});
