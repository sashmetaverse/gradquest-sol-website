import React from "react";

export default function FacultyPlaceholder({ name, role, photo, testid }) {
  return (
    <div data-testid={testid} className="card-lift border bg-[#FFFFF0] p-6 flex flex-col" style={{ borderColor: "rgba(11,31,59,0.12)" }}>
      <div className="w-full aspect-[3/4] overflow-hidden" style={{ backgroundColor: "rgba(11,31,59,0.04)" }}>
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-5">
        <div className="font-display text-lg" style={{ color: "#0B1F3B" }}>
          {name}
        </div>
        <div className="text-xs mt-1 tracking-[0.18em] uppercase" style={{ color: "#C9962E" }}>
          {role}
        </div>
      </div>
    </div>
  );
}