const contentItems = [
  ["Short-form content", "Professional editing for reels, shorts, and social videos with a clean visual rhythm."],
  ["Brand-focused stories", "Content designed to build recognition, create connection, and make your message stick."],
  ["Editing workflow", "A thoughtful DaVinci Resolve process focused on pacing, polish, and a confident final cut."],
];

export default function ContentWork() {
  return (
    <section id="content" className="bg-[#0a1020] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">Beyond code</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Stories that move.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-400">A strong online presence is more than a functional website. I also create visual content that helps brands remain clear, consistent, and compelling.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contentItems.map(([title, text]) => <article key={title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-fuchsia-400/10 blur-2xl" />
            <h3 className="relative text-xl font-bold">{title}</h3>
            <p className="relative mt-4 text-sm leading-7 text-slate-400">{text}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
