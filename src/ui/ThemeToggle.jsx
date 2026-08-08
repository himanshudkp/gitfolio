import { Icon } from "@iconify/react";

export function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      title="Toggle theme"
      className="group grid h-9 w-9 place-items-center rounded-lg border border-border bg-canvas-subtle text-fg transition-all duration-150 hover:border-accent hover:text-accent active:scale-95"
    >
      <Icon
        icon={isDark ? "octicon:sun-16" : "octicon:moon-16"}
        width={16}
        height={16}
        className="transition-transform duration-300 group-hover:rotate-45"
      />
    </button>
  );
}
