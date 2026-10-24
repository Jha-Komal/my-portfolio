import Image from "next/image";
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
    <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-sm border border-lavender bg-peach ${
          flip ? "md:order-2" : ""
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-5 pb-10">
          <Image
            src={project.images.main.src}
            alt={project.images.main.alt}
            width={project.images.main.width}
            height={project.images.main.height}
            sizes="(min-width: 768px) 420px, 90vw"
            className="h-auto max-h-full w-full rounded-[3px] object-contain shadow-[0_18px_40px_-18px_rgba(73,57,68,0.55)] ring-1 ring-ink/10 transition-transform duration-500 group-hover:-translate-y-1"
          />
        </div>
        {project.images.sub && (
          <Image
            src={project.images.sub.src}
            alt={project.images.sub.alt}
            width={project.images.sub.width}
            height={project.images.sub.height}
            sizes="120px"
            className="absolute bottom-4 right-4 h-auto w-[20%] max-w-[110px] rounded-md shadow-[0_14px_30px_-12px_rgba(73,57,68,0.6)] ring-1 ring-ink/15 transition-transform duration-500 group-hover:-translate-y-2"
          />
        )}
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
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-lavender bg-white/60 px-3 py-1 text-xs text-ink/80">
              {tag}
            </li>
          ))}
        </ul>
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
