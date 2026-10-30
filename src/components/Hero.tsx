import { profile } from "@/data/portfolio";
import { Sparkle, ArrowUpRight } from "./decor";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-4 pt-32 pb-24 text-center"
    >
      <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft uppercase">
        <span className="h-px w-6 bg-ink-soft" aria-hidden="true" />
        Hello There!
        <span className="h-px w-6 bg-ink-soft" aria-hidden="true" />
      </p>

      <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        I&apos;m{" "}
        <span className="relative inline-block text-accent">
          {profile.name}
          <Sparkle className="absolute -top-2 -right-5 h-4 w-4 text-accent" />
        </span>
      </h1>

      <p className="mt-5 text-lg font-medium text-ink-soft">
        {profile.role} based in {profile.location}
      </p>

      {/* Portrait on organic blob */}
      <div className="relative mt-12 w-64 sm:w-72 md:w-80">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-4 translate-y-4 rounded-[49%_51%_46%_54%/55%_45%_55%_45%] bg-accent"
        />
        <img
          src={profile.portrait.src}
          alt={profile.portrait.alt}
          className="relative aspect-[4/5] w-full rounded-[42%_58%_48%_52%/52%_46%_54%_48%] object-cover"
        />
      </div>

      <p className="mt-12 max-w-xl text-base leading-relaxed text-ink-soft">
        {profile.intro}
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          View My Work
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-3 w-3 text-white" />
          </span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Hire Me
        </a>
      </div>

      <div className="mt-9 flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-medium text-ink-soft">
          {profile.availability}
        </span>
      </div>
    </section>
  );
}
