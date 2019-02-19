import React from "react";
import {shallow} from "enzyme";

import HeaderLink from "../../HeaderLink";

const component = shallow(<HeaderLink />);

describe("Header", () => {
	it("should render correctly", () => {
		expect(component).toMatchSnapshot();
	});
});
