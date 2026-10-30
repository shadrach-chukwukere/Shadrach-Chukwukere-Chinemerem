import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import logo from "@/assets/logo.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-black/5 bg-white/95 py-2 pr-2 pl-5 shadow-sm shadow-black/5 backdrop-blur-md"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Back to top">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight">
            {profile.firstName}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-sm font-medium transition-colors hover:text-accent ${
                  active === link.href ? "text-accent" : "text-ink/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:inline-flex"
          >
            Contact
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 bg-white p-2.5 focus-visible:outline-offset-2 xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="primary-menu" className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl shadow-black/5 xl:hidden">
          <ul className="flex flex-col p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "location" : undefined}
                  className={`flex min-h-12 items-center rounded-2xl px-4 py-3 text-sm font-medium hover:bg-card ${
                    active === link.href ? "text-accent" : "text-ink/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-2 sm:hidden">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
