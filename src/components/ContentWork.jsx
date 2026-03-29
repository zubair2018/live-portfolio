const contentItems = [
  {
    title: "Short-Form Video Editing",
    text: "Editing reels, shorts, and social clips with clean pacing, engaging cuts, and better visual flow.",
  },
  {
    title: "Content Branding",
    text: "Creating content that matches the identity of a personal brand, business, or creator profile.",
  },
  {
    title: "DaVinci Resolve Workflow",
    text: "Using DaVinci Resolve for editing, color cleanup, timing, and polished delivery for digital content.",
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
            Creative work beyond websites
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Along with development, I also work as a part-time content creator,
            combining editing, visual storytelling, and branding to make content
            more engaging and professional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contentItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}