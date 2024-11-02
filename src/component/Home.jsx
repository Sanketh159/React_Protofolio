import React from 'react';
import '../public/home.css'; 
import image from "../src/assets/images/sanketh.jpg"

function Header() {
  return (
    <header className="wrapper" id="Home" style={{minHeight:'100vh'}}>
      <div id="about_me">
        <div id="my-intro">
          <div id="me">
            <h2 className="my_name">My name is <span>Sanketh Nayak</span></h2>
            <h3>I am a Fresher</h3>
          </div>
          <p>
            Welcome to my portfolio! I'm Sanketh Nayak, aspiring for a challenging and growth-oriented career where I can
            use my knowledge, develop skills, and be part of a team that dynamically works towards the growth of the
            organization.
          </p>
        </div>
        <div id="social">
          <a href="https://www.linkedin.com/in/sanketh-s-nayak-395aaa283" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href="https://github.com/Sanketh159" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a href="https://www.instagram.com/sanketh_159_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>
        </div>
      </div>
      <div id="img">
        <img src={image} alt="Sanketh Nayak"></img>
      </div>
      <div id="Project" style={{ position: "absolute", bottom: "70px" }}></div>
    </header>
  );
}

export default Header;
