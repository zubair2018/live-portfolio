// Updated About.jsx (remove circular image/box)
export default function About() {
  return (
    <section className="py-16 px-5 bg-slate-900 text-white" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-slate-300 mb-6">
          I'm Zubair Ahmad, a passionate web designer and entrepreneur dedicated to crafting beautiful,
           user-friendly digital experiences. With hands-on expertise in modern technologies
            and a keen eye for detail, I help brands and businesses communicate their vision,
             connect with their audience, and grow online. 
             I believe in the power of design to simplify, inspire,
              and make a lasting impression—whether it's a sleek portfolio,
               an e-commerce platform, or a personal blog.
                My approach combines creativity, strategy, and technical skill to turn ideas 
                into impact. Let's build something extraordinary together!
        </p>
        {/* Remove circle or about image here */}
      </div>
    </section>
  );
}
