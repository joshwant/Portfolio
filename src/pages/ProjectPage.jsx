import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import ReactMarkdown from 'react-markdown';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Navigation */}
      <nav className="p-6 max-w-7xl mx-auto">
        <Link to="/#projects" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          ← Back to Projects
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="mb-10">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(t => (
              <span key={t} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        <img 
          src={project.mainImage} 
          className="w-full aspect-video object-cover rounded-3xl shadow-2xl mb-16" 
          alt={project.title} 
        />

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Left Side: The Case Study (Markdown) */}
          <div className="md:col-span-2">
            <section className="prose prose-slate prose-lg max-w-none">
              <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
            </section>
          </div>
          
          {/* Right Side: Quick Info / Links */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Project Links</h3>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}