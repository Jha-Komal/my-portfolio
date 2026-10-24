import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import portfolio from "@/data/portfolio.json";
import { StatTile } from "./CaseStudyParts";

interface Hero {
  eyebrow: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  note?: string;
}

export function CaseStudyShell({
  hero,
  sourceUrl,
  sourceLabel,
  children,
}: {
  hero: Hero;
  sourceUrl: string;
  sourceLabel: string;
  children: ReactNode;
}) {
  const wide = hero.stats.length >= 3;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-lavender/70 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="nav-link text-sm font-semibold text-ink">
            ← Back to portfolio
          </Link>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-terracotta-deep hover:text-terracotta"
          >
            {sourceLabel} →
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="px-6 pb-10 pt-16 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-script text-3xl text-terracotta">{hero.eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{hero.intro}</p>
            <div
              className={`mx-auto mt-10 grid gap-2 text-left sm:gap-4 ${
                wide ? "max-w-3xl grid-cols-3" : "max-w-xl grid-cols-2"
              }`}
            >
              {hero.stats.map((stat) => (
                <StatTile key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
            {hero.note && (
              <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-lavender bg-white/50 p-4 text-sm leading-relaxed text-muted">
                {hero.note}
              </p>
            )}
          </div>
        </section>

        {children}

        <section className="px-6 pb-24 pt-6 text-center">
          <Reveal>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-deep"
            >
              {sourceLabel} →
            </a>
          </Reveal>
        </section>
      </main>

      <Footer name={portfolio.profile.name} />
    </>
  );
}

export function Panel({
  title,
  tag,
  children,
}: {
  title?: string;
  tag?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Reveal className="h-full">
      <div className="glass h-full rounded-3xl p-6 sm:p-8">
        {tag}
        {title && (
          <h3 className={`font-display text-lg font-medium text-ink ${tag ? "mt-3" : ""}`}>{title}</h3>
        )}
        <div className={`${tag || title ? "mt-3 " : ""}text-sm leading-relaxed text-muted`}>{children}</div>
      </div>
    </Reveal>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
