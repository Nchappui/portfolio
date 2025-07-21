import React, { useEffect, useState } from 'react';
import './Skills.css';

function Skills() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effet plus avancé avec différentes vitesses et directions
  const leftElementTransform = `translateX(-${scrollY * 1}px)`;
  const rightElementTransform = `translateX(${scrollY * 1.4}px)`;
  const centerElementTransform = `translateY(-${scrollY * 1.1}px)`;

  return (
    <div className="skills-container">
      <div 
        className="skills-left"
        style={{ transform: leftElementTransform }}
      >
        <h2>Mes</h2>
      </div>
      
      <div 
        className="skills-center"
        style={{ transform: centerElementTransform }}
      >
        <h1>Compétences</h1>
      </div>
      
      <div 
        className="skills-right"
        style={{ transform: rightElementTransform }}
      >
        <h2>Techniques</h2>
      </div>
    </div>
  );
}

export default Skills