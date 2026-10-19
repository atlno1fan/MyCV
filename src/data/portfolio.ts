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
    lead: "I like owning a problem end to end: from the first commit of a backend to the AWS account it runs in, and from an agent's prompt to the number that proves it worked. Over the past year I built two AI products from scratch, one for car dealerships and one for hotels, led their move onto one production platform, and built the system my team plans and reviews its work in.",
    paragraphs: [
      "I studied software engineering in Malaysia and then data science and AI at Queen's University, where my thesis built a long-text summariser for ChatGPT prompts. Before that I spent two years building web, mobile, AR and VR applications for a tourism research institute.",
      "In late 2025 I started an AI sales-agent backend for car dealerships from an empty repository. It grew into a production platform with voice, SMS, email, web chat and marketplace agents. In its first seven weeks at a dealership it handled 1,962 leads and booked 65 appointments, and 38 of those customers went on to buy a car, confirmed against the dealer's own records.",
      "In 2026 I built a voice agent for hotel guests and evolved it into a hotel operations platform, certified with the hotel's property management system vendor, and led the merge of two dealership products onto one AWS platform. Along the way I built the team's work-management system, with an MCP server so our AI assistants work inside it, and took on the releases, reviews and engineering standards for a team of four.",
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
      'Hotel PMS and POS integrations (Maestro, Oracle OHIP, Silverware)',
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
      'Built an AI sales-agent backend for car dealerships from the first commit and grew it into a production platform: voice, SMS, email, web chat and Facebook Marketplace agents, 485 API routes and 49 agent tools. Wrote 87% of the codebase across about 960 merged pull requests.',
      "Delivered verified results for a franchise dealership in seven weeks: 1,962 leads handled, 464 real conversations, 65 appointments booked by the AI and 38 resulting sales confirmed against the dealer's records, with a 2-second median reply against the dealer's 93-hour first contact.",
      "Led the merge of two dealership products into one platform on AWS: ported 119 of 119 modules and 269 endpoints in about five days, moved 156 database tables and cut the previous database provider's costs to zero.",
      'Built a voice agent for hotel guests (OpenAI Realtime, Anthropic Claude, ElevenLabs, Twilio, Pinecone) and evolved it into a hotel operations platform now in production ahead of its first hotel pilot, integrating with the Maestro PMS (certified), Oracle OHIP and the Silverware POS. Wrote 57 of 65 production database migrations.',
      'Raised automated test coverage from 0 to 1,687 tests in eight weeks and added a migrate-first deploy gate that stopped broken database migrations before they reached production.',
      'Designed, built and ran production AWS for three products (ECS Fargate, RDS PostgreSQL, ALB, CloudFront, EventBridge, Secrets Manager), all in Terraform, with CI/CD pipelines on GitHub Actions using OIDC deploys. Moved the agent backend from Railway and SQL Server to AWS and PostgreSQL, and decommissioned a legacy stack.',
      'Shipped a live housekeeping system with a phone app for staff, real-time PMS data ingestion (about 0.8 s to screen), automated advance-deposit enforcement and a read-only safety gate on every PMS write.',
      'Built truthfulness guards that stop the AI from offering sold cars, inventing vehicle history or claiming actions it did not take, validated against 13,765 real replies without touching a correct one.',
      'Strengthened security and compliance: closed a cross-tenant data access hole, made identity fail closed, added row-level security, enforced TCPA and A2P consent, and switched on AWS account controls toward SOC 2 readiness.',
      "Built the team's work-management system (164 API routes, an MCP server with 100 tools, a Claude Code plugin) and used it to plan, queue and review the engineering team's work.",
      'Ran releases and set engineering standards for a team of four engineers: 237 production promotions, test plans across 67 modules, onboarding and UI standards, and more than 4,300 lines of team documentation.',
      'Owned the vendor certification and the client requirements on both products, wrote the audit that traced every lead to a sale and the monthly cost model behind pricing decisions, and briefed leadership with a 32-page system overview.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Outlier',
    periods: ['Aug 2024 - Present (project-based)'],
    responsibilities: [
      'Offered detailed human feedback to train advanced generative AI models.',
      'Assessed and revised AI-generated code across Python, JavaScript, and TypeScript.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Institute of Tourism Research and Innovation, UNIMAS',
    periods: [
      'Sep 2021 - Jun 2022 (full-time, remote)',
      'Sep 2020 - Aug 2021 (part-time, on site)',
      'Jan 2020 - Aug 2020 (internship, on site)',
    ],
    responsibilities: [
      "For a state tourism board's Android app: built the AR treasure-hunt game in Unity, which uses the visitor's location to guide them to hidden puzzle pieces at five tourist spots across the city, and designed and built several of the app's screens in Java and Adobe XD. Agile delivery with user acceptance testing every sprint; the app is on Google Play with 1,000+ downloads.",
      'Led a team of three to deliver an Android campus tour-guide app in two weeks of three-day sprints: Google Maps and geolocation trigger a video pop-up as the bus reaches each of 46 buildings. Java with Microsoft SQL Server.',
      'Built 15+ functional pages of a fulfilment-style stock platform, where sellers store stock in managed lots and the platform handles selling and shipping: seller and customer interfaces in React.js and Node.js on REST APIs and SQL Server, in two-week sprints with monthly stakeholder meetings, over about a year.',
      'Also built AR and VR web and mobile applications in Unity, designed interfaces in Adobe XD and Photoshop, and tested applications and websites.',
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
    note: 'Scholarship-funded, project-based degree over three semesters, preceded by three months of Azure and AWS cloud courses (Nov 2022 to Jan 2023).',
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
    description:
      "An agent platform that answers and follows up with car buyers by phone, SMS, email, web chat and Facebook Marketplace, searches live inventory, books test drives and appraisals, sends credit applications and hands off to staff, with a dealer console and CRM around it. I wrote the agent backend from its first commit, led the merge of two products into one platform on AWS, and built the console's CRM command centre, an AI email desk for the dealer principal, dealer roles and the cost dashboards.",
    results:
      'In seven weeks at a franchise dealership: 1,962 leads handled, 464 real conversations, 65 appointments booked, 38 confirmed sales and a 2-second median reply. Hand-offs to staff fell from 55 to 15 per 100 conversations as the agent learned to answer price, finance and trade-in questions itself.',
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
    description:
      "A platform connected to the hotel's property management and point-of-sale systems (Maestro, Oracle OHIP, Silverware): a certified PMS integration, real-time reservation and guest data, automated advance-deposit enforcement, a housekeeping board with a phone app for staff, and a concierge agent runtime for guests. It began as a voice agent for hotel guests on OpenAI Realtime, which I built as the sole engineer.",
    results:
      'Maestro PMS certification; 57 of 65 production database migrations; a PMS push loop of 313,152 messages a day resolved with the vendor; live updates reach the screen in about 0.8 s; every PMS write behind a read-only safety gate by default.',
  },
  {
    title: 'Team work-management system',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'MCP', 'OAuth 2.1', 'Railway'],
    description:
      "Projects, tasks with several assignees, work queues with dependency locks, daily updates, help requests, reviews and completion checks, plus an MCP server with OAuth sign-in, personal tokens and an audit log, and a Claude Code plugin, so the team's AI assistants work inside the same system.",
    results:
      "164 API routes, 210 tests, 100 MCP tools and 13 plugin skills; load times cut from 27 s to 0.5 s after a region move; used daily to plan, queue and review the team's work.",
  },
  {
    title: 'Word-Digest: a long-text summariser for ChatGPT prompts',
    technologies: ['Python', 'Flask', 'PyTorch', 'Transformers', 'FAISS', 'RAG', 'OpenAI GPT-3.5', 'Jupyter'],
    description:
      "My MSc graduation project at Queen's University, where I led a team of four working with five supervisors from Queen's, Cairo University and Microsoft's Cairo office. Documents that exceed ChatGPT's context window are fetched as PDFs, converted to HTML and indexed with FAISS; retrieval-augmented generation pulls the passages that answer the user's question and builds the prompt for GPT-3.5, in a Python and Flask app with a chat loop that keeps history. I built the core mechanics and the evaluation, ran the supervisor meetings and compiled the thesis.",
    results:
      'Cut the context passed to ChatGPT by 97.93% while keeping 79.27% answer accuracy against manually supplied text, and reduced prompt generation from 50 s to 10 s on a 24,425-word PDF.',
    link: 'https://github.com/atlno1fan/Word-Digest',
  },
  {
    title: 'This site',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Vitest', 'GitHub Actions'],
    description:
      'A data-driven CV and portfolio: the content sits in one typed file, sections are deep-linkable, and every push is linted, type-checked, tested and built before GitHub Actions deploys it to GitHub Pages behind a strict Content Security Policy.',
    link: 'https://github.com/atlno1fan/MyCV',
  },
];
