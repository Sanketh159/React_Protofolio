import React from "react";
import "../public/certificate.css";
import reactAndJs from '../assets/certificate/reactandjs.jpg';
import aws from '../assets/certificate/aws.jpg';
import problemSolving from '../assets/certificate/problem.png';
import sql from '../assets/certificate/sql(Basic).png';
// Ensure to link your CSS file

function CertificateSection() {
  const certificates = [
  {
    title: "React and JS",
    image: reactAndJs,
    link: "https://drive.google.com/file/d/1iKZIdlXAiYXLZ5MeZnPz1oo1mOYn5QHQ/view?usp=drive_link",
  },
  {
    title: "AWS for React",
    image: aws,
    link: "https://drive.google.com/file/d/1ovx6r7Cglb36IZcVngKK2ELgyqd0DORB/view?usp=drive_link",
  },
  {
    title: "Problem Solving (Basic)",
    image: problemSolving,
    link: "https://drive.google.com/file/d/17uiWtVtvdhF7nraQRnv81Krgyl044lrE/view?usp=drive_link",
  },
  {
    title: "SQL (Basic)",
    image: sql,
    link: "https://drive.google.com/file/d/1haxSdqWKpp6LbYm8gYTgGRuxQovi__C6/view?usp=drive_link",
  },
];


  return (
    <section id="wrapper">
      <div className="heading">
        <h1>Certificate</h1>
      </div>

      <div id="Certificates">
        {certificates.map((certificate, index) => (
          <div className="Certificate" key={index}>
            <div className="image">
              <img src={certificate.image} alt={certificate.title} />
              <div className="veiwButton">
                <button className="viewbtn">
                  <a
                    href={certificate.link}
                    target="_blank"
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
            <p>{certificate.title}</p>
          </div>
        ))}
      </div>
      <div
        id="Resume"
        style={{ position: "absolute", bottom: "700px" }}
      ></div>
    </section>
  );
}

export default CertificateSection;
