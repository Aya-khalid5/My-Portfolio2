export interface Service {
  slug: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "data-cleaning",
    title: "Data Cleaning",
    description:
      "Preparing raw, messy datasets for analysis — handling missing values, duplicates, and inconsistent formatting so the numbers can be trusted.",
  },
  {
    slug: "excel-data-analysis",
    title: "Excel Data Analysis",
    description:
      "Building pivot tables, lookups, and dashboards in Excel to turn spreadsheets into clear, decision-ready summaries.",
  },
  {
    slug: "power-bi-dashboards",
    title: "Power BI Dashboards",
    description:
      "Designing interactive Power BI reports with DAX measures and data models that let stakeholders explore KPIs on their own.",
  },
  {
    slug: "sql-data-analysis",
    title: "SQL Data Analysis",
    description:
      "Writing queries — joins, aggregations, CTEs — to pull, filter, and shape data directly from relational databases.",
  },
  {
    slug: "python-data-analysis",
    title: "Python Data Analysis",
    description:
      "Using Pandas and NumPy for exploratory analysis, data preprocessing, and lightweight machine learning models.",
  },
];
