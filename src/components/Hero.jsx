// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-black text-white"
      id="home"
    >
      <div className="flex flex-col items-center md:flex-row md:items-center gap-10">
        {/* Left: Text */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-lg mb-2 tracking-wide">HELLO I'M</h2>
          <h1 className="font-bold text-5xl md:text-7xl leading-tight mb-2">
            <span className="block text-indigo-400">ZUBAIR</span>
            <span>AHMAD</span>
          </h1>
          <p className="max-w-xl text-slate-300 mb-6">
            A digital web designer who helps companies and organizations connect with their audience and grow their business online.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-indigo-500 rounded-full text-lg font-bold hover:bg-indigo-600 transition mb-6">
            Hire Me →
          </button>
          <div className="mt-4 text-indigo-300 text-lg font-semibold">
            50+ Happy Clients
          </div>
        </div>
        {/* Right: Profile image */}
<div className="md:w-1/3 flex justify-center items-center">
  <img
    src="hero2.png"
    alt="Zubair Ahmad"
    className="w-80 h-80 object-cover rounded-3xl border-4 border-indigo-500 shadow-lg"
  />
</div>

      </div>
    </section>
  );
}
