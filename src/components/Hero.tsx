import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "./decor";

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-8 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-24">
      <div className="order-2 lg:order-1">
        <p className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft uppercase">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          Hello, I&apos;m {profile.firstName}
        </p>
        <h1 className="max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] font-extrabold tracking-[-0.055em]">
          I build for the <span className="text-accent">real world.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {profile.role} based in {profile.location}, building accessible web products, mobile apps, and dependable APIs.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]">
            View my work
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent"><ArrowUpRight className="h-3 w-3 text-white" /></span>
          </a>
          <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent active:scale-[0.98]">Contact</a>
        </div>
      </div>
      <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
        <div aria-hidden="true" className="absolute inset-x-4 top-8 bottom-0 rounded-[48%_48%_12%_12%] bg-accent/10 sm:inset-x-8" />
        <img src={profile.portrait.src} alt={profile.portrait.alt} width="888" height="1332" fetchPriority="high" className="relative mx-auto aspect-[4/5] max-h-[58dvh] w-full rounded-[48%_48%_12%_12%] object-cover object-top lg:max-h-[72dvh]" />
      </div>
    </section>
  );
}
