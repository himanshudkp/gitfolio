export function Card({ children, className = "", delay = 0 }) {
  return (
    <div
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`rounded-xl border border-border bg-canvas transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
