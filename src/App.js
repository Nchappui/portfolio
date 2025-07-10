import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import MyExperiences from "./pages/MyExperiences";
import Intro from "./pages/Intro";

function AppContent() {
  const location = useLocation();

  // Détermine l'onglet actif basé sur l'URL
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/" || path === "/about") return "about";
    else if (path === "/projects") return "projects";
    else if (path === "/experiences") return "experiences";
  };

  return (
    <div className="App">
      <Navigation activeTab={getActiveTab()} />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Intro />
                <AboutMe />
              </div>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/experiences" element={<MyExperiences />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
