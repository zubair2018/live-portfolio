import { FaFilm, FaPlay, FaWandMagicSparkles } from "react-icons/fa6";

const contentWork = [
  {
    number: "01",
    title: "Short-Form Video",
    description:
      "Reels, shorts, and social clips edited for strong pacing, clear messaging, and better retention.",
    icon: FaPlay,
  },
  {
    number: "02",
    title: "Creator Content",
    description:
      "Content designed to support consistency, personal branding, and stronger audience engagement.",
    icon: FaFilm,
  },
  {
    number: "03",
    title: "Editing Workflow",
    description:
      "DaVinci Resolve editing with focused storytelling, refined visuals, and polished final delivery.",
    icon: FaWandMagicSparkles,
  },
];

export default function ContentWork() {
  return (
    <section id="content" className="bg-[#0b0b0d] px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Content Lab
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Content is part of the product.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-zinc-400">
            Beyond development, I create visual content that helps ideas travel
            further. The goal is simple: make content clear, engaging, and
            consistent with the person or brand behind it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contentWork.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group border-t border-white/10 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-orange-400">
                    {item.number}
                  </span>

                  <Icon className="text-lg text-zinc-500 transition group-hover:text-orange-400" />
                </div>

                <h3 className="mt-10 text-2xl font-black tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-5 rounded-xl border border-orange-500/20 bg-orange-500/[0.07] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
              Watch More
            </p>
            <p className="mt-2 text-lg font-bold text-white">
              Explore my creator side on YouTube.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@mirzubair321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
          >
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}