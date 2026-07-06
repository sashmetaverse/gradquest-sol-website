import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoSlot from "./LogoSlot";
import { BRAND, NAV_LINKS } from "../lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header data-testid="site-header" className="sticky top-0 z-50" style={{ backgroundColor: "#0B1F3B", borderBottom: "1px solid rgba(201,150,46,0.25)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="brand-link" className="flex items-center gap-3 group">
            <LogoSlot size={40} variant="light" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.1rem] tracking-wide" style={{ color: "#F6F1E4" }}>
                {BRAND.name}
              </span>
              <span className="text-[0.62rem] tracking-[0.28em] uppercase mt-1" style={{ color: "#C9962E" }}>
                Centre of Excellence
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`nav-link-${n.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className={({ isActive }) => `nav-link text-sm ${isActive ? "active" : ""}`}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" data-testid="nav-cta-contact" className="btn-gold text-sm" style={{ padding: "0.7rem 1.3rem" }}>
              Contact Us
            </Link>
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10"
            onClick={() => setOpen((s) => !s)}
            style={{ color: "#F6F1E4" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div data-testid="mobile-menu" className="lg:hidden pb-6 pt-2 flex flex-col gap-4">
            {NAV_LINKS.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`mobile-nav-link-${n.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className={({ isActive }) => `text-sm py-2 border-b ${isActive ? "text-[#C9962E]" : ""}`}
                style={{ color: "#F6F1E4", borderColor: "rgba(246,241,228,0.15)" }}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" data-testid="mobile-nav-cta-contact" className="btn-gold text-sm mt-2 justify-center">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
