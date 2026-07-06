import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PassportStamp from "../components/PassportStamp";
import CitySkyline from "../components/CitySkyline";
import FlightPath from "../components/FlightPath";
import Reveal from "../components/Reveal";
import { BRAND, VALUES, PROGRAMMES, PROCESS } from "../lib/content";

export default function Home() {
  return (
    <main data-testid="home-page">
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F6F1E4" }}>
        <FlightPath className="absolute inset-x-0 top-0 w-full h-[340px] opacity-90" />
        <div className="hidden md:block absolute right-8 top-28 rotate-6 opacity-90">
          <PassportStamp size={128} primary="✓" secondary="Admitted" variant={1} testid="hero-stamp-admitted" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-6 md:pb-12 relative">
          <Reveal>
            <div className="overline mb-5" data-testid="hero-overline">
              Centre of Excellence · Global Education
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-light tracking-tighter leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]" data-testid="hero-headline" style={{ color: "#0B1F3B" }}>
              Where Ambition <br />
              Meets <em className="italic font-normal" style={{ color: "#C9962E" }}>Opportunity.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }} data-testid="hero-subhead">
              {BRAND.tagline} From IELTS to Ivy — from your first consultation to your first day on campus, GradQuest Sol walks with you.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" data-testid="hero-cta-book-consultation" className="btn-gold">
                Book a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/programmes" data-testid="hero-cta-explore-programmes" className="btn-ghost">
                Explore Programmes <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <CitySkyline className="w-full h-[180px] md:h-[220px] block" />
        </div>
      </section>

      <section className="py-20 md:py-24 border-y" style={{ backgroundColor: "#FFFFF0", borderColor: "rgba(11,31,59,0.08)" }} data-testid="stats-strip">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-items-center">
            {[
              { p: "05", s: "Programmes", v: 0 },
              { p: "07", s: "Step Process", v: 1 },
              { p: "1:1", s: "Mentoring", v: 2 },
              { p: "∞", s: "Ambition", v: 3 },
            ].map((s, i) => (
              <Reveal key={s.s} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-4">
                  <PassportStamp size={144} primary={s.p} secondary={s.s} variant={s.v} testid={`stamp-stat-${s.s.toLowerCase().replace(/\s/g, "-")}`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="overline mb-4">Our Values</div>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                  A philosophy shaped by <em className="italic">care</em>, <em className="italic">rigour</em> and reach.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }}>
                  Three principles guide every consultation, every lesson plan and every visa file we prepare. They are not slogans — they are how we work.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.key} delay={i * 0.08}>
                <div className="card-lift p-8 border bg-[#FFFFF0] h-full flex flex-col" style={{ borderColor: "rgba(11,31,59,0.1)" }} data-testid={`value-card-${v.key}`}>
                  <span className="font-display text-6xl leading-none mb-6" style={{ color: "rgba(11,31,59,0.12)" }}>
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl mb-3" style={{ color: "#0B1F3B" }}>
                    {v.title}
                  </h3>
                  <span className="gold-rule mb-4" />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }}>
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#0B1F3B", color: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <Reveal>
                <div className="overline mb-4">Programmes</div>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight max-w-xl">
                  Five pathways.
                  <br />
                  One <em className="italic" style={{ color: "#C9962E" }}>destination</em>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link to="/programmes" data-testid="home-programmes-see-all" className="btn-outline-gold">
                See all programmes <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PROGRAMMES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <div className="prog-card group cursor-default pt-6" style={{ borderTop: "1px solid rgba(246,241,228,0.18)" }} data-testid={`home-programme-${p.slug}`}>
                  <div className="text-[0.65rem] tracking-[0.3em] uppercase mb-3" style={{ color: "#C9962E" }}>
                    {p.kicker}
                  </div>
                  <h3 className="font-display text-2xl mb-4 transition-colors group-hover:text-[#C9962E]">{p.title}</h3>
                  <span className="prog-underline mb-4" />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(246,241,228,0.75)" }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="overline mb-4">The Journey</div>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                  Seven steps to a <em className="italic">boarded flight</em>.
                </h2>
                <p className="mt-6 text-base leading-relaxed max-w-md" style={{ color: "rgba(11,31,59,0.75)" }}>
                  A calm, methodical process — from that first honest conversation to the moment you settle into your new city.
                </p>
                <Link to="/programmes" data-testid="home-process-cta" className="btn-ghost mt-8 inline-flex">
                  See the full process <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="relative pl-16">
                <div className="absolute left-[22px] top-2 bottom-2 border-l-2 border-dashed" style={{ borderColor: "rgba(201,150,46,0.5)" }} />
                {PROCESS.slice(0, 4).map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.06}>
                    <div className="relative flex items-start gap-6 py-6" data-testid={`home-process-step-${step.n}`}>
                      <div className="timeline-node absolute -left-16">{step.n}</div>
                      <div>
                        <h4 className="font-display text-xl mb-2" style={{ color: "#0B1F3B" }}>
                          {step.title}
                        </h4>
                        <p className="text-sm" style={{ color: "rgba(11,31,59,0.7)" }}>
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <div className="pl-0 pt-4 text-sm italic" style={{ color: "rgba(11,31,59,0.55)" }}>
                  … three more steps continue on the Programmes page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                  Your <em className="italic" style={{ color: "#C9962E" }}>next chapter</em> begins with a conversation.
                </h2>
                <p className="mt-5 text-base max-w-xl" style={{ color: "rgba(11,31,59,0.75)" }}>
                  Book a complimentary consultation — no obligations, no scripts. Just a quiet listen, an honest read of your ambitions, and a way forward.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Reveal delay={0.1}>
                <Link to="/contact" data-testid="cta-band-book" className="btn-gold">
                  Book a Free Consultation <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
