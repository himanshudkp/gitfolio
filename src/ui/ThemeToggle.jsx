import { Icon } from "@iconify/react";

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      title="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-md border border-border bg-canvas-subtle text-fg transition-colors hover:bg-border-muted"
    >
      <Icon
        icon={isDark ? "octicon:sun-16" : "octicon:moon-16"}
        width={16}
        height={16}
      />
    </button>
  );
}
