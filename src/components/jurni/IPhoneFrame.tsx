import type { ReactNode } from "react";

import iphoneFrame from "@/assets/iphone-frame.png";

/**
 * Photorealistic iPhone frame with the chat UI overlaid on the screen area.
 * Screen insets are percentages of the rendered image (768x1536 source).
 */
export function IPhoneFrame({
  children,
  eager = false,
  className = "",
}: {
  children: ReactNode;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={iphoneFrame}
        alt=""
        width={768}
        height={1536}
        loading={eager ? "eager" : "lazy"}
        className="block h-auto w-full select-none"
        draggable={false}
      />
      {/* Measured screen glass in the source image: x 90–678, y 103–1402 (of 768x1536). */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "7%",
          bottom: "9%",
          left: "12.2%",
          right: "12.2%",
          borderRadius: "13% / 6%",
        }}
      >
        {children}
      </div>
      {/* Dynamic Island redrawn above the chat so the screen never covers it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-ink"
        style={{ left: "38%", width: "24%", top: "7.95%", height: "3.45%" }}
      />
    </div>
  );
}
