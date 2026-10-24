import Link from "next/link";
import type { Project } from "@/data/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const linkClass =
  "group/link inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-terracotta-deep";

function CaseLink({ project, label }: { project: Project; label: string }) {
  const arrow = (
    <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-1">
      →
    </span>
  );
  const text = (
    <>
      {label}
      <span className="sr-only"> {project.title}</span> {arrow}
    </>
  );

  if (project.link?.startsWith("/")) {
    return (
      <Link href={project.link} className={linkClass}>
        {text}
      </Link>
    );
  }
  return (
    <a href={project.link ?? "#"} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {text}
    </a>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const [kind, focus] = project.subtitle.split(" · ");

  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div
        className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-sm border border-lavender bg-peach p-6 ${
          flip ? "md:order-2" : ""
        }`}
      >
        <span className="font-script text-7xl leading-none text-terracotta/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-terracotta/25 bg-cream/80 px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {String(index + 1).padStart(2, "0")} · {kind}
          {focus ? ` · ${focus}` : ""}
        </p>
        <h3 className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        {project.link && (
          <div className="mt-6">
            <CaseLink project={project} label={project.linkLabel ?? "View Case Study"} />
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-[56rem]">
        <SectionHeading eyebrow="My Work" title="Featured Projects" />
        <div className="space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <ProjectRow project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
