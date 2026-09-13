import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectImage from "@/components/ui/ProjectImage";
import ProjectMetric from "@/components/ProjectMetric";
import { SITE } from "@/lib/utils";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: `Project not found | ${SITE.name}` };
  }
  return {
    title: `${project.title} | ${SITE.name}`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const hasRealGithub = project.githubUrl !== "#";
  const hasRealProjectUrl = project.projectUrl !== "#";

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <Link
          href="/projects"
          className="focus-ring link-draw inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>

            {project.datasetSize && (
              <p className="mt-6 text-sm text-ink-soft">
                <span className="font-medium text-ink">Dataset: </span>
                {project.datasetSize}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {hasRealGithub ? (
                <Button href={project.githubUrl} icon={<Github size={16} />}>
                  View on GitHub
                </Button>
              ) : (
                <span className="focus-ring inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 text-sm text-ink-soft">
                  [ADD PROJECT LINK]
                </span>
              )}
              {hasRealProjectUrl && (
                <Button
                  href={project.projectUrl}
                  variant="secondary"
                  icon={<ExternalLink size={16} />}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          <figure>
            <ProjectImage
              src={project.images[0]?.src ?? ""}
              alt={project.images[0]?.caption ?? `${project.title} screenshot`}
              className="h-72 w-full rounded-2xl border border-border object-cover lg:h-full"
            />
            {project.images[0] && (
              <figcaption className="mt-2 text-xs text-ink-soft">
                {project.images[0].caption}
              </figcaption>
            )}
          </figure>
        </div>

        {project.images.length > 1 && (
          <div className="mt-14 border-t border-border pt-10">
            <h2 className="font-display text-lg font-medium text-ink">
              More screenshots
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.images.slice(1).map((shot) => (
                <figure key={shot.src}>
                  <ProjectImage
                    src={shot.src}
                    alt={shot.caption}
                    className="h-56 w-full rounded-2xl border border-border object-cover"
                  />
                  <figcaption className="mt-2 text-xs text-ink-soft">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {project.metrics.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="font-display text-lg font-medium text-ink">
              Key metrics
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {project.metrics.map((metric) => (
                <ProjectMetric key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        )}

        {project.insights && project.insights.length > 0 && (
          <div className="mt-14 border-t border-border pt-10">
            <h2 className="font-display text-lg font-medium text-ink">
              Key insights
            </h2>
            <ul className="mt-5 space-y-2.5">
              {project.insights.map((insight) => (
                <li
                  key={insight}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-lg font-medium text-ink">
            Main work
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.mainWork.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
