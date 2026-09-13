import SectionHeader from "@/components/SectionHeader";
import { SITE } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.photo}
              alt={SITE.name}
              className="h-48 w-40 rounded-2xl border border-border bg-surface object-cover object-top sm:h-56 sm:w-48"
            />
            <div className="mt-6">
              <SectionHeader title="About me" />
            </div>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              I&rsquo;m a Data Analyst focused on turning raw and messy data
              into clear insights, meaningful KPIs, and interactive
              dashboards.
            </p>
            <p>
              My work combines Excel, SQL, Power BI, Python, and Tableau
              across data cleaning, transformation, exploratory analysis,
              visualization, data modeling, and business analysis.
            </p>
            <p>
              Through professional training and practical projects, I have
              worked with real-world style datasets, built dashboards,
              cleaned and transformed messy data, developed analytical
              models, and explored machine learning applications.
            </p>
            <p>
              I&rsquo;m particularly interested in solving practical business
              problems through data and presenting results in a clear,
              useful way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
