import React from "react";
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

function AppContent() {
  const location = useLocation();

  // Détermine l'onglet actif basé sur l'URL
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/" || path === "/about") return "about";
    else if (path === "/projects") return "projects";
  };

  return (
    <div className="App">
      <Navigation activeTab={getActiveTab()} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
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
