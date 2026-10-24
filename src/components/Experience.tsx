import type { Experience as ExperienceItem } from "@/data/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export function HighlightText({ text }: { text: string }) {
  const match = text.match(/^([A-Z][^:.]{2,40}): ([\s\S]*)$/);
  if (!match) return <span>{text}</span>;
  return (
    <span>
      <strong className="font-semibold text-ink">{match[1]}:</strong> {match[2]}
    </span>
  );
}

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-[56rem]">
        <SectionHeading eyebrow="Where I've Worked" title="Experience" />
        <ol>
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.duration}`} className="border-t border-ink/15 py-10 last:border-b">
              <Reveal delay={index * 80} className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.duration}{item.location ? ` · ${item.location}` : ""}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink">{item.role}</h3>
                  <p className="mt-1 font-semibold text-terracotta-deep">{item.company}</p>
                </div>
                <ul className="space-y-3">
                  {item.highlights.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <HighlightText text={point} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
