import { Icon } from "@iconify/react";
import { SectionHeading } from "../ui/SectionHeading";
import { Chip } from "../ui/Chip";
import { LinkButton } from "../ui/LinkButton";
import { PROFILE, SOCIAL_ICONS, STACK_SUMMARY, toolIcon } from "../data/data";
import resume from "../assets/resume.pdf";

export default function About() {
  const socialEntries = Object.entries(PROFILE.social).filter(([, url]) => url);

  return (
    <section>
      <SectionHeading id="about" icon="octicon:home-16">
        About
      </SectionHeading>

      <article className="mb-10 flex flex-col gap-4 rounded-lg border border-border-muted bg-canvas-subtle p-4 sm:p-5">
        <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
          Hi, I'm {PROFILE.name.split(" ")[0]} 👋
        </h2>
        <p className="mb-5 leading-relaxed text-fg-muted">{PROFILE.longBio}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {STACK_SUMMARY.map((tool) => (
            <Chip key={tool} icon={toolIcon(tool)}>
              {tool}
            </Chip>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-muted pt-4">
          {socialEntries.length > 0 && (
            <div className="flex items-center gap-4">
              {socialEntries.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={key}
                  aria-label={key}
                  className="text-fg-muted no-underline transition-all duration-150 hover:-translate-y-0.5 hover:text-accent"
                >
                  <Icon icon={SOCIAL_ICONS[key]} width={20} height={20} />
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
            <LinkButton href="#contact" icon="octicon:question-bubble-16">
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
      </article>
    </section>
  );
}
