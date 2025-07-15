import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiHomeModern,
  HiUserGroup,
  HiWrenchScrewdriver,
  HiCubeTransparent,
  HiShieldCheck,
  HiOutlineEnvelope,
} from 'react-icons/hi2';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
     
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>
          <div className="logo-placeholder">
            <span>🚀 BrandNow</span>
          </div>
        </NavLink>
      </div>

      <div
        className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      
      <div className={`navbar-nav ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          <HiHomeModern /> Home
        </NavLink>
        <NavLink to="/aboutus" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          <HiUserGroup /> About Us
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          <HiWrenchScrewdriver /> Services
        </NavLink>
        <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          <HiCubeTransparent /> Products
        </NavLink>
        <NavLink to="/whychooseus" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          <HiShieldCheck /> Why Choose Us
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          <HiOutlineEnvelope /> Contact
        </NavLink>
      </div>

      <div className="navbar-social">
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoLogoLinkedin />
      </div>
    </nav>
  );
}
