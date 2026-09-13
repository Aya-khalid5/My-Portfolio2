import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

const barHeights = [38, 62, 45, 78, 55, 90, 68];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28">
        <div className="animate-rise">
          <p className="text-sm font-medium text-clay-dark">{SITE.title} · {SITE.location}</p>

          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            {SITE.name}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            {SITE.headline}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            {SITE.positioning}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects" icon={<ArrowRight size={16} />}>
              View Projects
            </Button>
            <Button href="/#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href={SITE.github} variant="ghost" icon={<Github size={16} />}>
              GitHub
            </Button>
            <Button href={SITE.linkedin} variant="ghost" icon={<Linkedin size={16} />}>
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-[0_1px_0_0_rgba(43,36,32,0.04)] sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-ink-soft">Engagement Rate</p>
                <p className="font-display text-2xl font-medium text-ink">3.83%</p>
              </div>
              <div className="rounded-full bg-peach-soft px-3 py-1 text-xs font-medium text-clay-dark">
                MoM ▲
              </div>
            </div>

            <div className="mt-8 flex h-40 items-end gap-3">
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === barHeights.length - 2 ? "#D9723F" : "#F2A76B",
                    opacity: i === barHeights.length - 2 ? 1 : 0.55,
                  }}
                />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div>
                <p className="font-display text-xl font-medium text-ink">129.43M</p>
                <p className="text-xs text-ink-soft">Impressions</p>
              </div>
              <div>
                <p className="font-display text-xl font-medium text-ink">80.37M</p>
                <p className="text-xs text-ink-soft">Reach</p>
              </div>
            </div>
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-soft">
            <Mail size={12} /> {SITE.email}
          </p>
        </div>
      </div>
    </section>
  );
}
