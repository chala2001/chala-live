// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit here — every section reads from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Chalaka Perera',
  initials: 'CP',
  // Roles cycled in the hero terminal
  roles: [
    'Software Developer',
    'DevOps / SRE Engineer',
    'Agentic AI Developer',
  ],
  tagline:
    'I build full-stack systems, ship them on cloud-native infrastructure, and automate the boring parts with AI agents.',
  location: 'University of Peradeniya, Sri Lanka',
  status: 'Open to Software Engineering, DevOps & SRE roles',
  email: 'chalakasamith@gmail.com',
  // Drop your resume PDF into /public and it will be linked automatically.
  resume: '/Chalaka_Samith_CV.pdf',
  // Replace /profile.webp in /public with your own photo (see README).
  photo: '/profile.webp',
  githubAvatar: 'https://avatars.githubusercontent.com/u/150885184?v=4',

  socials: {
    github: 'https://github.com/chala2001',
    linkedin: 'https://www.linkedin.com/in/chalaka-perera-a280b9324',
    email: 'mailto:chalakasamith@gmail.com',
  },
  certificationsUrl:
    'https://www.linkedin.com/in/chalaka-perera-a280b9324/details/certifications/',
}

// ── About: short narrative + the numbers that matter ──────────
export const about = {
  paragraphs: [
    "I'm a Computer Engineering undergraduate at the University of Peradeniya. I like the full arc of building software — from writing the service, to containerising it, to standing up the infrastructure it runs on, and keeping it healthy in production.",
    "Most of my work lives at the intersection of full-stack development and DevOps/SRE: Spring Boot / FastAPI / Node backends behind React frontends, packaged with Docker, orchestrated on Kubernetes, provisioned with Terraform, and shipped through CI/CD. Lately I've been building Agentic AI systems — LLM-powered agents that drive real workflows.",
  ],
  stats: [
    { value: '3.97', label: 'GPA / 4.00' },
    { value: '20+', label: 'Public Projects' },
    { value: '15+', label: 'Certifications' },
    { value: '4', label: 'Domains · Full-Stack · Cloud · AI · IoT' },
  ],
}

// ── Experience ────────────────────────────────────────────────
export const experience = [
  {
    role: 'Site Reliability Engineering Intern',
    company: 'WSO2',
    period: 'Apr 2026 — Oct 2026',
    type: 'Internship',
    location: 'Colombo · On-site',
    summary:
      'On the SRE team, building AI-driven tooling to automate operational and compliance workflows. Shipped two internship projects, one of them released open source.',
    highlights: [
      'Compliance Evidence Submission Portal (open source) — contributed to WSO2’s open-operations GRC platform, adding Agentic AI that autonomously collects and documents compliance evidence from cloud consoles and GitHub repositories.',
      'Ops Copilot — built a RAG (Retrieval-Augmented Generation) pipeline over operational knowledge so engineers get grounded, source-backed answers to natural-language questions.',
      'Reduced manual, repetitive SRE toil by automating audit-evidence gathering and knowledge retrieval across cloud consoles, GitHub, and internal systems.',
    ],
    stack: ['Agentic AI', 'LLM / RAG', 'Azure OpenAI', 'Python', 'Open Source'],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    company: 'University of Peradeniya',
    period: 'Sep 2023 — Mar 2026',
    type: 'Part-time',
    location: 'Peradeniya · On-site',
    summary:
      'Mentor undergraduate students in core Computer Engineering courses — leading lab sessions and guiding hands-on programming.',
    highlights: [
      'CO322 — Data Structures & Algorithms: led lab sessions on core algorithmic concepts and practical implementations.',
      'CO225 — Software Construction: guided students through fundamental programming and software development in Java.',
      'CO2030 — Data Structures & Algorithms II: taught linked lists, trees, graphs and algorithm optimization.',
    ],
    stack: ['Java', 'Algorithms', 'Data Structures', 'Mentoring'],
  },
]

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    degree: 'BSc Eng (Hons) — Computer Engineering',
    school: 'University of Peradeniya',
    period: 'Jun 2022 — Present',
    detail: 'First Class · Final GPA 3.97 / 4.00',
  },
  {
    degree: 'GCE Advanced Level — Physical Science',
    school: 'Royal College, Colombo',
    period: 'Completed',
    detail: '3 A passes · Z-score 2.0291',
  },
]

// ── Involvement / extra-curricular ────────────────────────────
export const activities = [
  { org: 'Institution of Engineers Sri Lanka (IESL)', role: 'Student Member', period: '2025 — Present' },
  { org: 'ACES — Assoc. of Computer Engineering Students, UoP', role: 'Member', period: '2023 — Present' },
  { org: 'AIESEC — University of Peradeniya', role: 'Member', period: '2022 — 2024' },
]

