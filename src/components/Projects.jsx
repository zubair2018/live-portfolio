const projects = [
  { title: "Modern Portfolio", description: "A personal platform designed to make skills, services, and selected work feel unmistakably human.", tech: ["React", "Tailwind CSS"], github: "https://github.com/your-username/modern-portfolio", demo: "#" },
  { title: "Sneaker Store", description: "A responsive e-commerce experience built around frictionless discovery and an energetic visual language.", tech: ["React", "Redux", "Stripe"], github: "https://github.com/your-username/sneaker-store", demo: "#" },
  { title: "Shifty", description: "A MERN logistics platform that turns complex operational workflows into a clean, usable interface.", tech: ["MongoDB", "Express", "React", "Node.js"], github: "https://github.com/your-username/shifty", demo: "#" },
];

export default function Projects() {
  return (
    <section id="works" className="overflow-hidden bg-[#0a1020] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">Selected work</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Made to be remembered.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">A focused collection of products and interfaces shaped around clarity, conversion, and a distinct point of view.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/30">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 blur-2xl transition duration-500 group-hover:scale-150" />
              <span className="relative font-mono text-xs text-cyan-200/80">0{index + 1} / 03</span>
              <h3 className="relative mt-14 text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="relative mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-slate-300">{tech}</span>)}</div>
              <div className="relative mt-9 flex items-center gap-5 text-sm font-bold">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-200 transition hover:text-white">GitHub ↗</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-white">Live demo ↗</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
