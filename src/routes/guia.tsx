import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SECTIONS, slides } from "@/data/slides";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/guia")({ component: GuiaPage });

function GuiaPage() {
  const [q, setQ] = useState("");
  const [onlyCore, setOnlyCore] = useState(false);
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return slides.filter((s) => {
      if (onlyCore && !s.core) return false;
      if (!needle) return true;
      const blob = [s.title, s.kicker, s.chapter, ...s.bullets, ...s.script]
        .join(" ")
        .toLowerCase();
      return blob.includes(needle);
    });
  }, [q, onlyCore]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader current="/guia" />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Lo que dices en voz alta
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Guía del maestro
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          No es un resumen. Es el habla de la clase, diapositiva por
          diapositiva. En pantalla dejas las viñetas; aquí está el resto.
        </p>
        <div className="no-print mt-6 flex flex-wrap items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar en el guion"
            className="h-11 min-w-56 flex-1 rounded-md border border-line bg-surface px-3 text-ink outline-none ring-accent focus:ring-2"
          />
          <Button
            variant={onlyCore ? "default" : "outline"}
            onClick={() => setOnlyCore((v) => !v)}
          >
            {onlyCore ? "Núcleo 60 min" : "Todas"}
          </Button>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="size-4" />
            Imprimir
          </Button>
        </div>

        <nav className="no-print mt-8 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#sec-${s.id}`}
              className="rounded-md bg-surface px-3 py-2 text-sm text-ink hover:bg-surface-2"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {SECTIONS.map((sec) => {
          const group = filtered.filter((s) => s.section === sec.id);
          if (!group.length) return null;
          return (
            <section key={sec.id} id={`sec-${sec.id}`} className="mt-12 print-guide">
              <h2 className="font-display text-2xl">{sec.label}</h2>
              <div className="mt-6 space-y-10">
                {group.map((s) => {
                  const n = slides.findIndex((x) => x.id === s.id) + 1;
                  return (
                    <article
                      key={s.id}
                      className="rounded-lg border border-line bg-surface p-5 sm:p-6"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-xs font-medium uppercase tracking-widest text-muted">
                          Diapositiva {n} · {s.chapter} · {s.minutes} min
                          {!s.core ? " · extra" : ""}
                        </p>
                        <Link
                          to="/clase"
                          search={{ n, modo: s.core ? "60" : "90" }}
                          className="no-print text-sm text-accent hover:underline"
                        >
                          Ver en sala
                        </Link>
                      </div>
                      <h3 className="mt-2 font-display text-2xl leading-tight">
                        {s.title}
                      </h3>
                      <ul className="mt-3 space-y-1 text-sm text-muted">
                        {s.bullets.map((b) => (
                          <li key={b}>— {b}</li>
                        ))}
                      </ul>
                      <div className="mt-5 space-y-4">
                        {s.script.map((p) => (
                          <p key={p} className="text-base leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        {filtered.length === 0 ? (
          <p className="mt-12 text-muted">Nada coincide con esa búsqueda.</p>
        ) : null}
      </main>
    </div>
  );
}
