export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE = {
  name: "Aya Khaled Abdelhamid Abdelaziz",
  shortName: "Aya Khaled",
  title: "Data Analyst",
  headline: "Data Analyst | Excel • SQL • Power BI | Turning Data into Insights",
  positioning:
    "I transform raw and messy data into clear insights, meaningful KPIs, and interactive dashboards.",
  location: "Egypt",
  photo: "/images/aya-photo.png",
  email: "ayak48710@gmail.com",
  linkedin: "https://www.linkedin.com/in/aya-khaled5/",
  github: "https://github.com/Aya-khalid5/",
};
