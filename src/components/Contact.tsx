import Reveal from "./Reveal";
import type { Profile } from "@/data/types";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-deep">
          Get In Touch
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-ink/70">
          I&apos;m always open to discussing new projects or opportunities.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta/30 transition-transform hover:scale-105"
        >
          Say Hello
        </a>
        <div className="mt-8 flex justify-center gap-6 text-sm font-semibold text-ink/70">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-deep">
            GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-deep">
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
