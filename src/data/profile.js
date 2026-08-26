// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit here, and every section picks it up.
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
    "I'm a Computer Engineering undergraduate at the University of Peradeniya, First Class with a 3.971 GPA, and an SRE intern at WSO2. Writing the service is only the start of it for me; I want to containerise it, stand up the infrastructure it runs on, and keep it healthy once real people depend on it.",
    "Most of my work sits between full-stack development and DevOps/SRE: FastAPI and Spring Boot backends behind React frontends, packaged with Docker, orchestrated on Kubernetes, provisioned with Terraform and shipped through GitHub Actions. Lately it has been AI agents that take real work off the team, and I pick the models on measured results rather than reputation.",
  ],
  stats: [
    { value: '3.971', label: 'GPA / 4.00' },
    { value: '20+', label: 'Public Projects' },
    { value: '15+', label: 'Certifications' },
    { value: '1,077', label: 'Tests across my WSO2 work' },
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
      'On the SRE team, building AI agents that take real operational work off the team. Two projects so far: a compliance evidence portal now running in production as an internal WSO2 application, and a grounded assistant for the SRE team currently in security review.',
    highlights: [
      'Compliance Evidence Submission Portal: replaced the team’s manual evidence collection with an AI agent that drives cloud consoles and GitHub in a real browser, captures what each compliance control needs as a screenshot or PDF, and files it automatically. Task templates let one instruction cover every resource the agent finds.',
      'Wrote the portal’s threat model and defended it in security review, which is what took it into production. The same work closed an open route where anyone guessing a file’s ID could download evidence without signing in. Evidence now sits behind links that expire in fifteen minutes.',
      'Packaged the agent as an installable command-line tool and wrote the repository’s first release pipeline, so a version tag builds the wheel and publishes a GitHub Release. First-party actions only, so no unreviewed code ever holds the repository’s tokens.',
      'SRE Ops Pilot: stopped the assistant inventing answers by checking its work in code instead of trusting it. The backend opens the document behind every citation and confirms the quoted line is really there, hiding any source that fails and warning the reader.',
      'Skipped the usual vector database and fed whole documents instead, because cutting them into pieces separates a table’s numbers from the headings that give them meaning. Better document matching brought the questions needing the whole library down from 44 of 65 to 21, and the average request from 53k to 40k tokens.',
      'Chose the model on results rather than reputation, against a 65-question test set with 15 deliberately unanswerable. The winner scored 63 of 65, correctly refused all 25 trick questions, and answered in 5.1 seconds instead of 12.2.',
    ],
    stack: ['Python', 'FastAPI', 'Azure OpenAI', 'browser-use', 'Playwright', 'React', 'TypeScript', 'WSO2 Choreo', 'Asgardeo / OAuth 2.0', 'pytest'],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    company: 'University of Peradeniya',
    period: 'Sep 2023 - Mar 2026',
    type: 'Part-time',
    location: 'Peradeniya · On-site',
    summary:
      'Mentor undergraduate students in core Computer Engineering courses, leading lab sessions and guiding hands-on programming.',
    highlights: [
      'CO322 Data Structures & Algorithms: led lab sessions on core algorithmic concepts and practical implementations.',
      'CO225 Software Construction: guided students through fundamental programming and software development in Java.',
      'CO2030 Data Structures & Algorithms II: taught linked lists, trees, graphs and algorithm optimization.',
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
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'Bash'],
  },
  {
    group: 'Backend & Web',
    items: ['FastAPI', 'Spring Boot', 'Node.js', 'React', 'React Native (Expo)', 'REST', 'WebSockets', 'SSE'],
  },
  {
    group: 'Cloud & IaC',
    items: ['AWS', 'Azure', 'WSO2 Choreo', 'Terraform', 'Helm', 'Docker', 'Kubernetes (EKS)', 'Linux', 'NGINX'],
  },
  {
    group: 'CI/CD & Observability',
    items: ['GitHub Actions', 'OIDC Federation', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'CloudWatch'],
  },
  {
    group: 'Data & Messaging',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Alembic', 'Azure Blob', 'Kafka', 'MQTT'],
  },
  {
    group: 'AI & Agents',
    items: ['Azure OpenAI', 'Claude API', 'RAG', 'LLM Eval Harnesses', 'browser-use', 'Playwright', 'LangChain', 'OpenCV'],
  },
  {
    group: 'Security & Tools',
    items: ['Threat Modeling', 'Enterprise SSO', 'WSO2 Asgardeo', 'OAuth 2.0', 'OIDC', 'JWT', 'Git', 'Claude Code', 'pytest'],
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
      'Built during my WSO2 SRE internship, now in production as an internal WSO2 application and released open source under the wso2-open-operations GRC platform. An AI agent drives cloud consoles and GitHub in a real browser, captures what each compliance control needs as a screenshot or PDF, and files it automatically. FastAPI backend on WSO2 Choreo storing data in Azure PostgreSQL and evidence in Azure Blob Storage, a React and TypeScript frontend, enterprise SSO on every request, and 410 tests that run against a real database rather than mocks.',
    tags: ['Agentic AI', 'Python', 'FastAPI', 'browser-use', 'Playwright', 'Azure OpenAI', 'WSO2 Choreo', 'Asgardeo / OAuth 2.0', 'Apache-2.0'],
    repo: 'https://github.com/wso2-open-operations/grc-tools',
  },
  {
    name: 'SRE Ops Pilot, Grounded Assistant for the SRE Team',
    category: 'AI / ML',
    featured: true,
    private: true,
    note: 'Internal · WSO2',
    description:
      'A question-answering assistant for WSO2’s SRE team that refuses to bluff. Rather than trusting the model, the backend opens the document behind every citation and confirms the quoted line is really there, hiding any source that fails. It skips the usual vector database and feeds whole documents instead, because chunking separates a table’s numbers from the headings that give them meaning. The model was chosen against a 65-question evaluation set: 63 of 65 correct, all 25 trick questions refused, 5.1 seconds a response. Enterprise SSO, saved conversations, per-person cost tracking, an admin audit log and a spend cap, behind 552 backend and 115 frontend tests.',
    tags: ['RAG', 'LLM Evaluation', 'Azure OpenAI', 'Python', 'FastAPI', 'PostgreSQL', 'SSE Streaming', 'React', 'TypeScript'],
  },
  {
    name: 'CloudCare, AWS Well-Architected Infrastructure',
    category: 'Cloud & DevOps',
    featured: true,
    description:
      'A production-style AWS environment built entirely in code: nine independent Terraform stacks with shared, locked state, a private database spread across two availability zones, and layered firewall rules in front of it. Deployed through GitHub Actions using short-lived OIDC credentials, so no permanent AWS key exists anywhere, and run with a monitoring dashboard and eight alarms over a self-healing server group.',
    tags: ['Terraform', 'AWS', 'GitHub Actions', 'OIDC', 'EC2 / ALB / RDS', 'CloudWatch', 'IaC'],
    repo: 'https://github.com/chala2001/cloud-care',
  },
  {
    name: 'CloudCare, EKS Microservices & Observability',
    category: 'Cloud & DevOps',
    featured: true,
    description:
      'The same hospital system split into four smaller services on Kubernetes, each packaged with Helm and given its own deploy pipeline, so shipping one no longer redeploys the others. Scale-up went from five minutes to thirty seconds, rollback became a single command by tagging every build with its commit, and the cluster is watched through Prometheus, Grafana and Loki.',
    tags: ['AWS EKS', 'Kubernetes', 'Helm', 'Terraform', 'Prometheus', 'Grafana', 'Loki', 'ECR'],
    repo: 'https://github.com/chala2001/cloud-care-k8s',
  },
  {
    name: 'CloudCare, Local K8s + Observability',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'The same four FastAPI microservices running on a local Kubernetes cluster: Helm charts, NGINX Ingress, HPA auto-scaling and a Prometheus / Grafana / Loki stack, so the whole thing can be exercised without an AWS bill.',
    tags: ['Helm', 'FastAPI', 'NGINX Ingress', 'HPA', 'Prometheus', 'Grafana', 'Loki'],
    repo: 'https://github.com/chala2001/cloud-care-local',
  },
  {
    name: 'LMS University, Full-Stack Digital Education Platform',
    category: 'Full-Stack',
    featured: true,
    description:
      'One Spring Boot API serving two clients at once, a React website and a React Native mobile app: a social feed, live messaging, an admin dashboard, and a job board where alumni hire students. Later moved off Docker Compose onto Kubernetes, keeping the database’s data intact across restarts and its passwords out of the configuration files.',
    tags: ['Spring Boot', 'React', 'React Native (Expo)', 'MySQL', 'Docker', 'Kubernetes', 'JWT', 'WebSockets'],
    repo: 'https://github.com/chala2001/LMS_University',
  },
  {
    name: 'LMS, Kubernetes Deployment',
    category: 'Cloud & DevOps',
    featured: false,
    description:
      'The Kubernetes migration for the LMS platform on its own: moving off Docker Compose onto a self-healing cluster with automated load balancing, persistent volumes so MySQL survives a restart, and secrets kept out of the manifests.',
    tags: ['Kubernetes', 'Load Balancing', 'Persistent Volumes', 'Secrets'],
    repo: 'https://github.com/chala2001/LMS_FullStack_K8s_Deployment',
  },
  {
    name: 'Explainable AI Zero-Trust Anomaly Detection',
    category: 'AI / ML',
    featured: true,
    description:
      'Final-year research: a system that finds attacks inside encrypted network traffic without ever decrypting it, so privacy stays intact while threats are still caught. Paired with Explainable AI so an analyst sees why a connection was flagged rather than only that it was, and measured against the CIC-IDS-2017 benchmark. Presented and defended before an external expert panel at iPURSE 2026, the Peradeniya University International Research Symposium, where the abstract was accepted into the conference proceedings.',
    tags: ['Semi-Supervised ML', 'Explainable AI', 'CIC-IDS-2017', 'Python', 'NumPy', 'iPURSE 2026'],
    repo: 'https://github.com/chala2001/bcc_darknet_project',
  },
  {
    name: 'Lightify, Smart Home IoT Lighting',
    category: 'IoT',
    featured: false,
    note: 'Group · EngEx 2025 · my scope: firmware',
    description:
      'A smart-home lighting system that detects room occupancy and adjusts the lights to match. I wrote the ESP32 firmware, in C and C++, that the whole system runs on: reading the occupancy sensors, driving the lights, and letting a new device join over Wi-Fi or Bluetooth without being reprogrammed. The devices talk to AWS IoT Core over MQTT so the backend can read sensor data and send commands back in real time. Presented at EngEx 2025, University of Peradeniya.',
    tags: ['ESP32', 'C / C++', 'AWS IoT Core', 'MQTT', 'Wi-Fi / BLE Provisioning', 'Spring Boot', 'MongoDB'],
  },
  {
    name: 'Artery Resolver, Cardiovascular Risk Analysis',
    category: 'AI / ML',
    featured: false,
    note: 'Group, with Faculty of Medicine · my scope: app, data, CV model',
    description:
      'Automated Flow-Mediated Dilation, a test for early cardiovascular risk that clinicians were measuring by hand. The tool reads an ultrasound video, detects the artery walls with OpenCV and tracks how far the artery widens as blood flows through it, then pairs that with blood-flow velocity analysis to turn each scan into a summarised report a doctor can act on. I built the Java desktop app and the MySQL database behind it, with every record scoped so a doctor reaches only their own patients.',
    tags: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'Python', 'OpenCV', 'Computer Vision'],
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
      'Deep-learning facial skin-type classifier built on a convolutional neural network, with image preprocessing and data augmentation.',
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
