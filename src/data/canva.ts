import { SECTIONS, slides, type Slide } from "./slides";
import type { DiagramId } from "@/components/diagrams";

export const PALETTE = [
  { name: "Teatro", hex: "#111318", swatch: "bg-theatre", use: "Fondos de sección, portada oscura" },
  { name: "Papel", hex: "#F4EFE6", swatch: "bg-paper border border-line", use: "Fondo de casi todas las diapositivas" },
  { name: "Tinta", hex: "#1A1814", swatch: "bg-ink", use: "Títulos y cuerpo" },
  { name: "Pizarra", hex: "#2C4A52", swatch: "bg-accent", use: "Acento único · énfasis · botones" },
  { name: "Hueso", hex: "#E2D4BC", swatch: "bg-bone", use: "Hueso en esquemas" },
  { name: "Cartílago", hex: "#7D9E94", swatch: "bg-cartilage", use: "Cartílago en esquemas" },
];

const DIAGRAM_HINT: Record<DiagramId, string> = {
  cage: "Esquema anterior de la caja torácica: 12 pares de costillas numeradas, esternón en tres piezas al centro, cartílagos en verde-gris, vértebras apenas sugeridas atrás. Estilo atlas médico, líneas limpias, sin sombras 3D.",
  sternum: "Esternón de frente: manubrio, ángulo de Louis, cuerpo con líneas de soldadura, xifoides. Escotadura yugular y carillas claviculares. Papel cálido, hueso beige.",
  rib: "Costilla típica (5.ª) vista desde arriba/atrás: cabeza con dos carillas y cresta, cuello, tubérculo, ángulo, cuerpo con surco costal, fosita anterior. Etiquetas cortas.",
  first: "1.ª costilla derecha, cara superior: cabeza de una carilla, tubérculo, tubérculo del escaleno (Lisfranc) en acento, surco de arteria subclavia + plexo atrás, surco de vena adelante.",
  classes: "Tres bloques tipográficos grandes: 7 verdaderas, 3 falsas, 2 flotantes. Casi sin ilustración extra.",
  costovertebral: "Corte: cabeza de costilla a caballo entre dos cuerpos vertebrales y el disco; tubérculo contra la apófisis transversa. Ligamentos sugeridos con líneas finas.",
  sternocostal: "Esternón + cartílagos 1 a 7 propios y 8–10 al cartílago común. 1.ª marcada como sincondrosis.",
  superior: "Orificio torácico superior visto desde arriba: T1 atrás, primera costilla a los lados, manubrio adelante. Tráquea, esófago, cúpulas pleurales, vasos subclavios como siluetas.",
  inferior: "Orificio inferior: T12, reborde costal, xifoides. Cerrado por el diafragma en cúpula.",
  intercostal: "Corte de un espacio intercostal: costilla de arriba con surco, VAN de arriba abajo (vena, arteria, nervio), tres capas musculares.",
  muscles: "Fibras: externo hacia abajo y adelante, interno hacia arriba y adelante, íntimo profundo. Flechas de dirección.",
  diaphragm: "Diafragma visto desde abajo: dos cúpulas, centro tendinoso, pilares, hiatos T8 cava / T10 esófago / T12 aorta.",
  phrenic: "Esquema del nervio frénico: C3–C4–C5, baja por el pericardio, derecho junto a la cava, izquierdo cruzando el cayado.",
  types: "Tres siluetas de tórax: normal, en embudo (pectus excavatum), en quilla (carinatum). Índice torácico anotado.",
};

function slideLine(s: Slide, i: number) {
  const img = s.diagram
    ? DIAGRAM_HINT[s.diagram]
    : "Composición tipográfica editorial: título enorme, 3–4 líneas, mucho aire, sin clipart.";
  return [
    `DIAPOSITIVA ${i + 1} — ${s.kicker}`,
    `Título: ${s.title}`,
    `Capítulo: ${s.chapter} · Sección: ${s.section}${s.core ? "" : " · EXTRA (se puede omitir en la versión de 60 min)"}`,
    `Texto en pantalla (máximo esto, no agregues más):`,
    ...s.bullets.map((b) => `  • ${b}`),
    `Imagen: ${img}`,
  ].join("\n");
}

