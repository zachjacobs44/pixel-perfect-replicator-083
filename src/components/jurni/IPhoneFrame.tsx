import type { ReactNode } from "react";

import iphoneFrame from "@/assets/iphone-night-frame.png.asset.json";

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
        src={iphoneFrame.url}
        alt=""
        width={664}
        height={1372}
        loading={eager ? "eager" : "lazy"}
        className="block h-auto w-full select-none"
        draggable={false}
      />
      {/* Cropped glass: x 38–626, y 33–1332, of 664x1372. */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "2.5%",
          bottom: "3%",
          left: "5.8%",
          right: "5.8%",
          borderRadius: "15% / 7%",
        }}
      >
        {children}
      </div>
      {/* Dynamic Island redrawn above the chat so the screen never covers it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        data-island
        style={{ left: "36%", width: "28%", top: "3.8%", height: "3.95%", background: "#000" }}
      />
    </div>
  );
}
