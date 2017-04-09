import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <ul className="menu">
    <li>
      <NavLink to="/" exact activeClassName="active" >Home</NavLink>
    </li>
    <li>
      <NavLink to="/features" activeClassName="active">Features</NavLink>
    </li>
  </ul>
);

export default Header;
