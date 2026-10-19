import {
  Brain,
  Cloud,
  Code,
  Database,
  Github,
  Languages,
  Linkedin,
  Mail,
  MessageSquare,
  Server,
  Wrench,
} from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import type { Certification, Education, Experience, Intro, Project, SkillGroup, SocialLink } from '../types';

// All of the site's content lives in this file. Work projects are described without names,
// clients or links; the only linked project is academic work.

export const intro: Intro = {
  name: 'Yomna Salem',
  title: 'Lead AI and Machine Learning Software Engineer',
  summary:
    'I build AI agents and the platforms behind them: voice and messaging agents, backends, consoles and AWS infrastructure.',
  highlights: [
    { value: '4,000+', label: 'commits in the past year across 29 repositories' },
    { value: '38', label: 'sales traced back to an AI agent I built' },
    { value: '3', label: 'production platforms designed and run on AWS' },
  ],
  availability:
    'Open to lead and senior roles in AI engineering, full-stack engineering and technical project management, on site or remote.',
  contactEmail: 'yomnasalem01@gmail.com',
  cvFile: 'Yomna-Salem-CV.pdf',
  cvShortFile: 'Yomna-Salem-CV-1page.pdf',
  profileImage,
  about: {
    lead: "I own problems end to end: from the first commit of a backend to the AWS account it runs in, and from an agent's prompt to the number that proves it worked.",
    points: [
      'Two AI products built from scratch in the past year, one for car dealerships and one for hotels, then merged onto one production platform on AWS.',
      'Lead for a team of four engineers: releases, reviews, engineering standards and the work-management system the team runs on.',
      "MSc in Data Science and AI at Queen's University; BSc in Software Engineering in Malaysia.",
      "Two years before that building web, mobile, AR and VR apps at my university's tourism research institute.",
      'Drawn to agent memory and context limits ever since my thesis built a long-text summariser for ChatGPT prompts.',
    ],
  },
};

