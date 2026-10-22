import type { SkillGroup } from "@/data/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="What I Bring" title="Skills" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.category} from={index % 2 === 0 ? "left" : "right"} delay={index * 120}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-terracotta-deep">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/70 bg-blush/40 px-3 py-1.5 text-sm text-ink/85 transition-colors hover:border-terracotta/50 hover:text-terracotta-deep"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
