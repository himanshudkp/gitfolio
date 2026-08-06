export const TABS = [
  "about",
  "projects",
  "skills",
  "experience",
  "education",
  "activity",
  "contact",
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Himanshu Pandey",
  title: "Software Developer | 2+ Years of Experience",
  location: "Pune, India",
  email: "himanshudkp@gmail.com",
  avatarUrl:
    "https://ui-avatars.com/api/?name=Himanshu+Pandey&size=260&background=1f6feb&color=fff&bold=true",
  resumeUrl:
    "https://drive.google.com/file/d/1LhVIQpT9GyKfd9iHKzZfl7BsBkwHkh5C/view?usp=sharing",
  openToWork: true,
  bio: "Software Developer building scalable web and cross-platform mobile applications with React, Next.js, React Native, and TypeScript.",
  longBio:
    "I'm a Software Developer with 2+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, React Native, and TypeScript. I specialize in developing responsive and reusable UI components, integrating REST APIs, managing application state, and optimizing application performance. I've also worked on AI-powered applications using OpenAI APIs and have experience collaborating with design, backend, and QA teams in Agile environments.",
  social: {
    github: "https://github.com/himanshudkp",
    linkedin: "https://www.linkedin.com/in/himanshudkp/",
    leetcode: "https://leetcode.com/himanshudkp/",
    medium: "https://medium.com/@himanshudkp",
  },
};

export const TOOL_ICONS = {
  TypeScript: "logos:typescript-icon",
  JavaScript: "logos:javascript",
  React: "logos:react",
  "React.js": "logos:react",
  "React Native": "logos:react",
  "Next.js": "logos:nextjs-icon",
  Svelte: "logos:svelte-icon",
  HTML5: "logos:html-5",
  CSS3: "logos:css-3",
  "Tailwind CSS": "logos:tailwindcss-icon",
  Tailwind: "logos:tailwindcss-icon",
  "shadcn/ui": "simple-icons:shadcnui",
  "Framer Motion": "logos:framer",

  "Redux Toolkit": "logos:redux",
  "TanStack Query": "logos:react-query-icon",
  Zustand: "simple-icons:zustand",
  "Context API": "logos:react",

  Expo: "simple-icons:expo",

  // APIs & Backend
  "REST APIs": "octicon:plug-16",
  Axios: "simple-icons:axios",
  "Socket.IO": "logos:socket-io",
  Supabase: "logos:supabase-icon",
  Prisma: "logos:prisma",
  JWT: "simple-icons:jsonwebtokens",
  Clerk: "simple-icons:clerk",

  "OpenAI API": "simple-icons:openai",
  "Vercel AI SDK": "simple-icons:vercel",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  "GitHub Actions": "logos:github-actions",
  Vercel: "logos:vercel-icon",
  Postman: "logos:postman",

  Vitest: "logos:vitest",
  Jest: "logos:jest",
  Lighthouse: "logos:lighthouse",
  Sentry: "logos:sentry-icon",
  "Code Splitting": "octicon:package-16",
  "Lazy Loading": "octicon:clock-16",
  "Performance Optimization": "octicon:zap-16",

  NativeWind: "logos:tailwindcss-icon",
};

export function toolIcon(name) {
  return TOOL_ICONS[name] || "octicon:tools-16";
}

export const SOCIAL_ICONS = {
  github: "octicon:mark-github-16",
  linkedin: "simple-icons:linkedin",
  medium: "simple-icons:medium",
  leetcode: "simple-icons:leetcode",
};

export const VARIANTS = {
  primary:
    "bg-accent-emphasis text-white hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
  outline:
    "bg-canvas-subtle text-fg border border-border hover:bg-border-muted hover:border-fg-muted hover:-translate-y-0.5",
};

export const STACK_SUMMARY = [
  "TypeScript",
  "React.js",
  "Next.js",
  "React Native",
  "JavaScript",
  "Redux Toolkit",
  "TanStack Query",
  "Tailwind CSS",
  "REST APIs",
  "OpenAI API",
];

