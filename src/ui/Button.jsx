import { Icon } from "@iconify/react";
import { VARIANTS } from "../data/data";

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-150 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon && <Icon icon={icon} width={16} height={16} />}
      {children}
    </button>
  );
}
