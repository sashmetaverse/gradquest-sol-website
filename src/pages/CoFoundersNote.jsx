import React from "react";
import Reveal from "../components/Reveal";

export default function CoFoundersNote() {
  return (
    <main data-testid="cofounders-page">
      <section className="pt-24 md:pt-32 pb-16" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-5">A Letter from the Co-Founder</div>
            <h1 className="font-display font-light tracking-tighter leading-[1] text-5xl md:text-7xl max-w-4xl" style={{ color: "#0B1F3B" }} data-testid="cofounders-heading">
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
                <div className="relative" data-testid="cofounder-photo-placeholder">
                  <div className="w-full aspect-[3/4] overflow-hidden">
                    <img src="/images/sash.png" alt="Co-Founder" className="w-full h-full object-cover" />
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
                <article className="prose prose-lg max-w-none" style={{ color: "rgba(11,31,59,0.85)" }} data-testid="cofounders-letter">
                  <p className="font-display italic text-2xl md:text-3xl leading-snug mb-8" style={{ color: "#0B1F3B" }}>
                    Dear student, dear parent,
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    For over fifteen years, education has been more than a career for me — it has been a calling. I have sat with hundreds of students across the IB, IGCSE and CBSE boards, and no two journeys ever looked the same. Some needed help finding their academic footing, others needed a language unlocked, and many simply needed someone to believe they could go further than they thought possible.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    That experience is why GradQuest Sol exists in the way it does. Alongside my work with Future Minds, I have always believed that academic excellence and personal mentorship cannot be separated — a student's marks matter, but so does the confidence, curiosity and clarity they carry into the world.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I believe every student deserves guidance that is personal, not generic — training that stretches across academics, language, and life skills, tailored to who they are and where they want to go. That belief has shaped every programme we have built here.
                  </p>
                  <p className="text-lg leading-relaxed mb-10">
                    Wherever the journey leads, we hope to be walking beside you.
                  </p>

                  <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(11,31,59,0.15)" }}>
                    <div className="font-script text-4xl md:text-5xl mb-2" style={{ color: "#0B1F3B" }} data-testid="cofounder-signature-placeholder" aria-label="Signature placeholder">
                      [Tanya Sharma]
                    </div>
                    <div className="overline mt-1">Co-Founder · GradQuest Sol</div>
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