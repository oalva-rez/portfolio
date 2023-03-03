import React from "react";

export default function ProjectTile({
  title,
  description,
  image,
  ghLink,
  siteLink,
  tech,
  isWIP,
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
        {isWIP && <h2 className="project-tile--wip">Work In Progress</h2>}
        <p>{description}</p>
        <div className="project-tile--tech">
          {tech.map((tech, index) => {
            return (
              <span key={index}>
                <img
                  src={tech.image}
                  alt="tech"
                  className="tech-logo"
                  title={tech.name}
                />
              </span>
            );
          })}
        </div>
        <div className="project-tile--links">
          <a href={ghLink} target="_blank" rel="noreferrer">
            View Code
          </a>{" "}
          {siteLink !== "" ? (
            <>
              |{" "}
              <a href={siteLink} target="_blank" rel="noreferrer">
                View Site
              </a>
            </>
          ) : null}
        </div>
      </div>
    </li>
  );
}