// ── Skills, grouped ───────────────────────────────────────────
export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C / C++', 'SQL'],
  },
  {
    group: 'Frontend & Backend',
    items: ['React', 'Spring Boot', 'FastAPI', 'Django', 'React Native'],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Helm',
      'Jenkins',
      'GitHub Actions',
      'NGINX',
      'Linux',
    ],
  },
  {
    group: 'Observability & Data',
    items: ['Prometheus', 'Grafana', 'Loki', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    group: 'AI / ML & Agentic AI',
    items: ['LangChain', 'RAG Pipelines', 'TensorFlow', 'NumPy', 'Playwright', 'Browser-Use'],
  },
]

// ── Projects (curated flagships) ──────────────────────────────
// category ∈ 'Cloud & DevOps' | 'Full-Stack' | 'AI / ML'
// Optional flags: openSource (adds a badge), note (shown when there is no public repo).
export const projects = [
  {
    name: 'Compliance Evidence Submission Portal',
    category: 'AI / ML',
    featured: true,
    openSource: true,
    description:
      'Built during my WSO2 SRE internship and released open source under the wso2-open-operations GRC platform. A standalone full-stack app that integrates with the GRC platform via its REST API to automate compliance-evidence gathering — without modifying the core system. Its Agentic AI module (Python + Browser-Use / Chromium automation with Azure OpenAI) drives agents that autonomously navigate cloud consoles and GitHub repos to collect and structure evidence end-to-end. FastAPI backend + TypeScript/React frontend, deployed on WSO2 Choreo with Asgardeo (OAuth 2.0 / OIDC).',
    tags: ['Agentic AI', 'Python', 'FastAPI', 'TypeScript', 'Azure OpenAI', 'Browser-Use', 'WSO2 Choreo', 'OAuth2 / OIDC', 'Apache-2.0'],
    repo: 'https://github.com/wso2-open-operations/grc-tools',
  },
  {
    name: 'Ops Copilot — SRE Knowledge Assistant',
    category: 'AI / ML',
    featured: true,
    private: true,
    note: 'Internal · WSO2',
    description:
      'An internal operations copilot built during my WSO2 SRE internship — a RAG (Retrieval-Augmented Generation) pipeline over WSO2’s operational knowledge bases (runbooks, procedures, architecture docs), so SRE engineers get source-cited, context-aware answers to natural-language questions. Engineered the ingestion pipeline, vector-store integration and prompt engineering to maximise retrieval precision and reduce hallucinations on domain-specific content.',
    tags: ['RAG', 'LLM', 'Azure OpenAI', 'Vector DB', 'Python', 'TypeScript'],
  },
  {
    name: 'CloudCare — AWS on Terraform',
    category: 'Cloud & DevOps',
    featured: true,
    description:
      'Production-style, AWS-native Hospital Management System demonstrating the AWS Well-Architected Framework. Built entirely in Terraform across nine isolated stacks, shipped through GitHub Actions with OIDC federation, designed to live inside the AWS Free Tier.',
    tags: ['Terraform', 'AWS', 'GitHub Actions', 'OIDC', 'IaC'],
    repo: 'https://github.com/chala2001/cloud-care',
  },
  {
    name: 'CloudCare on Kubernetes',
    category: 'Cloud & DevOps',
    featured: true,
    description:
      'The evolution of CloudCare — the same hospital system migrated from a monolithic EC2/ASG deployment to a microservices architecture orchestrated on Kubernetes, the way modern engineering teams run production workloads.',
    tags: ['Kubernetes', 'Microservices', 'Python', 'AWS'],
    repo: 'https://github.com/chala2001/cloud-care-k8s',
  },
  {
    name: 'CloudCare — Local K8s + Observability',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'Production-grade local Kubernetes architecture: 4 FastAPI microservices orchestrated via Helm, NGINX Ingress, HPA auto-scaling, and a full Prometheus / Grafana / Loki observability stack.',
    tags: ['Helm', 'FastAPI', 'Prometheus', 'Grafana', 'Loki', 'HPA'],
    repo: 'https://github.com/chala2001/cloud-care-local',
  },
  {
    name: 'LMS University — Full-Stack Platform',
    category: 'Full-Stack',
    featured: true,
    description:
      'Comprehensive full-stack University LMS bridging Students, Alumni, and Administrators. Web + React Native mobile apps with live social feeds, event scheduling, ATS job portals, research collaboration, and real-time direct messaging. Built with Spring Boot & Docker.',
    tags: ['Spring Boot', 'React', 'React Native', 'Docker', 'WebSockets'],
    repo: 'https://github.com/chala2001/LMS_University',
  },
  {
    name: 'LMS — Kubernetes Deployment',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'Production-grade Kubernetes orchestration for the LMS platform — a full migration from Docker Compose to a scalable, self-healing K8s cluster with automated load balancing and persistent storage.',
    tags: ['Kubernetes', 'Load Balancing', 'Persistent Volumes', 'Self-Healing'],
    repo: 'https://github.com/chala2001/LMS_FullStack_K8s_Deployment',
  },
  {
    name: 'Explainable AI Zero-Trust Anomaly Detection',
    category: 'AI / ML',
    featured: true,
    description:
      'Final-year research: an explainable, zero-trust anomaly-detection framework for encrypted network traffic, combining semi-supervised ML with Explainable AI (XAI) to identify and interpret security threats while preserving data privacy. Evaluated on the CIC-IDS-2017 dataset, producing interpretability outputs that support trust and auditability in zero-trust architectures.',
    tags: ['Semi-Supervised ML', 'Explainable AI (XAI)', 'CIC-IDS-2017', 'Python', 'Research'],
    repo: 'https://github.com/chala2001/bcc_darknet_project',
  },
  {
    name: 'Lightify — Smart Home IoT Lighting',
    category: 'IoT',
    featured: false,
    note: 'Group Project · EngEx 2025',
    description:
      'An intelligent smart-home lighting system that detects room occupancy and dynamically adjusts lighting. ESP32 controllers communicate over AWS IoT Core (MQTT), Bluetooth and Wi-Fi with a React Native app and a Spring Boot + MongoDB backend on AWS. Presented at EngEx 2025, University of Peradeniya.',
    tags: ['ESP32', 'AWS IoT Core', 'MQTT', 'React Native', 'Spring Boot', 'MongoDB'],
  },
  {
    name: 'End-to-End CI/CD Pipeline',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'A complete CI/CD pipeline using Jenkins, Docker, and Kubernetes that automatically builds, pushes, and deploys applications on every code change.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
    repo: 'https://github.com/chala2001/cicd-project',
  },
  {
    name: 'Facial Skin-Type CNN',
    category: 'AI / ML',
    featured: false,
    description:
      'Deep-learning facial skin-type classifier — a convolutional neural network with image preprocessing and data augmentation.',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Python'],
    repo: 'https://github.com/chala2001/Neuralnetworkproject',
  },
  {
    name: 'Gym Management System',
    category: 'Full-Stack',
    featured: false,
    description:
      'Full-stack gym management platform using Spring Boot REST APIs, MySQL, and React with role-based access control.',
    tags: ['Spring Boot', 'React', 'MySQL', 'RBAC'],
    repo: 'https://github.com/chala2001/GymManagementSystem',
  },
]

