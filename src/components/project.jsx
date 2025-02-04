import React from "react";
 import "./Portfolio.css";; // Add custom styles for your portfolio section

const projects = [
  {
    title: "Project 1",
    description: "A short description of Project 1.",
    link: "https://example.com/project1",
    image: "https://via.placeholder.com/150", // Replace with your project image
  },
  {
    title: "Project 2",
    description: "A short description of Project 2.",
    link: "https://example.com/project2",
    image: "https://via.placeholder.com/150", // Replace with your project image
  },
  {
    title: "Project 3",
    description: "A short description of Project 3.",
    link: "https://example.com/project3",
    image: "https://via.placeholder.com/150", // Replace with your project image
  },
  // Add more projects here...
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
