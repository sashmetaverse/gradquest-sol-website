import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PassportStamp from "../components/PassportStamp";
import Reveal from "../components/Reveal";
import { PROGRAMMES, PROCESS, WHY_US } from "../lib/content";

export default function Programmes() {
  return (
    <main data-testid="programmes-page">
      <section className="pt-24 md:pt-32 pb-16" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-5">Programmes</div>
            <h1 className="font-display font-light tracking-tighter leading-[1] text-5xl md:text-7xl max-w-4xl" style={{ color: "#0B1F3B" }} data-testid="programmes-heading">
              Five disciplines. One <em className="italic" style={{ color: "#C9962E" }}>global</em> ambition.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }}>
              Each programme is designed like a bespoke garment — measured to the student, tailored to the target, and refined until it fits.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            {PROGRAMMES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <article data-testid={`programme-card-${p.slug}`} className="card-lift border bg-[#FFFFF0] p-8 md:p-10 h-full flex flex-col" style={{ borderColor: "rgba(11,31,59,0.12)" }}>
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="overline mb-3">{p.kicker}</div>
                      <h2 className="font-display text-3xl md:text-4xl leading-tight" style={{ color: "#0B1F3B" }}>
                        {p.title}
                      </h2>
                    </div>
                    <div className="hidden sm:block">
                      <PassportStamp size={96} primary={String(i + 1).padStart(2, "0")} secondary={p.title.split(" ")[0]} variant={i} testid={`programme-stamp-${p.slug}`} />
                    </div>
                  </div>
                  <span className="gold-rule mb-6" />
                  <p className="text-base leading-relaxed" style={{ color: "rgba(11,31,59,0.78)" }}>
                    {p.body}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "rgba(11,31,59,0.8)" }}>
                        <Check size={14} className="mt-1 flex-shrink-0" style={{ color: "#C9962E" }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link to="/contact" data-testid={`programme-enquire-${p.slug}`} className="text-sm font-medium tracking-wide inline-flex items-center gap-2 hover:gap-3 transition-all" style={{ color: "#C9962E" }}>
                      Enquire about {p.title} <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#0B1F3B", color: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="overline mb-4">The Seven-Step Journey</div>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight">
                  From <em className="italic" style={{ color: "#C9962E" }}>counselling</em> to
                  <br />
                  campus. Seven measured steps.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed" style={{ color: "rgba(246,241,228,0.75)" }}>
                  Because a great study-abroad journey is not a leap — it is a series of deliberate, well-planned steps. Here is the path we walk with every student.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative pl-20 md:pl-24">
            <div className="absolute left-[26px] md:left-[30px] top-4 bottom-4 border-l-2 border-dashed" style={{ borderColor: "rgba(201,150,46,0.5)" }} />
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className="relative flex items-start gap-6 py-6 md:py-8" data-testid={`process-step-${step.n}`}>
                  <div className="timeline-node absolute -left-20 md:-left-24" style={{ backgroundColor: "#0B1F3B", color: "#F6F1E4" }}>
                    {step.n}
                  </div>
                  <div>
                    <span className="font-display absolute -top-2 -left-4 text-8xl md:text-9xl leading-none pointer-events-none select-none" style={{ color: "rgba(246,241,228,0.05)" }} aria-hidden="true">
                      {step.n}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl mb-2 relative" style={{ color: "#F6F1E4" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm max-w-2xl" style={{ color: "rgba(246,241,228,0.75)" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <div className="overline mb-4">Why Choose Us</div>
              <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                A partnership built on <em className="italic">substance</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div data-testid={`why-us-card-${i}`} className={`card-lift border bg-[#FFFFF0] p-7 h-full flex flex-col ${i === 0 ? "lg:col-span-2" : ""}`} style={{ borderColor: "rgba(11,31,59,0.1)" }}>
                  <span className="font-display text-4xl mb-4" style={{ color: "#C9962E" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl mb-3" style={{ color: "#0B1F3B" }}>
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }}>
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
