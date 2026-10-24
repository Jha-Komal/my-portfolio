import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { Profile } from "@/data/types";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-[56rem]">
        <SectionHeading eyebrow="About Me" title="A little about how I work." />
        <Reveal className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
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
          <p className="text-lg leading-relaxed text-muted sm:text-xl">{profile.bio}</p>
        </Reveal>
      </div>
    </section>
  );
}
