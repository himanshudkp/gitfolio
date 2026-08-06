import { Card } from "../ui/Card";
import { LinkButton } from "../ui/LinkButton";
import { GITHUB } from "../data/data";

export const Contribution = () => {
  const profileUrl = `https://github.com/${GITHUB.username}`;

  return (
    <Card className="mb-6 overflow-hidden p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-fg-muted">
          GitHub Activity
        </span>
        <LinkButton href={profileUrl} icon="octicon:mark-github-16">
          View profile
        </LinkButton>
      </div>

      <div className="overflow-x-auto rounded-md border border-border-muted bg-canvas-inset p-3">
        {/* Renders a real, live contribution graph for any public GitHub username */}
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
