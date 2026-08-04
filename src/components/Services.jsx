const services = [
  {
    title: "Web Development",
    desc: "Responsive and modern websites built to deliver a professional and reliable user experience.",
  },
  {
    title: "Frontend Design",
    desc: "Clean and structured interfaces designed with attention to usability, layout, and visual clarity.",
  },
  {
    title: "Content Creation",
    desc: "Digital content developed to strengthen online presence and communicate ideas with clarity.",
  },
  {
    title: "Video Editing",
    desc: "Short-form and promotional video editing with a focus on pacing, presentation, and consistency.",
  },
  {
    title: "Creative Support",
    desc: "Practical support for personal brands and businesses across web presence, content, and digital presentation.",
  },
  {
    title: "Visual Assets",
    desc: "Professional thumbnails and supporting visuals created for social media, video platforms, and online branding.",
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
            Services I provide
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
              <p className="mt-3 text-sm leading-7 text-yellow-400 ">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}