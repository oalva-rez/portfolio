import React from "react";
import ProjectTile from "../../components/ProjectTile";
import projectsData from "../../projectsData";
export default function Projects() {
  return (
    <main>
      <h1 className="projects--heading">What i've done.</h1>
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
