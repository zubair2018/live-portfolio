import {
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaLightbulb,
  FaImages,
  FaPenNib,
} from "react-icons/fa";

const services = [
  ["01", "Web Development", "Responsive, fast websites built to make a strong first impression on every screen.", FaCode, "from-cyan-300/30 to-blue-500/10"],
  ["02", "Frontend Design", "Purposeful interfaces with clear hierarchy, expressive details, and effortless usability.", FaPaintBrush, "from-fuchsia-300/30 to-purple-500/10"],
  ["03", "Content Creation", "Digital content that helps your ideas reach the right audience with a consistent voice.", FaPenNib, "from-amber-300/30 to-orange-500/10"],
  ["04", "Video Editing", "Short-form and promotional edits shaped for pace, clarity, and visual impact.", FaVideo, "from-rose-300/30 to-pink-500/10"],
  ["05", "Creative Support", "Practical design and content partnership for growing personal brands and businesses.", FaLightbulb, "from-lime-300/30 to-emerald-500/10"],
  ["06", "Visual Assets", "Thumbnails and supporting visuals that make social content feel recognizably yours.", FaImages, "from-violet-300/30 to-indigo-500/10"],
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a1020] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">Capabilities</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Built for your next bold move.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([number, title, desc, Icon, glow]) => (
            <article key={title} className="group relative min-h-[255px] overflow-hidden bg-[#0a1020] p-7 transition duration-500 hover:bg-white/[0.055]">
              <div className={`absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${glow} blur-2xl transition duration-500 group-hover:scale-125`} />
              <span className="relative font-mono text-xs text-cyan-200/70">{number}</span>
              <div className="relative mt-7 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-[#070b18]/70 text-2xl text-white shadow-lg shadow-black/20 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-cyan-200/40">
                <Icon />
              </div>
              <h3 className="relative mt-6 text-xl font-bold transition group-hover:text-cyan-100">{title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-400">{desc}</p>
              <span className="absolute bottom-6 right-7 text-lg text-fuchsia-200 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
