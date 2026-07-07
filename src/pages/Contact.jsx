import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, Check, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SocialIcon from "../components/SocialIcon";
import { BRAND, PROGRAMMES, SOCIALS } from "../lib/content";

const FORMSPREE_URL = "https://formspree.io/f/xdarjaeo"; // paste your Formspree endpoint
const SHEETS_URL = "https://script.google.com/macros/s/AKfycby-hLpx4tvmqLXn81gxRdYT_ldeuOMkL5KyxIz7CyjHuPVs5W5xSE4dLGxskh-2EW5RPw/exec"; // paste your Apps Script URL

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", programme: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Please share your name, email and phone number so we can reply.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      programme: form.programme,
      message: form.message,
    };

    fetch(SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
    } catch (err) {
      // email send failed silently — enquiry may still be logged in Sheets
    }

    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", programme: "", message: "" });
  };

  return (
    <main data-testid="contact-page">
      <section className="pt-24 md:pt-32 pb-16" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-5">Contact</div>
            <h1 className="font-display font-light tracking-tighter leading-[1] text-5xl md:text-7xl max-w-4xl" style={{ color: "#0B1F3B" }} data-testid="contact-heading">
              Let's begin with a <em className="italic" style={{ color: "#C9962E" }}>conversation.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg" style={{ color: "rgba(11,31,59,0.75)" }}>
              Share a few details and one of our counsellors will get back to you within one working day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-5 relative overflow-hidden p-8 md:p-12" style={{ backgroundColor: "#0B1F3B", color: "#F6F1E4" }} data-testid="contact-info-card">
              <div aria-hidden="true" className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-2 border-dashed" style={{ borderColor: "rgba(201,150,46,0.35)" }} />
              <div className="relative">
                <div className="overline mb-6" style={{ color: "#C9962E" }}>Visit · Call · Write</div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">Our doors, always open.</h2>

                <ul className="space-y-6 text-sm">
                  <li className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full border border-dashed flex items-center justify-center flex-shrink-0" style={{ borderColor: "#C9962E" }}>
                      <MapPin size={14} style={{ color: "#C9962E" }} />
                    </span>
                    <span data-testid="contact-address" style={{ color: "rgba(246,241,228,0.9)" }}>{BRAND.address}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full border border-dashed flex items-center justify-center flex-shrink-0" style={{ borderColor: "#C9962E" }}>
                      <Phone size={14} style={{ color: "#C9962E" }} />
                    </span>
                    <span data-testid="contact-phones" style={{ color: "rgba(246,241,228,0.9)" }}>{BRAND.phones.join(" / ")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full border border-dashed flex items-center justify-center flex-shrink-0" style={{ borderColor: "#C9962E" }}>
                      <Mail size={14} style={{ color: "#C9962E" }} />
                    </span>
                    <a href={`mailto:${BRAND.email}`} data-testid="contact-email" className="hover:text-[#C9962E]" style={{ color: "rgba(246,241,228,0.9)" }}>
                      {BRAND.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(246,241,228,0.15)" }}>
                  <div className="overline mb-4" style={{ color: "#C9962E" }}>Follow the journey</div>
                  <div className="flex items-center gap-3" data-testid="contact-socials">
                    {SOCIALS.map((s) => (
                      <SocialIcon key={s.name} name={s.icon} href={s.href} testid={`contact-social-${s.icon}`} variant="light" />
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="border p-8 md:p-12 bg-[#FFFFF0]" style={{ borderColor: "rgba(11,31,59,0.15)" }} data-testid="contact-success">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center mb-6" style={{ borderColor: "#C9962E" }}>
                    <Check size={22} style={{ color: "#C9962E" }} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "#0B1F3B" }}>
                    Thank you, {form.name.split(" ")[0] || "friend"}.
                  </h2>
                  <p className="text-base leading-relaxed max-w-lg" style={{ color: "rgba(11,31,59,0.8)" }}>
                    Your enquiry has been received. A member of our counselling team will be in touch shortly at{" "}
                    <span style={{ color: "#0B1F3B" }} className="font-medium">{form.email}</span>. In the meantime, feel free to browse our programmes or the seven-step journey.
                  </p>
                  <button type="button" onClick={reset} data-testid="contact-send-another" className="btn-ghost mt-8">
                    Send another enquiry <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-8" noValidate>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="overline block mb-2" htmlFor="c-name">Your Name</label>
                      <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange} data-testid="contact-input-name" className="field-input" placeholder="Priya Sharma" required />
                    </div>
                    <div>
                      <label className="overline block mb-2" htmlFor="c-email">Email</label>
                      <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} data-testid="contact-input-email" className="field-input" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label className="overline block mb-2" htmlFor="c-phone">Phone</label>
                      <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} data-testid="contact-input-phone" className="field-input" placeholder="9953159202" maxLength={10} required />
                    </div>
                    <div className="relative">
                      <label className="overline block mb-2" htmlFor="c-prog">Programme of Interest</label>
                      <select id="c-prog" name="programme" value={form.programme} onChange={handleChange} data-testid="contact-input-programme" className="field-input appearance-none pr-8 cursor-pointer" style={{ backgroundColor: "transparent" }}>
                        <option value="">Select a programme…</option>
                        {PROGRAMMES.map((p) => (
                          <option key={p.slug} value={p.slug}>{p.title}</option>
                        ))}
                        <option value="other">Something else</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 bottom-3 pointer-events-none" style={{ color: "rgba(11,31,59,0.5)" }} />
                    </div>
                  </div>

                  <div>
                    <label className="overline block mb-2" htmlFor="c-msg">Your Message</label>
                    <textarea id="c-msg" name="message" rows="4" value={form.message} onChange={handleChange} data-testid="contact-input-message" className="field-input resize-none" placeholder="Tell us a little about your goals…" />
                  </div>

                  {error && (
                    <div data-testid="contact-error" className="text-sm px-4 py-3" style={{ backgroundColor: "rgba(201,150,46,0.1)", color: "#0B1F3B", border: "1px solid #C9962E" }}>
                      {error}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-6">
                    <button type="submit" data-testid="contact-submit" className="btn-gold">
                      Send Enquiry <ArrowRight size={16} />
                    </button>
                    <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(11,31,59,0.55)" }}>
                      No spam. Ever.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
