import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Troubleshooting from './components/Troubleshooting';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Troubleshooting />
      <Footer />
    </div>
  );
}

export default App;
