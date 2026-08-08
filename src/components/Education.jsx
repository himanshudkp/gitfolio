import { Icon } from "@iconify/react";
import { EDUCATION } from "../data";
import { Card, SectionHeading } from "../ui";
import { Certification } from "./Certification";

export function Education() {
  return (
    <section>
      <SectionHeading id="education" icon="octicon:mortar-board-16">
        Education &amp; Certifications
      </SectionHeading>

      <div className="mb-10 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fg-muted">
            <Icon icon="octicon:mortar-board-16" width={13} height={13} />
            Education
          </h3>
          <div className="flex flex-col gap-3">
            {EDUCATION.map((ed, i) => (
              <Card
                key={ed.school}
                delay={i * 70}
                className="group flex gap-3 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-105">
                  <Icon icon="octicon:mortar-board-16" width={18} height={18} />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h4 className="m-0 text-sm font-semibold">{ed.degree}</h4>
                  </div>
                  <div className="mb-1 mt-0.5 text-sm font-medium text-accent">
                    {ed.school}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Certification />
      </div>
    </section>
  );
}
