import React from "react";
import "../public/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <h2 id="details"> Contanct Details</h2>
        <div id="contact">
          <i className="phone fa-solid fa-phone" style={{ color: "white" }}></i> +917204356073
          <p style={{ borderleft: "1px solid white", paddingleft: "20px" }}>
            {" "}
            <i className="fa-solid fa-envelope" style={{ color: "blue " }}></i>
            <a
              href="mailto:sankethsnayak159@gmail.com"
              style={{ color: "#fff" }}
            >
              &nbsp;&nbsp;sankethsnayak159@gmail.com
            </a>
          </p>
        </div>
        <div className="social">
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
      </section>
    </>
  );
}

export default Contact;
