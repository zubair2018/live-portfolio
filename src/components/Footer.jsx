export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-6 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Zubair Ahmad. All rights reserved.
    </footer>
  );
}