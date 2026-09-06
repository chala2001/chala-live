// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit here, and every section picks it up.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Chalaka Perera',
  initials: 'CP',
  // Roles cycled in the hero terminal
  roles: [
    'Software Engineer',
    'DevOps / SRE Engineer',
    'Agentic AI Developer',
  ],
  tagline:
    'I build full-stack systems, ship them on cloud-native infrastructure, and automate the boring parts with AI agents.',
  location: 'University of Peradeniya, Sri Lanka',
  status: 'Open to Software Engineering, DevOps & SRE roles',
  email: 'chalakasamith@gmail.com',
  // Drop your resume PDF into /public and it will be linked automatically.
  resume: '/Chalaka_Perera_CV.pdf',
  // Replace /profile.webp in /public with your own photo (see README).
  photo: '/profile.webp',
  githubAvatar: 'https://avatars.githubusercontent.com/u/150885184?v=4',

  socials: {
    github: 'https://github.com/chala2001',
    linkedin: 'https://www.linkedin.com/in/chalaka-perera-a280b9324',
    medium: 'https://medium.com/@chalakasamith',
    email: 'mailto:chalakasamith@gmail.com',
  },
  certificationsUrl:
    'https://www.linkedin.com/in/chalaka-perera-a280b9324/details/certifications/',
}

// ── About: short narrative + the numbers that matter ──────────
export const about = {
  paragraphs: [
    "Final-year Computer Engineering undergraduate at Peradeniya, First Class with a 3.971 GPA, and an SRE intern at WSO2.",
    "I write the service, containerise it, stand up the infrastructure and keep it healthy in production. Lately that means AI systems that take real work off the team, plus seven pull requests merged upstream.",
  ],
  stats: [
    { value: '3.971', label: 'GPA / 4.00' },
    { value: '7', label: 'Open-source PRs merged' },
    { value: '20+', label: 'Public Projects' },
    { value: '15+', label: 'Certifications' },
  ],
}

// ── Experience ────────────────────────────────────────────────
export const experience = [
  {
    role: 'Site Reliability Engineering Intern',
    company: 'WSO2',
    period: 'Apr 2026 - Present',
    type: 'Internship',
    location: 'Colombo · On-site',
    summary:
      'Building AI systems that take operational work off the SRE team. Two projects: one in production, one in security review.',
    highlights: [
      'Compliance Evidence Submission Portal: a browser agent signs into cloud consoles and captures the audit evidence engineers used to screenshot by hand.',
      'Reusable templates cover every matching resource from a single instruction.',
      'Threat modelling and security review took it to production, closing a flaw that allowed unauthenticated downloads.',
      'Shipped one-command install, the repository’s first release pipeline, and tests on every endpoint against a real database.',
      'SRE Ops Pilot: answers from the team’s runbooks, verifying every quote against its source before the reader sees it.',
      'Chose the model on evidence: 63 of 65 correct, every unanswerable question rejected, twice as fast.',
      'Single sign-on, per-user cost tracking, an audit log and a spend cap.',
    ],
    stack: ['Python', 'FastAPI', 'Azure OpenAI', 'browser-use', 'Playwright', 'React', 'TypeScript', 'PostgreSQL', 'WSO2 Developer Platform', 'OAuth 2.0', 'pytest'],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    company: 'University of Peradeniya',
    period: 'Sep 2023 - Mar 2026',
    type: 'Part-time',
    location: 'Peradeniya · On-site',
    summary:
      'Lab sessions and hands-on mentoring across three core Computer Engineering courses.',
    highlights: [
      'CO322 Data Structures & Algorithms',
      'CO225 Software Construction',
      'CO2030 Data Structures & Algorithms II',
    ],
    stack: ['Java', 'Algorithms', 'Data Structures', 'Mentoring'],
  },
]

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    degree: 'BSc Eng (Hons) in Computer Engineering',
    school: 'University of Peradeniya',
    period: 'Jun 2022 - Present',
    detail: 'First Class · GPA 3.971 / 4.00',
  },
  {
    degree: 'GCE Advanced Level, Physical Science',
    school: 'Royal College, Colombo',
    period: '2018 - 2020',
    detail: '3 A passes · Z-score 2.0291',
  },
]

// ── Involvement / extra-curricular ────────────────────────────
export const activities = [
  { org: 'Institution of Engineers Sri Lanka (IESL)', role: 'Student Member', period: '2025 - Present' },
  { org: 'ACES (Assoc. of Computer Engineering Students), UoP', role: 'Member', period: '2023 - Present' },
  { org: 'AIESEC, University of Peradeniya', role: 'Member', period: '2022 - 2024' },
  { org: 'Arunella Education Welfare Programme', role: 'Maths & Science Tutor', period: 'Jul - Dec 2023' },
]

