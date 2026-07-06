import React from "react";
import Reveal from "../components/Reveal";
import { BRAND } from "../lib/content";

const SECTIONS = [
  {
    id: "info-collected",
    title: "1. Information We Collect",
    body: (
      <>
        <p>We collect information that helps us understand your educational goals and provide relevant guidance. This includes:</p>
        <ul>
          <li><strong>Contact details</strong> — name, phone number, email address, and postal address you share through enquiry forms, phone calls, or messaging channels.</li>
          <li><strong>Enquiry and form data</strong> — the programme(s) you are interested in, your intended country/university, level of study, and any preferences you disclose.</li>
          <li><strong>Messages and correspondence</strong> — chat transcripts, emails, call notes, and any documents shared during counselling sessions.</li>
          <li><strong>Academic and personal documents</strong> — transcripts, mark sheets, identification proofs, passports, financial statements, essays, statements of purpose, and letters of recommendation.</li>
          <li><strong>Technical and cookie data</strong> — device type, browser, IP address, pages visited, and interaction analytics collected via cookies and similar technologies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-used",
    title: "2. How We Use Your Information",
    body: (
      <>
        <p>Your information is used to:</p>
        <ul>
          <li>Respond to enquiries and provide counselling and coaching services.</li>
          <li>Prepare and review test-preparation and application materials.</li>
          <li>Shortlist universities, prepare applications, and coordinate visa filings.</li>
          <li>Send you academic reminders, class schedules, and service updates.</li>
          <li>Send periodic newsletters, event invites, and educational content (only if you opt in).</li>
          <li>Improve our website, services and internal processes.</li>
          <li>Comply with applicable law and regulatory requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking Technologies",
    body: (
      <>
        <p>Our website uses cookies and similar technologies to remember your preferences, analyse traffic and improve your experience. You may disable cookies via your browser settings; however, some features of the site may not function as intended.</p>
        <p>We may also use privacy-respecting analytics tools (e.g., page-view and referrer analytics). We do not sell your data to advertisers.</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "4. Third-Party Messaging & Social Channels",
    body: (
      <>
        <p>When you contact us through third-party messaging or social media platforms, your communication is subject to the privacy policies and terms of the respective platform, in addition to this policy. We do not control how those platforms collect, store or process your data, and we recommend reviewing their policies independently.</p>
        <p>Any documents, personal details or messages shared with us via such platforms are transferred to our internal systems and are then governed by this Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. Data Sharing & Disclosure",
    body: (
      <>
        <p>We share your data only in the following limited circumstances:</p>
        <ul>
          <li><strong>Universities and admission bodies</strong> — application documents are shared strictly as required for your admissions process, with your knowledge.</li>
          <li><strong>Visa authorities and embassies</strong> — as required to process your visa application.</li>
          <li><strong>Service providers</strong> — vetted vendors who help us with hosting, communications, analytics, and back-office operations, under confidentiality obligations.</li>
          <li><strong>Legal and regulatory bodies</strong> — where required by law, court order or regulatory instruction.</li>
        </ul>
        <p>We do not sell or rent your personal information to any third party.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: (
      <p>We retain personal information for as long as necessary to provide the services you have engaged us for, and thereafter for a reasonable period to comply with legal, accounting and record-keeping obligations. When no longer required, data is securely deleted or anonymised.</p>
    ),
  },
  {
    id: "security",
    title: "7. Security",
    body: (
      <p>We implement appropriate technical and organisational measures — access controls, encryption in transit, secure storage, and staff confidentiality agreements — to safeguard your information. No system, however, is entirely immune to risk, and you share information with us at your own discretion.</p>
    ),
  },
  {
    id: "children",
    title: "8. Children's Privacy & Parental Consent",
    body: (
      <>
        <p>Many of our students are minors. Where a student is under the age of 18, a parent or legal guardian must provide consent before any personal information is submitted to us, and must remain involved in the engagement. We recommend that parents supervise online interactions and document submissions made by minors.</p>
        <p>If you believe a minor has provided us information without appropriate parental consent, please contact us and we will delete such data promptly.</p>
      </>
    ),
  },
  {
    id: "rights",
    title: "9. Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request deletion of your data, subject to applicable legal retention requirements.</li>
          <li>Withdraw consent to marketing communications at any time.</li>
          <li>Raise concerns about how your data is being handled.</li>
        </ul>
        <p>
          To exercise these rights, please write to us at{" "}
          <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a>. We will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "10. International Data Transfers",
    body: (
      <p>To coordinate applications, visas and post-arrival support, your data may be transferred to universities, service partners or authorities located outside your country of residence. Where such transfers occur, we take reasonable steps to ensure a comparable standard of protection applies.</p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: (
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or service scope. Updated versions will be posted on this page with a revised "Last Updated" date. Continued use of our services after such changes indicates acceptance of the revised policy.</p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact",
    body: (
      <>
        <p>For any questions or requests regarding this Privacy Policy, please contact:</p>
        <p>
          <strong>{BRAND.name}</strong>
          <br />
          {BRAND.address}
          <br />
          Email: <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a>
          <br />
          Phone: {BRAND.phones.join(" / ")}
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main data-testid="privacy-page">
      <section className="pt-24 md:pt-32 pb-12" style={{ backgroundColor: "#F6F1E4" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="overline mb-5">Legal</div>
            <h1 className="font-display font-light tracking-tighter leading-[1] text-5xl md:text-7xl max-w-4xl" style={{ color: "#0B1F3B" }} data-testid="privacy-heading">
              Privacy <em className="italic" style={{ color: "#C9962E" }}>Policy.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm tracking-widest uppercase" style={{ color: "#C9962E" }}>
              Last updated: December 2025
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="overline mb-4">On this page</div>
                <ul className="space-y-2 text-sm" data-testid="privacy-toc">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="transition-colors hover:text-[#C9962E]" style={{ color: "rgba(11,31,59,0.75)" }}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </aside>

          <article className="lg:col-span-8 space-y-14">
            <Reveal>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(11,31,59,0.85)" }}>
                At {BRAND.name}, we are committed to protecting the privacy of every student, parent and visitor who interacts with us. This Privacy Policy explains what information we collect, how it is used, and the rights available to you. By using our website or services, you agree to the practices described below.
              </p>
            </Reveal>
            {SECTIONS.map((s) => (
              <Reveal key={s.id} delay={0.02}>
                <section id={s.id} data-testid={`privacy-section-${s.id}`}>
                  <h2 className="font-display text-2xl md:text-3xl mb-4" style={{ color: "#0B1F3B" }}>
                    {s.title}
                  </h2>
                  <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-ul:leading-relaxed" style={{ color: "rgba(11,31,59,0.82)" }}>
                    {s.body}
                  </div>
                </section>
              </Reveal>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
