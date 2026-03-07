// src/components/Header.jsx
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const navLinkClass =
    "block px-4 py-2 md:px-0 md:py-0 text-sm font-medium text-slate-300 hover:text-purple-300";

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png" // logo in public
            alt="Zubair Ahmad Logo"
            className="w-9 h-9 object-contain"
          />
          <span className="text-purple-300 font-semibold text-base sm:text-lg">
            Zubair Ahmad
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={navLinkClass}>
            Home
          </a>
          <a href="#about" className={navLinkClass}>
            About
          </a>
          <a href="#skills" className={navLinkClass}>
            Skills
          </a>
          <a href="#works" className={navLinkClass}>
            Projects
          </a>
          <a href="#contact">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-semibold shadow-md shadow-purple-500/30">
              Contact
            </button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/70 transition"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-slate-950/95 border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <a href="#home" className={navLinkClass} onClick={closeMenu}>
              Home
            </a>
            <a href="#about" className={navLinkClass} onClick={closeMenu}>
              About
            </a>
            <a href="#skills" className={navLinkClass} onClick={closeMenu}>
              Skills
            </a>
            <a href="#works" className={navLinkClass} onClick={closeMenu}>
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/30"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
