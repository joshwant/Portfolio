import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import StickyNav from "./StickyNav";
import Projects from "./Projects";

import posterImage from "./assets/prepit/poster.jpg";
import homepageImage from "./assets/prepit/homepage.png";

const projects = [
  {
    id: 1,
    title: "PrepIt",
    shortDescription: "AI-Powered Meal Planning and Price Comparison Mobile App.",
    images: [
      posterImage,
      homepageImage,
    ],
    description:
      "PrepIt is a mobile app that allows users to explore recipes, create a meal plan and shopping list, and get a price comparison from top UK supermarkets.",
    github: "https://github.com/joshwant/COMP3000-JOSHWANT",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Firebase"],
  },
];

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

    setActiveSection(section);
  };

  return (
    <div className="font-sans text-gray-800">
      <section id="home" ref={homeRef}>
        <Hero onNavClick={handleNavClick} setShowStickyNav={setShowStickyNav} />
      </section>

      <StickyNav onNavClick={handleNavClick} visible={showStickyNav} activeSection={activeSection} />

      <section id="projects" ref={projectsRef}>
        <Projects projects={projects} />
      </section>

      <section id="work" ref={workRef} className="h-screen bg-gray-200 flex justify-center items-center">
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </section>

      <section id="contact" ref={contactRef} className="h-screen bg-gray-300 flex justify-center items-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </section>
    </div>
  );
}