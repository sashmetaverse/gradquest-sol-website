import React from "react";
import Reveal from "../components/Reveal";

export default function FoundersNote() {
  return (
    <main data-testid="founders-page">
      <section className="pt-24 md:pt-32 pb-16" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-5">A Letter from the Founder</div>
            <h1 className="font-display font-light tracking-tighter leading-[1] text-5xl md:text-7xl max-w-4xl" style={{ color: "#0B1F3B" }} data-testid="founders-heading">
              A note, <em className="italic" style={{ color: "#C9962E" }}>from me to you.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="relative" data-testid="founder-photo-placeholder">
                  <div className="w-full aspect-[3/4] overflow-hidden">
                    <img src="/images/sash.png" alt="Founder" className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed rotate-6 hidden md:flex items-center justify-center bg-[#F6F1E4] pointer-events-none"
                    style={{ borderColor: "#C9962E", color: "#C9962E" }}
                  >
                    <span className="text-[0.55rem] tracking-widest uppercase text-center leading-tight font-semibold">
                      Est.
                      <br />
                      GradQuest
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <article className="prose prose-lg max-w-none" style={{ color: "rgba(11,31,59,0.85)" }} data-testid="founders-letter">
                  <p className="font-display italic text-2xl md:text-3xl leading-snug mb-8" style={{ color: "#0B1F3B" }}>
                    Dear student, dear parent,
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Some years ago, I sat across from a bright young student who had done everything right on paper — solid grades, an interesting essay, a genuine curiosity about the world — and yet was drowning in the maze of applications, deadlines and visa forms. Her parents, well-meaning and worried in equal measure, kept asking the same question: <em>who can we trust with her future?</em>
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    That conversation stayed with me. GradQuest Sol was built to be an answer to it. Not a shop that sells universities. Not a coaching class that only tallies scores. A quieter kind of place — where a student's aspirations are heard first, where mentorship is measured, and where the details of a visa file are treated with the same care as the wording of an admissions essay.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    We are educators before we are consultants. We believe test prep should teach a student to <em>think</em>, not just to score. We believe applications should reveal a student's real story, not a curated one. And we believe that when a young person boards their flight, the guidance shouldn't end at the gate.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    If you are reading this, you are likely at the start of a big decision. Come by our office. Have a cup of chai with us. Ask us the hard questions. We will listen more than we speak on that first meeting — and only then will we begin to design a road worthy of your ambition.
                  </p>
                  <p className="text-lg leading-relaxed mb-10">
                    Wherever the journey leads, we hope to be walking beside you.
                  </p>

                  <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(11,31,59,0.15)" }}>
                    <div className="font-script text-4xl md:text-5xl mb-2" style={{ color: "#0B1F3B" }} data-testid="founder-signature-placeholder" aria-label="Signature placeholder">
                      [Saswati Sanyal]
                    </div>
                    <div className="overline mt-1">Founder · GradQuest Sol</div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
