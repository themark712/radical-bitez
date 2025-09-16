import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import '../styles/navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  // handleClick toggles click state
  const handleClick = () => setClick(!click);

  return (
    <header className="header">
      <div className="logo">
        <h2>Radical Bitez</h2>
        {/* <img src="/img/logo.png" alt="logo" /> */}
      </div>
      <div className="toggle" onClick={handleClick}>
        <span>{click ? <BiX /> : <BiMenu />}</span>
      </div>
      <ul className={click ? "menu active" : "menu"}>
        <li className="menu-items"><a href="/">Home</a></li>
        <li className="menu-items"><a href="/categories">Categories</a></li>
        <li className="menu-items"><a href="/recipes">Recipes</a></li>
        <li className="menu-items"><a href="/about">About</a></li>
        <li className="menu-items"><a href="/contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Navbar;