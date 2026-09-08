import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/clase", label: "Presentar" },
  { to: "/guia", label: "Guía" },
  { to: "/atlas", label: "Atlas" },
  { to: "/canva", label: "Canva" },
] as const;

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="no-print sticky top-0 z-30 border-b border-line/40 bg-theatre/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-baseline gap-2 text-paper">
          <span className="font-display text-lg tracking-tight">Caja torácica</span>
          <span className="hidden text-xs text-paper/50 sm:inline">Equipo 2</span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                current === l.to
                  ? "bg-paper text-ink"
                  : "text-paper/70 hover:bg-paper/10 hover:text-paper",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
