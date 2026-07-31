import { useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_LINKS, PROFILE } from "../data/data";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header({ isDark, toggleTheme, active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="Home"
          className="flex shrink-0 items-center gap-2.5 text-fg no-underline"
        >
          <span className="grid h-8.5 w-8.5 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-canvas-subtle">
            <img
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              className="h-full w-full object-cover"
            />
          </span>

          <span className="hidden font-semibold leading-tight sm:block">
            {PROFILE.name}
            <span className="font-normal text-fg-muted"> / portfolio</span>
          </span>
        </a>

        {PROFILE.openToWork && (
          <span className="hidden items-center gap-1.5 rounded-full border border-border bg-canvas-subtle px-2.5 py-1 text-xs font-medium text-fg-muted sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            Open to work
          </span>
        )}

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-5 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-semibold no-underline transition-colors ${
                active === link.id ? "text-fg" : "text-fg-muted hover:text-fg"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-canvas-subtle text-fg transition-colors hover:bg-border-muted"
          >
            <Icon
              icon={menuOpen ? "octicon:x-16" : "octicon:three-bars-16"}
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-canvas-subtle transition-[max-height] duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`border-b border-border-muted py-3 text-sm font-semibold no-underline ${
                active === link.id ? "text-accent" : "text-fg"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
