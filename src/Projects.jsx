import { useState } from "react";

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // When project changes, reset image index to 0
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((idx) =>
      idx === selectedProject.images.length - 1 ? 0 : idx + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((idx) =>
      idx === 0 ? selectedProject.images.length - 1 : idx - 1
    );
  };

  return (
    <section className="min-h-screen py-20 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Project List */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectSelect(project)}
              className={`p-4 rounded-lg text-left border-2 ${
                selectedProject.id === project.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white border-gray-300 hover:bg-gray-200"
              }`}
              aria-current={selectedProject.id === project.id ? "true" : undefined}
            >
              <h3 className="font-extrabold text-xl">{project.title}</h3>
              <p className="text-sm text-white">{project.shortDescription}</p>
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-8 flex flex-col">
          <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
          <p className="text-gray-600 mb-6 italic">{selectedProject.shortDescription}</p>

          {/* Carousel */}
            <div className="relative mb-6 w-full max-w-full overflow-hidden rounded-lg shadow-md mx-auto">
            <img
            src={selectedProject.images[currentImageIndex]}
            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-auto rounded-lg"
            />

            {/* Prev Button */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg"
            >
              &#8592;
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg"
            >
              &#8594;
            </button>
          </div>

          <p className="text-gray-700 mb-6">{selectedProject.description}</p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition"
            >
              View on GitHub
            </a>

            <div className="flex flex-wrap gap-3">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}