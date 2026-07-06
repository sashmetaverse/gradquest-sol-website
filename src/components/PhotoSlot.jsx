import React, { useState, useEffect, useRef } from "react";
import { Upload, X, ImagePlus } from "lucide-react";

const STORAGE_PREFIX = "gradquest_photo_";

// Reusable upload-in-place placeholder. Click or drag an image onto it —
// it renders that photo from then on (saved in the visitor's browser via
// localStorage, so it survives refreshes on this device/browser).
export default function PhotoSlot({
  id,
  label = "Photo Placeholder",
  aspectClass = "aspect-[3/4]",
  className = "",
  testid,
  rounded = false,
}) {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const key = STORAGE_PREFIX + id;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(key);
      if (saved) setImage(saved);
    } catch (e) {
      /* localStorage unavailable — upload will still work for this session */
    }
  }, [key]);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setImage(dataUrl);
      try {
        window.localStorage.setItem(key, dataUrl);
      } catch (e) {
        console.warn("Could not persist image — it may be too large for this browser's storage.");
      }
    };
    reader.readAsDataURL(file);
  };

  const onInputChange = (e) => {
    const file = e.target.files && e.target.files[0];
    handleFile(file);
    e.target.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(file);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImage(null);
    try {
      window.localStorage.removeItem(key);
    } catch (e2) {
      /* ignore */
    }
  };

  return (
    <div
      data-testid={testid}
      className={`group relative w-full ${aspectClass} ${rounded ? "rounded-full overflow-hidden" : "overflow-hidden"} cursor-pointer ${className}`}
      style={{
        backgroundColor: "rgba(11,31,59,0.04)",
        border: image ? "1px solid rgba(11,31,59,0.15)" : "1px dashed rgba(11,31,59,0.25)",
      }}
      onClick={() => inputRef.current && inputRef.current.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onInputChange}
        className="hidden"
        data-testid={testid ? `${testid}-input` : undefined}
      />

      {image ? (
        <>
          <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B1F3B]/0 group-hover:bg-[#0B1F3B]/50 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <span className="text-xs tracking-widest uppercase text-[#F6F1E4] flex items-center gap-1">
              <Upload size={14} /> Replace
            </span>
            <button
              type="button"
              onClick={removeImage}
              data-testid={testid ? `${testid}-remove` : undefined}
              className="text-xs tracking-widest uppercase text-[#F6F1E4] flex items-center gap-1"
            >
              <X size={14} /> Remove
            </button>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <ImagePlus size={40} strokeWidth={1.1} style={{ color: "rgba(11,31,59,0.35)" }} />
          <span className="mt-3 text-[0.6rem] tracking-[0.28em] uppercase" style={{ color: "rgba(11,31,59,0.55)" }}>
            {label}
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-wide" style={{ color: "#C9962E" }}>
            Click or drag to upload
          </span>
        </div>
      )}
    </div>
  );
}
