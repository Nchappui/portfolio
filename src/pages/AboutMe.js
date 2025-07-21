import TimeLine from "../components/TimeLine";
import "./AboutMe.css";
import Intro from "../components/Intro";
import Skills from "../components/Skills";

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
              Hi I am <span className="highlight">Nolan</span>
            </h1>
            <p className="description">
                I am a 25 years old Swiss developer based near Lausanne.<br /><br />

                I enjoy designing smooth user experiences and bringing ideas to life through clean, functional code.<br /><br />

                I work across the full stack to create web apps, mobile experiences, games, and immersive VR projects. I enjoy exploring technologies that push boundaries — from frontend design to backend logic, and everything in between.
            </p>
          </div>
        </div>
        </div>
      </section>
            <section id="skills-section">
        <div className="skills-container">
          <Skills />
        </div>
        </section>
      <section id="timeline-section">
        <div className="timeline-container">
          <TimeLine />
        </div>
        </section>
    </div>
  );
};

export default AboutMe;
