// src/components/Contact.jsx
import {FaInstagram,FaFacebook,FaYoutube,FaLinkedin,FaGithub,} from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 px-5 bg-black text-white" id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-300 mb-6">
          Want to collaborate or talk about your next project? Email me below!
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-full font-bold hover:bg-indigo-600 transition mb-4"
        >
          Email Me
        </a>
        {/* Social media icons below */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 text-4xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 text-4xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600 text-4xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 text-4xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
