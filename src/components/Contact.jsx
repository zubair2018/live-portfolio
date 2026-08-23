import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/glitchtrical?igsh=MTBhcnJ2aTNqM2hpNA==",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EQDgGpALZ/",
    icon: FaFacebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@mirzubair321",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zubair-ahmad-mir-45721b1bb",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/zubair2018",
    icon: FaGithub,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please add your EmailJS values to the .env file.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again or contact me through social media.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-[#141417] px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Start a Project
          </p>

          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Have an idea?
            <span className="block text-orange-500">Let’s make it real.</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-8 text-zinc-400">
            For web development, creator content, video editing, or a digital
            collaboration, send a message and tell me what you are building.
          </p>

          <div className="mt-9">
            <p className="mb-4 flex items-center gap-2 text-sm font-bold text-zinc-300">
              <FaEnvelope className="text-orange-400" />
              Find me online
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Zubair Ahmad's ${social.label}`}
                    className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-orange-400/50 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-xl border border-white/10 bg-[#0b0b0d] p-5 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="from_name"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                placeholder="Your name"
                className="min-h-[48px] w-full rounded-md border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-orange-400"
              />
            </div>

            <div>
              <label
                htmlFor="from_email"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                placeholder="you@email.com"
                className="min-h-[48px] w-full rounded-md border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-orange-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-zinc-300"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to build?"
              className="min-h-[48px] w-full rounded-md border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-orange-400"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Tell me a little about your project..."
              className="w-full resize-y rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-orange-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending Message..." : "Send Message"}
            {!isSending && <FaArrowRight />}
          </button>

          {status.message && (
            <p
              className={`mt-4 rounded-md border px-4 py-3 text-sm leading-6 ${
                status.type === "success"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-red-400/30 bg-red-400/10 text-red-300"
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}