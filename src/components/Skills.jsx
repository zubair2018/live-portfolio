const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Responsive Design",
  "UI Development",
  "DaVinci Resolve",
  "Video Editing",
  "Content Planning",
  "Thumbnail Design",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Skills
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tools and skills I work with
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-yellow-400 transition hover:border-fuchsia-400/40 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}