export default function SkillCard({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface px-4 py-5 text-center transition-colors duration-200 hover:border-clay">
      <span className="font-display text-sm font-medium text-ink">{name}</span>
    </div>
  );
}
