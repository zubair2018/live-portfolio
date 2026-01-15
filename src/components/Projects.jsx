// src/components/Projects.jsx
const projects = [
  {
    title: "Modern Portfolio",
    description: "Clean and elegant React & Tailwind portfolio website.",
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/your-username/modern-portfolio",
    demo: "#"
  },
  {
    title: "Sneaker Store",
    description: "An online store for trendy sneakers with cart, filters and payments.",
    tech: ["React", "Redux", "Firebase"],
    github: "https://github.com/your-username/sneaker-store",
    demo: "#"
  },
  {
    title: "Personal Blog",
    description: "A blogging platform with rich post editor and comments.",
    tech: ["React", "TailwindCSS", "Node.js"],
    github: "https://github.com/your-username/blog-platform",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-5 bg-black text-white" id="works">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-800 rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-indigo-400 mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-slate-700 px-2 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <a href={project.github} className="text-indigo-400 hover:underline mr-4">GitHub</a>
              <a href={project.demo} className="text-green-400 hover:underline">Live Demo</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
