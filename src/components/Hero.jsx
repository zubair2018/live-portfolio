import { FaArrowRight, FaGithub, FaYoutube } from "react-icons/fa";

function CodeSticker() {
  return (
    <div className="absolute -right-3 top-2 rotate-[8deg] rounded-xl border-2 border-white bg-[#17171c] p-3 shadow-2xl shadow-black/50 sm:right-3 sm:top-8">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>

      <code className="mt-4 block font-mono text-xs font-bold leading-6 text-zinc-300">
        <span className="text-orange-400">const</span> creator ={" "}
        <span className="text-sky-400">true</span>;
        <br />
        build<span className="text-orange-400">()</span>;
        <br />
        create<span className="text-orange-400">()</span>;
      </code>
    </div>
  );
}

function CreatorSticker() {
  return (
    <div className="absolute -bottom-8 left-4 -rotate-[8deg] rounded-xl border-2 border-white bg-orange-500 px-4 py-3 text-[#0b0b0d] shadow-2xl shadow-black/50 sm:-bottom-6 sm:left-10">
      <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em]">
        Developer
      </p>
      <p className="mt-1 text-lg font-black leading-none tracking-tight">
        + Creator
      </p>
    </div>
  );
}

function SparkSticker() {
  return (
    <div className="absolute bottom-6 right-0 grid h-14 w-14 rotate-[12deg] place-items-center rounded-full border-2 border-white bg-sky-400 text-2xl text-[#0b0b0d] shadow-xl shadow-black/40 sm:right-5">
      ✦
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0b0b0d] text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
              Available for selected projects
            </span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
            Zubair Ahmad
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            I build for the web.
            <span className="mt-2 block text-orange-500">
              And create for the feed.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Web developer and content creator building modern digital products,
            strong web experiences, and creator-focused visual content.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#works"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400 active:bg-orange-600"
            >
              View My Work
              <FaArrowRight />
            </a>

            <a
              href="/resume.txt"
              download
              className="inline-flex min-h-[50px] items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm">
            <a
              href="https://github.com/zubair2018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-zinc-400 transition hover:text-white"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.youtube.com/@mirzubair321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-zinc-400 transition hover:text-white"
            >
              <FaYoutube />
              YouTube
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[310px] w-full max-w-md items-center justify-center sm:min-h-[360px]">
          <div className="absolute h-60 w-60 rounded-full border border-orange-500/20 bg-orange-500/[0.06] sm:h-72 sm:w-72" />

          <div className="absolute h-44 w-44 rotate-12 rounded-[2rem] border border-white/10 bg-[#141417] sm:h-56 sm:w-56" />

          <div className="relative z-10 grid h-36 w-36 -rotate-6 place-items-center rounded-3xl border-2 border-white bg-[#0b0b0d] shadow-2xl shadow-black/50 sm:h-44 sm:w-44">
            <span className="font-mono text-5xl font-black tracking-[-0.1em] text-orange-500 sm:text-6xl">
              {"</>"}
            </span>
          </div>

          <CodeSticker />
          <CreatorSticker />
          <SparkSticker />

          <p className="absolute top-3 left-0 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 sm:left-4">
            // digital builder
          </p>

          <p className="absolute bottom-0 right-0 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 sm:right-3">
            since 2023
          </p>
        </div>
      </div>
    </section>
  );
}