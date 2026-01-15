// src/components/Header.jsx
export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 sticky top-0 z-50 bg-slate-900/80 backdrop-blur">
      <div>
        <img
          src="/logo.png"
          alt="Zubair Ahmad Logo"
          className="w-12 h-12 object-contain"
        />
      </div>
      <nav className="flex gap-8 items-center">
        <a href="#home" className="text-slate-300 hover:text-indigo-400">Home</a>
        <a href="#works" className="text-slate-300 hover:text-indigo-400">Our Works</a>
        <a href="#blog" className="text-slate-300 hover:text-indigo-400">Blog</a>
        <a href="#contact">
          <button className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">Contact</button>
        </a>
      </nav>
    </header>
  );
}
