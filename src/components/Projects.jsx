import { Icon } from "@iconify/react";
import { PROJECTS, toolIcon } from "../data";
import { Card, Chip, LinkButton, SectionHeading } from "../ui";

export function Projects() {
  return (
    <section>
      <SectionHeading id="projects" icon="octicon:pin-16">
        Projects
      </SectionHeading>

      <div className="mb-10 grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Card
            key={p.name}
            delay={i * 60}
            className="group relative flex flex-col overflow-hidden p-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-1 w-full bg-linear-to-r from-accent via-accent/60 to-transparent opacity-70 transition-opacity duration-200 group-hover:opacity-100" />

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon icon="octicon:repo-16" width={16} height={16} />
                  </span>
                  <span className="font-semibold text-fg transition-colors group-hover:text-accent">
                    {p.name}
                  </span>
                </div>

                {p.status && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    {p.status}
                  </span>
                )}
              </div>

              <p className="mb-4 text-sm leading-relaxed text-fg-muted">
                {p.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.tools.map((tool) => (
                  <Chip key={tool} icon={toolIcon(tool)} small>
                    {tool}
                  </Chip>
                ))}
              </div>

              <div className="mt-auto flex gap-2.5 border-t border-border-muted pt-4">
                {p.liveUrl && (
                  <LinkButton
                    href={p.liveUrl}
                    variant="primary"
                    icon="octicon:link-external-16"
                    className="flex-1 justify-center"
                  >
                    Live
                  </LinkButton>
                )}
                <LinkButton
                  href={p.githubUrl}
                  variant="outline"
                  icon="octicon:mark-github-16"
                  className="flex-1 justify-center"
                >
                  Code
                </LinkButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
