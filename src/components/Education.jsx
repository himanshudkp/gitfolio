import { Icon } from "@iconify/react";
import { SectionHeading } from "../ui/SectionHeading";
import { EDUCATION } from "../data/data";
import { Card } from "../ui/Card";
import { Certification } from "./Certification";

export default function Education() {
  return (
    <section>
      <SectionHeading id="education" icon="octicon:mortar-board-16">
        Education &amp; Certifications
      </SectionHeading>

      <div className="mb-10 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-fg-muted">
            Education
          </h3>
          <div className="flex flex-col gap-3">
            {EDUCATION.map((ed, i) => (
              <Card key={ed.school} delay={i * 70} className="flex gap-3 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-canvas-subtle">
                  <Icon
                    icon="octicon:mortar-board-16"
                    width={17}
                    height={17}
                    className="text-fg-muted"
                  />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h4 className="m-0 text-sm font-semibold">{ed.degree}</h4>
                    <span className="text-xs text-fg-muted">{ed.period}</span>
                  </div>
                  <div className="mb-1 text-sm font-medium text-accent">
                    {ed.school}
                  </div>
                  {ed.detail && (
                    <p className="m-0 text-sm leading-relaxed text-fg-muted">
                      {ed.detail}
                    </p>
                  )}
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
