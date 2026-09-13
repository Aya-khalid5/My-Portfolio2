import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <SectionHeader
            title="Let's talk data"
            description="Open to Data Analyst roles and collaborations. Reach out directly, or connect on LinkedIn and GitHub."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${SITE.email}`} icon={<Mail size={16} />}>
              Email Me
            </Button>
            <Button
              href={SITE.linkedin}
              variant="secondary"
              icon={<Linkedin size={16} />}
            >
              LinkedIn
            </Button>
            <Button
              href={SITE.github}
              variant="secondary"
              icon={<Github size={16} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
