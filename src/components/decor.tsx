import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight as ArrowIcon, ChevronUp as ChevronUpIcon, Sparkles as SparkleIcon } from "lucide-react";

export function Sparkle({ className = "" }: { className?: string }) {
  return <SparkleIcon aria-hidden="true" className={className} strokeWidth={1.8} />;
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return <ArrowIcon aria-hidden="true" className={className} strokeWidth={1.8} />;
}

export function ChevronUp({ className = "" }: { className?: string }) {
  return <ChevronUpIcon aria-hidden="true" className={className} strokeWidth={1.8} />;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [supportsMotion, setSupportsMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!motionAllowed || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    setSupportsMotion(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${supportsMotion && !visible ? "is-pending" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
