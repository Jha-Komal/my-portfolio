import Reveal from "./Reveal";
import type { Profile } from "@/data/types";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="px-6 py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-deep">
          About Me
        </p>
        <p className="mt-6 glass rounded-3xl p-8 text-lg leading-relaxed text-ink/80">{profile.bio}</p>
      </Reveal>
    </section>
  );
}
