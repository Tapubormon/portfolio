import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Research from "./sections/Research";
import Publications from "./sections/Publications";
import Projects from "./sections/Projects";
import ResearchProjects from "./sections/ResearchProjects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";

// 🔹 Home page layout
function Home() {
  return (
    <>
      <Hero />
      <Research />
      <Publications />
      <ResearchProjects />
      <Projects />
      <Skills />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/portfolio" element={<Home />} />

          {/* Certifications page */}
          <Route path="/portfolio/certifications" element={<Certifications />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}