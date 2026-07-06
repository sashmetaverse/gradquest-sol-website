import React from "react";

// Placeholder circular crest / monogram — replaced automatically once a logo is uploaded (see LogoSlot.jsx).
export default function CrestLogo({ size = 40, variant = "light" }) {
  const stroke = variant === "light" ? "#F6F1E4" : "#0B1F3B";
  const gold = "#C9962E";
  return (
    <div
      data-testid="brand-crest-logo"
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-label="GradQuest Sol crest — placeholder logo"
      title="Placeholder logo"
    >
      <svg viewBox="0 0 64 64" width={size} height={size} fill="none">
        <circle cx="32" cy="32" r="30" stroke={stroke} strokeWidth="1.25" />
        <circle cx="32" cy="32" r="25" stroke={gold} strokeWidth="0.75" strokeDasharray="2 2.5" />
        <text
          x="32"
          y="39"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize="18"
          fontWeight="500"
          fill={stroke}
          letterSpacing="0.5"
        >
          GQ
        </text>
        <path d="M22 14 L26 10 L30 14" stroke={gold} strokeWidth="0.9" strokeLinecap="round" />
        <path d="M34 14 L38 10 L42 14" stroke={gold} strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    </div>
  );
}
