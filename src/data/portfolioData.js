export const personalInfo = {
  name: "MARIUM WASEEM",
  title: "Computer Science Student & Data Analyst",
  subtitles: [
    "Data Analyst & BI Specialist",
    "SQL Server & Excel Expert",
    "SEO & Content Strategist",
    "CS Student @ Sir Syed University"
  ],
  email: "mwaseem0488@gmail.com",
  phone: "+92 316 3298150",
  whatsapp: "923163298150",
  location: "Karachi, Pakistan",
  summary: "Computer Science student with a strong foundation in data analysis, SQL, and business intelligence tools, complemented by hands-on experience in content writing and SEO. Skilled in building Power BI dashboards, querying data with SQL Server, and turning raw datasets into clear, actionable Excel reports, while producing SEO-optimized content that supports informed, data-driven decisions.",
  bioHighlights: [
    { title: "Data Analysis & BI", desc: "Expertise in Power BI, SQL Server, Excel PivotTables, and Python (Pandas/NumPy) for actionable insights." },
    { title: "SEO & Digital Strategy", desc: "Proven track record in organic visibility, keyword research, meta tags, and Google Search Console." },
    { title: "Client & Public Relations", desc: "Strong communication, active listening, and problem-solving derived from customer handling and tutoring." }
  ],
  stats: [
    { label: "Featured Projects", value: "3+" },
    { label: "Key Tech Skills", value: "15+" },
    { label: "Certifications", value: "3" },
    { label: "SEO & Data Focus", value: "100%" }
  ]
};

export const educationData = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science",
    status: "In Process",
    period: "2024 – 2028",
    institution: "Sir Syed University of Engineering and Technology",
    location: "Karachi, Pakistan",
    icon: "GraduationCap",
    details: "Focusing on Software Engineering, Data Structures, Database Systems (SQL), Algorithms, and Web Development."
  },
  {
    id: 2,
    degree: "Intermediate in Pre-Engineering",
    status: "Completed",
    period: "2022 – 2024",
    institution: "CANNT College",
    location: "Karachi, Pakistan",
    icon: "BookOpen",
    details: "Built strong mathematical background, analytical problem-solving skills, and foundational physics/chemistry logic."
  },
  {
    id: 3,
    degree: "Matriculation in Computer Science",
    status: "Completed",
    period: "2022",
    institution: "TCF Saudabad Campus",
    location: "Karachi, Pakistan",
    icon: "Award",
    details: "Graduated with excellence in Computer Science fundamentals and foundational logic."
  }
];

export const experienceData = [
  {
    id: 1,
    role: "SEO & Content Writer",
    type: "Self-Initiated",
    company: "Personal Tech Blog",
    period: "Recent",
    icon: "FileText",
    highlights: [
      "Published SEO-friendly articles on Excel, Python, AI, and Digital Marketing.",
      "Optimized content through keyword research, internal linking, meta tags, and Search Console indexing, improving on-page SEO and organic visibility.",
      "Wrote clear, well-researched technology and productivity content focused on accuracy and reader engagement."
    ],
    skills: ["SEO", "Content Writing", "Google Search Console", "Keyword Research", "On-Page Optimization"]
  },
  {
    id: 2,
    role: "Volunteer Tutor",
    type: "Volunteer",
    company: "Ilm Ujala Program, TCF School",
    period: "Pandemic Period",
    icon: "HeartHandshake",
    badge: "Official Appreciation Letter Received",
    highlights: [
      "During the challenging circumstances of the coronavirus pandemic, undertook the role of a tutor, providing educational support to 9 to 10 students.",
      "Efforts were recognized with an official appreciation letter from the TCF head office, acknowledging the impact of teaching on students' academic journeys."
    ],
    skills: ["Mentorship", "Communication", "Active Listening", "Social Responsibility"]
  },
  {
    id: 3,
    role: "Volunteer, Social Media Team",
    type: "Volunteer",
    company: "Education The First Forum",
    period: "Volunteer Experience",
    icon: "Share2",
    highlights: [
      "Assisted in managing and promoting social media services, contributing to increased online engagement and awareness through digital activities.",
      "Collaborated effectively with IT and management teams to support organizational goals and digital presence."
    ],
    skills: ["Social Media Management", "Digital Marketing", "Team Collaboration", "Communication"]
  }
];

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "data", label: "Data Analysis & BI" },
  { id: "db", label: "Databases" },
  { id: "seo", label: "Content & SEO" },
  { id: "prog", label: "Programming" },
  { id: "tools", label: "Tools" },
  { id: "soft", label: "Soft Skills" }
];

