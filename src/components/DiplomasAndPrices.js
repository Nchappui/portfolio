import React from "react";
import "./DiplomasAndPrices.css";

const DiplomasAndPrices = () => {
  const data = [
    {
      date: "2025",
      title: "Professional Scrum Developer",
      from: "Scrum.org",
      desc: "Professional Scrum Developer certification demonstrating knowledge of Scrum principles and practices.",
    },
    {
      date: "2024",
      title: "Master in Computer Science",
      from: "EPFL",
      desc: "Master's degree in Computer Science",
    },
    {
      date: "2024",
      title: "Master of Advanced Studies in Teaching for secondary education",
      from: "HEP Vaud",
      desc: "Master of Advanced Studies in Teaching to teach computer science to at highschool level.",
    },
    {
      date: "2024",
      title: "Innovation Award",
      from: "FIA",
      desc: "Innovation Award offered by the FIA for tourism club projects in Computer Science in Europe, Africa and the Middle East.",
    },
    {
      date: "2021",
      title: "Best Application Award",
      from: "Software Engineering Course",
      desc: "Best Application Award for outstanding project work in the Software Engineering course.",
    },
  ];
  return (
    <div className="container">
      <div className="title">
        <h2>Diplomas & Prices</h2>
        <ul className="diplomas-list">
          {data.map((item, index) => (
            <li key={index} className="diploma-item">
              <h3 className="diploma-title">{item.title}</h3>
              <p className="diploma-from">{item.from}</p>
              <p className="diploma-desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiplomasAndPrices;
