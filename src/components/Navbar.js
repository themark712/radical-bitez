import React, { useState } from 'react';
import '../styles/navbar.css';
//import '../scripts/script.js';

const Navbar = () => {
  const [click, setClick] = useState(false);

  // handleClick toggles click state
  const handleClick = () => {setClick(!click);};

  return (
    <div className="container">
      <nav>
        <div className="logo-wrap">
          <h2>Radical Bitez</h2>
        </div>
        <div id="mobile-toggle-btn" onClick={handleClick}>
          <div className="toggle-btn-line"></div>
          <div className="toggle-btn-line"></div>
          <div className="toggle-btn-line"></div>
        </div>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categories">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/recipes">Recipes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}



export default Navbar;