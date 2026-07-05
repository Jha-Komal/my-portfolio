import type { Skill } from "@/data/types";
import SectionHeading from "./SectionHeading";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="What I Know" title="Skills" />
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-white/90">{skill.name}</span>
                <span className="text-white/50">{skill.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
