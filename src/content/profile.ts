// Single source of truth for every word on the site.
// Facts mirror the Nov 2026 resume. Items marked CONFIRM conflicted with the old site; check before deploying.

export const profile = {
  name: { first: "Pavan Sai", accent: "Sasidhar", last: "Appalla" },
  shortName: "Sasidhar Appalla",
  role: "Software Engineer",
  focus: "Backend & Applied AI/ML",
  lede:
    "I build production backends and the AI systems that run on them: RAG pipelines, LLM workflows, and PyTorch models, measured before they ship.",
  location: "Raleigh, NC",
  status: "Open to Software Engineer and AI/ML roles",
  email: "sasidharapalla@gmail.com",
  // CONFIRM: the old site used linkedin.com/in/sasidhar-appalla-a00b2b200. The resume uses this one.
  linkedin: "https://www.linkedin.com/in/sasidhar-appalla/",
  github: "https://github.com/sasidharappalla",
};

export const spec: { label: string; value: string }[] = [
  { label: "Based in", value: "Raleigh, NC" },
  { label: "Education", value: "M.S. Computer Science, NC State '26" },
  { label: "Experience", value: "1.5 yrs full-time + ISRO internship" },
  { label: "Languages", value: "Python · TypeScript · Go · SQL" },
  { label: "Focus", value: "RAG, LLM workflows, distributed systems" },
];

// Animated readout in the hero. Values come from the DocuQuery evaluation harness.
export const evalReadout = {
  title: "docuquery / eval",
  rows: [
    { metric: "faithfulness", value: 0.82, display: "0.82" },
    { metric: "precision@k", value: 0.71, display: "0.71" },
    { metric: "p50 latency", value: 0.62, display: "<940 ms" },
  ],
  footer: "500+ chunks · sentence-transformers · ChromaDB",
};

export const proof: { figure: string; unit?: string; caption: string; source: string }[] = [
  { figure: "100K", unit: "+", caption: "clinical and research records processed per day", source: "Rygen BioPharma" },
  { figure: "0.82", caption: "RAG answer faithfulness, measured by an automated harness", source: "DocuQuery" },
  { figure: "0.91", caption: "balanced accuracy on held-out wearable-sensor data", source: "Terrain recognition" },
  { figure: "85", unit: "%+", caption: "test coverage held across 12+ production releases", source: "Rygen BioPharma" },
];

export const experience = [
  {
    company: "Rygen BioPharma",
    // CONFIRM: the old site called this "Data Science Engineer". It must match your employment records.
    role: "Software Engineer",
    place: "Hyderabad, India",
    start: "Mar 2023",
    end: "Aug 2024",
    summary: "Research platform, data pipelines, and release quality for a biotech startup.",
    points: [
      "Built and owned a research collaboration platform (Flask, React, PostgreSQL) used by 30+ people across 4 departments, with 20+ REST and GraphQL APIs.",
      "Engineered Python/SQL ingestion and ETL pipelines on Kafka and Redis processing 100K+ clinical and research records a day; automated validation cut data-quality errors by 50%.",
      "Delivered 10+ React dashboards that put pipeline data in front of researchers and leadership.",
      "Held 85%+ test coverage with pytest suites gated in Jenkins and GitHub Actions across 12+ releases, and debugged production incidents end to end.",
    ],
    stack: ["Python", "Flask", "React", "PostgreSQL", "Kafka", "Redis", "Jenkins"],
  },
  {
    company: "ISRO · National Remote Sensing Centre",
    role: "Software Engineering Intern",
    place: "Nagpur, India",
    // CONFIRM: the resume says 2022; the old site said Jun–Aug 2023, which overlaps with Rygen.
    start: "Jun 2022",
    end: "Aug 2022",
    summary: "Satellite data processing for India's space agency.",
    points: [
      "Automated Python/SQL processing pipelines for 20+ satellite remote-sensing datasets.",
      "Added caching and validation stages that raised throughput by 25% and caught data-quality defects before analysis.",
    ],
    stack: ["Python", "SQL", "Remote sensing"],
  },
];

