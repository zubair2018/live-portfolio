// src/components/Skills.jsx
const skills = [
  "React", "TailwindCSS", "JavaScript", "Figma", "Photoshop", "UI/UX", "Node.js"
];

export default function Skills() {
  return (
    <section className="py-16 px-5 bg-slate-900 text-white" id="skills">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(skill => (
            <span key={skill} className="block bg-slate-800 rounded-xl p-4 shadow text-indigo-300 font-bold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
