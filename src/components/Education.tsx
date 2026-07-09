import type { Education as EducationItem } from "@/data/types";
import SectionHeading from "./SectionHeading";

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Academics" title="Education" />
        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-col justify-between gap-1 rounded-xl border border-white/10 bg-white/5 px-6 py-4 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-semibold text-white">{item.degree}</h3>
                <p className="text-sm text-white/60">{item.institution}</p>
              </div>
              <span className="text-sm font-medium text-emerald-400">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
