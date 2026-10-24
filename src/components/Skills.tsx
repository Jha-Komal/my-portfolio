import type { SkillGroup } from "@/data/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export function SkillsBand({ skills }: { skills: SkillGroup[] }) {
  const items = skills.flatMap((group) => group.items).slice(0, 14);
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 pr-10 font-display text-lg font-medium text-cream">
          <span className="text-lilac">◆</span>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="band overflow-hidden bg-plum py-5" role="presentation">
      <div className="marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-[56rem]">
        <SectionHeading eyebrow="What I Bring" title="Skills" />
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 80}>
              <h3 className="border-t border-ink/20 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-deep">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-lavender bg-white/60 px-3 py-1.5 text-sm text-muted transition-colors hover:border-terracotta/50 hover:text-terracotta-deep"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
