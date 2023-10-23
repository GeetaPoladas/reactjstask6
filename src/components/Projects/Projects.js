import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Home Automation and Security', description: 'Created Raspberry Pi system that helps us to keep our important things very safe by giving an alarm sound at low cost.' },
  { id: 2, title: 'Portfolio using HTML, CSS and JavaScript in VS Code', description: 'With this project, I got more experience at Frontend development.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I have worked with..</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
  );
};
export default Projects;