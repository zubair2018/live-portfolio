import { FaCode, FaShoppingBag, FaTruck } from "react-icons/fa";

const projects = [
  { title: "Modern Portfolio", description: "A personal platform designed to make skills, services, and selected work feel unmistakably human.", tech: ["React", "Tailwind CSS"], github: "https://github.com/your-username/modern-portfolio", demo: "#", mark: "MP", Icon: FaCode, accent: "from-cyan-300 via-blue-400 to-indigo-500", ink: "text-cyan-950" },
  { title: "Sneaker Store", description: "A responsive e-commerce experience built around frictionless discovery and an energetic visual language.", tech: ["React", "Redux", "Stripe"], github: "https://github.com/your-username/sneaker-store", demo: "#", mark: "SS", Icon: FaShoppingBag, accent: "from-fuchsia-300 via-rose-400 to-orange-400", ink: "text-rose-950" },
  { title: "Shifty", description: "A MERN logistics platform that turns complex operational workflows into a clean, usable interface.", tech: ["MongoDB", "Express", "React", "Node.js"], github: "https://github.com/your-username/shifty", demo: "#", mark: "SH", Icon: FaTruck, accent: "from-lime-300 via-emerald-400 to-cyan-400", ink: "text-emerald-950" },
];

export default function Projects() {
  return (
    <section id="works" className="overflow-hidden bg-[#0a1020] px-5 py-20 text-white sm:px-8 lg:px-10">
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
            <article key={project.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/30">
              <div className={`relative flex h-40 items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} p-5 ${project.ink}`}>
                <div className="absolute -right-5 -top-12 h-36 w-36 rounded-full border-[18px] border-white/30" />
                <div className="absolute bottom-0 left-0 h-16 w-32 -translate-x-10 translate-y-7 rotate-[-25deg] rounded-full bg-white/20" />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#0a1020]/90 text-xl text-white shadow-xl shadow-black/20 transition duration-500 group-hover:rotate-[-12deg] group-hover:scale-110"><project.Icon /></div>
                <span className="relative font-mono text-4xl font-black tracking-[-0.1em] opacity-90">{project.mark}</span>
                <span className="absolute bottom-4 right-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em]">0{index + 1} / 03</span>
              </div>
              <div className="px-2 pb-2 pt-6">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-slate-300">{tech}</span>)}</div>
                <div className="mt-8 flex items-center gap-5 text-sm font-bold">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-200 transition hover:text-white">GitHub ↗</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-white">Live demo ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
