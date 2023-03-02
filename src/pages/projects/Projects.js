import React from "react";
import ProjectTile from "../../components/ProjectTile";
import projectsData from "../../projectsData";
import { Helmet } from "react-helmet";
export default function Projects() {
  return (
    <main>
      <Helmet>
        <title>Ozkar Alvarez | Projects</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects and see the diversity of my skills and experience. 
          On my projects page, you'll find a range of websites and web applications that I've built, 
          showcasing my abilities in design, development, and user experience. From responsive landing pages to 
          complex web applications, you'll find a variety of different projects that demonstrate my expertise in 
          web development. Take a look and feel free to contact me if you have any questions about my work or for 
          any collaboration."
        />
      </Helmet>
      <h1 className="projects--heading">What i've created.</h1>
      <p className="projects--text">
        Web Development has become more than a hobby but a passion that stems
        from my love to engineer and build out my ideas. Here is some proof to
        my craft.
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
            isWIP={project.isWIP}
          />
        ))}
      </ul>
    </main>
  );
}
