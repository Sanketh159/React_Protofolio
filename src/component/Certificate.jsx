import React from "react";
import "../public/certificate.css"; // Ensure to link your CSS file

function CertificateSection() {
  const certificates = [
    {
      title: "React and JS",
      image: "../src/assets/React and js.jpg",
      link: "https://drive.google.com/file/d/1iKZIdlXAiYXLZ5MeZnPz1oo1mOYn5QHQ/view?usp=drive_link",
    },
    {
      title: "AWS for React",
      image: "../src/assets/AWS.jpg",
      link: "https://drive.google.com/file/d/1ovx6r7Cglb36IZcVngKK2ELgyqd0DORB/view?usp=drive_link",
    },
    {
      title: "Problem Solving (Basic)",
      image: "../src/assets/certificate/2024-08-21-20-00-09.png",
      link: "https://drive.google.com/file/d/17uiWtVtvdhF7nraQRnv81Krgyl044lrE/view?usp=drive_link",
    },
    {
      title: "SQL (Basic)",
      image: "../src/assets/certificate/Sql(Basic).png",
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
