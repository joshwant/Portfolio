import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import ReactMarkdown from 'react-markdown';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Simple Back Nav */}
      <nav className="p-6">
        <Link to="/" className="text-blue-600 font-medium">← Back to Portfolio</Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10">
          <h1 className="text-5xl font-extrabold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(t => (
              <span key={t} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        <img 
          src={project.mainImage} 
          className="w-full aspect-video object-cover rounded-2xl shadow-2xl mb-12" 
          alt={project.title} 
        />

        <div className="prose prose-blue max-w-none text-gray-700">
          <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
          </div>
          
          <div className="space-y-6">
            <a 
              href={project.github} 
              target="_blank" 
              className="block w-full text-center py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}