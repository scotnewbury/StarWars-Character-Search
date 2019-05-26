import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to = "/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to = "/projects" className="nav-link">My Projects</Link>
              </li>
              {/* <li className="nav-item">
                <Link to = "/contactme" className="nav-link">Contact Me </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;