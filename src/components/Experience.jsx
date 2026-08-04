import { EXPERIENCE } from "../data/data";
import { SectionHeading } from "../ui/SectionHeading";

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
          </li>
        ))}
      </ol>
    </section>
  );
}
