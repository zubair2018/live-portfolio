export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mb-5 inline-flex items-center rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium text-fuchsia-200 sm:text-sm">
          Web Developer • Content Creator
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
         Hello! I'm <span className="text-yellow-400">Zubair</span>, I build modern websites and create digital content.
        </h1>

        <p className="mt-6 max-w-2xl text-md font-bold text-yellow-400 leading-7 sm:text-base">
          I help brands and individuals establish a clean, professional, and effective online presence through web development and content creation.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/resume.txt"
            download
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-fuchsia-400/50 hover:text-fuchsia-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}