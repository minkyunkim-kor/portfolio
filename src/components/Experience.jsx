import React from 'react';
import { data } from '../data';

const Experience = () => {
  return (
    <section className="section experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {data.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="exp-period">{exp.period}</div>
            <h3 className="exp-title">{exp.role}</h3>
            <div className="exp-company">{exp.company}</div>
            <ul className="exp-list">
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
