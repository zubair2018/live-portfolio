const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A professional portfolio website developed to present work, skills, and services in a clear and structured format.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/modern-portfolio",
    demo: "#",
  },
  {
    title: "Sneaker Store",
    description:
      "An e-commerce interface designed to provide a smooth browsing experience with a clean and responsive layout.",
    tech: ["React", "Redux", "Stripe"],
    github: "https://github.com/your-username/sneaker-store",
    demo: "#",
  },
  {
    title: "Shifty",
    description:
      "A MERN-based logistics platform created to manage workflow, operations, and shipment-related processes efficiently.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/your-username/shifty",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="works" className="bg-slate-900 px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Projects
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-fuchsia-400/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-yellow-400 ">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-300 transition hover:text-fuchsia-200"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 transition hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}