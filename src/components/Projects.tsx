import Link from "next/link";
import type { Project } from "@/data/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl p-[1.5px] transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col rounded-3xl bg-cream/90 p-6">
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-[0.12]`}
        />
        <div className="relative flex flex-1 flex-col">
          <h3 className="text-xl font-bold text-ink">{project.title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-terracotta-deep">
            {project.subtitle}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/70 bg-blush/40 px-3 py-1 text-xs text-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <div className="mt-6 text-sm font-semibold">
              {project.link.startsWith("/") ? (
                <Link
                  href={project.link}
                  className="group/link inline-flex items-center gap-1 text-terracotta-deep transition-colors hover:text-terracotta"
                >
                  View<span className="sr-only"> {project.title}</span> <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-terracotta-deep transition-colors hover:text-terracotta"
                >
                  View<span className="sr-only"> {project.title}</span> <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="My Work" title="Featured Projects" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} className="h-full" from={index % 2 === 0 ? "left" : "right"} delay={index * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
