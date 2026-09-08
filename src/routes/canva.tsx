import { useMemo, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { DIAGRAMS, type DiagramId } from "@/components/diagrams";
import { CopyButton } from "@/components/copy-button";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  buildChapterPrompt,
  buildFullCanvaPrompt,
  CANVA_HOW_TO,
  CANVA_STYLE_BIBLE,
  PALETTE,
} from "@/data/canva";
import { SECTIONS } from "@/data/slides";
import { downloadPng, downloadSvg, downloadText } from "@/lib/svg-export";

export const Route = createFileRoute("/canva")({ component: CanvaPage });

const DIAGRAM_LABEL: Record<DiagramId, string> = {
  cage: "Caja anterior",
  sternum: "Esternón",
  rib: "Costilla tipo",
  first: "1.ª costilla",
  classes: "Verdaderas, falsas, flotantes",
  costovertebral: "Costovertebral",
  sternocostal: "Esternocostal",
  superior: "Orificio superior",
  inferior: "Orificio inferior",
  intercostal: "Espacio y VAN",
  muscles: "Intercostales",
  diaphragm: "Hiatos del diafragma",
  phrenic: "Nervio frénico",
  types: "Tipos de tórax",
};

function CanvaPage() {
  const full = useMemo(() => buildFullCanvaPrompt(), []);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader current="/canva" />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Para pegar en Canva AI, Gamma o similar
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Prompt de la presentación
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          La clase en pantalla tiene que ser enorme en esquemas y corta en
          letra. Este prompt manda paleta, orden, hechos que no se negocian y
          cada diapositiva. Las láminas del tratado no se extraen: son de la
          editorial. Abajo van los esquemas originales para que los subas tú.
        </p>

        <ol className="mt-8 space-y-3 rounded-lg bg-surface p-5 text-sm leading-relaxed">
          {CANVA_HOW_TO.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="font-display text-lg text-accent">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <CopyButton text={full} label="Copiar prompt completo" />
          <CopyButton
            text={CANVA_STYLE_BIBLE}
            label="Solo biblia de estilo"
            variant="outline"
          />
          <Button
            variant="outline"
            onClick={() =>
              downloadText(
                "prompt-caja-toracica-canva.txt",
                full,
                "text/plain;charset=utf-8",
              )
            }
          >
            <Download className="size-4" />
            Descargar .txt
          </Button>
        </div>

        <h2 className="mt-14 font-display text-2xl">Paleta</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {PALETTE.map((c) => (
            <li
              key={c.hex}
              className="flex items-center gap-3 rounded-md border border-line p-3"
            >
              <span className={`size-10 rounded-sm border border-line ${c.swatch}`} />
              <span>
                <span className="block font-medium">{c.name}</span>
                <span className="block font-mono text-xs text-muted">
                  {c.hex}
                </span>
                <span className="block text-xs text-muted">{c.use}</span>
              </span>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-display text-2xl">Lotes por capítulo</h2>
        <p className="mt-2 text-sm text-muted">
          Si Canva recorta el prompt largo, pega un lote. Misma biblia, mismas
          reglas.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between gap-3 rounded-md border border-line p-4"
            >
              <p className="font-medium">{s.label}</p>
              <CopyButton
                text={buildChapterPrompt(s.id)}
                label="Copiar lote"
                size="sm"
                variant="outline"
              />
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl">Esquemas originales</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Descarga SVG o PNG e impórtalos en Canva (Cargar → archivo). No son
          copias del libro: son esquemas de clase, con hueso y cartílago
          marcados, para que la presentación no se vea como la de “organización
          del esqueleto” de once diapositivas vacías.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {(Object.keys(DIAGRAMS) as DiagramId[]).map((id) => (
            <DiagramExport key={id} id={id} />
          ))}
        </div>

        <section className="mt-14 rounded-lg border border-line p-5">
          <h2 className="font-display text-xl">Por qué no hay PNG del PDF</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            El archivo de caja es el tratado de Latarjet–Ruiz Liard. Extraer
            esas figuras y pegarlas en Canva sería reproducir obra con
            copyright. Por eso esta clase trae esquemas propios y un prompt que
            le pide a la IA de Canva dibujar atlas didáctico, no clonar láminas.
          </p>
        </section>
      </main>
    </div>
  );
}

function DiagramExport({ id }: { id: DiagramId }) {
  const box = useRef<HTMLDivElement>(null);
  const Comp = DIAGRAMS[id];

  function svg() {
    const node = box.current?.querySelector("svg");
    if (node) downloadSvg(node, `caja-${id}.svg`);
  }
  function png() {
    const node = box.current?.querySelector("svg");
    if (node) downloadPng(node, `caja-${id}.png`);
  }

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface">
      <div ref={box} className="bg-surface">
        <Comp />
      </div>
      <figcaption className="flex items-center justify-between gap-2 px-3 py-3">
        <span className="text-sm font-medium">{DIAGRAM_LABEL[id]}</span>
        <span className="flex gap-2">
          <Button size="sm" variant="outline" onClick={svg}>
            SVG
          </Button>
          <Button size="sm" variant="outline" onClick={png}>
            PNG
          </Button>
        </span>
      </figcaption>
    </figure>
  );
}
