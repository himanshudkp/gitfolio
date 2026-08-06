import { Icon } from "@iconify/react";
import { EXPERIENCE, toolIcon } from "../data/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Chip } from "../ui/Chip";

export default function Experience() {
  return (
    <section>
      <SectionHeading id="experience" icon="octicon:briefcase-16">
        Experience
      </SectionHeading>

      <ol className="relative m-0 mb-10 flex flex-col gap-7 border-l border-border pl-7">
        {EXPERIENCE.map((job, i) => (
          <li
            key={job.org}
            className="relative"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="absolute -left-7.75 top-1 h-3 w-3 rounded-full border-2 border-accent bg-canvas" />

            <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <h3 className="m-0 text-[15px] font-semibold">{job.role}</h3>
              <span className="text-sm font-medium text-accent">
                @ {job.org}
              </span>
            </div>
            <div className="mb-2 text-xs text-fg-muted">
              {job.period} · {job.location}
            </div>
            <ul className="m-0 flex list-disc flex-col gap-1 pl-4.5 text-sm leading-relaxed text-fg-muted">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            {job.projects?.length > 0 && (
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {job.projects.map((proj) => (
                  <div
                    key={proj.name}
                    className={`flex flex-col rounded-md border border-border-muted bg-canvas-subtle p-3 ${
                      job.projects.length === 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <Icon
                          icon="octicon:repo-16"
                          width={14}
                          height={14}
                          className="text-fg-muted"
                        />
                        <span className="text-sm font-semibold">
                          {proj.name}
                        </span>
                      </div>

                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex shrink-0 items-center gap-1 rounded-md border border-border bg-canvas-subtle px-2 py-1 text-xs font-medium text-fg-muted transition hover:border-primary hover:text-accent hover:shadow-sm"
                        >
                          <Icon
                            icon="octicon:link-external-16"
                            width={12}
                            height={12}
                          />
                          View
                        </a>
                      )}
                    </div>

                    {proj.description && (
                      <p className="m-0 mb-2 text-sm leading-relaxed text-fg-muted">
                        {proj.description}
                      </p>
                    )}
                    {proj.tools?.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {proj.tools.map((tool) => (
                          <Chip key={tool} icon={toolIcon(tool)} small>
                            {tool}
                          </Chip>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
