import React, { useEffect, useState } from 'react';
import "./Intro.css";

function Intro() {
  const [scrollY, setScrollY] = useState(0);
  
  // CHANGEZ CE NUMÉRO POUR TESTER DIFFÉRENTS STYLES (1-5)
  // style-1: Gradient animé avec glow
  // style-2: Néon cyberpunk
  // style-3: Effet 3D avec ombres
  // style-4: Hologramme avec scan lines
  // style-5: Glass/frosted effect
  // Laissez vide pour le style par défaut
  const currentStyle = "style-3"; // Changez ici pour tester!

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Ajouter l'écouteur d'événement scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculer la translation basée sur le scroll
  // Plus on scroll, plus les éléments s'éloignent
  // Limiter l'effet aux premiers 100vh de scroll pour éviter que ça continue indéfiniment
  const maxScroll = window.innerHeight; // 100vh
  const limitedScroll = Math.min(scrollY, maxScroll);
  
  const nameTransform = `translateX(-${limitedScroll * 1.8}px)`;
  const titleTransform = `translateX(${limitedScroll * 1.8}px)`;
  
  // Calculer l'opacité pour faire disparaître les éléments progressivement
  const opacity = Math.max(0, 1 - (scrollY / maxScroll));

  return (
    <section className="intro">
      <div className="intro-container">
        <div 
          className={`name ${currentStyle}`}
          style={{ 
            transform: nameTransform,
            opacity: opacity
          }}
        >
          <p>Nolan Chappuis</p>
        </div>
        <div 
          className={`job-title ${currentStyle}`}
          style={{ 
            transform: titleTransform,
            opacity: opacity
          }}
        >
          <p>FullStack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
