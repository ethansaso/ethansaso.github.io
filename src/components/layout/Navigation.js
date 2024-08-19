import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar fixed='top' color="dark" dark expand={"md"} className="navbar-custom">
      <NavbarBrand tag={NavLink} to="/home">Ethan Saso</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/photos">Photography</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default Navigation;