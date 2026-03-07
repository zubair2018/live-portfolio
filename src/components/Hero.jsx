// src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-pink-600/30 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex flex-col items-center text-center gap-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-xs sm:text-sm text-purple-200">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          Full‑Stack Web Designer
        </span>

        <div>
          <p className="mt-4 text-sm sm:text-base tracking-[0.2em] text-slate-300">
            HELLO I&apos;M
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ZUBAIR
            </span>
            <span className="block text-white">AHMAD</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl">
          I&apos;m a web designer and entrepreneur crafting sleek, responsive
          websites that help brands stand out, tell their story, and convert
          visitors into customers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/40 hover:from-purple-600 hover:to-pink-600 transition"
          >
            Download Resume
          </a>
          <a
            href="#works"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm sm:text-base font-semibold text-slate-200 hover:border-purple-400 hover:text-purple-300 transition"
          >
            View My Work
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm sm:text-base">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-purple-400">
              50+
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">Happy Clients</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-purple-400">
              80+
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Completed Projects
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-purple-400">
              3+
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
