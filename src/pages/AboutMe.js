import "./AboutMe.css";
import Intro from "./Intro";

const AboutMe = () => {
  return (
    <div className="aboutme-page-wrapper">
      <section id="intro-section">
        <Intro />
      </section>
      <section id="about-section" className="about-me">
        <div className="about-container">
        
        <div className="about-header">
          <div className="profile-image">
            <img src="/images/photopro.png" alt="Nolan Chappuis" className="image-placeholder" />
          </div>
          <div className="about-intro">
            <h1>
              Bonjour, je suis <span className="highlight">Nolan</span>
            </h1>
            <h2 className="subtitle">Développeur Full Stack</h2>
            <p className="description">
              Passionné par le développement web et les nouvelles technologies,
              je crée des applications modernes et performantes avec une
              attention particulière à l'expérience utilisateur.
            </p>
          </div>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <h3>🎯 Mon Objectif</h3>
            <p>
              Créer des solutions innovantes qui résolvent des problèmes réels
              tout en offrant une expérience utilisateur exceptionnelle.
            </p>
          </div>

          <div className="detail-card">
            <h3>💡 Ma Philosophie</h3>
            <p>
              Code propre, architecture solide et amélioration continue. J'aime
              apprendre de nouvelles technologies et partager mes connaissances.
            </p>
          </div>

          <div className="detail-card">
            <h3>🚀 Mes Intérêts</h3>
            <p>
              React, Node.js, TypeScript, cloud computing, et tout ce qui touche
              à l'innovation technologique et au développement durable.
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
