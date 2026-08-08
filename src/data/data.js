export const TABS = [
  "about",
  "projects",
  "skills",
  "experience",
  "education",
  // "activity",
  "contact",
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  // { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Himanshu Pandey",
  title: "Software Developer | 2+ YOE",
  location: "Pune, India",
  phone: "+91 9522498034",
  email: "himanshudkp@gmail.com",
  avatarUrl:
    "https://ui-avatars.com/api/?name=Himanshu+Pandey&size=260&background=1f6feb&color=fff&bold=true",
  resumeUrl:
    "https://drive.google.com/file/d/1LhVIQpT9GyKfd9iHKzZfl7BsBkwHkh5C/view?usp=sharing",
  openToWork: true,
  bio: "Software Developer building scalable AI-Powered web and cross-platform mobile applications.",
  longBio:
    "I'm a Software Developer with 2+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, React Native, and TypeScript. I specialize in developing responsive UI components, integrating REST APIs, managing state with Redux Toolkit and TanStack Query, optimizing application performance, and collaborating with cross-functional teams in Agile environments.",
  social: {
    github: "https://github.com/himanshudkp",
    linkedin: "https://www.linkedin.com/in/himanshudkp/",
    // leetcode: "https://leetcode.com/himanshudkp/",
    // medium: "https://medium.com/@himanshudkp",
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
  SvelteKit: "logos:svelte-icon",
  HTML5: "logos:html-5",
  CSS3: "logos:css-3",
  JSON: "octicon:file-code-16",
  "Tailwind CSS": "logos:tailwindcss-icon",
  Tailwind: "logos:tailwindcss-icon",
  "shadcn/ui": "simple-icons:shadcnui",
  "Framer Motion": "logos:framer",
  "Chart.js": "simple-icons:chartdotjs",

  "Redux Toolkit": "logos:redux",
  "TanStack Query": "logos:react-query-icon",
  Zustand: "simple-icons:zustand",
  "Context API": "logos:react",

  Expo: "simple-icons:expo",

  "REST APIs": "octicon:plug-16",
  Axios: "simple-icons:axios",
  "Socket.IO": "logos:socket-io",
  "Socket.io": "logos:socket-io",
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
  Figma: "logos:figma",
  Jira: "logos:jira",
  Slack: "logos:slack-icon",

  Vitest: "logos:vitest",
  Jest: "logos:jest",
  Lighthouse: "logos:lighthouse",
  Sentry: "logos:sentry-icon",
  "Code Splitting": "octicon:package-16",
  "Lazy Loading": "octicon:clock-16",
  "Performance Optimization": "octicon:zap-16",

  NativeWind: "logos:tailwindcss-icon",
  Vite: "logos:vitejs",
  LemonSqueezy: "simple-icons:lemonsqueezy",
  Fastify: "simple-icons:fastify",
  PostgreSQL: "logos:postgresql",
  Redis: "logos:redis",
  BullMQ: "simple-icons:bullmq",
};

export function toolIcon(name) {
  return TOOL_ICONS[name] || "octicon:tools-16";
}

export const SOCIAL_ICONS = {
  github: "octicon:mark-github-16",
  linkedin: "simple-icons:linkedin",
  // medium: "simple-icons:medium",
  // leetcode: "simple-icons:leetcode",
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
  "React Native/Expo",
  "JavaScript",
  "Redux Toolkit",
  // "TanStack Query",
  "Tailwind CSS",
  // "REST APIs",
  // "OpenAI API",
];

export const PROJECTS = [
  {
    name: "AI Presentation Builder SaaS",
    featured: true,
    description:
      "A full SaaS platform for creating presentations with Creative AI, featuring drag-and-drop editing, AI image generation, templates, themes, real-time streaming, sharing, creator payments, project management, animations, and light/dark mode.",
    tools: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Vercel",
      "OpenAI API",
      "Supabase",
      "Framer Motion",
      "shadcn/ui",
      "Vite",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/himanshudkp/present-perfect-ai",
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and experience.",
    tools: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
    liveUrl: "https://gitfolio-smoky.vercel.app/",
    githubUrl: "https://github.com/himanshudkp/gitfolio",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    icon: "octicon:code-16",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Frontend",
    icon: "octicon:browser-16",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Expo" },
      { name: "Svelte" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Framer Motion" },
      { name: "Chart.js" },
    ],
  },
  {
    category: "State Management",
    icon: "octicon:database-16",
    items: [
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "Context API" },
      { name: "Zustand" },
    ],
  },
  {
    category: "API & Backend",
    icon: "octicon:server-16",
    items: [
      { name: "REST APIs" },
      { name: "Axios" },
      { name: "OpenAI API" },
      { name: "Socket.IO" },
      { name: "Supabase" },
      { name: "Prisma" },
      { name: "JWT" },
      { name: "Clerk" },
    ],
  },
  {
    category: "Tools",
    icon: "octicon:tools-16",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitHub Actions" },
      { name: "Vercel" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Vitest" },
      { name: "Jest" },
      { name: "Lighthouse" },
      { name: "Jira" },
      { name: "Slack" },
      { name: "Sentry" },
    ],
  },
  {
    category: "Core Skills",
    icon: "octicon:zap-16",
    items: [
      { name: "Responsive UI Development" },
      { name: "Performance Optimization" },
      { name: "API Integration" },
      { name: "Code Splitting" },
      { name: "Lazy Loading" },
      { name: "Agile" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Associate Software Developer",
    org: "HeapTrace Technology Pvt. Ltd",
    period: "Mar 2023 — Mar 2025",
    location: "Pune, India",
    points: [
      "Developed client-facing web and cross-platform mobile applications with React, Next.js, React Native, and TypeScript",
      "Built responsive, reusable UI components for enterprise dashboards and consumer-facing products",
      "Integrated REST APIs with Axios and optimized data fetching, caching, and API performance with TanStack Query",
      "Managed application state using Redux Toolkit",
      "Optimized application performance using React.memo, useMemo, useCallback, lazy loading, and code splitting",
      "Delivered new features, enhancements, and bug fixes across multiple client projects while meeting business requirements",
      "Collaborated with design, backend, and QA teams in Agile sprints to deliver production-ready features",
    ],
    projects: [
      {
        name: "AI-Powered Recruitment SaaS",
        description:
          "End-to-end AI workflows for prompt submission, response generation, content review, and editing, with OpenAI APIs automating job description generation and cutting manual drafting effort by ~60%.",
        tools: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "TanStack Query",
          "OpenAI API",
          "Socket.io",
          "Supabase",
          "Vercel",
          "Playwright",
          "Contentful",
          "Vercel",
        ],
        link: "https://jobbrella.com/en",
      },
      {
        name: "Energy Management Platform",
        description:
          "Consumer-facing meter onboarding, meter management, guest access, and energy analytics features, plus an internal admin panel built with React.js, Redux Toolkit, TypeScript, and Tailwind CSS.",
        tools: [
          "React.js",
          "React Native",
          "Expo",
          "TypeScript",
          "Redux Toolkit",
          "Axios",
          "Android",
          "iOS",
        ],
        link: "https://play.google.com/store/apps/details?id=no.motkraft.mobile&hl=en_IN",
      },
    ],
  },
  {
    role: "Software Developer Trainee",
    org: "HeapTrace Technology Pvt. Ltd",
    period: "Dec 2022 — Mar 2023",
    location: "Pune, India",
    points: [
      "Developed features for internal React.js dashboards and consumer-facing cross-platform React Native applications",
      "Integrated REST APIs, resolved UI and functional issues, and improved application usability",
      "Collaborated with senior developers in Agile teams",
    ],
    projects: [
      {
        name: "AI Clinical Assistant Chatbot",
        description:
          "Responsive UI for an AI-powered clinical assistant with context-aware conversational experiences, secure Clerk authentication, and Supabase-managed data.",
        tools: [
          "Svelte",
          "SvelteKit",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "OpenAI API",
          "Vercel AI SDK",
          "Vercel",
        ],
        link: "https://www.aevai-health.com/home/",
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Postgraduate Diploma in Mobile Computing",
    school: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Pune, India",
    coursework:
      "Java, Spring Boot, SQL, MERN Stack, Kotlin, Swift, Android, iOS",
  },
  {
    degree: "B.E. in Computer Science & Engineering",
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)",
    period: "Jul 2013 — Jun 2017",
    location: "Bhopal, India",
    coursework: "DSA, OOP, DBMS, Operating Systems, Computer Networks",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    icon: "simple-icons:hackerrank",
    link: "https://www.hackerrank.com/certificates/iframe/d6155dab369f",
    date: "",
    skills: "",
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
