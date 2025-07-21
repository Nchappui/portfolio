import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "about";
    if (path === "/projects") return "projects";
    if (path === "/skills") return "skills";
    if (path === "/experiences") return "experiences";
    return "about";
  };

  const activeTab = getActiveTab();

  // Fonction pour gérer le clic sur le logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/" || location.pathname === "/about") {
      // Si on est déjà sur la page d'accueil, scroller vers le haut
      const introSection = document.getElementById("intro-section");
      if (introSection) {
        introSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Sinon, naviguer vers la page d'accueil
      navigate("/");
    }
  };

  // Fonction pour gérer le clic sur About Me
  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Si on est déjà sur la page, scroller vers la section about
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, naviguer vers la page et scroller vers la section about
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const tabs = [
    { key: "about", label: "About me", path: "/", onClick: handleAboutClick },
    { key: "experiences", label: "Experiences", path: "/experiences" },
    { key: "projects", label: "Projets", path: "/projects" },
    { key: "skills", label: "Skills", path: "/skills" },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="/" onClick={handleLogoClick} className="brand-link">
            <img src="/LogoNC.png" alt="Nolan Chappuis Logo" className="brand-logo" color="white" />
          </a>
        </div>
        <div className="nav-tabs">
          {tabs.map((tab) => (
            tab.onClick ? (
              <a
                key={tab.key}
                href={tab.path}
                onClick={tab.onClick}
                className={`nav-tab ${activeTab === tab.key ? "active" : ""}`}
              >
                {tab.label}
              </a>
            ) : (
              <Link
                key={tab.key}
                to={tab.path}
                className={`nav-tab ${activeTab === tab.key ? "active" : ""}`}
              >
                {tab.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
