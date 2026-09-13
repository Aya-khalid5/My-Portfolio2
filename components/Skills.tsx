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

        {/* كروت المهارات الشفافة */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm shadow-xs transition-all hover:border-border/80 hover:bg-surface/80"
            >
              <h3 className="font-display text-base font-semibold text-ink">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
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
