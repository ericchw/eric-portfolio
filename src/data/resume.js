// Profile content follows the #225 résumé; demo work is labeled separately.

export const personal = {
  name: 'Eric Chan',
  title: 'Software Engineer',
  subtitle: 'Applications · APIs · Automation',
  location: 'Burnaby, BC',
  email: 'ericchw97@hotmail.com',
  github: 'https://github.com/ericchw',
  linkedin: 'https://linkedin.com/in/ericchw',
  bio: 'Software engineer with experience developing business applications, integrating REST APIs and automating operational workflows. Builds Python data-processing tools and has delivered C#/ASP.NET, React, Laravel and Flutter applications. Works with users to understand business requirements, investigate application issues and verify releases. Uses Claude Code and Codex with MCP servers, plugins and reusable skills for development, debugging and test preparation.',
  openTo:
    'Open to software development, backend, and automation opportunities in the Vancouver area.',
}

export const projects = [
  {
    title: 'Clinic Intake Automation',
    desc: 'A runnable n8n + Python proof of concept: validate incoming requests, flag exceptions, and require staff review before approval. Includes audit events and operational reporting.',
    tags: ['Python', 'FastAPI', 'n8n', 'PostgreSQL', 'Docker'],
    categories: ['Automation', 'Backend', 'Demos'],
    github: 'https://github.com/ericchw/clinic-n8n-intake-demo',
    featured: true,
  },
  {
    title: 'ETL Scraper',
    desc: 'Python desktop application using PyQt6 and Playwright to extract and normalize product data, then export Best Buy and Newegg marketplace listings.',
    tags: ['Python', 'PyQt6', 'Playwright', 'ETL'],
    categories: ['Automation', 'Data'],
    github: 'https://github.com/ericchw/etl_scraper',
    kind: 'extract',
    eyebrow: '01 / DATA TOOLS',
  },
  {
    title: 'Magento Docker',
    desc: 'Containerized Magento eCommerce development environment using Docker Compose, integrating web serving, database, product search, caching, and message queues. Includes automated setup and backup/restore scripts to simplify local development and recovery.',
    tags: ['Docker Compose', 'Magento', 'Databases', 'DevOps'],
    categories: ['Backend', 'Cloud'],
    github: 'https://github.com/ericchw/magento-docker',
    kind: 'containers',
    eyebrow: '02 / DEVELOPMENT ENVIRONMENT',
  },
  {
    title: 'Shipping Rate Calculator',
    desc: 'A shipping calculator with account-owned carrier credentials, saved origin addresses, and actual API rates from Canada Post, FedEx and Loomis Express.',
    tags: ['Carrier APIs', 'Shipping', 'Integrations'],
    categories: ['Backend', 'Automation'],
    github: 'https://github.com/ericchw/shipping-rate-calculator',
    kind: 'shipping',
    eyebrow: '03 / API INTEGRATION',
  },
]

export const PROJECT_CATEGORIES = [
  'All',
  'Automation',
  'Backend',
  'Data',
  'Cloud',
  'Demos',
]

export const skills = [
  {
    group: 'Application development',
    tags: [
      'Python',
      'C#',
      'ASP.NET',
      'JavaScript',
      'React',
      'Vue.js',
      'PHP',
      'Laravel',
      'Flutter',
      'HTML',
      'CSS',
      'REST APIs',
    ],
  },
  {
    group: 'Business workflow automation',
    tags: [
      'Pandas',
      'ETL pipelines',
      'data transformation and validation',
      'API integration',
      'JSON',
      'XML',
      'CSV',
      'FTP',
      'Selenium',
      'BeautifulSoup',
      'n8n (portfolio demo)',
    ],
  },
  {
    group: 'Databases and delivery',
    tags: [
      'SQL Server',
      'T-SQL',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Git',
      'Docker',
      'Windows IIS',
      'regression testing',
      'release verification',
      'production troubleshooting',
    ],
  },
  {
    group: 'AI-assisted development',
    tags: [
      'Claude Code',
      'Codex',
      'MCP servers',
      'Plugins & skills',
      'PyTorch / TensorFlow exposure',
    ],
  },
]

export const experience = [
  {
    company: 'Daiwa Distribution (BC) Inc.',
    role: 'eCommerce Automation Engineer / Software Engineer (Data & Automation)',
    period: 'Sep 2024 – Present',
    current: true,
    bullets: [
      'Translated operations and warehouse requirements into Python automation for inventory, pricing and product catalogue workflows across Best Buy and Newegg marketplaces.',
      'Built Python/Pandas data integration and validation workflows connecting warehouse and supplier feeds through REST APIs and FTP; used PostgreSQL and MongoDB.',
      'Investigated scheduled-job failures, API errors and database mismatches, restoring synchronization across business systems.',
      'Documented workflows, validated system changes and supported production releases using Git and structured testing.',
    ],
  },
  {
    company: 'Swivel Software Inc.',
    role: 'Software Engineer',
    period: 'Jun 2023 – Feb 2024',
    current: false,
    bullets: [
      'Developed ERP and logistics booking/tracking applications with C#, ASP.NET, JavaScript, Vue.js, SQL Server and REST APIs.',
      'Improved SQL Server and T-SQL queries across complex schemas, reducing data-processing time by 25%.',
      'Supported automated testing for SQL/ERP systems and regression checks; debugged application, API and IIS deployment issues through post-release verification.',
    ],
  },
  {
    company: 'Conquer Stars Limited',
    role: 'Programmer / Web & Mobile Developer',
    period: 'Sep 2021 – May 2023',
    current: false,
    bullets: [
      'Developed web and mobile applications with React, Flutter, Laravel and PHP, connecting frontend experiences to backend services and databases.',
      'Integrated third-party REST APIs and modernized legacy manufacturing execution systems with Flutter and JSON-based APIs.',
      'Performed manual and regression testing, defect investigation and end-to-end release checks with project contributors.',
    ],
  },
  {
    company: 'Cathay Pacific Airways Limited',
    role: 'Service Operation Specialist',
    period: 'Feb 2020 – Aug 2020',
    current: false,
    bullets: [
      'Provided enterprise IT support through BMC Remedy, documented incidents and escalations, and used PowerShell for Active Directory administration.',
    ],
  },
  {
    company: 'ServiceOne Limited',
    role: 'System Analyst',
    period: 'Dec 2018 – Jan 2020',
    current: false,
    bullets: [
      'Resolved user, application and connectivity incidents through ServiceNow; used Python and PowerShell for system maintenance and repetitive support tasks.',
    ],
  },
  {
    company: 'Telstar International Limited',
    role: 'IT PMO Officer',
    period: 'Aug 2018 – Dec 2018',
    current: false,
    bullets: [
      'Automated recurring Excel reports with VBA and supported IT asset inventory, documentation and deployment coordination.',
    ],
  },
]

export const education = [
  {
    school: 'Hong Kong Metropolitan University',
    degree: 'Bachelor of Computing with Honours in Internet Technology',
    year: 'Sep 2020 - Aug 2023',
  },
  {
    school: 'HKU SPACE Community College',
    degree: 'Higher Diploma in Information Technology (Computer Networking)',
    year: 'Sep 2015 - Aug 2018',
  },
]

export const certifications = [
  {
    name: 'Azure Administrator Associate (AZ-104), earned',
    org: 'Microsoft',
    year: 'Feb 2024',
  },
  {
    name: 'ITIL v3 Foundation',
    org: '',
    year: 'Mar 2019',
  },
]
