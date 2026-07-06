import React from "react";

export default function CitySkyline({ className = "" }) {
  return (
    <svg viewBox="0 0 1400 220" className={className} preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <g fill="none" stroke="#0B1F3B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="0" y1="210" x2="1400" y2="210" strokeOpacity="0.6" />
        <path d="M20 210 L20 180 Q60 140 100 180 L100 210" />
        <path d="M100 210 L100 175 Q140 135 180 175 L180 210" />
        <path d="M180 210 L180 180 Q220 140 260 180 L260 210" />
        <line x1="20" y1="180" x2="260" y2="180" strokeOpacity="0.5" />
        <path d="M300 210 L300 150 L330 150 L330 130 Q345 100 360 130 L360 150 L390 150 L390 210 Z" />
        <line x1="345" y1="130" x2="345" y2="100" />
        <circle cx="345" cy="96" r="2.5" fill="#C9962E" stroke="none" />
        <path d="M420 210 L420 160 L450 160 L450 145 L480 145 L480 160 L510 160 L510 210 Z" />
        <path d="M510 210 L510 155 L560 155 L560 210 Z" />
        <path d="M560 210 L560 165 L600 165 L600 210 Z" />
        <g>
          <path d="M660 210 L660 90 L700 90 L700 210 Z" />
          <path d="M655 90 L705 90 L700 78 L660 78 Z" />
          <rect x="672" y="105" width="16" height="16" />
          <line x1="680" y1="113" x2="680" y2="106" />
          <line x1="680" y1="113" x2="686" y2="115" />
          <path d="M672 78 L680 55 L688 78" />
          <line x1="680" y1="55" x2="680" y2="42" />
          <circle cx="680" cy="40" r="2.5" fill="#C9962E" stroke="none" />
        </g>
        <path d="M700 210 L700 150 L780 150 L780 210 Z" />
        <line x1="720" y1="150" x2="720" y2="210" strokeOpacity="0.4" />
        <line x1="740" y1="150" x2="740" y2="210" strokeOpacity="0.4" />
        <line x1="760" y1="150" x2="760" y2="210" strokeOpacity="0.4" />
        <path d="M820 210 L820 165 L900 165 L900 210 Z" />
        <path d="M840 165 Q860 120 880 165" />
        <line x1="860" y1="125" x2="860" y2="108" />
        <circle cx="860" cy="106" r="2.2" fill="#C9962E" stroke="none" />
        <path d="M930 210 L930 130 L970 130 L970 210 Z" />
        <path d="M970 210 L970 100 L1000 100 L1000 210 Z" />
        <path d="M1000 210 L1000 140 L1040 140 L1040 210 Z" />
        <path d="M1070 210 L1070 155 L1110 155 L1110 210 Z" />
        <path d="M1080 155 L1090 120 L1100 155" />
        <line x1="1090" y1="120" x2="1090" y2="108" />
        <path d="M1086 112 L1094 112" />
        <circle cx="1200" cy="150" r="46" />
        <circle cx="1200" cy="150" r="4" fill="#C9962E" stroke="none" />
        <line x1="1154" y1="150" x2="1246" y2="150" strokeOpacity="0.4" />
        <line x1="1200" y1="104" x2="1200" y2="196" strokeOpacity="0.4" />
        <line x1="1168" y1="118" x2="1232" y2="182" strokeOpacity="0.4" />
        <line x1="1232" y1="118" x2="1168" y2="182" strokeOpacity="0.4" />
        <path d="M1200 196 L1180 210 M1200 196 L1220 210" />
        <path d="M1280 210 L1280 170 L1310 170 L1310 210 Z" />
        <path d="M1310 210 L1310 155 L1345 155 L1345 210 Z" />
        <path d="M1345 210 L1345 175 L1380 175 L1380 210 Z" />
      </g>
    </svg>
  );
}
