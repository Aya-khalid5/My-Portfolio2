import SectionHeader from "@/components/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader title="Education" />

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
          <div>
            <h3 className="font-display text-lg font-medium text-ink">
              Benha University
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Faculty of Computers &amp; Artificial Intelligence
            </p>
      </div>
    </section>
  );
}
