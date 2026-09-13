import type { Stat } from "@/data/stats";

export default function StatsCard({ value, label }: Stat) {
  return (
    <div>
      <p className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-ink-soft">{label}</p>
    </div>
  );
}
