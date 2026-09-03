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
    "I'm a final-year Computer Engineering undergraduate at the University of Peradeniya, First Class with a 3.971 GPA, and an SRE intern at WSO2. I build production software across the application, cloud and infrastructure layers, and reliability and security are the parts I care about most.",
    "Writing the service is only the start of it for me. I want to containerise it, stand up the infrastructure it runs on, ship it through CI/CD and keep it healthy once real people depend on it. Lately that has meant AI-powered systems, where I pick the models on measured results rather than reputation. I also work upstream: seven pull requests merged into CNCF, Apache and PyData projects so far.",
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
      'On the SRE team, building production software across the application, cloud and infrastructure layers. Two projects so far: a compliance evidence portal now running in production at WSO2, and a grounded assistant for the SRE team currently under security review.',
    highlights: [
      'Compliance Evidence Submission Portal: engineers were collecting audit evidence by hand, screenshotting and exporting PDFs out of GitHub and cloud consoles. I built a full-stack portal with a browser agent that signs in and captures it automatically.',
      'Designed reusable templates so one instruction collects evidence across every matching resource, instead of one instruction per resource.',
      'Conducted threat modelling and took the portal through security review, which approved it for production use at WSO2. Fixed an access-control flaw that allowed unauthenticated downloads, and enforced single sign-on on every request.',
      'Packaged the tool for one-command installation and built the repository’s first automated release pipeline. Wrote unit and end-to-end tests for every API endpoint, running against a real database instead of mocks.',
      'SRE Ops Pilot: runbooks and operational documentation were spread across systems, so routine questions were slow to answer. Built a full-stack assistant that answers from that documentation and cites a source for every statement, with a verification layer that checks each quote against the source document before the reader sees it.',
      'Engineered document selection to send only the relevant content, cutting cost and preventing runaway API spend. Evaluated candidate models against a test set drawn from the team’s real questions and picked the one that answered 63 of 65 correctly, rejected every unanswerable question and ran twice as fast.',
      'Delivered single sign-on, conversation history, per-user cost tracking, an audit log and a configurable spend cap, with unit and end-to-end tests across backend and frontend.',
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
      'Five pull requests merged into the official Kubernetes client for Python, a CNCF project with 7.6k stars.',
      'It could only lock leader election on a ConfigMap, which client-go had dropped. I shipped the missing Lease lock.',
      'Found it storing local wall-clock time labelled as UTC, silently breaking leader election against other Kubernetes clients on any non-UTC host.',
      'An idle watch sends nothing on its connection, so a proxy in the path is free to drop it and the client only finds out on the next read. client-go dials with a keepalive; the Python client asked the kernel for nothing. Added an opt-in keep_alive option that uses client-go’s own timings, built on urllib3’s defaults so TCP_NODELAY survives, and guarded per platform since macOS has no TCP_KEEPIDLE.',
      '155 lines of runtime code behind 17 unit tests, reviving an abandoned contribution and crediting its original author.',
      'Earlier merges: the standard SPDX license identifier across all three build scripts, and a repair to the broken documentation build.',
    ],
    tags: ['Python', 'Kubernetes', 'Leader Election', 'TCP Keepalive', 'CNCF', 'Unit Testing'],
  },
  {
    name: 'Apache Camel',
    org: 'Apache Software Foundation',
    stars: '6.3k stars',
    badge: '1 PR merged',
    url: 'https://github.com/apache/camel',
    prs: [{ id: 'CAMEL-24409', url: 'https://github.com/apache/camel/pull/26024' }],
    highlights: [
      'Binary uploads were arriving corrupted whenever REST client request validation was switched on, with much of an application/octet-stream payload replaced by the Unicode replacement character.',
      'The validator read the body as a String to check it was present, then wrote that String back onto the message. Bytes that are not valid UTF-8 do not survive that trip, so the route downstream received replacement characters instead of the data.',
      'The write-back was not needed to keep the body readable, so removing it fixed the corruption and left the required-body check intact. Covered by a regression test that posts non-UTF-8 bytes and asserts they come back unchanged, plus a note in the 4.23 upgrade guide.',
    ],
    tags: ['Java', 'REST DSL', 'Apache Camel', 'Bug Fix', 'Regression Test'],
  },
  {
    name: 'sktime',
    org: 'Time-Series ML',
    stars: '10k stars',
    badge: '1 PR merged',
    url: 'https://github.com/sktime/sktime',
    prs: [{ id: '#10908', url: 'https://github.com/sktime/sktime/pull/10908' }],
    highlights: [
      'Merged into sktime, a 10k-star time-series machine learning library, documenting two capabilities its extension templates left out.',
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
      'Built during my WSO2 SRE internship, now in production and released open source under the wso2-open-operations GRC platform. Engineers used to collect audit evidence by hand; this portal runs a browser agent that signs in, captures what each compliance control needs as a screenshot or PDF, and files it automatically. Reusable templates let one instruction cover every matching resource. FastAPI backend storing data in Azure PostgreSQL and evidence in Azure Blob Storage, a React and TypeScript frontend, single sign-on on every request, and tests for every endpoint that run against a real database instead of mocks.',
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
      'A question-answering assistant for WSO2’s SRE team that refuses to bluff. Runbooks and operational docs were spread across systems, so routine questions were slow to answer. It answers from that documentation and cites a source for every statement, and a verification layer checks each quote against the source document before the reader sees it. Document selection sends only the relevant content, which keeps cost down and prevents runaway API spend. The model was chosen against a test set built from the team’s real questions: 63 of 65 correct, every unanswerable question rejected, and twice the speed of the runner-up. Single sign-on, conversation history, per-user cost tracking, an audit log and a configurable spend cap, with tests across backend and frontend.',
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
    note: 'Group · my scope: network & firmware',
    description:
      'A smart-home lighting system that detects room occupancy and adjusts the lights to match. I designed the network architecture and wrote the ESP32 firmware, in C and C++, that the whole system runs on. A new device joins over Wi-Fi or Bluetooth and is configured in place, never reprogrammed. The firmware reads the occupancy sensors, drives the lights, and carries data and commands to AWS IoT Core over MQTT. Presented at EngEx 2025, University of Peradeniya.',
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
      'Automated Flow-Mediated Dilation, a test for early cardiovascular risk that clinicians were measuring by hand. The tool reads an ultrasound video, detects the artery walls with OpenCV and tracks how far the artery widens as blood flows through it, then pairs that with blood-flow velocity analysis to turn each scan into a summarised report a doctor can act on. I built the Java desktop app and the MySQL database behind it, with every record scoped so a doctor reaches only their own patients.',
    tags: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'Python', 'OpenCV', 'Computer Vision'],
    repo: 'https://github.com/cepdnaclk/e20-co227-Artery-Resolver',
    web: 'https://cepdnaclk.github.io/e20-co227-Artery-Resolver/',
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
  { id: 'opensource', label: 'open source' },
  { id: 'skills', label: 'skills' },
  { id: 'certifications', label: 'certs' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]
