import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader title="Experience & training" />

        <div className="mt-10 space-y-8">
          {experience.map((item) => (
            <div
              key={item.organization}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {item.program}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.organization}
                  </p>
                </div>
                <Badge tone="solid">{item.status}</Badge>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
