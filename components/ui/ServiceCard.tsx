import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-3 border-t border-border py-6 first:border-t-0 sm:border-t-0 sm:border-l sm:py-0 sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
      <h3 className="font-display text-lg font-medium text-ink">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-soft">
        {service.description}
      </p>
    </div>
  );
}
