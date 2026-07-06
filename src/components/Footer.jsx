import React from "react";
import { Link } from "react-router-dom";
import LogoSlot from "./LogoSlot";
import SocialIcon from "./SocialIcon";
import { BRAND, NAV_LINKS, SOCIALS } from "../lib/content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" style={{ backgroundColor: "#0B1F3B", color: "#F6F1E4" }} className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute -right-24 -top-24 w-80 h-80 rounded-full border-2 border-dashed" style={{ borderColor: "rgba(201,150,46,0.25)" }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <LogoSlot size={46} variant="light" />
              <div>
                <div className="font-display text-2xl">{BRAND.name}</div>
                <div className="overline mt-1">Centre of Excellence</div>
              </div>
            </div>
            <p className="font-display italic text-2xl md:text-3xl leading-snug max-w-md" style={{ color: "#F6F1E4" }}>
              {BRAND.tagline}
            </p>
            <div className="flex items-center gap-3 mt-8">
              {SOCIALS.map((s) => (
                <SocialIcon key={s.name} name={s.icon} href={s.href} testid={`footer-social-${s.icon}`} variant="light" />
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="overline mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} data-testid={`footer-link-${n.label.toLowerCase().replace(/[^a-z]/g, "-")}`} className="transition-colors hover:text-[#C9962E]" style={{ color: "rgba(246,241,228,0.85)" }}>
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" data-testid="footer-link-contact" className="transition-colors hover:text-[#C9962E]" style={{ color: "rgba(246,241,228,0.85)" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="overline mb-5">Reach Us</div>
            <ul className="space-y-4 text-sm" style={{ color: "rgba(246,241,228,0.85)" }}>
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 flex-shrink-0" style={{ color: "#C9962E" }} />
                <span>{BRAND.phones.join(" / ")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 flex-shrink-0" style={{ color: "#C9962E" }} />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#C9962E]">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: "#C9962E" }} />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(246,241,228,0.15)", color: "rgba(246,241,228,0.6)" }}
        >
          <span data-testid="footer-copyright">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <span className="tracking-widest uppercase">Guidance · Journeys · Impact</span>
        </div>
      </div>
    </footer>
  );
}
