import { Icon } from "@iconify/react";
import { VARIANTS } from "../data";

export function LinkButton({
  href,
  variant = "outline",
  icon,
  children,
  className = "",
  ...props
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold no-underline transition-all duration-150 active:scale-[0.97] ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon && <Icon icon={icon} width={16} height={16} />}
      {children}
    </a>
  );
}
