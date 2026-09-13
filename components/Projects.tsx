import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            title="Featured projects"
            description="A selection of dashboards and analyses built on real-world style datasets."
          />
          <Link
            href="/projects"
            className="focus-ring link-draw flex items-center gap-1.5 text-sm font-medium text-clay-dark"
          >
            View all projects <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
