import StickerCloud from "./StickerCloud";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#070b18] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="float-slow absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="float-slow absolute -right-20 top-8 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:-3s]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>
      <StickerCloud />

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 py-28 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-2xl shadow-cyan-950/20">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Available for selected projects
          </span>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-200/80">Developer · Designer · Creator</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Digital experiences with <span className="gradient-text">clarity & character.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Hi, I&apos;m Zubair. I build sharp, expressive websites and create content
            that gives ambitious people and brands a memorable presence online.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#works" className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-xl hover:shadow-cyan-400/20">
              Explore my work <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a href="/resume.txt" download className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-fuchsia-300/60 hover:bg-white/[0.08]">Download résumé</a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          <span className="h-px w-12 bg-gradient-to-r from-cyan-300 to-transparent" /> Scroll to discover
        </div>
      </div>
    </section>
  );
}
