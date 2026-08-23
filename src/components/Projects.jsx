import { FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Shifty",
    type: "MERN Logistics Platform",
    description:
      "A logistics management platform designed to organize shipment workflows and operational processes in one structured system.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/zubair2018",
    demo: "#",
    accent: "from-orange-500/30 via-orange-500/5 to-transparent",
  },
  {
    number: "02",
    title: "Modern Portfolio",
    type: "Personal Brand Website",
    description:
      "A responsive portfolio experience built to present skills, work, and services with a clear visual identity.",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    github: "https://github.com/zubair2018",
    demo: "#",
    accent: "from-sky-500/30 via-sky-500/5 to-transparent",
  },
  {
    number: "03",
    title: "Sneaker Store",
    type: "E-Commerce Interface",
    description:
      "A product-focused e-commerce interface with clean navigation, responsive layouts, and a streamlined browsing experience.",
    tech: ["React", "JavaScript", "UI Design"],
    github: "https://github.com/zubair2018",
    demo: "#",
    accent: "from-emerald-500/30 via-emerald-500/5 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      id="works"
      className="border-y border-white/10 bg-[#141417] px-5 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Selected Work
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Projects built with purpose.
            </h2>

            <p className="mt-4 text-base leading-8 text-zinc-400">
              A selection of web products and digital experiences designed for
              clarity, performance, and practical use.
            </p>
          </div>

          <a
            href="https://github.com/zubair2018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-zinc-300 transition hover:text-orange-400"
          >
            <FaGithub />
            Explore GitHub
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0d] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-orange-400">
                    PROJECT_{project.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-zinc-600 transition group-hover:bg-emerald-400" />
                </div>

                <h3 className="mt-10 text-2xl font-black tracking-[-0.03em] text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                  {project.type}
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-orange-400"
                  >
                    <FaGithub />
                    Code
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 transition hover:text-white"
                    >
                      Live Project
                      <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}