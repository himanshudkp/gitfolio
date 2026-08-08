import { useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_LINKS, PROFILE } from "../data";
import { ThemeToggle } from "../ui";

export function Header({ isDark, toggleTheme, active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/85 backdrop-blur-md">
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="Home"
          className="flex shrink-0 items-center gap-2.5 text-fg no-underline"
        >
          <span className="rounded-lg bg-linear-to-br from-accent via-accent/60 to-transparent p-0.5 transition-transform duration-200 hover:scale-105">
            <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-[7px] border border-canvas bg-canvas-subtle">
              <img
                src={PROFILE.avatarUrl}
                alt={PROFILE.name}
                className="h-full w-full object-cover"
              />
            </span>
          </span>

          <span className="hidden font-semibold leading-tight sm:block">
            {PROFILE.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-lg px-3 py-2 text-sm font-semibold no-underline transition-colors ${
                active === link.id
                  ? "text-accent"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />
              )}
            </a>
          ))}
          <div className="ml-2 pl-2">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-canvas-subtle text-fg transition-colors hover:border-accent hover:text-accent"
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
              className={`flex items-center gap-2 border-b border-border-muted py-3 text-sm font-semibold no-underline ${
                active === link.id ? "text-accent" : "text-fg"
              }`}
            >
              {active === link.id && (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              )}
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
