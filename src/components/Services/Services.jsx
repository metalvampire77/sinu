// Services.js

import React from "react";
import "../Services/Services.css";
import project1Image from "../../assets/projects/project1.jpg";
import project2Image from "../../assets/projects/project1.jpg";
import project3Image from "../../assets/projects/project1.jpg";

const Services = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      image: project1Image,
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      image: project2Image,
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      image: project3Image,
    },
    {
      title: "Project 4",
      description: "Description for Project 4",
      image: project1Image, // Use the correct image for Project 4
    },
    {
      title: "Project 5",
      description: "Description for Project 5",
      image: project2Image, // Use the correct image for Project 5
    },
    {
      title: "Project 6",
      description: "Description for Project 6",
      image: project3Image, // Use the correct image for Project 6
    },
  ];

  return (
    <div className="services-page">
      <h2 className="projects-heading">Services</h2>
      <div className="services-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
