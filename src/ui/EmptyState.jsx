import { Icon } from "@iconify/react";

export function EmptyState({ icon, children }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border px-4 py-8 text-center text-sm leading-relaxed text-fg-muted">
      <Icon icon={icon} width={20} height={20} />
      <p className="m-0 max-w-xs">{children}</p>
    </div>
  );
}
