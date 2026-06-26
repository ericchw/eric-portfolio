export const personal = {
  name: 'Eric Chan',
  title: 'Software Engineer',
  subtitle: 'Backend · Automation · Cloud',
  location: 'Vancouver, BC',
  email: 'ericchw97@hotmail.com',
  phone: '(778) 723-7539',
  github: 'https://github.com/ericchw',
  linkedin: 'https://www.linkedin.com/in/ericchw/',
  bio: "I build scalable backend systems, automate operational workflows, and integrate APIs across ecommerce and enterprise environments. Experienced in Python, C#, ASP.NET, SQL Server, and cloud infrastructure.",
  openTo: "Open to backend, full-stack, and automation engineering roles in Vancouver.",
}

export const highlights = [
  { icon: '⚡', title: 'Inventory Automation',  desc: 'End-to-end Python pipelines for inventory & pricing sync across ecommerce platforms.', stat: '↓ 99%+ manual workload' },
  { icon: '🛡️', title: 'Platform Stability',    desc: 'Enterprise logistics booking & tracking systems maintained at Swivel Software.',        stat: '99.5% uptime'           },
  { icon: '🔍', title: 'Query Optimization',    desc: 'SQL Server query tuning for a high-traffic logistics platform.',                        stat: '25% faster processing'  },
  { icon: '🔗', title: 'MES Modernization',     desc: 'Rebuilt legacy manufacturing execution systems with Flutter & JSON APIs.',              stat: 'Legacy → Modern stack'  },
]

export const projects = [
  {
    title: 'Ecommerce ETL Pipeline',
    desc: 'Automated ETL system that syncs inventory, pricing, and product data across multiple ecommerce platforms. Integrates supplier feeds via FTP and REST APIs with near real-time updates, cutting manual workload by 99%+.',
    tags: ['Python', 'Pandas', 'PostgreSQL', 'REST APIs', 'FTP', 'ETL', 'Django'],
    categories: ['Automation', 'Backend'],
    github: 'https://github.com/ericchw',
    highlight: '↓ 99%+ manual workload',
    icon: '⚙️',
  },
  {
    title: 'PIM Scraper & Data Mapping Tool',
    desc: 'Product Information Management tool that scrapes supplier catalogues, normalises attribute data, and maps products to marketplace-specific listing schemas (Amazon, eBay, Walmart). Handles image ingestion and category mapping.',
    tags: ['Python', 'Selenium Grid', 'Pandas', 'JSON', 'XML', 'PostgreSQL'],
    categories: ['Automation', 'Data'],
    github: 'https://github.com/ericchw',
    highlight: 'Multi-marketplace and supplier ready',
    icon: '🗂️',
  },
  {
    title: 'Logistics Booking & Tracking System',
    desc: 'Backend modules for enterprise logistics platform at Swivel Software. Optimized SQL Server queries and built RESTful integrations to support increasing client demand with 99.5% platform stability.',
    tags: ['C#', 'ASP.NET', 'SQL Server', 'T-SQL', 'REST APIs', 'Vue.js'],
    categories: ['Backend', 'Enterprise'],
    github: 'https://github.com/ericchw',
    highlight: '99.5% platform stability',
    icon: '🚚',
  },
  {
    title: 'MES Mobile Modernization',
    desc: 'Replaced a legacy desktop-bound Manufacturing Execution System with a Flutter mobile app backed by JSON REST APIs. Improved operator usability across factory floors with real-time data sync.',
    tags: ['Flutter', 'Dart', 'REST APIs', 'JSON', 'MySQL'],
    categories: ['Mobile', 'Backend'],
    github: 'https://github.com/ericchw',
    highlight: 'Legacy → Mobile-first',
    icon: '📱',
  },
  {
    title: 'IT Infrastructure Automation',
    desc: 'Python and PowerShell scripts for automated Azure AD user provisioning, Microsoft 365 tenant management, and VMware ESXi maintenance tasks at ServiceOne.',
    tags: ['Python', 'PowerShell', 'Azure AD', 'VMware', 'Microsoft 365'],
    categories: ['Automation', 'Cloud'],
    github: 'https://github.com/ericchw',
    highlight: 'Azure AZ-104 certified',
    icon: '☁️',
  },
]

