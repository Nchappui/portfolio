import React from 'react'
import './Skills.css';

const Skills = () => {

  const skills = [
    { field: "Software Development",  desc: "Various programming languages and frameworks. Very good knowledge of algorithms and data structures. Certified Scrum Developer.", keywords: [ "Python", "C#", "Java" ]},
    { field: "UI/UX Design",  desc: "Proficient in creating user-centered designs through research and testing.", keywords: [ "JavaScript", "CSS", "React", "HTML"]},
    { field: "Mobile Development",  desc: "Skilled in building mobile applications for Android and iOS using modern frameworks.", keywords: [ "Kotlin", "React Native", "Android Studio" ]},
    { field: "Game Development",  desc: "Experienced in developing interactive games using Unity and C#. Love creating immersive experiences.", keywords: [ "Unity", "C#", "Virtual Reality" ]},
  ];

  return (
    <div className='skills-container'>
        <div className='skills-title'>
            <h1>My skills</h1>
        </div>
        <div className='skills-list'>
            {skills.map((skill, index) => (
                <div key={index} className='skill-item'>
                    <h2>{skill.field}</h2>
                    <p>{skill.desc}</p>
                    <div className='skill-keywords'>
                        {skill.keywords.map((keyword, idx) => (
                            <span key={idx} className='keyword'>{keyword}</span>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Skills