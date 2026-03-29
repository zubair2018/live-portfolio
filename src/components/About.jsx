export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            About Me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            A creative mix of web development and content creation
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
          <p>
            I’m Zubair Ahmad, a web designer, MERN developer, and part-time
            content creator who enjoys building strong digital identities for
            brands, businesses, and personal projects.
          </p>
          <p>
            My work is no longer only about websites. I also create and edit
            content, shape visual storytelling, and use design, video, and
            strategy together to help online presence feel more complete and
            professional.
          </p>
          <p>
            Whether it’s a modern portfolio, a business website, a logistics
            project, a reel, or branded content, I like creating work that looks
            good and performs with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}