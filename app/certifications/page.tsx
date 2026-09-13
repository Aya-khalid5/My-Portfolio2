import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Certifications | ${SITE.name}`,
  description: `Certifications earned by ${SITE.name}, ${SITE.title}.`,
};

export default function CertificationsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Certifications"
          description="Credentials from professional training programs and coursework."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
