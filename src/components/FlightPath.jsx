import React from "react";

export default function FlightPath({ className = "" }) {
  return (
    <svg viewBox="0 0 1400 300" className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <marker id="plane" viewBox="0 0 24 24" markerWidth="18" markerHeight="18" refX="12" refY="12" orient="auto-start-reverse">
          <path d="M2 12 L22 4 L18 12 L22 20 Z" fill="#C9962E" stroke="#0B1F3B" strokeWidth="0.6" />
        </marker>
      </defs>
      <path
        d="M60 220 Q 400 40 720 140 T 1340 60"
        fill="none"
        stroke="#C9962E"
        strokeWidth="1.6"
        strokeDasharray="3 6"
        markerEnd="url(#plane)"
        style={{ animation: "flightPath 4s ease-out forwards" }}
        strokeDashoffset="0"
      />
      <circle cx="60" cy="220" r="4" fill="#C9962E" />
      <circle cx="60" cy="220" r="9" fill="none" stroke="#C9962E" strokeOpacity="0.5" />
    </svg>
  );
}
