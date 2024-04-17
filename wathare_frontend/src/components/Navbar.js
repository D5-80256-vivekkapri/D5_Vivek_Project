
import React from 'react';
import { Link } from 'react-router-dom';
import StatusComponent from '../pages/StatusComponent';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Status</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sample-data">Sample Data Generator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">Weather</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
