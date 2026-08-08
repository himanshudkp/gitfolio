import { Icon } from "@iconify/react";
import { OPEN_SOURCE_CONTRIBUTIONS } from "../data";
import { Card, EmptyState } from "../ui";

export const OpenSource = () => {
  const hasContributions = OPEN_SOURCE_CONTRIBUTIONS.length > 0;

  return (
    <div className="mb-10">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fg-muted">
        <Icon icon="octicon:git-pull-request-16" width={13} height={13} />
        Open Source Contributions
      </h3>

      {!hasContributions && (
        <EmptyState icon="octicon:git-pull-request-16">
          No contributions yet. Check back soon for issues and PRs.
        </EmptyState>
      )}

      {hasContributions && (
        <div className="flex flex-col gap-3">
          {OPEN_SOURCE_CONTRIBUTIONS.map((c, i) => (
            <Card
              key={c.url}
              delay={i * 60}
              className="group flex items-center gap-3 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-105">
                <Icon
                  icon={
                    c.type === "issue"
                      ? "octicon:issue-opened-16"
                      : "octicon:git-pull-request-16"
                  }
                  width={17}
                  height={17}
                />
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="m-0 font-semibold text-fg">{c.repo}</h4>
                <p className="m-0 truncate text-sm text-fg-muted">
                  {c.description}
                </p>
              </div>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-md border border-border bg-canvas-subtle px-2 py-1 text-xs font-medium text-fg-muted transition hover:border-accent hover:text-accent hover:shadow-sm"
              >
                <Icon icon="octicon:mark-github-16" width={12} height={12} />
                GitHub
              </a>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