export const PROJECT_CATEGORIES = ['All', 'Automation', 'Backend', 'Data', 'Cloud', 'Mobile', 'Enterprise']

export const skills = [
  { group: 'Languages',        tags: ['Python', 'C#', 'Java', 'JavaScript', 'PHP', 'VBA', 'ASP'] },
  { group: 'Frameworks',       tags: ['Django', 'ASP.NET', 'Spring Boot', 'React.js', 'Vue.js', 'Flutter', 'Laravel', 'Node.js'] },
  { group: 'Databases',        tags: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'NoSQL'] },
  { group: 'Cloud & DevOps',   tags: ['Azure', 'AWS', 'Docker', 'VMware ESXi', 'Nginx', 'Linux'] },
  { group: 'Automation & ETL', tags: ['Selenium Grid', 'Pandas', 'ETL Pipelines', 'Bash', 'PowerShell'] },
  { group: 'APIs & Web',       tags: ['REST APIs', 'JSON', 'XML', 'FTP', 'Tailwind CSS'] },
]

export const experience = [
  {
    company: 'Daiwa Distribution (BC) Inc.',
    role: 'eCommerce Automation Engineer',
    period: 'Sep 2024 – Present',
    location: 'Burnaby, BC',
    current: true,
    stack: ['Python', 'Selenium Grid', 'Pandas', 'Django', 'REST APIs', 'PostgreSQL', 'FTP'],
    bullets: [
      'Built Python automation pipelines for inventory & pricing sync — cut manual workload by 99%+',
      'Integrated supplier inventory feeds via FTP and APIs for near real-time synchronization',
      'Developed scraping and product ingestion tools to improve listing accuracy',
      'Maintained ETL pipelines and database synchronization processes',
    ],
  },
  {
    company: 'Swivel Software Inc.',
    role: 'Software Engineer',
    period: 'Jun 2023 – Aug 2024',
    location: 'Vancouver, BC',
    current: false,
    stack: ['C#', 'ASP.NET', 'Vue.js', 'SQL Server', 'T-SQL', 'REST APIs', 'IIS'],
    bullets: [
      'Maintained logistics booking & tracking systems — sustained 99.5% platform stability',
      'Optimized SQL Server queries, reducing processing time by 25%',
      'Developed scalable backend modules and RESTful integrations',
      'Participated in ERP testing, deployment validation, and production rollouts',
    ],
  },
  {
    company: 'Conquer Stars Limited',
    role: 'Programmer · Mobile & Web Developer',
    period: 'Sep 2021 – May 2023',
    location: 'Hong Kong',
    current: false,
    stack: ['Flutter', 'Laravel', 'React', 'PHP', 'MySQL', 'MongoDB'],
    bullets: [
      'Modernized legacy MES systems using Flutter and JSON API integrations',
      'Developed responsive web applications using Laravel, React, and PHP',
      'Integrated third-party APIs to extend client platform functionality',
    ],
  },
  {
    company: 'ServiceOne Limited',
    role: 'System Analyst',
    period: 'Dec 2018 – Jan 2020',
    location: 'Hong Kong',
    current: false,
    stack: ['ServiceNow', 'Azure AD', 'PowerShell', 'VMware ESXi', 'Python'],
    bullets: [
      'Supported enterprise IT infrastructure and identity management (Azure AD, M365)',
      'Automated maintenance tasks using Python and PowerShell',
      'Managed VMware virtualization environments and ITSM ticketing',
    ],
  },
  {
    company: 'Cathay Pacific Airways',
    role: 'Service Operation Specialist',
    period: 'Feb 2020 – Aug 2020',
    location: 'Hong Kong',
    current: false,
    stack: [],
    bullets: [
      'Supported enterprise service operations and IT workflows',
      'Assisted with operational monitoring and incident handling',
    ],
  },
]

export const education = [
  { school: 'Hong Kong Metropolitan University', degree: 'Bachelor of Computing (Hons)', field: 'Internet Technology', year: '2020 – 2023' },
  { school: 'HKU SPACE Community College', degree: 'Higher Diploma in IT', field: 'Computer Networking', year: '2015 – 2018' },
]

export const certifications = [
  { name: 'Microsoft Certified: Azure Administrator Associate', code: 'AZ-104', icon: '☁️' },
  { name: 'ITIL v3 Foundation Certificate', code: 'ITIL v3', icon: '🏅' },
]
