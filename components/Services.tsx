import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Services"
          description="What I take on, end to end — from the first messy export to a dashboard people trust."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
