import StatsCard from "@/components/ui/StatsCard";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="border-t border-border bg-ink py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="[&_p]:text-canvas [&_p:last-child]:text-canvas/60">
              <StatsCard value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
