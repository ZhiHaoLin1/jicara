"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-paper border border-clay/20 text-ink font-lora text-base px-4 py-3.5 outline-none focus:border-clay transition-colors placeholder:text-sepia/40 appearance-none";

  return (
    <section
      id="contactform"
      className="bg-plaster border-t border-clay/15 py-24 md:py-28 px-8 md:px-12 relative"
    >
      <div className="zapotec-stripe absolute top-0 left-0 right-0" />

      <div className="max-w-[620px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-dm text-[10px] tracking-[0.32em] uppercase text-clay">
            Get in Touch
          </span>
          <span className="w-7 h-px bg-clay opacity-50" />
        </div>

        <h2
          className="font-fraunces font-black text-ink leading-[0.95] mb-10"
          style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
        >
          Send a{" "}
          <em className="text-clay font-light not-italic italic">message</em>
        </h2>

        {status === "sent" ? (
          <div className="border border-sage/40 bg-sage/10 px-8 py-10 text-center">
            <p className="font-fraunces font-bold text-2xl text-ink mb-2">
              Message received.
            </p>
            <p className="font-lora italic text-sepia">
              We'll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <select
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={`${inputClass} cursor-pointer`}
              style={{ backgroundImage: "none" }}
            >
              <option>General Inquiry</option>
              <option>Private Events</option>
              <option>Catering</option>
              <option>Job Application</option>
            </select>

            <textarea
              placeholder="Your message..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-y`}
            />

            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-dm text-[11px] tracking-[0.2em] uppercase bg-clay text-straw px-8 py-4 border border-clay hover:bg-sienna hover:border-sienna transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="font-lora italic text-sm text-clay">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
