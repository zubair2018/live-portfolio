import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const serviceId = "service_uvqc30b";
  const templateId = "template_zuoq5hs";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => { setLoading(false); setStatus({ type: "success", message: "Your message is on its way. I’ll get back to you soon." }); formRef.current.reset(); },
      () => { setLoading(false); setStatus({ type: "error", message: "Something went wrong. Please try again." }); }
    );
  };

  const socials = [
    [FaInstagram, "Instagram", "https://www.instagram.com/glitchtrical?igsh=MTBhcnJ2aTNqM2hpNA=="],
    [FaFacebook, "Facebook", "https://www.facebook.com/share/1EQDgGpALZ/"],
    [FaYoutube, "YouTube", "https://www.youtube.com/@mirzubair321"],
    [FaLinkedin, "LinkedIn", "https://www.linkedin.com/in/zubair-ahmad-mir-45721b1bb"],
    [FaGithub, "GitHub", "https://github.com/zubair2018"],
  ];

  return (
    <section id="contact" className="bg-[#070b18] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">Let&apos;s connect</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Have a project<br />in mind?</h2>
          <p className="mt-6 max-w-md text-base leading-8 text-slate-400">Tell me what you&apos;re building, and let&apos;s make its digital presence impossible to ignore.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {socials.map(([Icon, label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-slate-300 transition hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-fuchsia-300/10 hover:text-fuchsia-100"><Icon /></a>)}
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-300">Name<input id="from_name" name="from_name" required placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10" /></label>
            <label className="text-sm font-medium text-slate-300">Email<input id="from_email" name="from_email" type="email" required placeholder="you@email.com" className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10" /></label>
          </div>
          <label className="mt-5 block text-sm font-medium text-slate-300">Message<textarea id="message" name="message" rows="6" required placeholder="Tell me a little about your project..." className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#070b18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10" /></label>
          <button type="submit" disabled={loading} className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-200 to-cyan-300 px-6 text-sm font-extrabold text-slate-950 transition hover:scale-[1.015] hover:shadow-xl hover:shadow-cyan-300/20 disabled:opacity-60">{loading ? "Sending..." : "Send message ↗"}</button>
          {status.message && <p className={`mt-4 text-sm ${status.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>{status.message}</p>}
        </form>
      </div>
    </section>
  );
}
