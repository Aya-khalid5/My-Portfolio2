export interface SkillGroup {
  title: string;
  items: string[];
}

export const coreTools: string[] = [
  "Excel",
  "Power BI",
  "SQL",
  "Python",
  "Tableau",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Analysis",
    items: [
      "Data Cleaning",
      "Data Transformation",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Business Insights",
      "KPI Analysis",
      "Data Modeling",
      "Dashboard Development",
    ],
  },
  {
    title: "Excel",
    items: [
      "Power Query",
      "Power Pivot",
      "Pivot Tables",
      "XLOOKUP",
      "Data Validation",
      "Conditional Formatting",
      "Charts",
      "Dashboard Design",
    ],
  },
  {
    title: "Power BI",
    items: [
      "Power Query",
      "DAX",
      "Data Modeling",
      "Star Schema",
      "KPIs",
      "Interactive Dashboards",
      "Bookmarks",
      "Dynamic Buttons",
    ],
  },
  {
    title: "Python",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
      "Data Transformation",
      "EDA",
      "Missing Value Handling",
      "Duplicate Handling",
      "Data Validation",
    ],
  },
  {
    title: "SQL",
    items: [
      "Joins",
      "Aggregations",
      "CTEs",
      "Filtering",
      "Grouping",
      "Data Cleaning",
      "Data Analysis",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "Linear Regression",
      "Logistic Regression",
      "Classification",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
];