// ── Skills, grouped ───────────────────────────────────────────
export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    group: 'Backend & Web',
    items: ['FastAPI', 'Spring Boot', 'React', 'React Native (Expo)', 'REST', 'WebSockets', 'SSE'],
  },
  {
    group: 'Cloud & IaC',
    items: ['AWS', 'Azure', 'WSO2 Developer Platform', 'Terraform', 'Helm', 'Docker', 'Kubernetes (EKS)', 'NGINX'],
  },
  {
    group: 'CI/CD & Observability',
    items: ['GitHub Actions', 'OIDC Federation', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'CloudWatch'],
  },
  {
    group: 'Data & Messaging',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Alembic', 'Azure Blob', 'MQTT'],
  },
  {
    group: 'AI & Agents',
    items: ['Azure OpenAI', 'RAG', 'LLM Eval Harnesses', 'browser-use', 'Playwright', 'LangChain', 'OpenCV'],
  },
  {
    group: 'Security & Tools',
    items: ['Threat Modeling', 'Enterprise SSO', 'OAuth 2.0', 'Git'],
  },
]

// ── Open source contributions (upstream, merged) ──────────────
export const openSource = [
  {
    name: 'Kubernetes Python Client',
    org: 'CNCF',
    stars: '7.6k stars',
    badge: '5 PRs merged',
    url: 'https://github.com/kubernetes-client/python',
    prs: [
      { id: '#2693', url: 'https://github.com/kubernetes-client/python/pull/2693' },
      { id: '#2690', url: 'https://github.com/kubernetes-client/python/pull/2690' },
      { id: '#2689', url: 'https://github.com/kubernetes-client/python/pull/2689' },
      { id: '#2688', url: 'https://github.com/kubernetes-client/python/pull/2688' },
      { id: '#2687', url: 'https://github.com/kubernetes-client/python/pull/2687' },
    ],
    highlights: [
      'Shipped the missing Lease lock for leader election, which client-go had already moved to.',
      'Found local wall-clock time stored as UTC, silently breaking leader election on any non-UTC host.',
      'Added opt-in TCP keepalive so idle watches survive proxies that drop them.',
      'Earlier: SPDX license identifiers across all three build scripts, and a fix for the broken docs build.',
    ],
    tags: ['Python', 'Kubernetes', 'Leader Election', 'TCP Keepalive', 'CNCF'],
  },
  {
    name: 'Apache Camel',
    org: 'Apache Software Foundation',
    stars: '6.3k stars',
    badge: '1 PR merged',
    url: 'https://github.com/apache/camel',
    prs: [{ id: 'CAMEL-24409', url: 'https://github.com/apache/camel/pull/26024' }],
    highlights: [
      'Binary uploads came back corrupted whenever REST client request validation was on.',
      'The validator round-tripped the body through a String, and non-UTF-8 bytes did not survive it.',
      'Removed the write-back, fixed the corruption, added a regression test.',
    ],
    tags: ['Java', 'REST DSL', 'Apache Camel', 'Bug Fix'],
  },
  {
    name: 'sktime',
    org: 'Time-Series ML',
    stars: '10k stars',
    badge: '1 PR merged',
    url: 'https://github.com/sktime/sktime',
    prs: [{ id: '#10908', url: 'https://github.com/sktime/sktime/pull/10908' }],
    highlights: [
      'Documented two capabilities the extension templates left out.',
    ],
    tags: ['Python', 'Time-Series ML', 'Documentation'],
  },
]

