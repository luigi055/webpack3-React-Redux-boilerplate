import React from 'react';
import { Link, IndexLink } from 'react-router';

const App = props => {
  return (
    <div className="row">
      <ul className="menu">
        <li>
          <IndexLink to="/" activeClassName="active" >Home</IndexLink>
        </li>
        <li>
          <Link to="/features" activeClassName="active">Features</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
}

export default App;