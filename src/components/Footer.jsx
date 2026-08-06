import { PROFILE } from "../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-6 text-xs text-fg-muted sm:px-6 lg:px-8">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>

        <span className="ml-auto">Built with React &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
