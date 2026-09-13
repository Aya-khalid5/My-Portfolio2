import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://your-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE.name} | Data Analyst`,
  description:
    "Data Analyst specializing in Excel, SQL, Power BI, Python, data cleaning, visualization, dashboards, and business insights.",
  openGraph: {
    title: `${SITE.name} | Data Analyst`,
    description:
      "Data Analyst specializing in Excel, SQL, Power BI, Python, data cleaning, visualization, dashboards, and business insights.",
    url: siteUrl,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Data Analyst`,
    description:
      "Data Analyst specializing in Excel, SQL, Power BI, Python, data cleaning, visualization, dashboards, and business insights.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
