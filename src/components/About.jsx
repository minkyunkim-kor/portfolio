import React from 'react';
import { data } from '../data';

const About = () => {
  return (
    <section className="section about">
      <h2 className="section-title">About Me</h2>
      <p>{data.about.philosophy}</p>
      <p>{data.about.summary}</p>
    </section>
  );
};

export default About;
