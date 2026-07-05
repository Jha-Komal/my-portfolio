import type { Profile } from "@/data/types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="glow-grid relative overflow-hidden px-6 pb-24 pt-28 sm:pt-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300">
          {profile.location}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-white/80 sm:text-2xl">{profile.title}</p>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-[#04120f] shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
