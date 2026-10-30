import { about, profile } from "@/data/portfolio";
import { Reveal, Sparkle } from "./decor";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            {about.headline}
          </h2>
          {about.paragraphs.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-5 text-[15px] leading-relaxed text-ink-soft"
            >
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-2">
            {about.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-card px-4 py-2 text-sm font-medium text-ink/80"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-card bg-card p-8">
              <p className="text-4xl font-extrabold text-accent">2+</p>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                Years building production web &amp; mobile apps
              </p>
            </div>
            <div className="mt-6 rounded-card bg-ink p-8 text-white">
              <p className="text-2xl font-extrabold">Across the stack</p>
              <p className="mt-2 text-sm font-medium text-white/60">
                Projects across web, mobile and APIs
              </p>
            </div>
            <div className="-mt-6 rounded-card bg-accent p-8 text-white">
              <p className="text-4xl font-extrabold">
                {profile.location}
                <Sparkle className="ml-1 inline-block h-4 w-4" />
              </p>
              <p className="mt-2 text-sm font-medium text-white/80">
                {profile.availability}
              </p>
            </div>
            <div className="rounded-card border border-ink/10 p-8">
              <p className="text-2xl leading-tight font-extrabold">
                Web, mobile and backend
              </p>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                One developer across web, mobile and backend
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