export const skillGroups: SkillGroup[] = [
  {
    name: 'AI and agents',
    icon: Brain,
    core: [
      'OpenAI (Realtime voice, GPT)',
      'Anthropic Claude',
      'ElevenLabs',
      'Deepgram',
      'Real-time voice agents (telephony)',
      'RAG and vector search (Pinecone)',
      'Agent tools and guardrails',
      'Agent evaluation on real conversations',
      'Model Context Protocol (MCP)',
    ],
    more: ['LangChain'],
  },
  {
    name: 'Backend',
    icon: Server,
    core: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'pytest', '.NET'],
    more: ['C#', 'Java', 'PHP', 'Microsoft SQL Server', 'MySQL'],
  },
  {
    name: 'Frontend and mobile',
    icon: Code,
    core: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'CSS',
      'React Native (Expo)',
      'Playwright',
      'Vitest',
    ],
    more: ['JavaScript', 'HTML5', 'Framer Motion'],
  },
  {
    name: 'Cloud and delivery',
    icon: Cloud,
    core: [
      'AWS ECS Fargate',
      'AWS RDS',
      'ALB and CloudFront',
      'EventBridge',
      'Secrets Manager',
      'SES',
      'Terraform',
      'AWS CDK',
      'Docker',
      'CI/CD with GitHub Actions',
      'Git',
      'Railway',
      'Vercel',
    ],
    more: ['Microsoft Azure'],
  },
  {
    name: 'Messaging and integrations',
    icon: MessageSquare,
    core: [
      'Twilio (voice, SMS)',
      'Telnyx',
      'Gmail API (push notifications, sending)',
      'Google Calendar API',
      'Hotel PMS and POS (Maestro, Oracle OHIP, Silverware)',
    ],
    more: ['Facebook Marketplace'],
  },
  {
    name: 'Data and machine learning',
    icon: Database,
    core: ['SQL', 'PyTorch', 'TensorFlow', 'Keras', 'OpenCV'],
    more: ['Hadoop', 'Spark', 'Hive', 'Pig', 'Tableau', 'RapidMiner', 'MATLAB'],
  },
  {
    name: 'Spoken languages',
    icon: Languages,
    core: ['English (near-native, TOEFL iBT 110)', 'Arabic (native)'],
    more: [],
  },
  {
    name: 'Also worked with',
    icon: Wrench,
    core: [],
    more: ['C', 'C++', 'Prolog', 'Unity3D', 'Android Studio', 'Adobe Photoshop', 'Adobe XD'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Lead AI and Machine Learning Software Engineer',
    company: 'Revamply',
    periods: ['Jul 2025 - Present'],
    highlightCount: 4,
    responsibilities: [
      'Built an AI sales-agent backend for car dealerships from the first commit: voice, SMS, email, web chat and Facebook Marketplace agents, 485 API routes, 49 tools, 87% of the codebase across about 960 merged pull requests.',
      "Verified results at a franchise dealership in seven weeks: 1,962 leads, 464 real conversations, 65 AI-booked appointments and 38 confirmed sales; 2-second median reply against the dealer's 93 hours.",
      'Led the merge of two dealership products into one AWS platform: 119 of 119 modules and 269 endpoints in about five days, 156 tables moved, the previous database bill cut to zero.',
      'Built a hotel guest voice agent (OpenAI Realtime, Anthropic Claude, ElevenLabs) and grew it into a hotel operations platform: Maestro PMS certification, Oracle OHIP and Silverware POS integrations, 57 of 65 production migrations.',
      'Raised test coverage from 0 to 1,687 tests in eight weeks; added a migrate-first deploy gate that stopped broken migrations before production.',
      'Designed and ran production AWS for three products (ECS Fargate, RDS, ALB, CloudFront, EventBridge, Secrets Manager) in Terraform, with CI/CD on GitHub Actions and OIDC deploys.',
      'Shipped a live housekeeping system with a staff phone app, real-time PMS ingestion (about 0.8 s to screen), automated deposit enforcement and a read-only gate on every PMS write.',
      'Built truthfulness guards against sold cars, invented vehicle history and claimed actions, validated on 13,765 real replies with no correct reply touched.',
      'Closed a cross-tenant data hole, made identity fail closed, added row-level security, enforced TCPA and A2P consent, and switched on AWS account controls toward SOC 2.',
      "Built the team's work-management system (164 routes, an MCP server with 100 tools, a Claude Code plugin) and run the team's planning, queues and reviews in it.",
      'Run releases and standards for four engineers: 237 production promotions, test plans across 67 modules, onboarding and UI standards, 4,300+ lines of team documentation.',
      'Own vendor certification and client requirements; wrote the lead-to-sale audit, the monthly cost model and a 32-page system overview for leadership.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Outlier',
    periods: ['Aug 2024 - Present (project-based)'],
    responsibilities: [
      'Human feedback to train generative AI models on coding.',
      'Assessed and revised AI-generated code in Python, JavaScript and TypeScript.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Institute of Tourism Research and Innovation, University Malaysia Sarawak (UNIMAS)',
    periods: [
      'Sep 2021 - Jun 2022 (full-time, remote)',
      'Sep 2020 - Aug 2021 (part-time, on site)',
      'Jan 2020 - Aug 2020 (internship, on site)',
    ],
    responsibilities: [
      "Built the AR treasure-hunt game (Unity, geolocation, five city sites) and several screens of a state tourism board's Android app; on Google Play with 1,000+ downloads.",
      'Led a team of three to ship a 46-building campus tour-guide app in two weeks of three-day sprints (Java, Google Maps, SQL Server).',
      'Built 15+ pages of a stock-fulfilment platform for managed storage lots in React.js and Node.js on REST APIs and SQL Server.',
      'AR and VR apps in Unity; interface design in Adobe XD and Photoshop; application testing.',
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Queen's University",
    degree: 'MSc in Data Science and Artificial Intelligence',
    period: 'Jan 2023 - Mar 2024',
    gpa: '4.02/4.5',
    thesis: "Words-Digest: A Long Text Summarizer for ChatGPT's Prompts (team lead)",
    note: 'Scholarship-funded, project-based, three semesters; preceded by Azure and AWS cloud courses (Nov 2022 to Jan 2023).',
  },
  {
    institution: 'University Malaysia Sarawak',
    degree: "Bachelor's Degree in Computer Science with Honours (Software Engineering)",
    period: '2017 - 2021',
    gpa: '3.45/4.0',
    thesis: 'Improving the Accuracy of 2D Facial Detection and Recognition of Masked Faces',
  },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', dates: 'Jan 2023 to Jan 2029' },
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    dates: 'Dec 2022 to Jan 2027',
  },
  { name: 'HCIA-AI', issuer: 'Huawei', dates: 'Nov 2022, expired Nov 2025' },
  {
    name: 'Professional Certifications in Machine Learning, Data Engineering, and Applications and Use Cases',
    issuer: 'Altair RapidMiner',
    dates: 'Nov 2020',
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/atlno1fan', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yomna-salem-8a0305141', icon: Linkedin },
  { platform: 'Email', url: 'mailto:yomnasalem01@gmail.com', icon: Mail },
];

export const projects: Project[] = [
  {
    title: 'AI sales agents for car dealerships',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Next.js',
      'OpenAI Realtime',
      'Anthropic Claude',
      'ElevenLabs',
      'Twilio',
      'Pinecone',
      'AWS',
      'Terraform',
    ],
    summary:
      "An agent platform that works a dealership's internet leads by phone, SMS, email, web chat and Facebook Marketplace, with the dealer console and CRM around it.",
    points: [
      'Wrote the agent backend from its first commit: 485 API routes, 49 agent tools, 87% of the codebase.',
      'Led the merge of two products into one platform on AWS: 119 of 119 modules ported in about five days.',
      "Built the console's CRM command centre, an AI email desk for the dealer principal, dealer roles and cost dashboards.",
      'Truthfulness guards replayed on 13,765 real replies before release.',
    ],
    results: [
      '1,962 leads, 464 real conversations, 65 appointments and 38 confirmed sales in seven weeks at a franchise dealership.',
      "2-second median reply against the dealer's 93-hour first contact.",
      'Hand-offs to staff down from 55 to 15 per 100 conversations.',
    ],
  },
  {
    title: 'Hotel operations platform',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Next.js',
      'Maestro PMS',
      'Oracle OHIP',
      'Silverware POS',
      'OpenAI Realtime',
      'Anthropic Claude',
      'ElevenLabs',
      'Telnyx',
      'AWS',
      'Terraform',
    ],
    summary:
      "A platform on the hotel's property management and point-of-sale systems, grown from a guest voice agent I built as the sole engineer.",
    points: [
      'Certified Maestro PMS integration with real-time reservation and guest data; Oracle OHIP and Silverware POS integrations.',
      'Automated advance-deposit enforcement and a read-only safety gate on every PMS write.',
      'Housekeeping board with a phone app for staff; concierge agent runtime for guests.',
      'Voice agent on OpenAI Realtime, Anthropic Claude and ElevenLabs.',
    ],
    results: [
      'Maestro PMS certification; 57 of 65 production database migrations.',
      'A PMS push loop of 313,152 messages a day resolved with the vendor.',
      'Live updates on screen in about 0.8 s.',
    ],
  },
  {
    title: 'Team work-management system',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'MCP', 'OAuth 2.1', 'Railway'],
    summary: 'The system my team plans, queues and reviews its work in, with Claude connected to it.',
    points: [
      'Projects, multi-assignee tasks, work queues with dependency locks, daily updates, reviews and completion checks.',
      'An MCP server with OAuth sign-in, personal tokens and an audit log, plus a Claude Code plugin.',
    ],
    results: [
      '164 API routes, 210 tests, 100 MCP tools and 13 plugin skills.',
      'Load times cut from 27 s to 0.5 s after a region move.',
    ],
  },
  {
    title: 'Word-Digest: a long-text summariser for ChatGPT prompts',
    technologies: ['Python', 'Flask', 'PyTorch', 'Transformers', 'FAISS', 'RAG', 'OpenAI GPT-3.5', 'Jupyter'],
    summary:
      "My MSc graduation project at Queen's University: retrieval-augmented prompts that let ChatGPT answer from documents far beyond its context window.",
    points: [
      "Led a team of four with five supervisors from Queen's, Cairo University and Microsoft's Cairo office.",
      'PDF to HTML, FAISS retrieval and transformer models feeding GPT-3.5 in a Python and Flask app.',
      'Built the core mechanics and the evaluation; compiled the thesis.',
    ],
    results: [
      'Context passed to ChatGPT cut by 97.93% at 79.27% answer accuracy.',
      'Prompt generation down from 50 s to 10 s on a 24,425-word PDF.',
    ],
    link: 'https://github.com/atlno1fan/Word-Digest',
  },
  {
    title: 'This site',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Vitest', 'GitHub Actions'],
    summary: 'This CV: TypeScript, React and Vite, with the content in one typed file.',
    points: [
      'Linted, type-checked, tested and built on every push, then deployed to GitHub Pages by GitHub Actions.',
      'Strict Content Security Policy and no third-party requests.',
    ],
    link: 'https://github.com/atlno1fan/MyCV',
  },
];
