import "./App.css";
import { TABS } from "./data/data";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { useScrollSpy } from "./hooks/useScrollSpy";

export default function App() {
  const [isDark, toggleTheme] = useTheme();
  const active = useScrollSpy(TABS);

  return (
    <div className="min-h-screen bg-canvas text-[14px] text-fg">
      <Header isDark={isDark} toggleTheme={toggleTheme} active={active} />
    </div>
  );
}
