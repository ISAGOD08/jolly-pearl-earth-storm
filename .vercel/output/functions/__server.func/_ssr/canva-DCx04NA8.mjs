import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SECTIONS, l as slides, t as Button } from "./slides-BMNjH8eX.mjs";
import { n as DIAGRAMS } from "./diagrams-Ds9764XY.mjs";
import { t as SiteHeader } from "./site-header-BEeKCcxx.mjs";
import { d as Copy, h as Check, u as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/canva-DCx04NA8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CopyButton({ text, label = "Copiar", variant = "paper", size = "default", className }) {
	const [done, setDone] = (0, import_react.useState)(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const el = document.createElement("textarea");
			el.value = text;
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			el.remove();
		}
		setDone(true);
		window.setTimeout(() => setDone(false), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant,
		size,
		className,
		onClick: copy,
		children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), done ? "Copiado" : label]
	});
}
var PALETTE = [
	{
		name: "Teatro",
		hex: "#111318",
		swatch: "bg-theatre",
		use: "Fondos de sección, portada oscura"
	},
	{
		name: "Papel",
		hex: "#F4EFE6",
		swatch: "bg-paper border border-line",
		use: "Fondo de casi todas las diapositivas"
	},
	{
		name: "Tinta",
		hex: "#1A1814",
		swatch: "bg-ink",
		use: "Títulos y cuerpo"
	},
	{
		name: "Pizarra",
		hex: "#2C4A52",
		swatch: "bg-accent",
		use: "Acento único · énfasis · botones"
	},
	{
		name: "Hueso",
		hex: "#E2D4BC",
		swatch: "bg-bone",
		use: "Hueso en esquemas"
	},
	{
		name: "Cartílago",
		hex: "#7D9E94",
		swatch: "bg-cartilage",
		use: "Cartílago en esquemas"
	}
];
var DIAGRAM_HINT = {
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
	types: "Tres siluetas de tórax: normal, en embudo (pectus excavatum), en quilla (carinatum). Índice torácico anotado."
};
function slideLine(s, i) {
	const img = s.diagram ? DIAGRAM_HINT[s.diagram] : "Composición tipográfica editorial: título enorme, 3–4 líneas, mucho aire, sin clipart.";
	return [
		`DIAPOSITIVA ${i + 1} — ${s.kicker}`,
		`Título: ${s.title}`,
		`Capítulo: ${s.chapter} · Sección: ${s.section}${s.core ? "" : " · EXTRA (se puede omitir en la versión de 60 min)"}`,
		`Texto en pantalla (máximo esto, no agregues más):`,
		...s.bullets.map((b) => `  • ${b}`),
		`Imagen: ${img}`
	].join("\n");
}
var CANVA_STYLE_BIBLE = `ROL
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
function buildSlideScript() {
	return slides.map((s, i) => slideLine(s, i)).join("\n\n");
}
function buildFullCanvaPrompt() {
	return `${CANVA_STYLE_BIBLE}

---

LISTADO DE DIAPOSITIVAS
Genera exactamente estas diapositivas, en este orden, con el texto de pantalla tal cual. La imagen es un esquema original (no una foto de libro).

${buildSlideScript()}

---

CIERRE DE DIRECCIÓN DE ARTE
Portada oscura (teatro) con título “Caja torácica” en serif enorme y subtítulo “Sección XIII · capítulos 71 a 75 · Equipo 2”. El resto, papel. Última diapositiva: cuatro preguntas en tipografía grande, sin respuestas. Silencio visual.`;
}
function buildChapterPrompt(sectionId) {
	const meta = SECTIONS.find((s) => s.id === sectionId);
	const subset = slides.filter((s) => s.section === sectionId);
	const start = slides.findIndex((s) => s.section === sectionId);
	return `${CANVA_STYLE_BIBLE}

LOTE: ${meta?.label ?? sectionId}
Genera SOLO estas ${subset.length} diapositivas, numeradas desde ${start + 1}. Misma paleta, mismos márgenes.

