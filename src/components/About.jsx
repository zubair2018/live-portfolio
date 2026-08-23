const focusItems = [
  "Responsive web development",
  "Modern frontend interfaces",
  "Short-form video editing",
  "Creator-focused digital content",
];

export default function About() {
  return (
    <section id="about" className="bg-[#0b0b0d] px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            About / Now
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Building useful things with a creative edge.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            I am Zubair Ahmad, a web developer and part-time content creator.
            I combine development, design thinking, and visual storytelling to
            create stronger digital experiences.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            My work focuses on modern websites, frontend interfaces, short-form
            content, and digital assets that help people and brands present
            themselves with clarity and confidence online.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {focusItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-white/10 py-4 text-sm font-semibold text-zinc-200"
              >
                <span className="font-mono text-xs text-orange-400">
                  0{index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}