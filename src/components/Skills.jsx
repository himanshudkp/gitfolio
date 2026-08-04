import { Icon } from "@iconify/react";
import { SectionHeading } from "../ui/SectionHeading";
import { SKILLS, toolIcon } from "../data/data";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

export default function Skills() {
  return (
    <section>
      <SectionHeading id="skills" icon="octicon:codescan-16">
        Skills
      </SectionHeading>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {SKILLS.map((group, gi) => (
          <Card key={group.category} delay={gi * 70} className="p-4 sm:p-5">
            <div className="mb-3.5 flex items-center gap-2">
              <Icon
                icon={group.icon}
                width={16}
                height={16}
                className="text-fg-muted"
              />
              <h3 className="m-0 text-xs font-semibold uppercase tracking-wide text-fg-muted">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Chip key={skill.name} icon={toolIcon(skill.name)}>
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
