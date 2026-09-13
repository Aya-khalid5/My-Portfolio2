export interface Metric {
  value: string;
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tools: string[];
  datasetSize?: string;
  metrics: Metric[];
  insights?: string[];
  mainWork: string[];
  images: ProjectScreenshot[];
  githubUrl: string;
  projectUrl: string;
}

// IMPORTANT: githubUrl and projectUrl are placeholders ("#") until the
// real links are added. Where a project has no screenshots yet, the
// ProjectImage component shows a professional placeholder instead.
export const projects: Project[] = [
  {
    slug: "social-media-performance-analytics-dashboard",
    title: "Social Media Performance Analytics Dashboard",
    summary:
      "A Power BI dashboard analyzing engagement, reach, and impressions across a year of social media activity, comparing sponsored vs. organic performance.",
    tools: ["Power BI", "Power Query", "Excel", "DAX"],
    datasetSize: "3,850 posts",
    metrics: [
      { value: "3.93M", label: "Likes" },
      { value: "129.43M", label: "Impressions" },
      { value: "80.37M", label: "Reach" },
      { value: "3.83%", label: "Engagement Rate" },
    ],
    mainWork: [
      "Data Cleaning",
      "Missing Value Handling",
      "Data Transformation",
      "Date Transformation",
      "Star Schema",
      "DAX Measures",
      "MoM Analysis",
      "YoY Analysis",
      "Sponsored vs Organic Analysis",
      "RANKX",
      "Interactive Bookmarks and Buttons",
    ],
    images: [
      { src: "/projects/social-media-overview.png", caption: "Overview" },
      { src: "/projects/social-media-engagement.png", caption: "Engagement Performance" },
      { src: "/projects/social-media-details.png", caption: "Post-Level Detail" },
      { src: "/projects/social-media-datamodel.png", caption: "Data Model — Star Schema" },
    ],
    githubUrl: "#",
    projectUrl: "https://app.powerbi.com/links/SlgmLg2pm5?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "sales-operations-analytics-power-bi",
    title: "Sales & Operations Analytics — Power BI",
    summary:
      "A multi-page Power BI report covering inventory and supply chain health, operations and profitability, and executive sales performance.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    metrics: [
      { value: "2.3K", label: "May Risk Peak" },
      { value: "65K+", label: "Waste" },
      { value: "52.12%", label: "Delayed Purchase Orders" },
      { value: "103M", label: "Gross Profit" },
      { value: "-7M", label: "Net Profit" },
    ],
    insights: [
      "Inventory & Supply Chain",
      "Operations & Profitability",
      "Executive Sales",
    ],
    mainWork: [
      "Data Modeling",
      "DAX Measures",
      "Inventory & Supply Chain Analysis",
      "Operations & Profitability Analysis",
      "Executive Sales Reporting",
    ],
    images: [
      { src: "/projects/sales-executive.png", caption: "Executive Sales" },
      { src: "/projects/sales-operations-profitability.png", caption: "Operations & Profitability" },
      { src: "/projects/sales-inventory-supply.png", caption: "Inventory & Supply Chain" },
      { src: "/projects/sales-datamodel.png", caption: "Data Model" },
    ],
    githubUrl: "#",
    projectUrl: "https://app.powerbi.com/links/Crlp_L_-UM?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "digital-marketing-campaign-performance-dashboard",
    title: "Digital Marketing Campaign Performance Dashboard",
    summary:
      "An Excel dashboard comparing campaign performance across five channels — TikTok, Facebook, Instagram, Google Ads, and Email.",
    tools: ["Excel", "Pivot Tables", "Slicers", "Data Modeling"],
    metrics: [
      { value: "$106,116.29", label: "Spend" },
      { value: "3,357,656", label: "Impressions" },
      { value: "132,052", label: "Clicks" },
      { value: "14,258", label: "Conversions" },
      { value: "4%", label: "CTR" },
      { value: "11%", label: "Conversion Rate" },
    ],
    insights: ["TikTok", "Facebook", "Instagram", "Google Ads", "Email"],
    mainWork: [
      "Pivot Tables",
      "Slicers",
      "Data Modeling",
      "Cross-Channel Comparison",
    ],
    images: [
      { src: "/projects/digital-marketing-channel.png", caption: "Channel Performance" },
      { src: "/projects/digital-marketing-campaign.png", caption: "Campaign Performance" },
    ],
    githubUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "global-food-waste-economic-impact",
    title: "Global Food Waste & Economic Impact",
    summary:
      "A Python and machine learning project modeling global food waste patterns and their economic impact, deployed as a Streamlit app.",
    tools: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Machine Learning"],
    metrics: [
      { value: "124.12M", label: "Tons of Food Waste" },
      { value: "$125.20M", label: "Economic Loss" },
      { value: "109.49 kg", label: "Per Person" },
      { value: "50.16%", label: "Household Waste Share" },
      { value: "3.55M", label: "Sample Population" },
    ],
    insights: [
      "Linear Regression — MAE: 6734.7, RMSE: 10302.6, R²: 0.533",
      "Logistic Regression classification of waste risk",
    ],
    mainWork: [
      "Data Preprocessing",
      "Feature Engineering",
      "Linear Regression",
      "Logistic Regression",
      "Streamlit App Development",
    ],
    images: [
      { src: "/projects/food-waste-overview.png", caption: "Waste Overview" },
      { src: "/projects/food-waste-country.png", caption: "Country Analysis" },
      { src: "/projects/food-waste-map.png", caption: "Map" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Graduation-Project-NTI-",
    projectUrl: "https://app.powerbi.com/links/TUl7JQkVUv?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "smart-recruitment-assistant",
    title: "Smart Recruitment Assistant",
    summary:
      "A machine learning project predicting candidate outcomes from recruitment data, comparing five classification models.",
    tools: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    datasetSize: "19,158 records",
    metrics: [
      { value: "79.75%", label: "Gradient Boosting Accuracy" },
      { value: "78.22%", label: "Logistic Regression Recall" },
    ],
    mainWork: [
      "Data Preprocessing",
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "XGBoost",
      "Decision Tree",
      "Model Evaluation",
    ],
    images: [
      { src: "/projects/smart-recruitment-accuracy.png", caption: "Model Accuracy Comparison" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/SMART-RECRUITMENT-ASSISTANT_ITI",
    projectUrl: "#",
  },
  {
    slug: "asd-screening-project",
    title: "ASD Screening Project",
    summary:
      "A classification project screening for Autism Spectrum Disorder indicators, comparing five machine learning models after preprocessing and oversampling.",
    tools: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    metrics: [],
    insights: [
      "Data Preprocessing",
      "One-Hot Encoding",
      "Feature Scaling",
      "Oversampling",
    ],
    mainWork: [
      "Data Preprocessing",
      "One-Hot Encoding",
      "Feature Scaling",
      "Oversampling",
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "XGBoost",
      "Decision Tree",
      "Model Evaluation",
    ],
    images: [
      { src: "/projects/asd-screening-models.png", caption: "Model Comparison" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Final_ASD",
    projectUrl: "#",
  },
  {
    slug: "sales-analysis-report",
    title: "Sales Analysis Report — Power BI",
    summary:
      "A Power BI report analyzing sales performance across products, territories, and time, with a dedicated map view and a detailed product-level breakdown.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    metrics: [
      { value: "33.9M", label: "Total Sales" },
      { value: "85.9K", label: "Total Quantity" },
      { value: "916.0K", label: "Total Freight" },
      { value: "23.6K", label: "Total Orders" },
      { value: "2.9M", label: "Total TaxAmt" },
    ],
    insights: [
      "North America 58.42% of total sales",
      "Europe 36.26% of total sales",
      "Pacific 5.31% of total sales",
    ],
    mainWork: [
      "Data Modeling",
      "DAX Measures",
      "Sales Trend Analysis",
      "Territory Mapping",
      "Product-Level Detail Table",
    ],
    images: [
      { src: "/projects/sales-analysis-dashboard.png", caption: "Dashboard" },
      { src: "/projects/sales-analysis-map.png", caption: "Map" },
      { src: "/projects/sales-analysis-details.png", caption: "Details" },
      { src: "/projects/sales-analysis-datamodel.png", caption: "Data Model" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Sales-Analysis",
    projectUrl: "#",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
