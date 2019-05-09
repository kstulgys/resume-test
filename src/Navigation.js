import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";

export default function Navigation() {
  const [open, toggle] = useState(false);
  const [active, setActive] = useState("#About");

  // useEffect(() => {
  //   document.querySelector('[ href="#Projects"]').click()
  // }, [])

  return (
    <Navbar class="sticky-top" type="dark" theme="secondary" expand="md">
      <NavbarBrand href="#About">
        <h2 class="p-0 m-0 text-warning font-weight-bold">#imkarolis</h2>
      </NavbarBrand>
      <NavbarToggler onClick={() => toggle(!open)} />

      <Collapse open={open} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink
              name="#About"
              active={active === "#About"}
              href="#About"
              onClick={e => setActive(e.target.name)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              name="#Experience"
              active={active === "#Experience"}
              href="#Experience"
              onClick={e => setActive(e.target.name)}
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              name="#Education"
              active={active === "#Education"}
              href="#Education"
              onClick={e => setActive(e.target.name)}
            >
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              name="#Skills"
              active={active === "#Skills"}
              href="#Skills"
              onClick={e => setActive(e.target.name)}
            >
              Skills
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              name="#Projects"
              active={active === "#Projects"}
              href="#Projects"
              onClick={e => setActive(e.target.name)}
            >
              Projects
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              name="#Awards"
              active={active === "#Awards"}
              href="#Awards"
              onClick={e => setActive(e.target.name)}
            >
              Awards
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
