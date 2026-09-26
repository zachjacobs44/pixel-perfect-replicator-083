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
      <div
        className="absolute overflow-hidden rounded-[6%]"
        style={{ top: "5.4%", bottom: "7.8%", left: "12.6%", right: "12.6%" }}
      >
        {children}
      </div>
    </div>
  );
}
