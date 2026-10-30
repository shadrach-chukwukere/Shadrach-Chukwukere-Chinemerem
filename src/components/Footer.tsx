import { navLinks, profile, socials } from "@/data/portfolio";
import { ArrowUpRight } from "./decor";
import logo from "@/assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 pt-14 pb-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="" className="h-8 w-8" />
              <span className="text-lg font-extrabold tracking-tight">
                {profile.firstName}
                <span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              {profile.role} based in {profile.location}, building products
              people actually enjoy using.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Navigate
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Elsewhere
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs font-semibold tracking-widest text-white/60 uppercase hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
