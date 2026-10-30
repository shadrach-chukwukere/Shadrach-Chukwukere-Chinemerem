import { marqueeItems } from "@/data/portfolio";
import { Sparkle } from "./decor";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div
      aria-label="Technologies and disciplines"
      className="group overflow-hidden bg-ink py-4 select-none"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= marqueeItems.length}
            className="flex items-center gap-6 px-6 text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            {item}
            <Sparkle className="h-3.5 w-3.5 shrink-0 text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
