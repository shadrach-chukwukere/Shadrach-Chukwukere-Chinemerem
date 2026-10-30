import { projects } from "@/data/portfolio";
import { Reveal, ArrowUpRight, Sparkle } from "./decor";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft uppercase">
          <span className="h-px w-6 bg-ink-soft" aria-hidden="true" />
          Selected Work
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Projects I&apos;ve <span className="text-accent">Built</span>
          <Sparkle className="ml-2 inline-block h-4 w-4 text-accent" />
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-16 sm:gap-24">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.id}
            delay={60}
            className={`grid items-center gap-8 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Visual */}
            <div className="group relative overflow-hidden rounded-card bg-card">
              {project.image ? (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  loading="lazy"
                  className="mx-auto aspect-[4/3] h-80 w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] sm:h-[26rem]"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${project.name} preview coming soon`}
                  className="flex h-80 w-full flex-col items-center justify-center gap-3 sm:h-[26rem]"
                >
                  <span className="text-6xl font-extrabold tracking-tight text-ink/10">
                    {project.name}
                  </span>
                  <Sparkle className="h-6 w-6 text-accent" />
                </div>
              )}
            </div>

            {/* Text */}
            <div className="lg:px-6">
              <p className="text-sm font-semibold tracking-widest text-ink-soft uppercase">
                {project.year} / {project.contribution}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {project.name}
              </h3>
              {project.status && (
                <p className="mt-2 text-sm font-semibold text-accent">
                  {project.status}
                </p>
              )}
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(project.live || project.github) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                    >
                      Live site
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