export const skillsData = [
  // Data Analysis & BI
  { name: "Power BI", category: "data", level: 90, icon: "BarChart3", top: true },
  { name: "Python (Pandas, NumPy)", category: "data", level: 85, icon: "Code2", top: true },
  { name: "Power Query", category: "data", level: 88, icon: "DatabaseZap", top: true },
  { name: "Excel (PivotTables, Slicers)", category: "data", level: 92, icon: "TableGrid", top: true },
  { name: "Data Cleaning & Prep", category: "data", level: 90, icon: "Sparkles", top: false },
  { name: "Data Visualization", category: "data", level: 92, icon: "PieChart", top: true },

  // Database
  { name: "SQL Server (T-SQL)", category: "db", level: 88, icon: "Database", top: true },
  { name: "MySQL", category: "db", level: 82, icon: "Database", top: false },
  { name: "SQL Joins & Aggregations", category: "db", level: 90, icon: "GitMerge", top: true },

  // Content & SEO
  { name: "SEO Optimization", category: "seo", level: 90, icon: "Search", top: true },
  { name: "Keyword Research", category: "seo", level: 92, icon: "KeyRound", top: true },
  { name: "Google Search Console", category: "seo", level: 88, icon: "Globe", top: true },
  { name: "Content Writing", category: "seo", level: 90, icon: "PenTool", top: true },
  { name: "Internal Linking & Meta Tags", category: "seo", level: 89, icon: "Link", top: false },

  // Programming
  { name: "Python", category: "prog", level: 85, icon: "Terminal", top: true },
  { name: "C#", category: "prog", level: 78, icon: "Code", top: false },
  { name: "C++", category: "prog", level: 80, icon: "Cpu", top: false },

  // Tools
  { name: "MS Power BI Desktop", category: "tools", level: 92, icon: "Monitor", top: true },
  { name: "MS Excel", category: "tools", level: 94, icon: "FileSpreadsheet", top: true },
  { name: "MS Word", category: "tools", level: 90, icon: "FileText", top: false },

  // Soft Skills
  { name: "Communication", category: "soft", level: 95, icon: "MessageSquare", top: true },
  { name: "Problem Solving", category: "soft", level: 92, icon: "Lightbulb", top: true },
  { name: "Active Listening", category: "soft", level: 90, icon: "Ear", top: false },
  { name: "Multitasking", category: "soft", level: 88, icon: "Layers", top: false },
  { name: "Customer Handling", category: "soft", level: 90, icon: "Users", top: true }
];

