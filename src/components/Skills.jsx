const skills = ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Responsive Design", "UI Development", "DaVinci Resolve", "Video Editing", "Content Planning", "Thumbnail Design"];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#070b18] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">Toolkit</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Fluent in the details.</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => <span key={skill} className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100" style={{ transitionDelay: `${index * 20}ms` }}>{skill}</span>)}
        </div>
      </div>
    </section>
  );
}
