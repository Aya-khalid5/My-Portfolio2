export interface Certification {
  name: string;
  provider: string;
  issueDate: string;
  image: string;
  credentialUrl: string;
}

// credentialUrl is left as "#" (no verification link was provided for
// these certificates) — replace with the real link when available.
export const certifications: Certification[] = [
  {
    name: "Advanced Data Analytics — Summer Training",
    provider: "National Telecommunication Institute (NTI) / ITIDA",
    issueDate: "August – September 2026",
    image: "/certificates/nti-advanced-data-analytics.png",
    credentialUrl: "#",
  },
  {
    name: "Data Analysis Training Course",
    provider: "Microsoft Egypt — Tawar & Bayar",
    issueDate: "September 2025",
    image: "/certificates/microsoft-data-analysis.png",
    credentialUrl: "#",
  },
  {
    name: "Data Analysis, Power BI and Power Query",
    provider: "KorsatCode",
    issueDate: "November 2025",
    image: "/certificates/korsatcode-power-bi.jpg",
    credentialUrl: "#",
  },
  {
    name: "SQL (Basic)",
    provider: "HackerRank",
    issueDate: "February 2026",
    image: "/certificates/hackerrank-sql-basic.png",
    credentialUrl: "#",
  },
  {
    name: "Programming Diploma — Training Scholarship",
    provider: "Semicolon",
    issueDate: "",
    image: "/certificates/semicolon-programming-diploma.jpeg",
    credentialUrl: "#",
  },
];
