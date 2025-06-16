import { useEffect, useRef } from "react";
import ConstellationBackground from './ConstellationBackground';

export default function Hero({ onNavClick, setShowStickyNav }) {
  const heroNavRef = useRef(null);
  const heroContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyNav(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroNavRef.current) {
      observer.observe(heroNavRef.current);
    }

    return () => {
      if (heroNavRef.current) {
        observer.unobserve(heroNavRef.current);
      }
    };
  }, [setShowStickyNav]);

  return (
    <section id="home" ref={heroContainerRef} className="h-screen relative flex flex-col justify-center items-center bg-gray-900 text-white">

      <ConstellationBackground containerRef={heroContainerRef} />
            
      <h1 className="text-7xl font-bold mb-4">Hi, I'm Josh</h1>
      <h2 className="text-2xl mb-10">A Full Stack Developer</h2>

      {/* Navigation Buttons */}
      <div ref={heroNavRef} className="flex space-x-6">
        {["home", "projects", "work", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => onNavClick(section)}
            className={`px-5 py-2 rounded-full text-xl transition font-bold
            ${
                section === "home"
                ? "border-2 border-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Social icons - bottom left */}
      <div className="absolute bottom-6 left-6 flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-500 transition"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.3h.1c.65-1.2 2.25-2.5 4.65-2.5 5 0 5.9 3.3 5.9 7.6V24h-5v-7.8c0-1.9-.04-4.35-2.7-4.35-2.7 0-3.1 2.1-3.1 4.2V24h-5V8z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-gray-300 transition"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.15c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.84 1.32 3.54 1 .11-.78.42-1.33.76-1.63-2.66-.3-5.46-1.33-5.46-5.92 0-1.3.46-2.37 1.22-3.2-.12-.3-.53-1.5.12-3.13 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.63.24 2.83.12 3.13.76.83 1.22 1.9 1.22 3.2 0 4.6-2.8 5.6-5.47 5.9.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.82.58A12 12 0 0012 0z" />
          </svg>
        </a>
      </div>
      
        <div
        className="absolute top-16 left-20 w-80 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl animate-slowPulse"
        style={{ transform: "rotate(15deg)" }}
        ></div>
        <div
        className="absolute bottom-12 right-28 w-64 h-72 bg-blue-500 rounded-[40%] opacity-15 blur-2xl animate-slowPulse"
        style={{ animationDelay: '2s', transform: "rotate(-20deg)" }}
        ></div>

    </section>
  );
}