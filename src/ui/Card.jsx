export function Card({ children, className = "" }) {
  return (
    <div
      className={` rounded-lg border border-border bg-canvas transition-all duration-200 hover:-translate-y-1 hover:border-fg-muted hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
