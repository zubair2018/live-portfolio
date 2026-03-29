const services = [
  {
    title: "Web Design",
    desc: "Modern, responsive, and clean website design focused on user experience and brand presence.",
  },
  {
    title: "MERN Development",
    desc: "Full-stack web applications using MongoDB, Express, React, and Node.js for real functionality.",
  },
  {
    title: "Content Creation",
    desc: "Creative content ideas, branded storytelling, and engaging digital content for social platforms.",
  },
  {
    title: "Video Editing",
    desc: "Short-form and promotional video editing with polished cuts, transitions, pacing, and visual flow.",
  },
  {
    title: "Creative Strategy",
    desc: "Helping brands connect web presence and content style so everything feels aligned and professional.",
  },
  {
    title: "Thumbnail Design",
    desc: "Eye-catching thumbnail and visual assets for YouTube, reels, and digital content promotion.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900 px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Services
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            What I can help you with
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-fuchsia-400/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}