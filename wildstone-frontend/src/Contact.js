import React, { useState } from "react";

const CONTACT_EMAIL = "bnewhard@wildstonesolutions.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Website inquiry from ${form.name || "WildStone visitor"}`;
    const bodyLines = [
      form.message,
      "",
      "—",
      form.name ? `Name: ${form.name}` : null,
      form.email ? `Email: ${form.email}` : null,
    ].filter(Boolean);
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex flex-col items-center pt-24 px-4 pb-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2 text-center">Contact Us</h1>
        <p className="text-zinc-300 text-center mb-8 max-w-lg mx-auto">
          Have a question about WildStone Solutions or the CompactIQ app? Send us a message and
          we&apos;ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 rounded-xl p-6 md:p-8 shadow-md border border-zinc-700 flex flex-col gap-5"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-zinc-200 text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-zinc-200 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-md bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-zinc-200 text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="rounded-md bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-zinc-200 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              className="rounded-md bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white shadow-md transition duration-300 font-semibold"
          >
            Send Message
          </button>

          <p className="text-zinc-400 text-sm text-center">
            Prefer your own email app? Reach us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
