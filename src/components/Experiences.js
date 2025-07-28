import React from "react";
import "./Experiences.css";

const Experiences = () => {
  const experience = [
    {
      startYear: "2025",
      endYear: "2025",
      title: "Developer Internship",
      company: "Lab4Tech",
      desc: "Currently working on full-stack web applications using modern technologies. Contributing to innovative projects in a dynamic startup environment.",
    },

    {
      startYear: "2024",
      endYear: "2025",
      title: "Military Service",
      company: "Swiss Armed Forces",
      desc: "Completed mandatory military service while developing leadership and teamwork skills. Maintained technical skills through personal projects.",
    },
    {
      startYear: "2023",
      endYear: "2024",
      title: "VR Software Developer Intern",
      company: "Touring Club Suisse",
      desc: "Developed immersive VR experiences for tourism applications using Unity and C#. Worked on user interface optimization and performance improvements.",
    },
    {
      startYear: "2022",
      endYear: "2023",
      title: "Highschool teaching intern",
      company: "Gymnase du Bugnon",
      desc: "Taught the basis of OOP in Python to first and last year highschool students",
    },
  ];

  return (
    <div className="experience-container">
      <div className="experience-title">
        <h2>My Experiences</h2>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-date">
              {item.startYear} - {item.endYear}
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-job-title">{item.title}</h3>
                <span className="experience-company">{item.company}</span>
              </div>
              <p className="experience-description">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
