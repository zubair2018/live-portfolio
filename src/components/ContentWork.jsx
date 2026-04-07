const contentItems = [
  {
    title: "Short-Form Content",
    text: "Professional editing for reels, shorts, and social media videos with clear structure and engaging presentation.",
  },
  {
    title: "Brand-Focused Content",
    text: "Content created to support personal branding, audience engagement, and a stronger digital presence.",
  },
  {
    title: "Editing Workflow",
    text: "DaVinci Resolve-based editing process focused on clean visuals, timing, and polished final delivery.",
  },
];

export default function ContentWork() {
  return (
    <section id="content" className="bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Content Creation
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Content work with a professional approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-yellow-400 sm:text-base">
            In addition to development, I create content that is visually consistent, audience-focused, and aligned with professional digital presentation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contentItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-yellow-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}