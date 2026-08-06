import { Icon } from "@iconify/react";
import { CERTIFICATIONS } from "../data/data";
import { Card } from "../ui/Card";

export const Certification = () => {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-fg-muted">
        Courses &amp; certifications
      </h3>
      <div className="flex flex-col gap-3">
        {CERTIFICATIONS.map((cert, i) => (
          <Card
            key={cert.name}
            delay={i * 70}
            className="flex items-center justify-between gap-3 p-4 transition hover:border-primary hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-canvas-subtle">
                <Icon
                  icon={cert.icon || "octicon:verified-16"}
                  width={17}
                  height={17}
                  className="text-fg-muted"
                />
              </span>

              <div>
                <h4 className="m-0 text-sm font-semibold leading-snug">
                  {cert.name}
                </h4>

                <div className="mt-1 text-xs text-fg-muted">
                  {cert.issuer} · {cert.year}
                </div>
              </div>
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-md border border-border bg-canvas-subtle px-2 py-1 text-xs font-medium text-fg-muted transition hover:border-primary hover:text-accent hover:shadow-sm"
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
