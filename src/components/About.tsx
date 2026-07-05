import type { Profile } from "@/data/types";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          About Me
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/70">{profile.bio}</p>
      </div>
    </section>
  );
}
