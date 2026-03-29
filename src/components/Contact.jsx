import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const serviceId = "service_uvqc30b";
  const templateId = "template_zuoq5hs";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });
        formRef.current.reset();
      },
      () => {
        setLoading(false);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    );
  };

  return (
    <section id="contact" className="bg-slate-900 px-5 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Contact
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s build and create something strong
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Whether you need a website, a web app, edited content, or creative
            digital support, send me a message here.
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-2xl">
            <a
              href="https://www.instagram.com/glitchtrical?igsh=MTBhcnJ2aTNqM2hpNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-fuchsia-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1EQDgGpALZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-fuchsia-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@mirzubair321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-fuchsia-300"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/in/zubair-ahmad-mir-45721b1bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-fuchsia-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/zubair2018"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-fuchsia-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="from_name"
              className="mb-2 block text-sm text-slate-300"
            >
              Name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-fuchsia-400"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="from_email"
              className="mb-2 block text-sm text-slate-300"
            >
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-fuchsia-400"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-fuchsia-400"
              placeholder="Tell me about your project"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p
              className={`mt-4 text-sm ${
                status.type === "success" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}