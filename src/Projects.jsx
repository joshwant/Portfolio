import { projectsData } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Selected Work
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mt-4 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-6 text-gray-600 max-w-2xl text-lg">
            A collection of software development, mobile applications, and UI/UX design projects.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}