export const PROJECTS = [
  {
    name: "AI-Powered Presentation SaaS",
    description:
      "A SaaS platform that generates presentations from user prompts using OpenAI's GPT-4 API, with a Next.js frontend and a Supabase backend.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "OpenAI API",
      "shadcn/ui",
      "zustand",
    ],
    liveUrl: "https://github.com/yourhandle/lifeos",
    githubUrl: "https://github.com/yourhandle/lifeos",
  },
  {
    name: "AI Language Learning App",
    description:
      "An interactive language learning app that uses AI to provide personalized lessons and real-time feedback.",
    tools: [
      "React Native",
      "Expo",
      "NativeWind",
      "OpenAI API",
      "Redux Toolkit",
      "TanStack Query",
    ],
    liveUrl: "https://github.com/yourhandle/ai-language-learning-app",
    githubUrl: "https://github.com/yourhandle/ai-language-learning-app",
  },
  {
    name: "AI Kanban Board App",
    description:
      "An interactive Kanban board app that uses AI to provide personalized task management and real-time feedback.",
    tools: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "OpenAI API",
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Socket.IO",
      "Vercel AI SDK",
    ],
    liveUrl: "https://github.com/yourhandle/ai-kanban-board-app",
    githubUrl: "https://github.com/yourhandle/ai-kanban-board-app",
  },
  {
    name: "Multimodal AI Platform",
    description:
      "A comprehensive platform for building and deploying multimodal AI applications with seamless integration of text, image, and audio processing.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Socket.IO",
    ],
    liveUrl: "https://github.com/yourhandle/ai-kanban-board-app",
    githubUrl: "https://github.com/yourhandle/ai-kanban-board-app",
  },
  {
    name: "AI Teaching Assistant",
    description:
      "An AI-powered teaching assistant that helps educators create interactive lessons and provides real-time feedback to students.",
    tools: [
      "python",
      "FastAPI",
      "OpenAI API",
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Socket.IO",
    ],
    liveUrl: "https://github.com/yourhandle/ai-kanban-board-app",
    githubUrl: "https://github.com/yourhandle/ai-kanban-board-app",
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: "octicon:browser-16",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Svelte" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Mobile",
    icon: "octicon:device-mobile-16",
    items: [{ name: "React Native" }, { name: "Expo" }],
  },
  {
    category: "State & Data",
    icon: "octicon:database-16",
    items: [
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Context API" },
    ],
  },
  {
    category: "APIs & Backend",
    icon: "octicon:server-16",
    items: [
      { name: "REST APIs" },
      { name: "Axios" },
      { name: "Socket.IO" },
      { name: "Supabase" },
      { name: "Prisma" },
      { name: "JWT" },
      { name: "Clerk" },
    ],
  },
  {
    category: "AI & Development",
    icon: "octicon:hubot-16",
    items: [
      { name: "OpenAI API" },
      { name: "Vercel AI SDK" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitHub Actions" },
      { name: "Vercel" },
      { name: "Postman" },
    ],
  },
  {
    category: "Testing & Performance",
    icon: "octicon:zap-16",
    items: [
      { name: "Vitest" },
      { name: "Jest" },
      { name: "Lighthouse" },
      { name: "Sentry" },
      { name: "Code Splitting" },
      { name: "Lazy Loading" },
      { name: "Performance Optimization" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Independent Full-Stack Developer",
    org: "Self-employed",
    period: "Mar 2025 — Present",
    location: "Pune, India",
    points: [
      "Designing and building full-stack products end to end, from Postgres schema to UI",
      "Building backend services with Fastify, Prisma, Redis, and BullMQ for background jobs and notifications",
    ],
    projects: [
      {
        name: "LifeOS",
        description:
          "A full-stack, mobile-first personal life management system — authentication, an encrypted document vault, and a recurrence engine for recurring bills and commitments, built out in phases.",
        tools: [
          "React Native",
          "TypeScript",
          "Fastify",
          "PostgreSQL",
          "Redis",
          "BullMQ",
        ],
        link: "https://www.hackerrank.com/certificates/iframe/d6155dab369f",
      },
      {
        name: "Secure File Sharing",
        description:
          "A Box-inspired file sharing web app with signed uploads, built on a Fastify and PostgreSQL backend, with end-to-end encryption via the Web Crypto API on the roadmap.",
        tools: [
          "Next.js",
          "Tailwind CSS",
          "Fastify",
          "PostgreSQL",
          "Redis",
          "BullMQ",
        ],
        link: "https://www.hackerrank.com/certificates/iframe/d6155dab369f",
      },
    ],
  },
  {
    role: "Associate Software Developer",
    org: "Heaptrace Technology",
    period: "Dec 2022 — Mar 2025",
    location: "Pune, India",
    points: [
      "Built and maintained frontend features using React, TypeScript, and Redux Toolkit",
      "Worked across the stack alongside backend and design teams to ship product features",
    ],
    projects: [
      {
        name: "LifeOS",
        description:
          "A full-stack, mobile-first personal life management system — authentication, an encrypted document vault, and a recurrence engine for recurring bills and commitments, built out in phases.",
        tools: [
          "React Native",
          "TypeScript",
          "Fastify",
          "PostgreSQL",
          "Redis",
          "BullMQ",
        ],
        link: "https://www.hackerrank.com/certificates/iframe/d6155dab369f",
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.E. in Computer Science",
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V) ",
  },
  {
    degree: "Postgraduate Diploma in Mobile Computing",
    school: "Centre for Development of Advanced Computing (C-DAC)",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    icon: "simple-icons:hackerrank",
    link: "https://www.hackerrank.com/certificates/iframe/d6155dab369f",
  },
];

export const GITHUB = {
  username: "himanshudkp",
  accentHex: "1f6feb",
};

export const OPEN_SOURCE_CONTRIBUTIONS = [];

export const BLOG = {
  mediumUsername: "himanshudkp",
  linkedinPostsUrl:
    "https://www.linkedin.com/in/himanshudkp/recent-activity/all/",
};
