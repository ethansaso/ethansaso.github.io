import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ethan from '../../assets/img/ethansaso.jpeg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img className="sidebar-image" src={Ethan} alt="Logo" />
      </div>
      <Nav vertical>
      <NavItem className="sidebar-item">
          <NavLink className="linkedin" href="https://www.linkedin.com/in/ethansaso/">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" fixedWidth />
            <span>LinkedIn</span>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-item">
          <NavLink className="github" href="https://github.com/ethansaso">
            <FontAwesomeIcon icon="fa-brands fa-github" fixedWidth />
            <span>Github</span>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-item">
          <NavLink className="inaturalist" href="https://www.inaturalist.org/people/ethansaso">
            <FontAwesomeIcon icon="fa-solid fa-dove" fixedWidth />
            <span>iNaturalist</span>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-item">
          <NavLink className="inaturalist" href="https://rateyourmusic.com/~applevac">
            <FontAwesomeIcon icon="fa-solid fa-earth-oceania" fixedWidth />
            <span>RateYourMusic</span>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-item">
          <NavLink className="email" href="mailto:ethansaso@berkeley.edu">
            <FontAwesomeIcon icon="fa-solid fa-envelope" fixedWidth />
            <span>Email</span>
          </NavLink>
        </NavItem>
      </Nav>
    </aside>
  );
};

export default Sidebar;