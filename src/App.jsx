import "./App.css";
import { TABS } from "./data/data";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { useScrollSpy } from "./hooks/useScrollSpy";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [isDark, toggleTheme] = useTheme();
  const active = useScrollSpy(TABS);

  return (
    <div className="min-h-screen bg-canvas text-[14px] text-fg">
      <Header isDark={isDark} toggleTheme={toggleTheme} active={active} />
      <main
        id="top"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <Sidebar />
          <div className="min-w-0">
            <About />
            <Projects />
            <Skills />
          </div>
        </div>
      </main>
    </div>
  );
}
