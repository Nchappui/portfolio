import { React, useState } from "react";
import "./MyProjects.css";
import StackNavigation from "../components/StackNavigation";
import WebProjects from "./WebProjects";
import MobileProjects from "./MobileProjects";

const MyProjects = () => {
  const [activeStack, setActiveStack] = useState("Web Development");
  const stacks = [
    { key: "Web Development", label: "Web Development" },
    {
      key: "Mobile Development",
      label: "Mobile Development",
    },
    {
      key: "Game Development",
      label: "Game Development",
    },
  ];

  const handleStackChange = (stackKey) => {
    console.log("Changement vers:", stackKey);
    setActiveStack(stackKey);
  };

  return (
    <section className="my-projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1>Mes Projets</h1>
          <p>Découvrez quelques-uns de mes travaux récents</p>
          <StackNavigation
            stacks={stacks}
            activeStack={activeStack}
            onStackChange={handleStackChange}
          />
        </div>
        <div className="projects-grid">
          {activeStack === "Web Development" && <WebProjects />}
          {activeStack === "Mobile Development" && <MobileProjects />}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
