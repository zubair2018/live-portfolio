import {
  FaCode,
  FaDesktop,
  FaFilm,
  FaPencilAlt,
  FaShapes,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive websites and web interfaces built for performance, clarity, and real-world use.",
    icon: FaCode,
  },
  {
    number: "02",
    title: "Frontend Design",
    description:
      "Modern, structured interfaces focused on usability, layout, and a polished visual experience.",
    icon: FaDesktop,
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Digital content developed to support online presence and meaningful audience engagement.",
    icon: FaPencilAlt,
  },
  {
    number: "04",
    title: "Video Editing",
    description:
      "Short-form edits and promotional videos with clean pacing, structure, and professional delivery.",
    icon: FaVideo,
  },
  {
    number: "05",
    title: "Creator Support",
    description:
      "Practical creative support for personal brands across content, web presence, and digital identity.",
    icon: FaFilm,
  },
  {
    number: "06",
    title: "Visual Assets",
    description:
      "Thumbnails and supporting visuals designed for content platforms, campaigns, and creator workflows.",
    icon: FaShapes,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-white/10 bg-[#141417] px-5 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            What I Do
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Digital work with purpose.
          </h2>

          <p className="mt-4 text-base leading-8 text-zinc-400">
            Development and content services built around clear communication,
            modern execution, and a strong online presence.
          </p>
        </div>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group min-h-[260px] border-b border-r border-white/10 bg-[#141417] p-6 transition hover:bg-[#1b1b20]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-bold text-orange-400">
                    {service.number}
                  </span>

                  <Icon className="text-lg text-zinc-500 transition group-hover:text-orange-400" />
                </div>

                <h3 className="mt-12 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}