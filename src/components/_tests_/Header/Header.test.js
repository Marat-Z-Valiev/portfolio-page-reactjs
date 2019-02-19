import React from "react";
import {shallow} from "enzyme";

import Header from "../../Header";

const component = shallow(<Header />);

describe("Header", () => {
	it("should render correctly", () => {
		expect(component).toMatchSnapshot();
	});
	it("isSticky state should be false", () => {
		expect(component.state().isSticky).toBe(false);
	});
});
