import { Icon } from "@iconify/react";
import { PROFILE, SOCIAL_ICONS, STACK_SUMMARY, toolIcon } from "../data";
import resume from "../assets/resume.pdf";
import { Chip, LinkButton, SectionHeading } from "../ui";

export function About() {
  const socialEntries = Object.entries(PROFILE.social).filter(([, url]) => url);

  return (
    <section>
      <SectionHeading id="about" icon="octicon:home-16">
        About
      </SectionHeading>

      <article className="relative mb-10 overflow-hidden rounded-2xl border border-border-muted bg-canvas-subtle p-5 shadow-sm sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            Open to work
          </span>

          <h2 className="m-0 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Hi, I'm {PROFILE.name.split(" ")[0]} 👋
          </h2>

          <p className="mb-6 mt-3 max-w-2xl leading-relaxed text-fg-muted">
            {PROFILE.longBio}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {STACK_SUMMARY.map((tool) => (
              <Chip key={tool} icon={toolIcon(tool)}>
                {tool}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-muted pt-5">
            {socialEntries.length > 0 && (
              <div className="flex items-center gap-2.5">
                {socialEntries.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    title={key}
                    aria-label={key}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
                  >
                    <Icon icon={SOCIAL_ICONS[key]} width={17} height={17} />
                  </a>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
              <LinkButton
                href="#contact"
                icon="octicon:question-bubble-16"
                className="shadow-md shadow-accent/20 transition-transform hover:scale-[1.02]"
              >
                Send a message
              </LinkButton>

              <LinkButton
                href={resume}
                variant="outline"
                icon="octicon:download-16"
                download="Himanshu_Pandey_Resume.pdf"
              >
                Download Résumé
              </LinkButton>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
