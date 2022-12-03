import React from "react";
import ProjectTile from "../../components/ProjectTile";
import projectsData from "../../projectsData";
export default function Projects() {
  return (
    <main>
      <h1 className="projects--heading">What i've created.</h1>
      <p className="projects--text">
        What started as a simple "Hello World!" script in early 2021 to the many
        projects I have since devoted my hard work to. Web Development has
        become more than a hobby but a passion that stems from my love to
        engineer and build out my ideas.{" "}
      </p>
      <ul className="project-list">
        {projectsData.map((project) => (
          <ProjectTile
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            ghLink={project.ghLink}
            siteLink={project.siteLink}
            tech={project.tech}
          />
        ))}
      </ul>
    </main>
  );
}
