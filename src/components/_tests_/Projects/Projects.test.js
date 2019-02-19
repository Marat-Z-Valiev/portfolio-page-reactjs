import React from "react";
import {shallow} from "enzyme";

import Projects from "../../Projects";

const component = shallow(<Projects />);

describe("Projects", () => {
	it("should render correctly", () => {
		expect(component).toMatchSnapshot();
	});
});