export const projectsData = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    tools: ["Power BI", "MS Excel", "Power Query", "DAX"],
    summary: "Built an interactive Power BI dashboard with KPI cards, sales trends, regional analysis, and product performance.",
    fullDescription: "Designed and developed an end-to-end Sales Performance Dashboard using Power BI Desktop and Excel. Processed multi-region transactional data through Power Query for data cleaning, constructed custom DAX measures for Month-over-Month (MoM) growth, and built interactive slicers allowing decision-makers to drill down into product categories and regional sales metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    themeColor: "from-cyan-500 to-blue-600",
    metrics: [
      { label: "Sales Growth Tracked", value: "+24.5%" },
      { label: "Interactive Slicers", value: "5 Categories" },
      { label: "Regions Analyzed", value: "4 Zones" }
    ],
    features: [
      "KPI Cards displaying Total Sales, Total Profit, and Total Orders.",
      "Regional map & bar chart comparison across product lines.",
      "Power Query data cleaning, removing duplicate entries, and data formatting.",
      "Dynamic date hierarchy slicers for yearly and monthly performance views."
    ],
    codeSnippet: `// Power BI DAX Measures
Total Sales = SUM(SalesData[Revenue])
MoM Growth = 
VAR PrevMonth = CALCULATE([Total Sales], PREVIOUSMONTH('Calendar'[Date]))
RETURN DIVIDE([Total Sales] - PrevMonth, PrevMonth, 0)`
  },
  {
    id: 2,
    title: "E-Commerce Sales Analysis",
    tools: ["SQL Server", "Power BI", "Data Modeling", "T-SQL"],
    summary: "Analyzed sales data using SQL Server and created interactive Power BI dashboards visualizing revenue, profit, customer segments, and regional sales trends.",
    fullDescription: "Constructed a comprehensive SQL data pipeline and analytics dashboard for e-commerce transactions. Extracted, transformed, and queried raw sales data in SQL Server using advanced INNER/LEFT JOINs, aggregate functions, and subqueries. Transferred structured datasets into Power BI for visually compelling customer segmentation and revenue trend reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    themeColor: "from-purple-500 to-indigo-600",
    metrics: [
      { label: "Database Records", value: "50,000+" },
      { label: "Query Speed Up", value: "35%" },
      { label: "Customer Segments", value: "4 Tiers" }
    ],
    features: [
      "SQL Server database schema querying with multi-table JOINs.",
      "Customer RFM (Recency, Frequency, Monetary) segmentation analytics.",
      "Revenue vs Profit Margin visualization by product category.",
      "Interactive filtering by geographical region and customer tier."
    ],
    codeSnippet: `-- SQL Server Data Retrieval Query
SELECT 
    c.CustomerSegment,
    COUNT(DISTINCT o.OrderID) AS TotalOrders,
    SUM(o.TotalAmount) AS TotalRevenue,
    ROUND(SUM(o.ProfitMargin), 2) AS TotalProfit
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerSegment
ORDER BY TotalRevenue DESC;`
  },
  {
    id: 3,
    title: "Student Performance Analysis",
    tools: ["SQL Server", "MS Excel", "PivotTables", "Data Cleaning"],
    summary: "Queried student records using SQL Server and analyzed subject-wise performance. Created Excel reports and charts to summarize academic performance.",
    fullDescription: "Conducted an academic evaluation project for educational performance tracking. Queried student assessment databases in SQL Server to extract subject marks, pass rates, and grade distributions. Exported cleaned data into MS Excel to build dynamic PivotTables, conditional formatting scorecards, and visual summary charts.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    themeColor: "from-emerald-500 to-teal-600",
    metrics: [
      { label: "Subjects Evaluated", value: "10 Subjects" },
      { label: "Report Accuracy", value: "100%" },
      { label: "Pivot Summary", value: "Dynamic" }
    ],
    features: [
      "SQL Server queries evaluating student grade averages and top performers.",
      "Excel PivotTables summarizing subject-wise score distributions.",
      "Conditional formatting highlighting students requiring academic support.",
      "Visual bar charts and pie graphs for institutional review."
    ],
    codeSnippet: `-- SQL Query for Student Performance Summaries
SELECT 
    s.SubjectName,
    COUNT(r.StudentID) AS StudentCount,
    AVG(r.MarksObtained) AS AverageGrade,
    MAX(r.MarksObtained) AS HighestScore,
    MIN(r.MarksObtained) AS LowestScore
FROM StudentRecords r
JOIN Subjects s ON r.SubjectID = s.SubjectID
GROUP BY s.SubjectName
HAVING AVG(r.MarksObtained) >= 50;`
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Python Programming Course",
    issuer: "NAVTTC (National Vocational and Technical Training Commission)",
    status: "Verified Certificate",
    period: "Completed",
    icon: "Terminal",
    color: "emerald",
    desc: "Comprehensive training in Python syntax, data structures, OOP principles, and script automation."
  },
  {
    id: 2,
    title: "NumPy and Pandas for Data Analysis",
    issuer: "Udemy Academy",
    status: "Verified Certificate",
    period: "Completed",
    icon: "FileSpreadsheet",
    color: "blue",
    desc: "Hands-on data manipulation, array operations, DataFrame cleaning, and exploratory data analysis."
  },
  {
    id: 3,
    title: "SEO Course",
    issuer: "DigiSkills Pakistan",
    status: "In Progress",
    period: "Currently Enrolled",
    icon: "Search",
    color: "violet",
    desc: "Advanced Technical SEO, link building strategies, site audit, and digital marketing visibility."
  }
];
