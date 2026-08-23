const developmentSkills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
];

const creatorSkills = [
  "DaVinci Resolve",
  "Video Editing",
  "Short-Form Content",
  "Content Planning",
  "Thumbnail Design",
  "Visual Storytelling",
];

function StackGroup({ title, label, items }) {
  return (
    <article className="rounded-xl border border-white/10 bg-[#141417] p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            {label}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">
            {title}
          </h3>
        </div>

        <span className="font-mono text-xs text-zinc-500">
          {String(items.length).padStart(2, "0")} tools
        </span>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-zinc-300 transition hover:border-orange-400/50 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0b0d] px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Stack + Tools
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Code on one side. Creative tools on the other.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <StackGroup
            label="Development"
            title="Web stack"
            items={developmentSkills}
          />

          <StackGroup
            label="Creation"
            title="Content toolkit"
            items={creatorSkills}
          />
        </div>
      </div>
    </section>
  );
}