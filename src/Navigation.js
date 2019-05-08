import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar class="sticky-top" type="dark" theme="secondary" expand="md">
        <NavbarBrand href="#" className="text-warning">
          imkarolis
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="#About">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Experience">Experience</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#Education">Education</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#Skills">Skills</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#Projects">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#Awards">Awards</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
