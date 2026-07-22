import React from "react";
import Reveal from "../components/Reveal";
import FacultyPlaceholder from "../components/FacultyPlaceholder";
import { VALUES, APPROACH, FACULTY } from "../lib/content";

export default function About() {
  return (
    <main data-testid="about-page">
      <section className="pt-24 md:pt-32 pb-16" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-5">About Us</div>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="font-display font-light tracking-tighter leading-[1] text-5xl md:text-7xl" style={{ color: "#0B1F3B" }} data-testid="about-heading">
                  A house of <em className="italic" style={{ color: "#C9962E" }}>learning</em>,
                  <br />built on trust.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }}>
                  GradQuest Sol is a centre of excellence for global education — half classroom, half consulate, entirely focused on the student who walks through our door.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-4">Our Story</div>
            <h2 className="font-display font-light tracking-tight text-3xl md:text-4xl leading-snug mb-8" style={{ color: "#0B1F3B" }}>
              Founded by educators, shaped by families, run for students.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="prose prose-lg max-w-none" style={{ color: "rgba(11,31,59,0.8)" }}>
              <p className="text-lg leading-relaxed mb-6">
                GradQuest Sol began with a simple observation: the road to a global degree was full of avoidable turns. Test preparation happened in one place, admissions counselling in another, visa help scattered across strangers. Families were left to stitch it all together.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We built a house where all of it lives under one roof — IELTS, SAT, IB and IG tutoring; foreign languages; and the long, careful arc of study-abroad planning. Our mission is to give every student, regardless of background, the mentorship, strategy and calm required to reach a global classroom.
              </p>
              <p className="text-lg leading-relaxed">
                Our vision is quieter but no less ambitious: to be the trusted first name families think of when they picture their child abroad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#FFFFF0" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <div className="overline mb-4">Our Values</div>
              <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                Three commitments, kept quietly.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.key} delay={i * 0.08}>
                <div data-testid={`about-value-${v.key}`} className="card-lift border p-8 h-full flex flex-col bg-[#F6F1E4]" style={{ borderColor: "rgba(11,31,59,0.1)" }}>
                  <span className="font-display text-5xl leading-none mb-5" style={{ color: "rgba(11,31,59,0.15)" }}>
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

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overline mb-4">Our Approach</div>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                  Understand. Design.
                  <br />
                  Train. <em className="italic" style={{ color: "#C9962E" }}>Deliver.</em>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed" style={{ color: "rgba(11,31,59,0.75)" }}>
                  A rhythm to how we work. Four movements, always in this order, never rushed.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {APPROACH.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.08}>
                <div data-testid={`approach-${a.step.toLowerCase()}`} className="border-t-2 pt-6" style={{ borderColor: "#C9962E" }}>
                  <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#C9962E" }}>
                    Step 0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 mb-3" style={{ color: "#0B1F3B" }}>
                    {a.step}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(11,31,59,0.7)" }}>
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#FFFFF0" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <Reveal>
                <div className="overline mb-4">Faculty & Mentors</div>
                <h2 className="font-display font-light tracking-tight text-4xl md:text-5xl leading-tight" style={{ color: "#0B1F3B" }}>
                  The people behind the plan.
                </h2>
              </Reveal>
            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY.map((f, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <FacultyPlaceholder name={f.name} role={f.role} photo={f.photo} testid={`faculty-card-${i}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
