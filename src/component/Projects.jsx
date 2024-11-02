import React from "react";
import "../public/projects.css";
import foodclone from "../src/assets/Images/foodman.png";
import calculator from "../src/assets/Images/calculator.png";
import spotify from "../src/assets/Images/spotify.png";

function ProjectSection() {
  const projects = [
    {
      title: "Food Clone",
      image: foodclone,
      desc: "I Built a static food clone page using HTML, CSS and java script. This clone contains  Navbar,different section and it is Responsive Page. This page suitable for both pc and moblie ",
      link: "https://foodmanapp.netlify.app",
      glink:'https://github.com/Sanketh159/food-page.git'
    },
    {
      title: "Calculator",
      image: calculator,
      desc: "I created Simple calculator which perfoms Arithmatic operation.",
      link: "https://harmonious-praline-557791.netlify.app/",
      glink:'https://github.com/Sanketh159/codsoft.calcualator.git'
    },
    {
      title: "Spotify Clone",
      image: spotify,
      desc: "I created spotify's Home page using HTML and CSS ",
      link: "https://sparkly-alfajores-188b55.netlify.app/",
      glink: "https://github.com/Sanketh159/spotify-clone.git"
    },
  ];

  return (
    <section className="wrapper" id="wrapper1">
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div id="flex">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
      <div
        id="Certificate1"
        style={{ position: "absolute", bottom: "70px" }}
      ></div>
    </section>
  );
}

function Project({ project }) {
  return (
    <div className="project">
      <div className="project-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
      <div className="hover">
        <button><a target="_blank" href={project.link} >Live</a></button>
        <button><a target="_blank" href={project.glink} >Git Hub</a></button>
      </div>
    </div>
  );
}

export default ProjectSection;
