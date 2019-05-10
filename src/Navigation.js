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
              <span class="font-weight-bold">About</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              name="#Experience"
              active={active === "#Experience"}
              href="#Experience"
              onClick={e => setActive(e.target.name)}
            >
              <span class="font-weight-bold">Experience</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              name="#Education"
              active={active === "#Education"}
              href="#Education"
              onClick={e => setActive(e.target.name)}
            >
              <span class="font-weight-bold">Education</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              name="#Skills"
              active={active === "#Skills"}
              href="#Skills"
              onClick={e => setActive(e.target.name)}
            >
              <span class="font-weight-bold">Skills</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              name="#Projects"
              active={active === "#Projects"}
              href="#Projects"
              onClick={e => setActive(e.target.name)}
            >
              <span class="font-weight-bold">Projects</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              name="#Awards"
              active={active === "#Awards"}
              href="#Awards"
              onClick={e => setActive(e.target.name)}
            >
              <span class="font-weight-bold">Awards</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              name="#Interests"
              active={active === "#Interests"}
              href="#Interests"
              onClick={e => setActive(e.target.name)}
            >
              <span class="font-weight-bold">Interests</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