export const CANVA_STYLE_BIBLE = `ROL
Eres director de arte de una clase universitaria de Anatomía Humana. Vas a generar una presentación 16:9, super extensa, sobre la CAJA TORÁCICA (Sección XIII, capítulos 71–75: esqueleto del tórax, articulaciones, tórax en conjunto, músculos, diafragma). Público: estudiantes de medicina. Tono: maestro en mesa de disección, preciso, oral, sin relleno.

PROHIBIDO
- No copies ni imites láminas de Latarjet, Testut, Netter, Prometheus ni ningún atlas con copyright.
- No uses la paleta turquesa/cian de presentaciones escolares.
- No uses púrpura, magenta, dorado, neón, emojis, stickers, globos de texto, ni fondos degradados.
- No llenes la diapositiva de párrafos. Si hay más de 4 viñetas, estás fallando.
- No pongas “gracias por su atención” hasta la última.
- No inventes números de vértebra, hiatos o inserciones. Si no cabe, deja el esquema y el título.

OBLIGATORIO
- 16:9. Entre 38 y 44 diapositivas. Versión núcleo (60 min) = omitir las marcadas EXTRA.
- Cada slide es 65–75% imagen o esquema y 25–35% texto.
- Tipografía: una serif de display para títulos (Fraunces, Recoleta, Playfair, o similar) y una sans geométrica para viñetas (Figtree, Satoshi, Inter). Títulos grandes, tracking apretado, mucho aire.
- Paleta exacta:
  Teatro #111318 (solo portada, cierres de capítulo y números)
  Papel #F4EFE6 (fondo habitual)
  Tinta #1A1814 (texto)
  Pizarra #2C4A52 (acento único)
  Hueso #E2D4BC (hueso)
  Cartílago #7D9E94 (cartílago)
  Clínico #8F3D3D (solo avisos: fractura, punción, hernia)
- Esquemas: estilo atlas didáctico, línea oscura fina, relleno plano, etiquetas cortas pegadas a la estructura. Numeración de costillas 1–12 visible cuando el tema lo pida.
- Pie de página discreto: “Caja torácica · Equipo 2 · cap. 71–75”. Número de slide abajo a la derecha.

ESTRUCTURA DE LA CLASE (75–90 min)
1. Apertura — portada, objetivos, mapa de tiempo
2. Esqueleto (cap. 71) — definición, esternón pieza por pieza, clasificación de costillas, costilla tipo, recorrido 1.ª a 12.ª, primera, segunda, flotantes, cartílagos (EXTRA: cervicales y lumbares)
3. Articulaciones (cap. 72) — costovertebral, costotransversa, esternocostales (EXTRA: costocondrales, intercondrales, esternales)
4. Tórax en conjunto (cap. 73) — forma, espacios, orificio superior, orificio inferior, tipos e índice, radiología
5. Músculos (cap. 74) — intercostal externo/interno/íntimo, VAN (EXTRA: elevadores, subcostales, transverso)
6. Diafragma (cap. 75) — cúpulas, pilares, porciones, centro tendinoso, hiatos T8/T10/T12, relaciones, nervio frénico (EXTRA: forámenes accesorios)
7. Clínica y cierre — fracturas, pectus, hernias, toracocentesis, síntesis, preguntas

HECHOS QUE NO SE NEGOCIAN (si un esquema los contradice, corrige el esquema)
- 12 vértebras torácicas + 1 esternón + 24 costillas + cartílagos.
- Verdaderas 1–7, falsas 8–10, flotantes 11–12.
- Ángulo de Louis = 2.º cartílago costal.
- Costilla típica: cabeza con 2 carillas a caballo del disco; tubérculo con la transversa del mismo número.
- 1.ª, 11.ª y 12.ª: una sola vértebra. 1.ª: tubérculo de Lisfranc; arteria subclavia ATRÁS del escaleno anterior, vena ADELANTE.
- VAN en el surco costal, orden de arriba abajo: vena, arteria, nervio. Punción: borde SUPERIOR de la costilla de abajo.
- Hiatos: VCI T8 (centro tendinoso), esófago T10 (músculo + vagos), aorta T12 (tendón entre pilares, no se estrangula).
- Frénico: C3–C4–C5, raíz principal C4.

CÓMO GENERAR SI EL SISTEMA RECORTA
Genera en 5 lotes (apertura+esqueleto / articulaciones+conjunto / músculos / diafragma / clínica) con esta misma biblia de estilo, y unifícalos después. No cambies paleta entre lotes.`;

export function buildSlideScript() {
  return slides.map((s, i) => slideLine(s, i)).join("\n\n");
}

export function buildFullCanvaPrompt() {
  return `${CANVA_STYLE_BIBLE}

---

LISTADO DE DIAPOSITIVAS
Genera exactamente estas diapositivas, en este orden, con el texto de pantalla tal cual. La imagen es un esquema original (no una foto de libro).

${buildSlideScript()}

---

CIERRE DE DIRECCIÓN DE ARTE
Portada oscura (teatro) con título “Caja torácica” en serif enorme y subtítulo “Sección XIII · capítulos 71 a 75 · Equipo 2”. El resto, papel. Última diapositiva: cuatro preguntas en tipografía grande, sin respuestas. Silencio visual.`;
}

export function buildChapterPrompt(sectionId: string) {
  const meta = SECTIONS.find((s) => s.id === sectionId);
  const subset = slides.filter((s) => s.section === sectionId);
  const start = slides.findIndex((s) => s.section === sectionId);
  return `${CANVA_STYLE_BIBLE}

LOTE: ${meta?.label ?? sectionId}
Genera SOLO estas ${subset.length} diapositivas, numeradas desde ${start + 1}. Misma paleta, mismos márgenes.

${subset.map((s, i) => slideLine(s, start + i)).join("\n\n")}`;
}

export const CANVA_HOW_TO = [
  "Abre Canva → Presentación (16:9) → Magic Studio / Magic Design / Canva AI, o Gamma / Beautiful.ai si Canva recorta el lote.",
  "Pega primero el prompt maestro (biblia de estilo). Si el campo es corto, pega un lote por capítulo.",
  "Revisa hiatos, números de costilla y el ángulo de Louis. Si el modelo inventa una 13.ª costilla o pone la cava en T10, bórralo.",
  "Sustituye cualquier lámina que se parezca a un atlas comercial por los esquemas de esta app (descárgalos abajo en SVG o PNG).",
  "Deja las viñetas cortas. El texto largo va en la guía del maestro, no en la diapositiva.",
];
