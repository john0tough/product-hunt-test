import './Navbar.scss';

import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container content">
      <a className="navbar-logo" href="/">
        <div className="logo">P</div>
      </a>
      <div className="form">
        <form action="">
          <input type="text" className="search" />
        </form>
      </div>
      <nav className="navigation">
        <ul className="menu menu-horizontal">
          <li>
            <a className="menu-link" href="/">
              item
            </a>
          </li>
          <li>
            <a className="menu-link" href="/">
              item2
            </a>
          </li>
          <li>
            <a className="menu-link" href="/">
              item3
            </a>
          </li>
          <li>
            <a href="/" className="menu-link">
              <span className="icon">
                <svg width="20" height="4" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 4A2 2 0 1 0 2.001.001 2 2 0 0 0 2 4zm8 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 10 4zm8 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 18 4z"
                    fill="#BBB"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="actions">
        <div className="loginButtons">
          <a href="/login" className="button button-default">
            <span className="buttonContent">Log In</span>
          </a>
          <a href="/login" className="button button-orange">
            <span className="buttonContent">Log In</span>
          </a>
        </div>
      </nav>
    </div>
    {/* <ul className="navbar-container content">
      <li>
       
      </li>
      <li>item2</li>
      <li>item3</li>
    </ul> */}
  </nav>
);

export default Navbar;
