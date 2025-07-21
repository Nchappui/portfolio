import React from 'react';
import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="name">
          <p>NOLAN</p>
        </div>
        <div className="name">
          <p>CHAPPUIS</p>
        </div>
        <div className="job-title">
          <span>Software Engineer</span>
          <span className="dot">●</span>
          <span>Full Stack</span>
          <span className="dot">●</span>
          <span>App Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
