
import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../index.css';

import Logo from '../image/logo_final.png';
import sideManue from '../image/hamburger.svg';


const Layout = () => {
  return (
    <>
      <nav className="container">

<img src={Logo} alt="Logo" title="Logo"/>
  
        <ul className="check">
          <li>
            <Link to="/">Home +</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Service">SERVICE</Link>
          </li>
          <li>
            <Link to="/Portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/Pages">PAGES +</Link>
          </li>
        </ul>

        <img src={sideManue} alt="Desktop Hamburger" title="Desktop Hamburger"/>

      </nav>
      

      

      <Outlet />
    </>
  )
};

export default Layout;