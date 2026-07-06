import React, { useState, useEffect, useRef } from "react";
import { Upload } from "lucide-react";
import CrestLogo from "./CrestLogo";

const KEY = "gradquest_photo_brand-logo";

// Wraps CrestLogo — click the logo (in the header or footer) to upload your
// real logo. It replaces the placeholder crest everywhere once set.
export default function LogoSlot({ size = 40, variant = "light" }) {
  const [logo, setLogo] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved) setLogo(saved);
    } catch (e) {
      /* ignore */
    }
  }, []);

  const onChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      setLogo(reader.result);
      try {
        window.localStorage.setItem(KEY, reader.result);
      } catch (err) {
        /* ignore */
      }
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div
      className="relative group inline-flex items-center justify-center rounded-full overflow-hidden cursor-pointer flex-shrink-0"
      style={{ width: size, height: size }}
      onClick={() => inputRef.current && inputRef.current.click()}
      data-testid="brand-logo-slot"
      title="Click to upload your logo"
    >
      <input ref={inputRef} type="file" accept="image/*" onChange={onChange} className="hidden" />
      {logo ? (
        <img src={logo} alt="Brand logo" className="w-full h-full object-cover" />
      ) : (
        <CrestLogo size={size} variant={variant} />
      )}
      <div className="absolute inset-0 bg-[#0B1F3B]/0 group-hover:bg-[#0B1F3B]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-colors">
        <Upload size={Math.round(size * 0.4)} style={{ color: "#F6F1E4" }} />
      </div>
    </div>
  );
}
