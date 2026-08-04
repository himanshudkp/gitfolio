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
  // Frontend
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

  // State & Data
  "Redux Toolkit": "logos:redux",
  "TanStack Query": "logos:react-query-icon",
  Zustand: "simple-icons:zustand",
  "Context API": "logos:react",

  // Mobile
  Expo: "simple-icons:expo",

  // APIs & Backend
  "REST APIs": "octicon:plug-16",
  Axios: "simple-icons:axios",
  "Socket.IO": "logos:socket-io",
  Supabase: "logos:supabase-icon",
  Prisma: "logos:prisma",
  JWT: "simple-icons:jsonwebtokens",
  Clerk: "simple-icons:clerk",

  // AI & Development
  "OpenAI API": "simple-icons:openai",
  "Vercel AI SDK": "simple-icons:vercel",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  "GitHub Actions": "logos:github-actions",
  Vercel: "logos:vercel-icon",
  Postman: "logos:postman",

  // Testing & Performance
  Vitest: "logos:vitest",
  Jest: "logos:jest",
  Lighthouse: "logos:lighthouse",
  Sentry: "logos:sentry-icon",
  "Code Splitting": "octicon:package-16",
  "Lazy Loading": "octicon:clock-16",
  "Performance Optimization": "octicon:zap-16",

  // Existing aliases / compatibility
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
