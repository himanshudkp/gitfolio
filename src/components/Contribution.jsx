import { Icon } from "@iconify/react";
import { GITHUB } from "../data";
import { Card, LinkButton } from "../ui";

export const Contribution = () => {
  const profileUrl = `https://github.com/${GITHUB.username}`;

  return (
    <Card className="group relative mb-6 overflow-hidden p-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md sm:p-5">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />

      <div className="relative mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon icon="octicon:mark-github-16" width={16} height={16} />
          </span>
          <span className="text-sm font-semibold text-fg">GitHub Activity</span>
        </div>
        <LinkButton
          href={profileUrl}
          icon="octicon:mark-github-16"
          variant="outline"
        >
          View profile
        </LinkButton>
      </div>

      <div className="relative overflow-x-auto rounded-lg border border-border-muted bg-canvas-inset p-3">
        <img
          src={`https://ghchart.rshah.org/${GITHUB.accentHex}/${GITHUB.username}`}
          alt={`${GITHUB.username}'s GitHub contribution graph`}
          className="min-w-160"
          loading="lazy"
        />
      </div>
    </Card>
  );
};