${subset.map((s, i) => slideLine(s, start + i)).join("\n\n")}`;
}
var CANVA_HOW_TO = [
	"Abre Canva → Presentación (16:9) → Magic Studio / Magic Design / Canva AI, o Gamma / Beautiful.ai si Canva recorta el lote.",
	"Pega primero el prompt maestro (biblia de estilo). Si el campo es corto, pega un lote por capítulo.",
	"Revisa hiatos, números de costilla y el ángulo de Louis. Si el modelo inventa una 13.ª costilla o pone la cava en T10, bórralo.",
	"Sustituye cualquier lámina que se parezca a un atlas comercial por los esquemas de esta app (descárgalos abajo en SVG o PNG).",
	"Deja las viñetas cortas. El texto largo va en la guía del maestro, no en la diapositiva."
];
var TOKENS = {
	"var(--color-surface)": "#ebe4d6",
	"var(--color-surface-2)": "#e0d7c6",
	"var(--color-paper)": "#f4efe6",
	"var(--color-ink)": "#1a1814",
	"var(--color-muted)": "#6e675e",
	"var(--color-line)": "#cfc6b8",
	"var(--color-accent)": "#2c4a52",
	"var(--color-accent-fg)": "#f4efe6",
	"var(--color-bone)": "#e2d4bc",
	"var(--color-bone-deep)": "#b79d78",
	"var(--color-cartilage)": "#7d9e94",
	"var(--color-clinical)": "#8f3d3d",
	"var(--color-theatre)": "#111318"
};
function flattenSvg(svg) {
	const clone = svg.cloneNode(true);
	clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	let src = new XMLSerializer().serializeToString(clone);
	for (const [token, hex] of Object.entries(TOKENS)) src = src.split(token).join(hex);
	return src;
}
function downloadText(filename, text, type) {
	const blob = new Blob([text], { type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function downloadSvg(svg, filename) {
	downloadText(filename, flattenSvg(svg), "image/svg+xml;charset=utf-8");
}
function downloadPng(svg, filename, scale = 2) {
	const src = flattenSvg(svg);
	const blob = new Blob([src], { type: "image/svg+xml;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const img = new Image();
	img.onload = () => {
		const vb = svg.viewBox.baseVal;
		const w = (vb?.width || svg.clientWidth || 800) * scale;
		const h = (vb?.height || svg.clientHeight || 600) * scale;
		const canvas = document.createElement("canvas");
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.fillStyle = "#f4efe6";
		ctx.fillRect(0, 0, w, h);
		ctx.drawImage(img, 0, 0, w, h);
		canvas.toBlob((png) => {
			if (!png) return;
			const href = URL.createObjectURL(png);
			const a = document.createElement("a");
			a.href = href;
			a.download = filename;
			a.click();
			URL.revokeObjectURL(href);
			URL.revokeObjectURL(url);
		}, "image/png");
	};
	img.src = url;
}
var DIAGRAM_LABEL = {
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
	types: "Tipos de tórax"
};
function CanvaPage() {
	const full = (0, import_react.useMemo)(() => buildFullCanvaPrompt(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/canva" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-5xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Para pegar en Canva AI, Gamma o similar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
					children: "Prompt de la presentación"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-lg leading-relaxed text-muted",
					children: "La clase en pantalla tiene que ser enorme en esquemas y corta en letra. Este prompt manda paleta, orden, hechos que no se negocian y cada diapositiva. Las láminas del tratado no se extraen: son de la editorial. Abajo van los esquemas originales para que los subas tú."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 space-y-3 rounded-lg bg-surface p-5 text-sm leading-relaxed",
					children: CANVA_HOW_TO.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-accent",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
					}, step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
							text: full,
							label: "Copiar prompt completo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
							text: CANVA_STYLE_BIBLE,
							label: "Solo biblia de estilo",
							variant: "outline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => downloadText("prompt-caja-toracica-canva.txt", full, "text/plain;charset=utf-8"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Descargar .txt"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 font-display text-2xl",
					children: "Paleta"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: PALETTE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-md border border-line p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-10 rounded-sm border border-line ${c.swatch}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-mono text-xs text-muted",
								children: c.hex
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: c.use
							})
						] })]
					}, c.hex))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 font-display text-2xl",
					children: "Lotes por capítulo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Si Canva recorta el prompt largo, pega un lote. Misma biblia, mismas reglas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 rounded-md border border-line p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
							text: buildChapterPrompt(s.id),
							label: "Copiar lote",
							size: "sm",
							variant: "outline"
						})]
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 font-display text-2xl",
					children: "Esquemas originales"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
					children: "Descarga SVG o PNG e impórtalos en Canva (Cargar → archivo). No son copias del libro: son esquemas de clase, con hueso y cartílago marcados, para que la presentación no se vea como la de “organización del esqueleto” de once diapositivas vacías."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2",
					children: Object.keys(DIAGRAMS).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramExport, { id }, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14 rounded-lg border border-line p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Por qué no hay PNG del PDF"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "El archivo de caja es el tratado de Latarjet–Ruiz Liard. Extraer esas figuras y pegarlas en Canva sería reproducir obra con copyright. Por eso esta clase trae esquemas propios y un prompt que le pide a la IA de Canva dibujar atlas didáctico, no clonar láminas."
					})]
				})
			]
		})]
	});
}
function DiagramExport({ id }) {
	const box = (0, import_react.useRef)(null);
	const Comp = DIAGRAMS[id];
	function svg() {
		const node = box.current?.querySelector("svg");
		if (node) downloadSvg(node, `caja-${id}.svg`);
	}
	function png() {
		const node = box.current?.querySelector("svg");
		if (node) downloadPng(node, `caja-${id}.png`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-lg border border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: box,
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "flex items-center justify-between gap-2 px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: DIAGRAM_LABEL[id]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: svg,
					children: "SVG"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: png,
					children: "PNG"
				})]
			})]
		})]
	});
}
//#endregion
export { CanvaPage as component };
