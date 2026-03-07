import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-5 bg-gradient-to-b from-slate-950 to-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Work
          </span>
          <span className="block text-white">Together</span>
        </h2>

        <a
          href="mailto:your@email.com"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-bold shadow-lg shadow-purple-500/40 hover:from-purple-600 hover:to-pink-600 transition"
        >
          Get in Touch
        </a>

        <div className="pt-8">
          <p className="text-slate-400 mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 text-3xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-3xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-red-500 hover:text-red-400 text-3xl transition"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 text-3xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 text-3xl transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
