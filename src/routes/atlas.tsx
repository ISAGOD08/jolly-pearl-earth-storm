import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CageAnterior } from "@/components/diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { STRUCTURES, structureById } from "@/data/ribs";
import { slides } from "@/data/slides";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas")({ component: AtlasPage });

function AtlasPage() {
  const [id, setId] = useState("rib-1");
  const item = structureById(id) ?? STRUCTURES[1];
  const slideIndex = slides.findIndex((s) => s.id === item.slideId);
  const n = slideIndex >= 0 ? slideIndex + 1 : 1;

  return (
    <div className="min-h-dvh bg-theatre text-paper">
      <SiteHeader current="/atlas" />
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-paper/50">
            Toca cada arco
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">
            Atlas de costillas
          </h1>
          <p className="mt-3 max-w-xl text-paper/70">
            De la 1.ª a la 12.ª, y el esternón. Con quién se articula atrás, qué
            hace adelante, y el habla de clase.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl bg-paper text-ink shadow-slide">
            <CageAnterior
              highlight={id}
              onSelect={(next) => setId(next)}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setId("sternum")}
              className={cn(
                "h-11 rounded-md px-3 text-sm font-medium",
                id === "sternum" ? "bg-paper text-ink" : "bg-paper/10 text-paper",
              )}
            >
              Esternón
            </button>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((nRib) => {
              const rid = `rib-${nRib}`;
              return (
                <button
                  key={rid}
                  type="button"
                  onClick={() => setId(rid)}
                  className={cn(
                    "size-11 rounded-md text-sm font-medium tabular-nums",
                    id === rid ? "bg-paper text-ink" : "bg-paper/10 text-paper",
                  )}
                >
                  {nRib}
                </button>
              );
            })}
          </div>
        </section>
        <aside className="rounded-xl bg-paper p-6 text-ink shadow-slide sm:p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {item.klass}
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight">
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.joints}</p>
          <div className="mt-6 space-y-4">
            {item.speak.map((p) => (
              <p key={p} className="text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <Button asChild variant="default" className="mt-8">
            <Link to="/clase" search={{ n, modo: "90" }}>
              Ver en la clase
            </Link>
          </Button>
        </aside>
      </main>
    </div>
  );
}
