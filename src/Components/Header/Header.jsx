import React from 'react'; 
import './header.css';
// import images from '../../Constants/index.js';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src='https://png.pngtree.com/template/20190816/ourmid/pngtree-q-logo-icon-ready-to-use-image_294104.jpg' alt="logo-image" className="logo-image" />
          Question Bank
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;