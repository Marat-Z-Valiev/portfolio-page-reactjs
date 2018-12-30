import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class Header extends React.Component {
	render() {
		const linksMarkup = this.props.links.map((link, index) => {
			return (
				<li className="nav-item active" key={index}>
					<a className="nav-link" href={link.link}>
						{link.label}
					</a>
				</li>
			);
		});
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#brand">Marat Valiev</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						{linksMarkup}
						{/* <NavItem></NavItem> */}
						{/* <NavItem eventKey={2} href="#">
							Link
						</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown> */}
					</Nav>
					{/* <Nav pullRight>
						<NavItem eventKey={1} href="#">
							Link Right
						</NavItem>
						<NavItem eventKey={2} href="#">
							Link Right
						</NavItem>
					</Nav> */}
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
