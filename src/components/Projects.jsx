// src/components/Projects.jsx

const projects = [
  {
    title: "Modern Portfolio",
    description: "React & Tailwind portfolio with smooth animations.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/your-username/modern-portfolio", // update
    demo: "#", // live link if you have one
  },
  {
    title: "Sneaker Store",
    description: "E-commerce site with cart and payment integration.",
    tech: ["React", "Redux", "Stripe"],
    github: "https://github.com/your-username/sneaker-store", // update
    demo: "#",
  },
  {
    title: "Shifty – Logistics Platform",
    description:
      "Full MERN logistics platform for managing shipments, drivers, and real-time tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/your-username/shifty", // put your real repo
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="works"
      className="py-16 px-5 bg-gradient-to-b from-slate-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 px-3 py-1 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-semibold">
                  <a
                    href={project.github}
                    className="text-purple-400 hover:text-purple-300 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-pink-400 hover:text-pink-300 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
