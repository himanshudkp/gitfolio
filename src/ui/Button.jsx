import { Icon } from "@iconify/react";
import { VARIANTS } from "../data";

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-150 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon && <Icon icon={icon} width={16} height={16} />}
      {children}
    </button>
  );
}
