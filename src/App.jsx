import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import StickyNav from "./StickyNav";
import Projects from "./Projects";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = ["home", "projects", "work", "contact"];

    useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,  // section is considered active when 60% in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      work: workRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });

    window.history.pushState(null, null, `#${section}`);

    setActiveSection(section);
  };

return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="font-sans text-gray-800">
            <section id="home" ref={homeRef}>
              <Hero onNavClick={handleNavClick} setShowStickyNav={setShowStickyNav} />
            </section>

            <StickyNav onNavClick={handleNavClick} visible={showStickyNav} activeSection={activeSection} />

            <section id="projects" ref={projectsRef}>
              <Projects /> 
            </section>

            <section id="work" ref={workRef} className="h-screen bg-gray-200 flex justify-center items-center">
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </section>

            <section id="contact" ref={contactRef} className="h-screen bg-gray-300 flex justify-center items-center">
              <h2 className="text-3xl font-bold">Contact Me</h2>
            </section>
          </div>
        } />

        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}