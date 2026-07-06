import React from "react";

const rotClasses = ["stamp-r3", "stamp-r5", "stamp-r7", "stamp-r9"];

export default function PassportStamp({ size = 148, primary, secondary, variant = 0, testid }) {
  const rot = rotClasses[variant % rotClasses.length];
  return (
    <div data-testid={testid} className={`stamp ${rot} font-display`} style={{ width: size, height: size }}>
      <div className="flex flex-col items-center justify-center leading-tight">
        <span className="text-3xl md:text-4xl font-medium" style={{ color: "#C9962E" }}>
          {primary}
        </span>
        <span className="mt-1 text-[0.6rem] tracking-[0.28em] uppercase font-body font-semibold" style={{ color: "#C9962E" }}>
          {secondary}
        </span>
      </div>
    </div>
  );
}
