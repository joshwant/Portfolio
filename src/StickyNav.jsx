import { act } from "react";

export default function StickyNav({ onNavClick, visible, activeSection }) {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-50
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex space-x-6">
        {["home", "projects", "work", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => onNavClick(section)}
            className={`px-5 py-2 rounded-full text-xl transition font-bold 
              ${
                section === activeSection
                  ? "border-2 border-gray-900 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}