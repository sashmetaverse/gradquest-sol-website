import React from "react";
import PhotoSlot from "./PhotoSlot";

// Faculty / mentor card. Click the photo area to upload a real picture —
// it replaces the placeholder immediately and is remembered by the browser.
export default function FacultyPlaceholder({ name, role, testid }) {
  return (
    <div data-testid={testid} className="card-lift border bg-[#FFFFF0] p-6 flex flex-col" style={{ borderColor: "rgba(11,31,59,0.12)" }}>
      <PhotoSlot
        id={testid || name}
        label="Faculty Photo"
        aspectClass="aspect-[3/4]"
        testid={testid ? `${testid}-photo` : undefined}
      />
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