// ── Projects (curated flagships) ──────────────────────────────
// category ∈ 'Cloud & DevOps' | 'Full-Stack' | 'AI / ML' | 'IoT'
// Optional flags: openSource (adds a badge), note (shown when there is no public repo).
export const projects = [
  {
    name: 'Compliance Evidence Submission Portal',
    category: 'AI / ML',
    featured: true,
    openSource: true,
    description:
      'A browser agent signs into cloud consoles and GitHub, captures the evidence each compliance control needs, and files it. Built at WSO2, now in production and open source under wso2-open-operations.',
    tags: ['Agentic AI', 'Python', 'FastAPI', 'browser-use', 'Playwright', 'Azure OpenAI', 'WSO2 Developer Platform', 'OAuth 2.0', 'Apache-2.0'],
    repo: 'https://github.com/wso2-open-operations/grc-tools',
  },
  {
    name: 'SRE Ops Pilot, Grounded Assistant for the SRE Team',
    category: 'AI / ML',
    featured: true,
    private: true,
    note: 'Internal · WSO2',
    description:
      'Answers from WSO2’s runbooks and cites a source for every line, checking each quote against the document before you see it. Chosen on a real test set: 63 of 65 correct, every unanswerable question rejected.',
    tags: ['RAG', 'LLM Evaluation', 'Azure OpenAI', 'Python', 'FastAPI', 'PostgreSQL', 'SSE Streaming', 'React', 'TypeScript'],
  },
  {
    name: 'CloudCare, AWS Well-Architected Infrastructure',
    category: 'Cloud & DevOps',
    featured: true,
    description:
      'A production-style AWS environment entirely in code: nine Terraform stacks, a private database across two availability zones, deployed by GitHub Actions on short-lived OIDC credentials so no permanent key exists.',
    tags: ['Terraform', 'AWS', 'GitHub Actions', 'OIDC', 'EC2 / ALB / RDS', 'CloudWatch', 'IaC'],
    repo: 'https://github.com/chala2001/cloud-care',
  },
  {
    name: 'CloudCare, EKS Microservices & Observability',
    category: 'Cloud & DevOps',
    featured: true,
    description:
      'One application split into four Helm-packaged services, each with its own pipeline. Scale-up went from five minutes to thirty seconds, and rollback is a single command.',
    tags: ['AWS EKS', 'Kubernetes', 'Helm', 'Terraform', 'Prometheus', 'Grafana', 'Loki', 'ECR'],
    repo: 'https://github.com/chala2001/cloud-care-k8s',
  },
  {
    name: 'CloudCare, Local K8s + Observability',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'The same four services on a local cluster: Helm, NGINX Ingress, HPA autoscaling and a Prometheus, Grafana and Loki stack, with no AWS bill.',
    tags: ['Helm', 'FastAPI', 'NGINX Ingress', 'HPA', 'Prometheus', 'Grafana', 'Loki'],
    repo: 'https://github.com/chala2001/cloud-care-local',
  },
  {
    name: 'LMS University, Full-Stack Digital Education Platform',
    category: 'Full-Stack',
    featured: true,
    description:
      'One Spring Boot API behind both a React site and a React Native app: social feed, live messaging, admin dashboard, and a job board where alumni hire students.',
    tags: ['Spring Boot', 'React', 'React Native (Expo)', 'MySQL', 'Docker', 'Kubernetes', 'JWT', 'WebSockets'],
    repo: 'https://github.com/chala2001/LMS_University',
  },
  {
    name: 'LMS, Kubernetes Deployment',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'The Docker Compose to Kubernetes migration: a self-healing cluster, load balancing, persistent volumes so MySQL survives a restart, and secrets out of the manifests.',
    tags: ['Kubernetes', 'Load Balancing', 'Persistent Volumes', 'Secrets'],
    repo: 'https://github.com/chala2001/LMS_FullStack_K8s_Deployment',
  },
  {
    name: 'Explainable AI Zero-Trust Anomaly Detection',
    category: 'AI / ML',
    featured: true,
    description:
      'Final-year research. Finds attacks inside encrypted traffic without decrypting it, and shows an analyst why each connection was flagged. Benchmarked on CIC-IDS-2017 and presented at iPURSE 2026, with the abstract accepted into the proceedings.',
    tags: ['Semi-Supervised ML', 'Explainable AI', 'CIC-IDS-2017', 'Python', 'NumPy', 'iPURSE 2026'],
    repo: 'https://github.com/cepdnaclk/e20-4yp-Explainable-AI-Driven-Zero-Trust-Anomaly-Detection-for-Encrypted-Traffic',
  },
  {
    name: 'Lightify, Smart Home IoT Lighting',
    category: 'IoT',
    featured: false,
    note: 'Group · my scope: network & firmware',
    description:
      'Designed the network architecture and wrote the ESP32 firmware in C and C++. A new device joins over Wi-Fi or Bluetooth and is configured in place, never reprogrammed. Talks to AWS IoT Core over MQTT.',
    tags: ['ESP32', 'C / C++', 'AWS IoT Core', 'MQTT', 'Wi-Fi / BLE Provisioning', 'Spring Boot', 'MongoDB'],
    repo: 'https://github.com/cepdnaclk/e20-3yp-Smart-IOT-Indoor-Lighting-System',
    web: 'https://cepdnaclk.github.io/e20-3yp-Smart-IOT-Indoor-Lighting-System/',
  },
  {
    name: 'Artery Resolver, Cardiovascular Risk Analysis',
    category: 'AI / ML',
    featured: false,
    note: 'Group, with Faculty of Medicine · my scope: app, data, CV model',
    description:
      'Automates Flow-Mediated Dilation, a cardiovascular-risk test clinicians were measuring by hand. Reads the ultrasound video, finds the artery walls with OpenCV, and tracks how far the artery widens.',
    tags: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'Python', 'OpenCV', 'Computer Vision'],
    repo: 'https://github.com/cepdnaclk/e20-co227-Artery-Resolver',
    web: 'https://cepdnaclk.github.io/e20-co227-Artery-Resolver/',
  },
  {
    name: 'End-to-End CI/CD Pipeline',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'Jenkins, Docker and Kubernetes building, pushing and deploying on every code change.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
    repo: 'https://github.com/chala2001/cicd-project',
  },
  {
    name: 'Facial Skin-Type CNN',
    category: 'AI / ML',
    featured: false,
    description:
      'A convolutional neural network that classifies facial skin type, with image preprocessing and data augmentation.',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Python'],
    repo: 'https://github.com/chala2001/Neuralnetworkproject',
  },
  {
    name: 'Gym Management System',
    category: 'Full-Stack',
    featured: false,
    description:
      'Spring Boot REST APIs, MySQL and React, with role-based access control.',
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
  { id: 'opensource', label: 'open source' },
  { id: 'skills', label: 'skills' },
  { id: 'certifications', label: 'certs' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]
