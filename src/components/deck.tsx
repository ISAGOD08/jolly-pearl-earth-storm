import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  List,
  Maximize2,
  MessageSquareText,
  Minimize2,
} from "lucide-react";
import { DIAGRAMS } from "@/components/diagrams";
import { Button } from "@/components/ui/button";
import { structureById } from "@/data/ribs";
import {
  CORE_MINUTES,
  getDeck,
  SECTIONS,
  TOTAL_MINUTES,
  type DeckMode,
  type Slide,
} from "@/data/slides";
import { cn } from "@/lib/utils";

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function Deck({
  initialN,
  modo,
}: {
  initialN: number;
  modo: DeckMode;
}) {
  const navigate = useNavigate();
  const deck = useMemo(() => getDeck(modo), [modo]);
  const [index, setIndex] = useState(() => {
    const i = initialN - 1;
    return Math.min(Math.max(i, 0), Math.max(deck.length - 1, 0));
  });
  const [notes, setNotes] = useState(true);
  const [toc, setToc] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [wide, setWide] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);

  const slide: Slide | undefined = deck[index];
  const target = modo === "60" ? CORE_MINUTES : TOTAL_MINUTES;
  const over = seconds > target * 60;

  useEffect(() => {
    if (index > deck.length - 1) setIndex(Math.max(deck.length - 1, 0));
  }, [deck.length, index]);

  useEffect(() => {
    if (!slide) return;
    navigate({
      to: "/clase",
      search: { n: index + 1, modo },
      replace: true,
    });
  }, [index, modo, navigate, slide]);

  useEffect(() => {
    setPicked(slide?.highlight ?? null);
  }, [slide?.id, slide?.highlight]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), deck.length - 1));
      setToc(false);
    },
    [deck.length],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
        setRunning(true);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(deck.length - 1);
      } else if (e.key === "n" || e.key === "N") {
        setNotes((v) => !v);
      } else if (e.key === "t" || e.key === "T") {
        setToc((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) void document.exitFullscreen();
        else void document.documentElement.requestFullscreen();
      } else if (e.key === "Escape") {
        setToc(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deck.length, go, index]);

  if (!slide) return null;

  const Diagram = slide.diagram ? DIAGRAMS[slide.diagram] : null;
  const pick = structureById(picked);
  const section = SECTIONS.find((s) => s.id === slide.section);

  return (
    <div className="flex min-h-dvh flex-col bg-theatre text-paper">
      <header className="flex flex-wrap items-center gap-2 border-b border-paper/10 px-3 py-2">
        <Link to="/" className="flex size-11 items-center justify-center rounded-md text-paper/70 hover:bg-paper/10 hover:text-paper">
          <Home className="size-4" />
          <span className="sr-only">Inicio</span>
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm tracking-tight">
            {slide.chapter}
          </p>
          <p className="text-xs text-paper/50">
            {index + 1} / {deck.length} · {section?.label}
            {!slide.core ? " · extra" : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          className={cn(
            "flex h-11 items-center gap-2 rounded-md px-3 font-medium tabular-nums",
            over ? "bg-clinical text-paper" : "bg-paper/10 text-paper",
          )}
        >
          <Clock className="size-4" />
          {formatTime(seconds)}
          <span className="hidden text-xs opacity-70 sm:inline">/ {target} min</span>
        </button>
        <div className="flex rounded-md bg-paper/10 p-1">
          {(["60", "90"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                const next = getDeck(m);
                const kept = next.findIndex((s) => s.id === slide.id);
                const n = kept >= 0 ? kept + 1 : 1;
                setIndex(n - 1);
                navigate({ to: "/clase", search: { n, modo: m } });
              }}
              className={cn(
                "h-9 rounded-sm px-3 text-xs font-medium",
                modo === m ? "bg-paper text-ink" : "text-paper/70",
              )}
            >
              {m} min
            </button>
          ))}
        </div>
        <Button variant="ghost" size="icon" onClick={() => setNotes((v) => !v)} aria-label="Guion">
          <MessageSquareText className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setToc((v) => !v)} aria-label="Índice">
          <List className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:inline-flex"
          onClick={() => setWide((v) => !v)}
          aria-label="Ancho"
        >
          {wide ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
        </Button>
      </header>

      <div className="h-1 overflow-hidden bg-paper/10">
        <div
          className="h-full origin-left bg-accent transition-transform duration-200 ease-smooth"
          style={{ transform: `scaleX(${(index + 1) / deck.length})` }}
        />
      </div>

      <div
        className={cn(
          "mx-auto grid w-full flex-1 gap-4 p-3 sm:p-5",
          notes ? "max-w-7xl lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]" : "max-w-6xl",
          wide && "max-w-none",
        )}
      >
        <article
          className="flex min-h-0 flex-col rounded-xl bg-paper p-5 text-ink shadow-slide sm:p-8"
          onTouchStart={(e) => setTouchX(e.changedTouches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (touchX == null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (dx > 56) go(index - 1);
            if (dx < -56) go(index + 1);
            setTouchX(null);
          }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {slide.kicker}
          </p>
          <h1 className="mt-2 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {slide.title}
          </h1>
          <div
            className={cn(
              "mt-6 grid min-h-0 flex-1 gap-6",
              Diagram ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : "",
            )}
          >
            {Diagram ? (
              <div className="min-h-56 overflow-hidden rounded-lg bg-surface">
                <Diagram
                  highlight={picked}
                  onSelect={(id) => setPicked((cur) => (cur === id ? null : id))}
                />
              </div>
            ) : null}
            <div className="flex flex-col justify-center">
              <ul className="space-y-3">
                {slide.bullets.map((b) => (
                  <li
                    key={b}
                    className="border-l-2 border-accent pl-4 text-lg leading-snug sm:text-xl"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              {pick ? (
                <aside className="mt-6 rounded-md bg-surface p-4">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    {pick.klass}
                  </p>
                  <p className="mt-1 font-display text-xl">{pick.title}</p>
                  <p className="mt-1 text-sm text-muted">{pick.joints}</p>
                </aside>
              ) : null}
            </div>
          </div>
        </article>

        {notes ? (
          <aside className="flex min-h-0 flex-col rounded-xl border border-paper/10 bg-ink/40 p-5">
            <p className="text-xs font-medium uppercase tracking-widest text-paper/50">
              Lo que dices · {slide.minutes} min
            </p>
            <div className="mt-3 flex-1 space-y-4 overflow-auto pr-1">
              {slide.script.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-paper/90">
                  {p}
                </p>
              ))}
              {pick
                ? pick.speak.map((p) => (
                    <p key={p} className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-paper/80">
                      {p}
                    </p>
                  ))
                : null}
            </div>
          </aside>
        ) : null}
      </div>

      <footer className="flex items-center justify-between gap-3 px-3 py-3">
        <Button
          variant="paper"
          onClick={() => go(index - 1)}
          disabled={index === 0}
        >
          <ChevronLeft className="size-4" />
          Anterior
        </Button>
        <p className="hidden text-xs text-paper/40 sm:block">
          Flechas · espacio · N guion · T índice · F pantalla
        </p>
        <Button
          variant="paper"
          onClick={() => {
            go(index + 1);
            setRunning(true);
          }}
          disabled={index === deck.length - 1}
        >
          Siguiente
          <ChevronRight className="size-4" />
        </Button>
      </footer>

      {toc ? (
        <div className="fixed inset-0 z-40 bg-theatre/70 p-4" onClick={() => setToc(false)}>
          <div
            className="mx-auto flex max-h-full max-w-2xl flex-col overflow-hidden rounded-xl bg-paper text-ink shadow-slide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <p className="font-display text-xl">Índice</p>
              <Button variant="outline" size="sm" onClick={() => setToc(false)}>
                Cerrar
              </Button>
            </div>
            <ol className="flex-1 space-y-1 overflow-auto p-3">
              {deck.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-md px-3 py-3 text-left",
                      i === index ? "bg-accent text-accent-fg" : "hover:bg-surface",
                    )}
                  >
                    <span className="w-8 tabular-nums text-sm opacity-60">{i + 1}</span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{s.title}</span>
                      <span className={cn("block text-xs", i === index ? "opacity-80" : "text-muted")}>
                        {s.chapter}
                        {!s.core ? " · extra" : ""}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}
    </div>
  );
}
