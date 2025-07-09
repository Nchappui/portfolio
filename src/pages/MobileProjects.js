import "./MyProjects.css";

const MobileProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description:
        "Site web portfolio développé avec React pour présenter mes compétences et projets.",
      technologies: ["React", "CSS3", "JavaScript"],
      status: "En cours",
      image: "🌐",
    },
  ];

  return (
    <section className="my-projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1>Mobile projects</h1>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
              </div>

              <div className="project-content">
                <div className="project-status">
                  <span
                    className={`status-badge ${
                      project.status === "Terminé" ? "completed" : "in-progress"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button className="btn-primary">Voir le projet</button>
                  <button className="btn-secondary">Code source</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p>D'autres projets arrivent bientôt...</p>
          <button className="btn-outline">Voir tous les projets</button>
        </div>
      </div>
    </section>
  );
};

export default MobileProjects;
