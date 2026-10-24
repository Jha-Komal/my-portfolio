import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { Profile } from "@/data/types";

export default function About({ profile }: { profile: Profile }) {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-[56rem]">
        <SectionHeading eyebrow="About Me" title="How I think about product." />
        <Reveal className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="frame isolate mx-auto w-full max-w-xs">
            <Image
              src="/images/komal-seated.jpeg"
              alt={`${profile.name} smiling, seated outdoors`}
              width={853}
              height={1280}
              sizes="(min-width: 768px) 320px, 80vw"
              className="aspect-[4/5] h-auto w-full object-cover object-[50%_65%]"
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="font-script text-3xl text-terracotta">How I work</p>
          </Reveal>
          <ol className="mt-6 grid gap-x-12 sm:grid-cols-2">
            {profile.principles.map((principle, index) => (
              <li key={principle.title}>
                <Reveal delay={index * 80} className="border-t border-ink/20 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">{principle.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{principle.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