export const projectCategories = ['All', 'Cloud & DevOps', 'Full-Stack', 'AI / ML', 'IoT']

// ── Certifications (from LinkedIn) ────────────────────────────
// `highlight: true` gives the card an accent treatment.
export const certifications = [
  { name: 'Terraform', issuer: 'TestDome', date: 'May 2026', badge: 'Top 10% globally', highlight: true },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', date: '2026', highlight: true },
  { name: 'Introduction to Kubernetes (LFS158)', issuer: 'The Linux Foundation', date: 'May 2026', highlight: true },
  { name: 'MCP: Hands-On with Agentic AI', issuer: 'LinkedIn', date: 'Jun 2026', highlight: true },
  { name: 'Mastering RAG: Smart, Data-Driven Apps', issuer: 'IBM', date: '2026', highlight: true },
  { name: 'Claude Code in Action', issuer: 'Anthropic · LinkedIn', date: 'Jun 2026' },
  { name: 'GitHub Actions for CI/CD', issuer: 'LinkedIn', date: 'Jun 2026' },
  { name: 'Azure DevOps for Beginners', issuer: 'LinkedIn', date: 'Jun 2026' },
  { name: 'Getting Started with Jenkins', issuer: 'Simplilearn', date: '2026' },
  { name: 'Learning Ansible', issuer: 'LinkedIn', date: 'Jun 2026' },
  { name: 'Getting Started with Docker', issuer: 'Simplilearn', date: '2026' },
  { name: 'Azure Fundamentals', issuer: 'Simplilearn', date: '2026' },
  { name: 'Software Architecture Foundations', issuer: 'LinkedIn', date: 'Jun 2026' },
  { name: 'Learning Git and GitHub', issuer: 'LinkedIn', date: 'Jun 2026' },
  { name: 'SQL', issuer: 'HackerRank', date: 'Jul 2026' },
]

// ── Nav sections (also used by react-scroll) ──────────────────
export const navLinks = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'certifications', label: 'certs' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]
