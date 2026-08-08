import { Icon } from "@iconify/react";
import { EXPERIENCE, toolIcon } from "../data";
import { Chip, SectionHeading } from "../ui";

export function Experience() {
  return (
    <section>
      <SectionHeading id="experience" icon="octicon:briefcase-16">
        Experience
      </SectionHeading>

      <ol className="relative m-0 mb-10 flex flex-col gap-8 border-l-2 border-border pl-7">
        {EXPERIENCE.map((job, i) => {
          const isCurrent = i === 0;
          return (
            <li
              key={job.org}
              className="relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute -left-8.25 top-1 flex h-3.5 w-3.5 items-center justify-center">
                {isCurrent && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                )}
                <span
                  className={`relative h-3.5 w-3.5 rounded-full border-2 border-canvas ${
                    isCurrent
                      ? "bg-accent shadow-md shadow-accent/40"
                      : "bg-fg-muted"
                  }`}
                />
              </span>

              <div className="rounded-xl border border-border-muted bg-canvas-subtle p-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md sm:p-5">
                <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="m-0 text-[15px] font-semibold">{job.role}</h3>
                  <span className="text-sm font-medium text-accent">
                    @ {job.org}
                  </span>
                  {isCurrent && (
                    <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                      Current
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-center gap-1.5 text-xs text-fg-muted">
                  <Icon icon="octicon:calendar-16" width={12} height={12} />
                  {job.period}
                  <span className="text-border">·</span>
                  <Icon icon="octicon:location-16" width={12} height={12} />
                  {job.location}
                </div>
                <ul className="m-0 flex list-disc flex-col gap-1 pl-4.5 text-sm leading-relaxed text-fg-muted">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                {job.projects?.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {job.projects.map((proj) => (
                      <div
                        key={proj.name}
                        className={`flex flex-col rounded-lg border border-border-muted bg-canvas p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm ${
                          job.projects.length === 1 ? "sm:col-span-2" : ""
                        }`}
                      >
                        <div className="mb-1 flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                              <Icon
                                icon="octicon:repo-16"
                                width={12}
                                height={12}
                              />
                            </span>
                            <span className="text-sm font-semibold">
                              {proj.name}
                            </span>
                          </div>

                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex shrink-0 items-center gap-1 rounded-md border border-border bg-canvas-subtle px-2 py-1 text-xs font-medium text-fg-muted transition hover:border-accent hover:text-accent hover:shadow-sm"
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
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
