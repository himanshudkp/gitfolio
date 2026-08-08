import { Icon } from "@iconify/react";
import { SKILLS, toolIcon } from "../data";
import { Card, Chip, SectionHeading } from "../ui";

export function Skills() {
  return (
    <section>
      <SectionHeading id="skills" icon="octicon:codescan-16">
        Skills
      </SectionHeading>

      <div className="mb-10 grid gap-5 sm:grid-cols-2">
        {SKILLS.map((group, gi) => (
          <Card
            key={group.category}
            delay={gi * 70}
            className="group relative overflow-hidden p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-5"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-200 group-hover:opacity-100" />

            <div className="relative mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon icon={group.icon} width={17} height={17} />
              </span>
              <h3 className="m-0 text-xs font-semibold uppercase tracking-wide text-fg-muted">
                {group.category}
              </h3>
              <span className="ml-auto rounded-full bg-canvas-inset px-2 py-0.5 text-[11px] font-medium text-fg-muted">
                {group.items.length}
              </span>
            </div>

            <div className="relative flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Chip
                  key={skill.name}
                  icon={toolIcon(skill.name)}
                  className="transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  {skill.name}
                </Chip>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
