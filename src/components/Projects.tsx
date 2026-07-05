import type { Project } from "@/data/types";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col rounded-2xl bg-[#04120f] p-6">
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-[0.08]`}
        />
        <div className="relative flex flex-1 flex-col">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-4 text-sm font-semibold">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 transition-colors hover:text-emerald-200"
            >
              Live Demo →
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              Source Code
            </a>
          </div>
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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
