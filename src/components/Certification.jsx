import { Icon } from "@iconify/react";
import { CERTIFICATIONS } from "../data";
import { Card } from "../ui";

export const Certification = () => {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fg-muted">
        <Icon icon="octicon:verified-16" width={13} height={13} />
        Courses &amp; certifications
      </h3>
      <div className="flex flex-col gap-3">
        {CERTIFICATIONS.map((cert, i) => (
          <Card
            key={cert.name}
            delay={i * 70}
            className="group flex items-center justify-between gap-3 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-105">
                <Icon
                  icon={cert.icon || "octicon:verified-16"}
                  width={18}
                  height={18}
                />
              </span>

              <div>
                <h4 className="m-0 text-sm font-semibold leading-snug">
                  {cert.name}
                </h4>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-fg-muted">
                  {cert.issuer}
                  {cert.date && (
                    <>
                      <span className="text-border">·</span>
                      {cert.date}
                    </>
                  )}
                </div>

                {cert.skills && (
                  <div className="mt-1 text-xs text-fg-muted">
                    <span className="font-medium text-fg">Skills: </span>
                    {cert.skills}
                  </div>
                )}
              </div>
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-md border border-border bg-canvas-subtle px-2 py-1 text-xs font-medium text-fg-muted transition hover:border-accent hover:text-accent hover:shadow-sm"
              >
                <Icon icon="octicon:link-external-16" width={12} height={12} />
                View Credentials
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
