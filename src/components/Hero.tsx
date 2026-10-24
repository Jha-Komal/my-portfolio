import Image from "next/image";
import type { Profile } from "@/data/types";
import { Cat, CoffeeCup, Notebook, Sparkle } from "./Doodles";

const ACCENT = "measurable product outcomes.";

export default function Hero({ profile }: { profile: Profile }) {
  const hasAccent = profile.tagline.endsWith(ACCENT);
  const lead = hasAccent ? profile.tagline.slice(0, -ACCENT.length) : profile.tagline;

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      <div aria-hidden="true" className="grid-paper pointer-events-none absolute inset-x-0 top-0 h-full" />
      <div className="relative mx-auto grid max-w-[56rem] items-center gap-14 md:grid-cols-[1.25fr_1fr]">
        <div>
          <p style={{ animationDelay: "0.1s" }} className="rise font-script text-4xl text-terracotta sm:text-5xl">
            Hi, I&apos;m {profile.name}.
          </p>
          <h1
            style={{ animationDelay: "0.25s" }}
            className="rise mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl"
          >
            {lead}
            {hasAccent && <span className="text-terracotta">{ACCENT}</span>}
          </h1>
          <p
            style={{ animationDelay: "0.4s" }}
            className="rise mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
          >
            {profile.title} · {profile.location}
          </p>
          <div style={{ animationDelay: "0.55s" }} className="rise mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-lilac px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-blush"
            >
              View My Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-terracotta hover:text-terracotta-deep"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div style={{ animationDelay: "0.4s" }} className="rise relative mx-auto w-full max-w-xs">
          <div className="frame isolate aspect-[4/5]">
            <Image
              src="/images/komal-portrait.jpeg"
              alt={`Portrait of ${profile.name}`}
              width={1000}
              height={1500}
              priority
              sizes="(min-width: 768px) 320px, 80vw"
              className="h-full w-full object-cover object-[50%_30%]"
            />
          </div>
          <CoffeeCup className="doodle absolute -right-6 -top-10 w-16 text-terracotta" />
          <Notebook className="doodle absolute -bottom-10 -right-8 w-20 text-terracotta" />
          <Sparkle className="doodle absolute -left-8 top-12 w-10 text-terracotta/80" />
          <Cat className="doodle absolute -bottom-12 -left-10 w-20 text-terracotta" />
        </div>
      </div>
    </section>
  );
}
