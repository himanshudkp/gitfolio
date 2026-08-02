import { Icon } from "@iconify/react";
import { PROFILE, SOCIAL_ICONS } from "../data/data";
import { LinkButton } from "../ui/LinkButton";

export default function Sidebar() {
  const socialEntries = Object.entries(PROFILE.social).filter(([, url]) => url);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <img
        src={PROFILE.avatarUrl}
        alt={PROFILE.name}
        className="mb-4 w-28 rounded-full border border-border sm:w-40 lg:w-full lg:max-w-60"
      />
      <h1 className="m-0 text-2xl font-semibold leading-tight">
        {PROFILE.name}
      </h1>
      <p className="mb-1 mt-0.5 text-lg font-light text-fg-muted">
        {PROFILE.title}
      </p>
      <p className="mb-4 leading-relaxed text-fg-muted">{PROFILE.bio}</p>

      <LinkButton
        href={PROFILE.resumeUrl}
        variant="primary"
        icon="octicon:file-16"
        className="w-full"
      >
        View résumé
      </LinkButton>

      <ul className="my-4 flex list-none flex-col gap-2 p-0 text-sm text-fg-muted">
        <li className="flex items-center gap-2">
          <Icon icon="octicon:location-16" width={16} height={16} />
          {PROFILE.location}
        </li>
        <li className="flex items-center gap-2">
          <Icon icon="octicon:mail-16" width={16} height={16} />
          <a
            href={`mailto:${PROFILE.email}`}
            className="break-all no-underline hover:text-accent"
          >
            {PROFILE.email}
          </a>
        </li>
      </ul>

      {socialEntries.length > 0 && (
        <div className="flex gap-4 border-t border-border pt-4">
          {socialEntries.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              title={key}
              aria-label={key}
              className="text-fg-muted no-underline transition-all duration-150 hover:-translate-y-0.5 hover:text-accent"
            >
              <Icon icon={SOCIAL_ICONS[key]} width={20} height={20} />
            </a>
          ))}
        </div>
      )}
    </aside>
  );
}
