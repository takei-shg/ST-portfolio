import shigeResumeImage from "@/assets/images/shige-resume.png";

export const resume = {
  name: "Shigekazu Takei",
  title: "Senior Software Engineer · Cloud Architect",
  location: "Tokyo, Japan",
  email: "takei.shg@gmail.com",
  website: "https://github.com/takei-shg",
  photo: {
    src: shigeResumeImage.src,
    width: shigeResumeImage.width,
    height: shigeResumeImage.height,
    alt: "Portrait of Shigekazu Takei",
  },
  profiles: [
    { label: "GitHub", url: "https://github.com/takei-shg" },
    { label: "Twitter", url: "https://twitter.com/takeishg" },
  ],
  summary: [
    "Senior Cloud Architect and Technical Lead with more than 15 years of software engineering experience designing and delivering cloud-native platforms on AWS.",
    "Hands-on leader who translates ambiguous business goals into scalable, secure solutions, pairing infrastructure-as-code practices with full-stack development to ship resilient systems and guide teams end to end.",
  ],
  skills: [
    {
      category: "Cloud & Architecture",
      items: [
        "AWS (Lambda, EC2, ECS/EKS, DynamoDB, ElastiCache, RDS, Redshift, Cognito, EventBridge)",
        "Serverless computing",
        "Microservices",
        "Multi-tenant architecture",
        "Scalable distributed systems",
      ],
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        "Infrastructure as Code (AWS CDK, CloudFormation, AWS SAM)",
        "CI/CD automation",
        "Containerization (Docker, Kubernetes)",
        "Monitoring & observability (Datadog, New Relic, PagerDuty)",
      ],
    },
    {
      category: "Programming & Frameworks",
      items: [
        "Python (FastAPI)",
        "Scala & Java (Play Framework, Finagle)",
        "JavaScript/TypeScript (React, Next.js, Remix, AngularJS)",
        "SQL & NoSQL databases",
      ],
    },
    {
      category: "Leadership & Methodologies",
      items: [
        "Technical team leadership",
        "Agile/Scrum delivery",
        "Cross-functional collaboration",
        "Customer engagement & consulting",
        "Mentoring & knowledge sharing",
      ],
    },
    {
      category: "Languages",
      items: ["Japanese (native)", "English (business-level fluency)"],
    },
  ],
  experiences: [
    {
      role: "Senior Software Engineer · Technical Lead, dotData Console",
      company: "dotData, Inc.",
      location: "San Mateo, CA / Tokyo, Japan",
      period: "Oct 2024 – Present",
      description:
        "Architect for dotData's customer-facing administrative platform, owning the solution from concept through launch and ongoing operation.",
      highlights: [
        "Led the greenfield design and delivery of dotData Console, establishing IaC foundations with AWS CDK and Amplify and directing end-to-end implementation.",
        "Mentored a team of five external developers during the initial build, setting coding standards via prototypes, code reviews, and hands-on guidance.",
        "Serve as Japan-based technical owner post-launch, shipping customer-driven features while safeguarding reliability through proactive monitoring and infrastructure optimization.",
      ],
      technologies: [
        "FastAPI",
        "React (Remix)",
        "TypeScript",
        "AWS CDK",
        "AWS Amplify",
        "AWS Cognito",
        "AWS Lambda",
        "AWS Step Functions",
        "AWS EventBridge",
        "AWS EKS",
        "AWS ECS",
      ],
    },
    {
      role: "Senior Software Engineer · PoC Architect (Salesforce Analytics)",
      company: "dotData, Inc.",
      location: "San Mateo, CA",
      period: "Mar 2024 – Oct 2024",
      description:
        "Partnered with the CEO to evaluate a Salesforce-focused analytics service by delivering a production-quality proof of concept in under three months.",
      highlights: [
        "Transformed high-level concepts into a secure, serverless AWS architecture spanning frontend, backend, and Salesforce data ingestion.",
        "Implemented a full-stack solution featuring a Next.js interface on AWS Amplify, an AWS SAM-defined backend, and data synchronization via AppFlow and Glue.",
        "Accelerated market validation cycles while preserving scalability, authentication, and compliance with AWS best practices.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Docker",
        "AWS SAM",
        "AWS CloudFormation",
        "AWS Lambda",
        "AWS Step Functions",
        "AWS Cognito",
        "AWS DynamoDB",
        "AWS Glue",
        "AWS AppFlow",
      ],
    },
    {
      role: "Senior Software Engineer · Tech Lead",
      company: "dotData, Inc.",
      location: "San Mateo, CA",
      period: "Aug 2023 – Mar 2024",
      description:
        "Drove innovation efforts spanning generative AI experimentation and performance refactoring for emerging dotData products.",
      highlights: [
        "Advised the CEO on an LLM-powered marketing translation concept, proposing a RAG architecture and delivering a working Streamlit + OpenAI prototype within one week.",
        "Overhauled real-time data synchronization by replacing polling with a digest-based Server-Sent Events broadcast, significantly reducing latency and redundant traffic.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Streamlit",
        "OpenAI APIs",
        "Vector databases (LanceDB)",
        "React",
        "Next.js",
        "TypeScript",
        "TanStack Query",
      ],
    },
    {
      role: "Senior Software Engineer · Solution Architect",
      company: "dotData, Inc.",
      location: "San Mateo, CA",
      period: "May 2022 – Aug 2023",
      description:
        "Sole architect and project manager for a mission-critical integration with a major Japanese enterprise partner.",
      highlights: [
        "Led the engagement end to end, from technical proposal and architecture to implementation and production rollout of a multi-tenant integration platform.",
        "Engineered an Azure-hosted solution incorporating Synapse for auto-scaling orchestration and Key Vault-backed tenant isolation for secure SDK execution.",
      ],
      technologies: [
        "Python",
        "Azure Synapse",
        "Spark",
        "Azure Key Vault",
        "Azure Data Lake",
      ],
    },
    {
      role: "Senior Software Engineer · US Web Team Manager",
      company: "dotData, Inc.",
      location: "San Mateo, CA",
      period: "Oct 2021 – May 2022",
      description:
        "Managed a full-stack team of eight engineers delivering the dotData Enterprise web interface.",
      highlights: [
        "Directed sprint planning, prioritization, and mentoring while maintaining hands-on technical leadership across backend and frontend efforts.",
        "Transitioned back to an individual contributor tech lead role following organizational restructuring in mid-2022.",
      ],
      technologies: [
        "Scala",
        "Python",
        "TypeScript",
        "Play Framework",
        "AngularJS",
        "Apache Spark",
      ],
    },
    {
      role: "Senior Software Engineer · JP Backend Tech Lead",
      company: "dotData, Inc.",
      location: "Tokyo, Japan",
      period: "Nov 2019 – Sep 2021",
      description:
        "Led a backend team delivering integration features and platform stability improvements for dotData Enterprise.",
      highlights: [
        "Implemented Tableau data-source exchange capabilities and an Apache Spark-based internal upgrade framework.",
        "Reduced end-to-end test runtimes from six hours to thirty minutes through Docker adoption and refactoring.",
      ],
      technologies: [
        "Scala",
        "Python",
        "Play Framework",
        "Apache Spark",
        "Tableau Hyper",
      ],
    },
    {
      role: "Software Engineer · Media Engineering & News Backend",
      company: "SmartNews, Inc.",
      location: "Tokyo, Japan",
      period: "Sep 2018 – Nov 2019",
      description:
        "Delivered automation and backend services supporting SmartNews publisher growth.",
      highlights: [
        "Eliminated a manual finance bottleneck by leading a CEO-backed task force that automated publisher payouts via Google Apps Script, tripling new publisher applications.",
        "Supported US growth initiatives as a server-side engineer building Java services on AWS.",
      ],
      technologies: ["Java", "TypeScript", "Google Apps Script", "AWS"],
    },
    {
      role: "Software Engineer · Advertising Platform",
      company: "SmartNews, Inc.",
      location: "Tokyo, Japan",
      period: "Aug 2014 – Aug 2018",
      description:
        "Led architecture and delivery of high-throughput programmatic advertising systems.",
      highlights: [
        "Designed and launched a video ad delivery platform handling 2000+ requests per second with sub-30ms latency using Scala, Finagle, Thrift, and Protocol Buffers.",
        "Stood up AWS infrastructure and observability (Datadog, New Relic, PagerDuty) to ensure always-on operations.",
        "Acted as product manager and lead engineer for a new ad product, including AngularJS admin UI and TypeScript SDK.",
      ],
      technologies: [
        "Scala",
        "Finagle",
        "Thrift",
        "Protocol Buffers",
        "AWS EC2",
        "AWS ElastiCache",
        "AWS RDS",
        "AWS Redshift",
        "Datadog",
        "New Relic",
        "PagerDuty",
        "AngularJS",
        "TypeScript",
      ],
    },
    {
      role: "Director of Technology",
      company: "Dennoo, Inc.",
      location: "Tokyo, Japan",
      period: "Sep 2013 – Aug 2014",
      description:
        "Oversaw the creation of a new demand-side advertising platform.",
      highlights: [
        "Architected and implemented the core DSP components, including a Scala/Finagle ad server, Play-based admin UI, and client-side JavaScript SDK.",
      ],
      technologies: ["Scala", "Finagle", "Play Framework", "JavaScript"],
    },
    {
      role: "Software Engineer",
      company: "WorksApplications, Inc.",
      location: "Tokyo, Japan",
      period: "Apr 2009 – Jul 2013",
      description:
        "Led modernization and tooling initiatives across enterprise software programs.",
      highlights: [
        "Managed a five-person team migrating a core system from COBOL to Java, achieving a 5× performance improvement.",
        "Delivered security verification, Selenium-based UI testing tools, and large-scale mail system performance analyses.",
      ],
      technologies: ["Java", "COBOL", "Eclipse", "Selenium", "Maven"],
    },
  ],
  education: [
    {
      degree: "Master of Technology in Information System",
      school: "Advanced Institute of Industrial Technology",
      period: "Apr 2017 – Mar 2019",
    },
    {
      degree: "Doctor of Philosophy (Psychology)",
      school: "Tokyo Institute of Technology, Department of Information Processing",
      period: "Apr 2007 – Mar 2009",
    },
    {
      degree: "Master of Arts in Psychology",
      school: "University of Tokyo, Graduate School of Humanities and Sociology",
      period: "Apr 2002 – Mar 2004",
    },
  ],
};

export type Resume = typeof resume;
