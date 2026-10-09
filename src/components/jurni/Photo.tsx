import type { CSSProperties } from "react";

/**
 * Editorial photograph slot. Photos live in src/assets/photos and are listed in PHOTOS.
 * When a file is missing the slot renders a quiet frame-colored block so layout never breaks.
 */
const modules = import.meta.glob("@/assets/photos/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;

export const PHOTOS = {
  fridge: "fridge",
  plate: "plate",
  nightstand: "nightstand",
  dashboard: "dashboard",
  scale: "scale",
  sneakers: "sneakers",
} as const;

export type PhotoName = keyof typeof PHOTOS;

function find(name: PhotoName): string | undefined {
  const key = Object.keys(modules).find((k) => k.includes(`/photos/${name}.`));
  return key ? modules[key] : undefined;
}

export function Photo({ name, alt, ratio = "4 / 5", className = "", style, priority = false }: { name: PhotoName; alt: string; ratio?: string; className?: string; style?: CSSProperties; priority?: boolean }) {
  const src = find(name);
  return (
    <figure
      className={`relative m-0 overflow-hidden rounded-[var(--radius-card)] ${className}`}
      style={{ aspectRatio: ratio, background: "var(--frame)", boxShadow: "var(--shadow-phone)", ...style }}
    >
      {src ? (
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-end p-4 text-[13px] text-muted" aria-hidden="true">{name}</span>
      )}
    </figure>
  );
}