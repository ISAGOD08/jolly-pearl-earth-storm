import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Copy, Play, ScanSearch } from "lucide-react";
import { CageAnterior } from "@/components/diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  CORE_COUNT,
  CORE_MINUTES,
  TOTAL_COUNT,
  TOTAL_MINUTES,
} from "@/data/slides";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-theatre text-paper">
      <SiteHeader current="/" />
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <section className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-widest text-paper/50">
            Sección XIII · capítulos 71 a 75
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-7xl">
            Caja torácica
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
            Clase de anatomía para exponer como maestro: cada costilla, cada
            articulación, el VAN y el diafragma. Poca letra en pantalla, el
            detalle se dice en voz alta.
          </p>
          <p className="mt-3 text-sm text-paper/50">
            Equipo 2 · Flores Pérez Josué Isaías · Molina Pérez Ángel Moroni
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="paper">
              <Link to="/clase" search={{ n: 1, modo: "90" }}>
                <Play className="size-4" />
                Presentar la clase
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/guia">
                <BookOpen className="size-4" />
                Guía del maestro
              </Link>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-paper/10 pt-6 text-sm">
            <div>
              <dt className="text-paper/45">Diapositivas</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums">
                {TOTAL_COUNT}
                <span className="ml-1 text-sm text-paper/45">/ {CORE_COUNT} núcleo</span>
              </dd>
            </div>
            <div>
              <dt className="text-paper/45">Duración</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums">
                {CORE_MINUTES}–{TOTAL_MINUTES}
                <span className="ml-1 text-sm text-paper/45">min</span>
              </dd>
            </div>
            <div>
              <dt className="text-paper/45">Fuente</dt>
              <dd className="mt-1 font-display text-2xl">71–75</dd>
            </div>
          </dl>
        </section>
        <section className="rounded-xl bg-paper p-3 text-ink shadow-slide">
          <CageAnterior />
        </section>
      </main>

      <section className="border-t border-paper/10">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-3">
          <Link
            to="/clase"
            search={{ n: 1, modo: "90" }}
            className="rounded-xl border border-paper/10 p-5 transition-colors duration-150 hover:bg-paper/5"
          >
            <Play className="size-5 text-paper/70" />
            <h2 className="mt-4 font-display text-2xl">Sala</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">
              Diapositiva grande, esquema interactivo y el guion al lado. 60 o
              90 minutos. Flechas, espacio, N, T.
            </p>
          </Link>
          <Link
            to="/guia"
            className="rounded-xl border border-paper/10 p-5 transition-colors duration-150 hover:bg-paper/5"
          >
            <BookOpen className="size-5 text-paper/70" />
            <h2 className="mt-4 font-display text-2xl">Guía</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">
              Lo que vas a decir, diapositiva por diapositiva, escrito como se
              habla en clase. Se puede imprimir.
            </p>
          </Link>
          <Link
            to="/canva"
            className="rounded-xl border border-paper/10 p-5 transition-colors duration-150 hover:bg-paper/5"
          >
            <Copy className="size-5 text-paper/70" />
            <h2 className="mt-4 font-display text-2xl">Prompt Canva</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">
              Prompt maestro + lotes por capítulo y esquemas originales en
              SVG/PNG. Las láminas del libro no se extraen.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-xl border border-paper/10 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <ScanSearch className="mt-1 size-5 shrink-0 text-paper/60" />
            <div>
              <h2 className="font-display text-2xl">Atlas de costillas</h2>
              <p className="mt-2 max-w-2xl text-paper/70">
                Toca la 1.ª, la 7.ª, el esternón. Cada arco dice con quién se
                articula atrás y qué le pasa adelante. Hecho para ensayar el
                recorrido 1 a 12 antes de salir a hablar.
              </p>
              <Button asChild variant="paper" className="mt-5">
                <Link to="/atlas">
                  Abrir atlas
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-paper/40">
          Clase armada sobre la Sección XIII de Anatomía Humana (Latarjet–Ruiz
          Liard, 4.ª ed.). Los esquemas de esta app son originales y didácticos.
          Las ilustraciones del tratado son de Editorial Médica Panamericana y
          no se reproducen ni se extraen.
        </p>
      </section>
    </div>
  );
}
