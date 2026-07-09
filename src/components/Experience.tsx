import type { Experience as ExperienceItem } from "@/data/types";
import SectionHeading from "./SectionHeading";

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Where I've Worked" title="Experience" />
        <ol className="relative border-s border-white/10 ps-8">
          {experience.map((item) => (
            <li key={`${item.company}-${item.duration}`} className="mb-12 last:mb-0">
              <span className="absolute -start-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500" />
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                {item.duration} · {item.location}
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">{item.role}</h3>
              <p className="text-sm font-medium text-white/60">{item.company}</p>
              <ul className="mt-3 space-y-2">
                {item.highlights.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
