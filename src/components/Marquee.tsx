import { useState } from "react";
import { marqueeItems } from "@/data/portfolio";
import { Sparkle } from "./decor";

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div role="region" aria-label="Technologies and disciplines" className="group relative overflow-hidden bg-ink py-4 select-none">
      <div className="flex w-max animate-marquee motion-reduce:animate-none" style={{ animationPlayState: paused ? "paused" : undefined }}>
        {items.map((item, i) => (
          <span key={i} aria-hidden={i >= marqueeItems.length} className="flex items-center gap-6 px-6 text-lg font-bold tracking-tight text-white sm:text-xl">
            {item}
            <Sparkle className="h-3.5 w-3.5 shrink-0 text-accent" />
          </span>
        ))}
      </div>
      <button type="button" aria-pressed={paused} onFocus={() => setPaused(true)} onClick={() => setPaused((value) => !value)} className="absolute top-1/2 right-3 flex min-h-11 -translate-y-1/2 items-center rounded-full border border-white/30 bg-ink px-4 text-xs font-semibold text-white shadow-sm motion-reduce:hidden">
        {paused ? "Play ticker" : "Pause ticker"}
      </button>
    </div>
  );
}
