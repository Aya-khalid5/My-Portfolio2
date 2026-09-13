import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Projects | ${SITE.name}`,
  description: "Data analysis and machine learning projects by " + SITE.name,
};

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Projects"
          description="Dashboards and analyses across Power BI, Excel, SQL, and Python — built on real-world style datasets."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
