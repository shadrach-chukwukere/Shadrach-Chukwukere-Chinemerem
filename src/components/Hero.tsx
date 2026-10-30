import { profile, heroSkillTags, socials } from "@/data/portfolio";
import { Sparkle, ArrowUpRight } from "./decor";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";
import type { ReactNode } from "react";

const socialIcons: Record<string, ReactNode> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  "X / Twitter": <FaXTwitter />,
  npm: <SiNpm />,
};

const tagStyles = [
  "left-[-6%] top-[16%]",
  "right-[-8%] top-[10%]",
  "left-[-10%] top-48",
  "right-[-10%] top-1/2",
  "left-[-4%] bottom-24",
  "right-[-6%] bottom-12",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pt-28 pb-16 lg:pt-32"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: intro */}
        <div className="order-1 text-center lg:order-1 lg:text-left">
          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-ink-soft uppercase lg:justify-start">
            <span className="h-px w-6 bg-ink-soft" aria-hidden="true" />
            Hello There!
          </p>
          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
            I&apos;m{" "}
            <span className="relative inline-block text-accent">
              {profile.name}
              <Sparkle className="absolute -top-3 -right-5 h-4 w-4 text-accent" />
            </span>
          </h1>
          <p className="mt-3 text-lg font-medium text-ink-soft">
            {profile.role} based in {profile.location}
          </p>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft lg:mx-0">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              View My Work
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3 w-3 text-white" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 lg:justify-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-ink-soft">
              {profile.availability}
            </span>
          </div>
        </div>

        {/* Center: portrait on blob */}
        <div className="relative order-3 mx-auto w-64 sm:w-80 lg:order-2 lg:w-[26rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-5 translate-y-5 rounded-[49%_51%_46%_54%/55%_45%_55%_45%] bg-accent"
          />
          <img
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            className="relative aspect-[4/5] w-full rounded-[42%_58%_48%_52%/52%_46%_54%_48%] object-cover"
          />

          {/* Rotating hire-me badge */}
          <a
            href="#contact"
            aria-label="Hire me"
            className="absolute -top-8 -right-6 h-24 w-24 rounded-full bg-white shadow-lg sm:-right-10"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path
                  id="hire-circle"
                  d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                />
              </defs>
              <text className="fill-ink text-[11px] font-bold tracking-[0.18em] uppercase">
                <textPath href="#hire-circle">
                  Hire me ✦ Hire me ✦ Hire me ✦
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </span>
          </a>
        </div>

        {/* Right: floating skill pills + socials */}
        <div className="order-2 lg:order-3">
          <ul className="relative mx-auto flex max-w-sm flex-wrap items-center justify-center gap-3 lg:block lg:h-96 lg:max-w-none">
            {heroSkillTags.map((tag, i) => (
              <li
                key={tag}
                className={`animate-float rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${
                  i % 3 === 1 ? "bg-accent text-white" : "bg-ink text-white"
                } lg:absolute ${tagStyles[i] ?? ""}`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8 hidden items-center gap-3 lg:flex lg:flex-col lg:items-start">
            <span className="text-xs font-semibold tracking-widest text-ink-soft uppercase">
              Follow me on
            </span>
            <div className="flex gap-2">
              {socials.slice(0, 4).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-base text-ink/70 transition-colors hover:border-accent hover:text-accent"
                >
                  {socialIcons[s.label] ?? <ArrowUpRight className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
