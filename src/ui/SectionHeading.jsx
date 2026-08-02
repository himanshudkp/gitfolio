import { Icon } from "@iconify/react";

export function SectionHeading({ id, icon, children }) {
  return (
    <h2
      id={id}
      className="reveal mb-4 flex scroll-mt-24 items-center gap-2 text-base font-semibold"
    >
      <Icon icon={icon} width={16} height={16} className="text-fg-muted" />
      {children}
    </h2>
  );
}
