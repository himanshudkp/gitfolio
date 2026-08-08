import { Icon } from "@iconify/react";

export function Chip({ icon, small = false, className = "", children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-canvas-subtle font-medium text-fg shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow ${
        small ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
      } ${className}`}
    >
      {icon && (
        <Icon icon={icon} width={small ? 13 : 15} height={small ? 13 : 15} />
      )}
      {children}
    </span>
  );
}
