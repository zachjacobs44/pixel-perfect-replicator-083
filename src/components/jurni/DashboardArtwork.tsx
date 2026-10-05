import { useId } from "react";
import { cn } from "@/lib/utils";
import { STAK_MOTION_ARTWORK } from "./stak-motion-artwork";

export function DashboardArtwork({ scene, className }: {
  scene: keyof typeof STAK_MOTION_ARTWORK;
  className?: string;
}) {
  const id = `dashboard-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const artwork = STAK_MOTION_ARTWORK[scene].still
    .replace(/id="([^"]+)"/g, `id="$1-${id}"`)
    .replace(/url\(#([^\)]+)\)/g, `url(#$1-${id})`);
  return <div aria-hidden="true" className={cn("dashboard-art", className)} dangerouslySetInnerHTML={{ __html: artwork }} />;
}