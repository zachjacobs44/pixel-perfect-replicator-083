import { useEffect, useId, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { STAK_MOTION_ARTWORK } from "./stak-motion-artwork";

export type StakMotionScene = keyof typeof STAK_MOTION_ARTWORK;

/** Supplied artwork only: viewport-triggered, one pass, with a static accessible fallback. */
export function StakMotion({ scene, className, controls = false }: {
  scene: StakMotionScene;
  className?: string;
  controls?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [done, setDone] = useState(false);
  const [replay, setReplay] = useState(0);
  const elapsed = useRef(0);
  const duration = ["rest", "nod", "attentive", "celebrate"].includes(scene) ? 3000 : scene === "welcome" ? 3300 : 8200;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const playing = visible && !paused && !done;
  useEffect(() => {
    if (!playing) return;
    const started = performance.now();
    const timer = window.setTimeout(() => setDone(true), Math.max(0, duration - elapsed.current));
    return () => {
      elapsed.current += performance.now() - started;
      window.clearTimeout(timer);
    };
  }, [playing, duration, replay]);

  function markup(source: string) {
    return source.replace(/id="([^"]+)"/g, `id="$1-${id}"`).replace(/url\(#([^\)]+)\)/g, `url(#$1-${id})`);
  }

  return (
    <div ref={ref} className={cn("stak-motion relative", className)} data-playing={playing} data-done={done} data-scene={scene}>
      <div key={replay} className="stak-motion-animated" aria-hidden="true" dangerouslySetInnerHTML={{ __html: markup(STAK_MOTION_ARTWORK[scene].animated) }} />
      <div className="stak-motion-still" aria-hidden="true" dangerouslySetInnerHTML={{ __html: markup(STAK_MOTION_ARTWORK[scene].still).replaceAll(`${id}"`, `${id}-still"`).replaceAll(`${id})`, `${id}-still)`) }} />
      {controls && (
        <Button variant="ghost" size="icon" className="stak-motion-control absolute bottom-0 right-0 text-muted hover:bg-sheet hover:text-ink" aria-label={done ? "Replay Stak animation" : paused ? "Play Stak animation" : "Pause Stak animation"} title={done ? "Replay animation" : paused ? "Play animation" : "Pause animation"} onClick={() => {
          if (done) { elapsed.current = 0; setDone(false); setPaused(false); setReplay(n => n + 1); }
          else setPaused(p => !p);
        }}>
          {done ? <RotateCcw /> : paused ? <Play /> : <Pause />}
        </Button>
      )}
    </div>
  );
}