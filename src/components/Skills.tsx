import type { SkillGroup } from "@/data/types";
import SectionHeading from "./SectionHeading";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="What I Bring" title="Skills" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:border-emerald-400/40 hover:text-emerald-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
