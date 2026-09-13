import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import ProjectImage from "@/components/ui/ProjectImage";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.images[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-clay"
    >
      <ProjectImage
        src={thumbnail?.src ?? ""}
        alt={`${project.title} screenshot`}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-clay-dark"
          />
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tools.slice(0, 4).map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
