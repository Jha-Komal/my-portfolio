import Link from "next/link";
import type { Experience as ExperienceItem, Profile, ResumeData } from "@/data/types";
import { HighlightText } from "./Experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Seal({ href }: { href: string }) {
  return (
    <a
      href={href}
      download="Komal-Kumari-Resume.pdf"
      aria-label="Download resume (PDF)"
      className="seal group absolute -top-12 right-2 z-10 block h-28 w-28 sm:-right-10 sm:h-32 sm:w-32"
    >
      <span className="absolute inset-0 rounded-full bg-terracotta shadow-[0_12px_28px_-10px_rgba(73,57,68,0.7)] transition-transform duration-300 group-hover:scale-105" />
      <svg aria-hidden="true" viewBox="0 0 120 120" className="seal-spin absolute inset-0 h-full w-full text-cream">
        <defs>
          <path id="seal-ring" d="M60 60m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0" />
        </defs>
        <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.7" />
        <text fill="currentColor" fontSize="10.5" fontWeight="700" className="font-display">
          <textPath href="#seal-ring" textLength="262" lengthAdjust="spacing">
            DOWNLOAD RESUME • DOWNLOAD RESUME •
          </textPath>
        </text>
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-cream transition-transform duration-300 group-hover:translate-y-[-40%]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
      </svg>
    </a>
  );
}

function SheetHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-3 mt-8 border-b border-ink/30 pb-1 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink">
      {children}
    </h3>
  );
}

function Row({ left, right, sub }: { left: React.ReactNode; right?: string; sub?: string }) {
  return (
    <div className="mt-5 first:mt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="font-semibold text-ink">{left}</p>
        {right && <p className="text-sm text-muted">{right}</p>}
      </div>
      {sub && <p className="text-sm italic text-muted">{sub}</p>}
    </div>
  );
}

export default function Resume({
  profile,
  resume,
  experience,
}: {
  profile: Profile;
  resume: ResumeData;
  experience: ExperienceItem[];
}) {
  return (
    <section id="resume" className="px-6 py-20">
      <div className="mx-auto max-w-[56rem]">
        <SectionHeading eyebrow="On Paper" title="Resume" />
        <Reveal>
          <div className="relative">
            <Seal href={profile.resumeUrl} />
            <article className="sheet px-6 py-10 sm:px-12 sm:py-14">
              <header className="text-center">
                <h3 className="font-display text-3xl font-medium tracking-tight text-ink">{profile.name}</h3>
                <p className="mt-2 text-sm font-semibold text-ink">{resume.headline}</p>
                <p className="mt-1 text-sm text-muted">
                  {profile.location} ·{" "}
                  <a href={`mailto:${profile.email}`} className="hover:text-terracotta-deep">
                    {profile.email}
                  </a>{" "}
                  ·{" "}
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-deep">
                    LinkedIn
                  </a>{" "}
                  ·{" "}
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-deep">
                    GitHub
                  </a>
                </p>
              </header>

              <SheetHeading>Professional Summary</SheetHeading>
              <p className="leading-relaxed text-muted">{resume.summary}</p>

              <SheetHeading>Experience</SheetHeading>
              {experience.map((item) => (
                <div key={`${item.company}-${item.duration}`}>
                  <Row
                    left={item.location ? item.company : `${item.role} | ${item.company}`}
                    right={item.duration}
                    sub={item.location ? item.role : undefined}
                  />
                  <ul className="mt-2 space-y-1.5">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/60" />
                        <HighlightText text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <SheetHeading>Selected Product Projects</SheetHeading>
              {resume.projects.map((project) => (
                <div key={project.name}>
                  <Row
                    left={
                      <>
                        {project.name} <span className="font-normal text-muted">| {project.kind} |</span>{" "}
                        <Link href={project.link} className="text-terracotta-deep underline underline-offset-2 hover:text-terracotta">
                          Case study<span className="sr-only"> for {project.name}</span>
                        </Link>
                      </>
                    }
                    right={project.year}
                  />
                  <p className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
                </div>
              ))}

              <SheetHeading>Certifications</SheetHeading>
              {resume.certifications.map((cert) => (
                <Row key={cert.name} left={cert.name} right={cert.period} />
              ))}

              <SheetHeading>Skills &amp; Education</SheetHeading>
              <dl className="space-y-1.5 text-sm leading-relaxed">
                {resume.skills.map((group) => (
                  <div key={group.label}>
                    <dt className="inline font-semibold text-ink">{group.label}: </dt>
                    <dd className="inline text-muted">{group.items}</dd>
                  </div>
                ))}
                <div>
                  <dt className="inline font-semibold text-ink">Education: </dt>
                  <dd className="inline text-muted">{resume.education}</dd>
                </div>
              </dl>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
