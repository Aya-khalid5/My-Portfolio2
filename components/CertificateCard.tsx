import { ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";
import ProjectImage from "@/components/ui/ProjectImage";

export default function CertificateCard({ cert }: { cert: Certification }) {
  const hasLink = cert.credentialUrl && cert.credentialUrl !== "#";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <ProjectImage
        src={cert.image}
        alt={`${cert.name} certificate`}
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-base font-medium text-ink">
          {cert.name}
        </h3>
        <p className="text-sm text-ink-soft">{cert.provider}</p>
        {cert.issueDate && (
          <p className="text-xs text-ink-soft/80">{cert.issueDate}</p>
        )}

        {hasLink ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring link-draw mt-2 flex w-fit items-center gap-1.5 text-sm font-medium text-clay-dark"
          >
            View credential <ExternalLink size={13} />
          </a>
        ) : (
          <span className="mt-2 text-xs font-medium text-ink-soft/70">
            [ADD CERTIFICATE LINK]
          </span>
        )}
      </div>
    </div>
  );
}
