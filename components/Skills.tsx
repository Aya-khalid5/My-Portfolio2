import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/ui/Badge";
import SkillCard from "@/components/ui/SkillCard";
import { coreTools, skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Skills"
          description="A toolkit built for moving from raw data to a decision someone can act on."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {coreTools.map((tool) => (
            <SkillCard key={tool} name={tool} />
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-sm font-medium text-ink">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
