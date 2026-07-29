const services = [
  ["01", "Web Development", "Responsive, fast websites built to make a strong first impression on every screen."],
  ["02", "Frontend Design", "Purposeful interfaces with clear hierarchy, expressive details, and effortless usability."],
  ["03", "Content Creation", "Digital content that helps your ideas reach the right audience with a consistent voice."],
  ["04", "Video Editing", "Short-form and promotional edits shaped for pace, clarity, and visual impact."],
  ["05", "Creative Support", "Practical design and content partnership for growing personal brands and businesses."],
  ["06", "Visual Assets", "Thumbnails and supporting visuals that make social content feel recognizably yours."],
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a1020] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">Capabilities</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Built for your next bold move.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([number, title, desc]) => <article key={title} className="group bg-[#0a1020] p-7 transition duration-300 hover:bg-white/[0.055]">
            <span className="font-mono text-xs text-cyan-200/70">{number}</span>
            <h3 className="mt-12 text-xl font-bold transition group-hover:text-cyan-100">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
            <span className="mt-7 block text-lg text-fuchsia-200 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">↗</span>
          </article>)}
        </div>
      </div>
    </section>
  );
}
