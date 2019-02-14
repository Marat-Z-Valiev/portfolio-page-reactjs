import React from "react";
import {shallow} from "enzyme";

import Banner from "../../Banner";

describe("Banner", () => {
	it("should render correctly", () => {
		const component = shallow(<Banner />);
		expect(component).toMatchSnapshot();
	});
});
