import "./App.css";
import {
  About,
  // Activity,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Projects,
  Sidebar,
  Skills,
} from "./components";
import { TABS } from "./data";
import { useScrollSpy, useTheme } from "./hooks";

export default function App() {
  const [isDark, toggleTheme] = useTheme();
  const active = useScrollSpy(TABS);

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-[14px] text-fg">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-240 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <Header isDark={isDark} toggleTheme={toggleTheme} active={active} />

      <main
        id="top"
        className="mx-auto w-full max-w-7xl flex-1 scroll-mt-24 px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Sidebar />
          </aside>

          <div className="min-w-0 space-y-16 sm:space-y-20">
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            {/* <Activity /> */}
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
