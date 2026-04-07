export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            About Me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            I make websites and create content.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-7 text-yellow-400 font-bold sm:text-base">
          <p>
            I am Zubair Ahmad, a web developer and part-time content creator with a strong interest in building professional digital experiences.
          </p>
          <p>
            My work focuses on creating responsive websites, user-friendly interfaces, and well-crafted digital content that supports personal brands and businesses.
          </p>
          <p>
            I aim to deliver work that is visually clean, technically reliable, and aligned with clear communication and strong presentation.
          </p>
        </div>
      </div>
    </section>
  );
}