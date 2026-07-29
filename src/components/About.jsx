export default function About() {
  return (
    <section id="about" className="bg-[#070b18] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">About me</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">Strategy first.<br /><span className="text-fuchsia-200">Details always.</span></h2>
          <div className="mt-9 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span className="h-px w-12 bg-fuchsia-300/50" /> Based in India · Working globally
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 sm:p-9">
          <p className="text-lg leading-8 text-slate-200 sm:text-xl">I&apos;m Zubair Ahmad, a web developer and content creator who turns ideas into digital experiences that feel considered from the first interaction.</p>
          <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 text-sm leading-7 text-slate-400 sm:grid-cols-2">
            <p>I combine responsive development with intentional visual design, so every screen feels clear, capable, and easy to use.</p>
            <p>From portfolios to products, I focus on polished systems that help people communicate their value with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
