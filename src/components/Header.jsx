import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" }, { name: "About", href: "#about" },
    { name: "Services", href: "#services" }, { name: "Skills", href: "#skills" },
    { name: "Work", href: "#works" }, { name: "Content", href: "#content" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070b18]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-100 transition group-hover:rotate-6 group-hover:bg-cyan-300/20">ZA</span>
          <span className="text-sm font-bold tracking-tight text-white">Zubair Ahmad</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <a key={link.name} href={link.href} className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-cyan-200">{link.name}</a>)}
          <a href="#contact" className="rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-4 py-2 text-xs font-bold text-fuchsia-100 transition hover:-translate-y-0.5 hover:bg-fuchsia-400/20">Let&apos;s talk</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-slate-100 lg:hidden" aria-label="Toggle menu">
          {open ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </div>
      {open && <nav className="border-t border-white/[0.08] bg-[#0a1020]/95 px-5 py-5 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {[...links, { name: "Contact", href: "#contact" }].map((link) => <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-cyan-100">{link.name}</a>)}
        </div>
      </nav>}
    </header>
  );
}
