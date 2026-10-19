# Yomna Salem

**Lead AI and Machine Learning Software Engineer**

I build AI agents and the platforms behind them: voice and messaging agents, backends, consoles and AWS infrastructure.

- 4,000+ commits in the past year across 29 repositories
- 38 sales traced back to an AI agent I built
- 3 production platforms designed and run on AWS

Contact: yomnasalem01@gmail.com
GitHub: https://github.com/atlno1fan
LinkedIn: https://linkedin.com/in/yomna-salem-8a0305141
CV (PDF): https://atlno1fan.github.io/MyCV/Yomna-Salem-CV.pdf
One-page CV (PDF): https://atlno1fan.github.io/MyCV/Yomna-Salem-CV-1page.pdf

Open to lead and senior roles in AI engineering, full-stack engineering and technical project management, on site or remote.

## About

I own problems end to end: from the first commit of a backend to the AWS account it runs in, and from an agent's prompt to the number that proves it worked.

- Two AI products built from scratch in the past year, one for car dealerships and one for hotels, then merged onto one production platform on AWS.
- Lead for a team of four engineers: releases, reviews, engineering standards and the work-management system the team runs on.
- MSc in Data Science and AI at Queen's University; BSc in Software Engineering in Malaysia.
- Two years before that building web, mobile, AR and VR apps at my university's tourism research institute.
- Drawn to agent memory and context limits ever since my thesis built a long-text summariser for ChatGPT prompts.

## Experience

### Lead AI and Machine Learning Software Engineer, Revamply

Jul 2025 - Present

- Built an AI sales-agent backend for car dealerships from the first commit: voice, SMS, email, web chat and Facebook Marketplace agents, 485 API routes, 49 tools, 87% of the codebase across about 960 merged pull requests.
- Verified results at a franchise dealership in seven weeks: 1,962 leads, 464 real conversations, 65 AI-booked appointments and 38 confirmed sales; 2-second median reply against the dealer's 93 hours.
- Led the merge of two dealership products into one AWS platform: 119 of 119 modules and 269 endpoints in about five days, 156 tables moved, the previous database bill cut to zero.
- Built a hotel guest voice agent (OpenAI Realtime, Anthropic Claude, ElevenLabs) and grew it into a hotel operations platform: Maestro PMS certification, Oracle OHIP and Silverware POS integrations, 57 of 65 production migrations.
- Raised test coverage from 0 to 1,687 tests in eight weeks; added a migrate-first deploy gate that stopped broken migrations before production.
- Designed and ran production AWS for three products (ECS Fargate, RDS, ALB, CloudFront, EventBridge, Secrets Manager) in Terraform, with CI/CD on GitHub Actions and OIDC deploys.
- Shipped a live housekeeping system with a staff phone app, real-time PMS ingestion (about 0.8 s to screen), automated deposit enforcement and a read-only gate on every PMS write.
- Built truthfulness guards against sold cars, invented vehicle history and claimed actions, validated on 13,765 real replies with no correct reply touched.
- Closed a cross-tenant data hole, made identity fail closed, added row-level security, enforced TCPA and A2P consent, and switched on AWS account controls toward SOC 2.
- Built the team's work-management system (164 routes, an MCP server with 100 tools, a Claude Code plugin) and run the team's planning, queues and reviews in it.
- Run releases and standards for four engineers: 237 production promotions, test plans across 67 modules, onboarding and UI standards, 4,300+ lines of team documentation.
- Own vendor certification and client requirements; wrote the lead-to-sale audit, the monthly cost model and a 32-page system overview for leadership.

### Software Engineer, Outlier

Aug 2024 - Present (project-based)

- Human feedback to train generative AI models on coding.
- Assessed and revised AI-generated code in Python, JavaScript and TypeScript.

### Software Engineer, Institute of Tourism Research and Innovation, University Malaysia Sarawak (UNIMAS)

Sep 2021 - Jun 2022 (full-time, remote); Sep 2020 - Aug 2021 (part-time, on site); Jan 2020 - Aug 2020 (internship, on site)

- Built the AR treasure-hunt game (Unity, geolocation, five city sites) and several screens of a state tourism board's Android app; on Google Play with 1,000+ downloads.
- Led a team of three to ship a 46-building campus tour-guide app in two weeks of three-day sprints (Java, Google Maps, SQL Server).
- Built 15+ pages of a stock-fulfilment platform for managed storage lots in React.js and Node.js on REST APIs and SQL Server.
- AR and VR apps in Unity; interface design in Adobe XD and Photoshop; application testing.

## Projects

### AI sales agents for car dealerships

Technologies: Python, FastAPI, PostgreSQL, Next.js, OpenAI Realtime, Anthropic Claude, ElevenLabs, Twilio, Pinecone, AWS, Terraform

An agent platform that works a dealership's internet leads by phone, SMS, email, web chat and Facebook Marketplace, with the dealer console and CRM around it.

- Wrote the agent backend from its first commit: 485 API routes, 49 agent tools, 87% of the codebase.
- Led the merge of two products into one platform on AWS: 119 of 119 modules ported in about five days.
- Built the console's CRM command centre, an AI email desk for the dealer principal, dealer roles and cost dashboards.
- Truthfulness guards replayed on 13,765 real replies before release.

Results:

- 1,962 leads, 464 real conversations, 65 appointments and 38 confirmed sales in seven weeks at a franchise dealership.
- 2-second median reply against the dealer's 93-hour first contact.
- Hand-offs to staff down from 55 to 15 per 100 conversations.