export type Project = {
  index: string;
  name: string;
  kind: string;
  dates: string;
  thesis: string;
  points: string[];
  stack: string[];
  metric?: { figure: string; label: string };
  href?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "DocuQuery",
    kind: "RAG document Q&A platform",
    dates: "Feb – Mar 2026",
    thesis: "Retrieval-augmented answers with citations, and the evaluation to prove they are grounded.",
    points: [
      "PDFs are chunked, embedded with sentence-transformers into ChromaDB, and answered with cited sources through pluggable Claude and OpenAI providers.",
      "An automated harness scores faithfulness, precision@k, and latency on every change; a deterministic mock provider keeps CI keyless.",
      "Packaged for Azure AKS with Helm and Terraform, with Prometheus metrics and structured logs.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "ChromaDB", "Helm", "Terraform"],
    metric: { figure: "0.82", label: "faithfulness" },
    href: "https://github.com/sasidharappalla/rag-qa-system",
  },
  {
    index: "02",
    name: "Project Athithi",
    kind: "Multilingual LLM concierge for hotels",
    dates: "Dec 2025 – Mar 2026",
    thesis: "WhatsApp messages in any Indian language become routed staff tasks, without a guest app.",
    points: [
      "Language detection with Sarvam AI, then intent classification and reply generation with Claude Haiku, with a keyword-classifier fallback when the model is unavailable.",
      "Async FastAPI and PostgreSQL backend (SQLAlchemy, Alembic) and a Next.js operations dashboard for live conversations, tasks, and FAQs.",
    ],
    stack: ["FastAPI", "Claude API", "Sarvam AI", "PostgreSQL", "Next.js"],
    metric: { figure: "0", label: "apps for guests to install" },
    note: "Private repository",
  },
  {
    index: "03",
    name: "Terrain Recognition",
    kind: "Deep learning on wearable sensors",
    dates: "Jan – Apr 2025",
    thesis: "Classifying how someone is walking (hard ground, soft ground, stairs) from raw IMU signals.",
    points: [
      "Started from an MLP on hand-crafted features (0.81 balanced accuracy), benchmarked against a random forest.",
      "Moved to a deep model on raw time series that reached 0.91 and 0.87 balanced accuracy on two held-out test sets.",
    ],
    stack: ["PyTorch", "scikit-learn", "NumPy"],
    metric: { figure: "0.91", label: "balanced accuracy" },
    note: "NC State Neural Networks",
  },
  {
    index: "04",
    name: "AtlasStore",
    kind: "Distributed object storage in Go",
    dates: "Jan – Feb 2026",
    thesis: "An S3-style store that keeps data intact when a storage node dies.",
    points: [
      "Four services (gateway, metadata, storage nodes, repair worker) with 4 MB chunking, 3-way replication, SHA-256 integrity checks, and HMAC-signed URLs.",
      "A self-healing worker re-replicates chunks when a node misses heartbeats, verified with node-kill drills and 500 × 8 MB benchmarks at 50-way concurrency.",
    ],
    stack: ["Go", "PostgreSQL", "Docker", "Prometheus"],
    metric: { figure: "3×", label: "replication" },
    href: "https://github.com/sasidharappalla/atlasstore",
  },
];

export const moreWork: { name: string; line: string; href?: string; tag: string }[] = [
  {
    name: "LabFlow",
    line: "Event-driven research workflow backend with idempotent consumers and dead-letter replay.",
    tag: "TypeScript · Kafka · Airflow",
    href: "https://github.com/sasidharappalla/labflow",
  },
  {
    name: "BlindReview",
    line: "Resume-sharing platform that detects and redacts personal information before anything is published.",
    tag: "FastAPI · Redis workers · Next.js",
    href: "https://github.com/sasidharappalla/blindreview",
  },
  {
    name: "Chimera AR",
    line: "Mixed-reality room painting for Meta Quest, using room scanning and spatial anchors.",
    tag: "Unity · C# · Meta XR SDK",
    href: "https://github.com/sasidharappalla/ChimeraAR",
  },
];

export const capabilities = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "Java", "C++", "Bash"] },
  {
    group: "Machine learning & AI",
    items: ["PyTorch", "scikit-learn", "Hugging Face", "LangChain", "RAG", "LLM evaluation", "Prompt engineering", "NLP"],
  },
  {
    group: "Backend & data",
    items: ["FastAPI", "Flask", "Node.js", "React", "Next.js", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "Airflow"],
  },
  {
    group: "Cloud & delivery",
    items: ["AWS", "Azure AKS", "Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "Prometheus"],
  },
];

export const education = [
  {
    school: "North Carolina State University",
    degree: "M.S. Computer Science",
    dates: "Aug 2024 – May 2026",
    // CONFIRM: the old site said 3.56; the resume says 3.53.
    detail: "GPA 3.53 / 4.00",
    courses: "Neural Networks · Deep Learning Beyond Accuracy · Cognitive Systems · Algorithms · Software Engineering · DBMS",
  },
  {
    school: "Gandhi Institute of Technology and Management",
    degree: "B.Tech Computer Science & Engineering (Cybersecurity)",
    // CONFIRM: taken from the old site; not on the current resume.
    dates: "2020 – 2024",
    detail: "CGPA 8.65 / 10",
    courses: "Operating Systems · Computer Networks · Cryptography · Compiler Design · Intro to AI",
  },
];

export const credentials = [
  { name: "Certified Ethical Hacker (CEH)", by: "EC-Council" },
  { name: "Accelerated Computing with CUDA Python", by: "NVIDIA Deep Learning Institute" },
  // CONFIRM: from the old site. Remove if you would rather not list it.
  { name: "“Detecting Malware in the Age of AI”", by: "IJIRT, 2024 · co-author" },
];
