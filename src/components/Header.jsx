import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Stack", href: "#skills" },
  { name: "Work", href: "#works" },
  { name: "Content", href: "#content" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-md border border-white/10 bg-[#141417]">
          <img
            src="/logo.png"
              alt="Zubair Ahmad logo"
          className="h-full w-full object-contain"
            />
            
          </span>

          <span className="text-sm font-bold tracking-tight text-white sm:text-base">
            Zubair Ahmad
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://github.com/zubair2018"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Zubair Ahmad's GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-orange-400/50 hover:text-orange-400"
          >
            <FaGithub />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/10 text-white transition hover:border-orange-400/50 hover:text-orange-400 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0d] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-orange-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://github.com/zubair2018"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-orange-400"
            >
              <FaGithub />
              GitHub Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}