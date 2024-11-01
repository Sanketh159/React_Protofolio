import React, { useRef } from 'react';
import '../public/navbar.css';

function Navbar() {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);

  const handleMenuClick = () => {
    navLinksRef.current.classList.toggle("open");

    const isOpen = navLinksRef.current.classList.contains("open");
    menuBtnRef.current.className = isOpen ? "ri-close-line" : "ri-menu-line";
  };
  const closeMenu = () => {
    navLinksRef.current.classList.remove("open");
    menuBtnRef.current.className = "ri-menu-line";
  };

  return (
    <nav>
      <div className="logo">
        <h2>Sanketh Nayak</h2>
      </div>
      <label>
        <i className="ri-menu-line" id="menu_btn" ref={menuBtnRef} onClick={handleMenuClick}></i>
      </label>
      <input type="checkbox" id='check' />
      <ul className="nav_links" id="navLinks" ref={navLinksRef} onClick={closeMenu}>
        <li><a href="#Home" onClick={closeMenu}>Home</a></li>
        <li><a href="#Project" onClick={closeMenu}>Project</a></li>
        <li><a href="#Certificate1" onClick={closeMenu}>Certificate</a></li>
        <li><a href="#Resume" onClick={closeMenu}>Resume</a></li>
        <li><a href="#Contact" onClick={closeMenu}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
