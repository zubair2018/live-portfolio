import { FaArrowUp, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0d] px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black tracking-tight text-white">
            Zubair Ahmad<span className="text-orange-500">.</span>
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Web Developer & Content Creator · © {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/zubair2018"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition hover:text-orange-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/zubair-ahmad-mir-45721b1bb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition hover:text-orange-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.youtube.com/@mirzubair321"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-zinc-500 transition hover:text-orange-400"
          >
            <FaYoutube />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-orange-400/50 hover:bg-orange-500 hover:text-white"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}