### Hotel operations platform

Technologies: Python, FastAPI, PostgreSQL, Next.js, Maestro PMS, Oracle OHIP, Silverware POS, OpenAI Realtime, Anthropic Claude, ElevenLabs, Telnyx, AWS, Terraform

A platform on the hotel's property management and point-of-sale systems, grown from a guest voice agent I built as the sole engineer.

- Certified Maestro PMS integration with real-time reservation and guest data; Oracle OHIP and Silverware POS integrations.
- Automated advance-deposit enforcement and a read-only safety gate on every PMS write.
- Housekeeping board with a phone app for staff; concierge agent runtime for guests.
- Voice agent on OpenAI Realtime, Anthropic Claude and ElevenLabs.

Results:

- Maestro PMS certification; 57 of 65 production database migrations.
- A PMS push loop of 313,152 messages a day resolved with the vendor.
- Live updates on screen in about 0.8 s.

### Team work-management system

Technologies: Python, FastAPI, PostgreSQL, Next.js, MCP, OAuth 2.1, Railway

The system my team plans, queues and reviews its work in, with Claude connected to it.

- Projects, multi-assignee tasks, work queues with dependency locks, daily updates, reviews and completion checks.
- An MCP server with OAuth sign-in, personal tokens and an audit log, plus a Claude Code plugin.

Results:

- 164 API routes, 210 tests, 100 MCP tools and 13 plugin skills.
- Load times cut from 27 s to 0.5 s after a region move.

### Word-Digest: a long-text summariser for ChatGPT prompts

Technologies: Python, Flask, PyTorch, Transformers, FAISS, RAG, OpenAI GPT-3.5, Jupyter

My MSc graduation project at Queen's University: retrieval-augmented prompts that let ChatGPT answer from documents far beyond its context window.

- Led a team of four with five supervisors from Queen's, Cairo University and Microsoft's Cairo office.
- PDF to HTML, FAISS retrieval and transformer models feeding GPT-3.5 in a Python and Flask app.
- Built the core mechanics and the evaluation; compiled the thesis.

Results:

- Context passed to ChatGPT cut by 97.93% at 79.27% answer accuracy.
- Prompt generation down from 50 s to 10 s on a 24,425-word PDF.

Link: https://github.com/atlno1fan/Word-Digest

### This site

Technologies: TypeScript, React, Vite, Tailwind CSS, Vitest, GitHub Actions

This CV: TypeScript, React and Vite, with the content in one typed file.

- Linted, type-checked, tested and built on every push, then deployed to GitHub Pages by GitHub Actions.
- Strict Content Security Policy and no third-party requests.

Link: https://github.com/atlno1fan/MyCV

## Education

### MSc in Data Science and Artificial Intelligence, Queen's University

Jan 2023 - Mar 2024. GPA 4.02/4.5. Thesis: Words-Digest: A Long Text Summarizer for ChatGPT's Prompts (team lead). Scholarship-funded, project-based, three semesters; preceded by Azure and AWS cloud courses (Nov 2022 to Jan 2023).

### Bachelor's Degree in Computer Science with Honours (Software Engineering), University Malaysia Sarawak

2017 - 2021. GPA 3.45/4.0. Thesis: Improving the Accuracy of 2D Facial Detection and Recognition of Masked Faces.

## Certifications

- AWS Certified Cloud Practitioner, Amazon Web Services, Jan 2023 to Jan 2029
- Microsoft Certified: Azure Data Scientist Associate, Microsoft, Dec 2022 to Jan 2027
- HCIA-AI, Huawei, Nov 2022, expired Nov 2025
- Professional Certifications in Machine Learning, Data Engineering, and Applications and Use Cases, Altair RapidMiner, Nov 2020

## Technical skills

Used in production in the past year, then also worked with.

- **AI and agents:** OpenAI (Realtime voice, GPT), Anthropic Claude, ElevenLabs, Deepgram, Real-time voice agents (telephony), RAG and vector search (Pinecone), Agent tools and guardrails, Agent evaluation on real conversations, Model Context Protocol (MCP) (also: LangChain)
- **Backend:** Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, pytest, .NET (also: C#, Java, PHP, Microsoft SQL Server, MySQL)
- **Frontend and mobile:** TypeScript, React, Next.js, Tailwind CSS, CSS, React Native (Expo), Playwright, Vitest (also: JavaScript, HTML5, Framer Motion)
- **Cloud and delivery:** AWS ECS Fargate, AWS RDS, ALB and CloudFront, EventBridge, Secrets Manager, SES, Terraform, AWS CDK, Docker, CI/CD with GitHub Actions, Git, Railway, Vercel (also: Microsoft Azure)
- **Messaging and integrations:** Twilio (voice, SMS), Telnyx, Gmail API (push notifications, sending), Google Calendar API, Hotel PMS and POS (Maestro, Oracle OHIP, Silverware) (also: Facebook Marketplace)
- **Data and machine learning:** SQL, PyTorch, TensorFlow, Keras, OpenCV (also: Hadoop, Spark, Hive, Pig, Tableau, RapidMiner, MATLAB)
- **Spoken languages:** English (near-native, TOEFL iBT 110), Arabic (native)
- **Also worked with:**  (also: C, C++, Prolog, Unity3D, Android Studio, Adobe Photoshop, Adobe XD)
