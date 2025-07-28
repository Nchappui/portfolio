import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-data">
        <div className="socials">
          <p> SOCIAL</p>
          <div className="images">
            <a
              href="https://github.com/Nchappui"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
            >
              <img
                src="/images/github.svg"
                alt="GitHub"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nolan-chappuis/"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
            >
              <img
                src="/images/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="CV">
          <p>CURRICULUM VITAE</p>
          <a
            href="/documents/CV_Nolan_Eng.pdf"
            download="CV_Nolan_Chappuis.pdf"
            className="clickable-CV"
          >
            <img
              src="/images/cv.svg"
              alt="Download CV"
              className="social-icon"
            />
          </a>
        </div>
      </div>
      <div className="footer-footer">
        <p>© 2025 Nolan Chappuis. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
