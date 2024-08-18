import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../css/Navbar.scss';

const Navigation = () => (
  <Navbar fixed='top' color="dark" dark expand="md" className="navbar-custom">
    <NavbarBrand href="/">Ethan Saso</NavbarBrand>
    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink href="/projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/photos">Photography</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;