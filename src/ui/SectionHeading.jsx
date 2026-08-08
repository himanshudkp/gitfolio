import { Icon } from "@iconify/react";

export function SectionHeading({ id, icon, children }) {
  return (
    <h2
      id={id}
      className="group mb-5 flex scroll-mt-24 items-center gap-2.5 text-base font-semibold"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon icon={icon} width={15} height={15} />
      </span>
      {children}
      <span className="ml-1 h-px flex-1 bg-linear-to-r from-border to-transparent" />
    </h2>
  );
}
