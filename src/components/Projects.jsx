import { Icon } from "@iconify/react";
import { SectionHeading } from "../ui/SectionHeading";
import { PROJECTS, toolIcon } from "../data/data";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import { LinkButton } from "../ui/LinkButton";

export default function Projects() {
  return (
    <section>
      <SectionHeading id="projects" icon="octicon:pin-16">
        Projects
      </SectionHeading>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.name} className="flex flex-col p-4 sm:p-5">
            <div className="mb-1.5 flex items-center gap-2">
              <Icon
                icon="octicon:repo-16"
                width={16}
                height={16}
                className="text-fg-muted"
              />
              <span className="font-semibold">{p.name}</span>
            </div>

            {p.status && (
              <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                <Icon icon="octicon:dot-fill-16" width={10} height={10} />
                {p.status}
              </span>
            )}

            <p className="mb-3.5 text-sm leading-relaxed text-fg-muted">
              {p.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {p.tools.map((tool) => (
                <Chip key={tool} icon={toolIcon(tool)} small>
                  {tool}
                </Chip>
              ))}
            </div>

            <div className="mt-auto flex gap-2.5">
              {p.liveUrl && (
                <LinkButton
                  href={p.liveUrl}
                  icon="octicon:link-external-16"
                  className="flex-1"
                >
                  Live
                </LinkButton>
              )}
              <LinkButton
                href={p.githubUrl}
                icon="octicon:mark-github-16"
                className="flex-1"
              >
                Code
              </LinkButton>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
