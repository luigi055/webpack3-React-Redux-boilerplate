import React from 'react';
import {
  NavLink,
  Link
} from 'react-router-dom';

const Header = props => ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Boilerplate</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact activeClassName="active" > Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/features" className="nav-link" activeClassName="active" > Features </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
