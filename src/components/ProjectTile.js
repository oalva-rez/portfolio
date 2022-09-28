import React from "react";
import { Link } from "react-router-dom";

export default function ProjectTile({
  title,
  description,
  image,
  ghLink,
  siteLink,
  tech,
}) {
  return (
    <li className="project-tile">
      <div className="project-tile--image">
        <a href={siteLink} target="_blank" rel="noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="project-tile--text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tile--tech">
          {tech.map((tech, index) => (
            <span key={index}>
              <img src={tech} alt="tech" className="tech-logo" />
            </span>
          ))}
        </div>
        <div className="project-tile--links">
          <a href={ghLink} target="_blank" rel="noreferrer">
            View Code
          </a>{" "}
          |{" "}
          <a href={siteLink} target="_blank" rel="noreferrer">
            View Site
          </a>
        </div>
      </div>
    </li>
  );
}
