import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/" || path === "/about") return "about";
    if (path === "/projects") return "projects";
    if (path === "/skills") return "skills";
    if (path === "/experiences") return "experiences";
    return "about";
  };

  const activeTab = getActiveTab();

  const tabs = [
    { key: "about", label: "About me", path: "/about" },
    { key: "experiences", label: "Experiences", path: "/experiences" },
    { key: "projects", label: "Projets", path: "/projects" },
    { key: "skills", label: "Skills", path: "/skills" },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* 
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <span className="brand-name">Nolan Chappuis</span>
          </Link>
        </div>
 */}
        <div className="nav-tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              to={tab.path}
              className={`nav-tab ${activeTab === tab.key ? "active" : ""}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
