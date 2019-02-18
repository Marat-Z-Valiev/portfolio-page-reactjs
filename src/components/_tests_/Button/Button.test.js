import React from "react";
import {shallow} from "enzyme";
import sinon from "sinon";
import Button from "../../Button";

describe("Button", () => {
	it("should render correctly", () => {
		const component = shallow(<Button />);
		expect(component).toMatchSnapshot();
	});

	it("should have a click function", () => {
		window.open = jest.fn();
		const component = shallow(<Button />);
		component.simulate("click");
		expect(window.open).toHaveBeenCalled();
	});
});
