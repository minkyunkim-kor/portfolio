import React from 'react';
import { data } from '../data';

const TechStack = () => {
  const { techStack } = data;

  const renderCategory = (title, items) => (
    <div className="tech-category card">
      <h3 className="tech-category-title">{title}</h3>
      <ul className="tech-list">
        {items.map((item, index) => (
          <li key={index} className="tech-item">{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="section tech-stack">
      <h2 className="section-title">Tech Stack</h2>
      <div className="tech-grid">
        {renderCategory("Languages", techStack.languages)}
        {renderCategory("Frameworks", techStack.frameworks)}
        {renderCategory("Databases", techStack.databases)}
        {renderCategory("Data Engineering", techStack.dataEngineering)}
        {renderCategory("Infrastructure", techStack.infrastructure)}
        {renderCategory("Messaging & Server", techStack.messaging)}
        {renderCategory("Tests", techStack.tests)}
        {renderCategory("Tools", techStack.tools)}
      </div>
    </section>
  );
};

export default TechStack;
