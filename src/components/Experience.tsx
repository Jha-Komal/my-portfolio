import type { Experience as ExperienceItem } from "@/data/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Where I've Worked" title="Experience" />
        <ol className="border-s-2 border-lavender ps-8">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.duration}`} className="relative mb-12 last:mb-0">
              <span className="absolute -start-[41px] top-7 h-4 w-4 rounded-full bg-terracotta ring-4 ring-cream" />
              <Reveal from={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <div className="glass rounded-3xl p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wide text-terracotta-deep">
                    {item.duration} · {item.location}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-ink">{item.role}</h3>
                  <p className="text-base font-semibold text-ink/75">{item.company}</p>
                  <ul className="mt-4 space-y-3">
                    {item.highlights.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 text-base leading-relaxed text-ink/90"
                      >
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
