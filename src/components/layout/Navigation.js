import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <Navbar fixed='top' color="dark" dark expand="md" className="navbar-custom">
    <NavbarBrand tag={NavLink} to="/home">Ethan Saso</NavbarBrand>
    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink className="nav-link" to="/projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/photos">Photography</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;