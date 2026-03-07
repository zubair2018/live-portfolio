const skills = [
  "React",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Figma",
  "UI/UX",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-5 bg-gradient-to-b from-purple-950 to-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="text-base sm:text-lg font-bold text-white">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
