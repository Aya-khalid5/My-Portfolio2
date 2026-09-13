import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const preview = certifications.slice(0, 4);

  return (
    <section
      id="certifications-preview"
      className="border-t border-border py-20 sm:py-24"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader title="Certifications" />
          <Link
            href="/certifications"
            className="focus-ring link-draw flex items-center gap-1.5 text-sm font-medium text-clay-dark"
          >
            View all certifications <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
