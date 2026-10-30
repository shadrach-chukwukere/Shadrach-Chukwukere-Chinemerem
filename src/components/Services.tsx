import { useState } from "react";
import { services } from "@/data/portfolio";
import { Sparkle, ArrowUpRight, ChevronUp, Reveal } from "./decor";

export default function Services() {
  const [openId, setOpenId] = useState<string>(services[0].id);

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft uppercase">
          <span className="h-px w-6 bg-ink-soft" aria-hidden="true" />
          My Specialization
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-accent">Services</span> I Provide
            <Sparkle className="ml-2 inline-block h-4 w-4 text-accent" />
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            From interface to infrastructure, with focused engineering across the
            web and mobile stack.
          </p>
        </div>
      </Reveal>

      <ul className="mt-10 flex flex-col gap-4">
        {services.map((service, i) => {
          const open = openId === service.id;
          return (
            <Reveal as="li" key={service.id} delay={i * 60}>
              <div
                className={`overflow-hidden rounded-card transition-colors duration-300 ${
                  open ? "bg-ink text-white" : "bg-card text-ink hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? "" : service.id)}
                  aria-expanded={open}
                  aria-controls={`panel-${service.id}`}
                  className="flex min-h-16 w-full items-center gap-4 px-5 py-5 text-left sm:px-8 sm:py-6"
                >
                  <span
                    className={`text-sm font-semibold ${open ? "text-white/50" : "text-ink-soft"}`}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="flex-1 text-lg font-bold tracking-tight sm:text-xl">
                    {service.title}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      open
                        ? "rotate-0 bg-accent text-white"
                        : "bg-white text-ink group-hover:bg-accent"
                    }`}
                    aria-hidden="true"
                  >
                    {open ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  id={`panel-${service.id}`}
                  aria-hidden={!open}
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 px-5 pb-8 sm:grid-cols-2 sm:px-8">
                      <div>
                        <div className="mb-5 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-white/85"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm leading-relaxed text-white/70">
                          {service.description}
                        </p>
                        <ul className="mt-5 flex flex-col gap-2.5">
                          {service.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2.5 text-sm text-white/85"
                            >
                              <Sparkle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl bg-white/5">
                        <img
                          src={service.image.src}
                          alt={service.image.alt}
                          loading="lazy"
                          className="h-full max-h-72 w-full object-contain p-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
