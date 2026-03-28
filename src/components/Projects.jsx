import React from 'react';
import { data } from '../data';

const Projects = () => {
  return (
    <section className="section projects">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {data.projects.map((proj, index) => (
          <div key={index} className="project-card card">
            <div className="project-header">
              <h3 className="project-title">{proj.name}</h3>
              <span className="project-period">{proj.period}</span>
            </div>
            <div className="project-role">{proj.role}</div>
            <ul className="project-details">
              {proj.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="tech-list" style={{ marginTop: '1rem' }}>
              {proj.techStack.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
