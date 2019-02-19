import React from "react";
import {shallow} from "enzyme";

import MobileMenu from "../../MobileMenu";

const component = shallow(<MobileMenu />);

describe("MobileMenu", () => {
	it("should render correctly", () => {
		expect(component).toMatchSnapshot();
	});
});
