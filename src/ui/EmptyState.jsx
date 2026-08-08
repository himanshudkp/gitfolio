import { Icon } from "@iconify/react";

export function EmptyState({ icon, children }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-canvas-subtle/40 px-4 py-10 text-center text-sm leading-relaxed text-fg-muted">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon icon={icon} width={20} height={20} />
      </span>
      <p className="m-0 max-w-xs">{children}</p>
    </div>
  );
}
