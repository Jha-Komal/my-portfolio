import type { Profile } from "@/data/types";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="glow-grid px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Get In Touch
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-white/60">
          I&apos;m always open to discussing new projects or opportunities.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 px-8 py-3 text-sm font-semibold text-[#04120f] shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
        >
          Say Hello
        </a>
        <div className="mt-8 flex justify-center gap-6 text-sm font-medium text-white/60">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
            GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
