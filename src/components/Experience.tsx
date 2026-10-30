import { experiences } from "@/data/portfolio";
import { Reveal, Sparkle } from "./decor";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            My <span className="text-accent">Experience</span>
            <Sparkle className="ml-2 inline-block h-4 w-4 text-accent" />
          </h2>
        </Reveal>

        <ol className="relative mt-12 flex flex-col gap-12 border-l border-ink/15 pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 100} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[41px] h-3 w-3 rounded-full border-2 border-accent bg-white sm:-left-[49px]"
              />
              <p className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
                {exp.period}
              </p>
              <h3 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold text-accent">{exp.company}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                {exp.description}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-ink/80"
                  >
                    <Sparkle className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-card px-3 py-1 text-xs font-medium text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
