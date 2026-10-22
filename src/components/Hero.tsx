import type { Profile } from "@/data/types";

const seeds = [
  { top: "14%", left: "8%", delay: "0s" },
  { top: "30%", left: "88%", delay: "-3s" },
  { top: "62%", left: "14%", delay: "-5s" },
  { top: "74%", left: "80%", delay: "-2s" },
  { top: "20%", left: "62%", delay: "-7s" },
];

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-36">
      {seeds.map((seed, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="seed"
          style={{ top: seed.top, left: seed.left, animationDelay: seed.delay }}
        />
      ))}
      <svg aria-hidden="true" viewBox="0 0 64 40" className="plane">
        <path d="M2 18 62 2 40 38 30 24Z" fill="#fff" opacity="0.9" />
        <path d="M30 24 62 2 34 30Z" fill="#f2b8c6" />
      </svg>
      <div className="relative mx-auto max-w-4xl text-center">
        <p style={{ animationDelay: "0.1s" }} className="rise glass mb-5 inline-block rounded-full px-4 py-1 text-sm font-medium text-ink/80">
          {profile.location}
        </p>
        <h1 style={{ animationDelay: "0.25s" }} className="rise text-4xl font-extrabold tracking-tighter text-ink sm:text-7xl">
          Hi, I&apos;m {profile.name}
        </h1>
        <p style={{ animationDelay: "0.4s" }} className="rise mt-4 text-xl font-semibold text-terracotta-deep sm:text-2xl">
          {profile.title}
        </p>
        <p style={{ animationDelay: "0.55s" }} className="rise mx-auto mt-6 max-w-2xl text-base text-ink/75 sm:text-lg">
          {profile.tagline}
        </p>
        <div style={{ animationDelay: "0.7s" }} className="rise mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta/30 transition-transform hover:scale-105"
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
    </section>
  );
}
