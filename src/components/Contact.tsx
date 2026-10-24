import Reveal from "./Reveal";
import { CoffeeCup } from "./Doodles";
import type { Profile } from "@/data/types";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="relative bg-stage">
      <svg aria-hidden="true" className="torn -mt-px text-cream" viewBox="0 0 1200 28" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0 0h1200v8c-30 10-52-4-84 6s-58 12-92 2-64 10-100 4-70-14-108-2-62 10-98 2-72-8-104 4-66 6-98-2-60-4-96 4-70 10-106 0-62-6-96 4-72 4-104-4-60 2-92 6-58-2-92-8-70-2-104 6-64 4-96-2-60-8-96 2-68 6-100-2-34-4-54 2Z"
        />
      </svg>
      <Reveal className="relative mx-auto max-w-[56rem] px-6 pb-24 pt-14">
        <CoffeeCup className="absolute left-0 top-16 hidden w-16 text-terracotta lg:-left-20 lg:block" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-deep">Get In Touch</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 max-w-lg text-lg text-muted">
          I&apos;m always open to discussing new projects or opportunities.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group/link mt-8 inline-flex items-center gap-2 font-semibold text-ink transition-colors hover:text-terracotta-deep"
        >
          Say Hello
          <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </a>
        <div className="mt-6 flex gap-6 text-sm font-semibold text-muted">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-deep">
            GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-deep">
            LinkedIn
          </a>
        </div>
        <p className="mt-10 font-script text-3xl text-terracotta">talk soon, Komal.</p>
      </Reveal>
    </section>
  );
}
