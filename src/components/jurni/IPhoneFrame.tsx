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
      {/* Measured screen glass in the source image: x 91–705, y 103–1402 (of 768x1536). */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "7%",
          bottom: "9%",
          left: "12.2%",
          right: "8.6%",
          borderRadius: "12% / 5.8%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
