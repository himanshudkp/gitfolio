import { Icon } from "@iconify/react";
import { PROFILE, SOCIAL_ICONS } from "../data";

export function Footer() {
  const socialEntries = Object.entries(PROFILE.social).filter(([, url]) => url);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-muted">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <span className="hidden text-border sm:inline">·</span>
          <span className="flex items-center gap-1">
            Built with React &amp; Tailwind CSS
            <Icon
              icon="octicon:heart-fill-16"
              width={11}
              height={11}
              className="text-accent"
            />
          </span>
        </div>

        <div className="flex items-center gap-3 sm:ml-auto">
          {socialEntries.length > 0 && (
            <div className="flex items-center gap-2">
              {socialEntries.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={key}
                  aria-label={key}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  <Icon icon={SOCIAL_ICONS[key]} width={15} height={15} />
                </a>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
          >
            <Icon icon="octicon:arrow-up-16" width={15} height={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
