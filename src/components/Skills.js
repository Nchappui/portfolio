import React from 'react'
import './Skills.css';

const Skills = () => {

  const skills = [
    { field: "Software Development",  desc: "lorem ipsum...", keywords: [ "Python", "C#", "Java" ]},
    { field: "UI/UX Design",  desc: "lorem ipsum...", keywords: [ "JavaScript", "CSS", "React", "HTML", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch",  "Wireframing", "Prototyping" ]},
    { field: "Mobile Development",  desc: "lorem ipsum...", keywords: [ "Kotlin", "React Native", "Andoid Studio" ]},
    { field: "Game Development",  desc: "lorem ipsum...", keywords: [ "Unity", "C#", "Virtual Reality" ]},
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