import React from 'react';
import { data } from '../data';

const Hero = () => {
  const { greeting, headline, tags, github, linkedin } = data.hero;

  return (
    <section className="hero">
      <h1 className="hero-greeting">{greeting}</h1>
      <h2 className="hero-headline">{headline}</h2>
      <div className="hero-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="hero-links">
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
      </div>
    </section>
  );
};

export default Hero;
