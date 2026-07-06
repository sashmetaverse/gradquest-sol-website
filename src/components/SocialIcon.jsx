import React from "react";
import { Instagram, Facebook, Linkedin, Youtube, MessageCircle } from "lucide-react";

const map = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export default function SocialIcon({ name, href, testid, variant = "light" }) {
  const Icon = map[name] || Instagram;
  const color = variant === "light" ? "#F6F1E4" : "#0B1F3B";
  return (
    <a
      href={href}
      data-testid={testid}
      aria-label={name}
      className="inline-flex w-10 h-10 items-center justify-center border transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: color === "#F6F1E4" ? "rgba(246,241,228,0.35)" : "rgba(11,31,59,0.25)" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C9962E")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = color === "#F6F1E4" ? "rgba(246,241,228,0.35)" : "rgba(11,31,59,0.25)")}
    >
      <Icon size={16} color={color} strokeWidth={1.5} />
    </a>
  );
}
