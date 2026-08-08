import { Icon } from "@iconify/react";
import { PROFILE, SOCIAL_ICONS } from "../data";
import { LinkButton } from "../ui";

export function Sidebar() {
  const socialEntries = Object.entries(PROFILE.social).filter(([, url]) => url);

  return (
    <aside>
      <div className="rounded-2xl border border-border bg-canvas-subtle/60 p-6 shadow-sm backdrop-blur-sm">
        <div className="relative mb-5 w-fit lg:mx-auto">
          <div className="rounded-full bg-linear-to-br from-accent via-accent/60 to-transparent p-0.5">
            <img
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              className="w-20 rounded-full border-2 border-canvas sm:w-24 lg:w-full lg:max-w-32"
            />
          </div>
        </div>

        <div className="lg:text-center">
          <h1 className="m-0 text-2xl font-bold leading-tight tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mb-3 mt-1 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            {PROFILE.title}
          </p>
          <p className="mb-5 leading-relaxed text-fg-muted">{PROFILE.bio}</p>
        </div>

        <LinkButton
          href={PROFILE.resumeUrl}
          variant="primary"
          icon="octicon:file-16"
          className="w-full justify-center shadow-md shadow-accent/20 transition-transform hover:scale-[1.02]"
        >
          View résumé
        </LinkButton>

        <ul className="my-5 flex list-none flex-col gap-3 p-0 text-sm text-fg-muted">
          <li className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-canvas-inset">
              <Icon icon="octicon:location-16" width={15} height={15} />
            </span>
            {PROFILE.location}
          </li>
          <li className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-canvas-inset">
              <Icon icon="octicon:mail-16" width={15} height={15} />
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="break-all no-underline transition-colors hover:text-accent"
            >
              {PROFILE.email}
            </a>
          </li>
        </ul>

        {socialEntries.length > 0 && (
          <div className="flex flex-wrap gap-2.5 border-t border-border pt-5">
            {socialEntries.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                title={key}
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
              >
                <Icon icon={SOCIAL_ICONS[key]} width={17} height={17} />
              </a>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
