// Projects.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectData from "./ProjectData";
import "./projects.css";

const CustomArrow = ({ direction, onClick }) => (
  <div className={`custom-arrow custom-arrow-${direction}`} onClick={onClick}>
    {direction === "prev" ? "<" : ">"}
  </div>
);

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set autoplay speed to 0.3 seconds (300 milliseconds)
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {ProjectData.map((project, index) => (
            <div key={index} className="carousel-slide">
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
