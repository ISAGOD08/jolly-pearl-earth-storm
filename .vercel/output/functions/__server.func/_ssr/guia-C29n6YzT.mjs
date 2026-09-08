import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SECTIONS, l as slides, t as Button } from "./slides-BMNjH8eX.mjs";
import { t as SiteHeader } from "./site-header-BEeKCcxx.mjs";
import { r as Printer } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guia-C29n6YzT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GuiaPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [onlyCore, setOnlyCore] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return slides.filter((s) => {
			if (onlyCore && !s.core) return false;
			if (!needle) return true;
			return [
				s.title,
				s.kicker,
				s.chapter,
				...s.bullets,
				...s.script
			].join(" ").toLowerCase().includes(needle);
		});
	}, [q, onlyCore]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/guia" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Lo que dices en voz alta"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
					children: "Guía del maestro"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: "No es un resumen. Es el habla de la clase, diapositiva por diapositiva. En pantalla dejas las viñetas; aquí está el resto."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "no-print mt-6 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Buscar en el guion",
							className: "h-11 min-w-56 flex-1 rounded-md border border-line bg-surface px-3 text-ink outline-none ring-accent focus:ring-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: onlyCore ? "default" : "outline",
							onClick: () => setOnlyCore((v) => !v),
							children: onlyCore ? "Núcleo 60 min" : "Todas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => window.print(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Imprimir"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "no-print mt-8 flex flex-wrap gap-2",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#sec-${s.id}`,
						className: "rounded-md bg-surface px-3 py-2 text-sm text-ink hover:bg-surface-2",
						children: s.label
					}, s.id))
				}),
				SECTIONS.map((sec) => {
					const group = filtered.filter((s) => s.section === sec.id);
					if (!group.length) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: `sec-${sec.id}`,
						className: "mt-12 print-guide",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: sec.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-10",
							children: group.map((s) => {
								const n = slides.findIndex((x) => x.id === s.id) + 1;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-lg border border-line bg-surface p-5 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-baseline justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-medium uppercase tracking-widest text-muted",
												children: [
													"Diapositiva ",
													n,
													" · ",
													s.chapter,
													" · ",
													s.minutes,
													" min",
													!s.core ? " · extra" : ""
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/clase",
												search: {
													n,
													modo: s.core ? "60" : "90"
												},
												className: "no-print text-sm text-accent hover:underline",
												children: "Ver en sala"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl leading-tight",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-1 text-sm text-muted",
											children: s.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", b] }, b))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 space-y-4",
											children: s.script.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-base leading-relaxed",
												children: p
											}, p))
										})
									]
								}, s.id);
							})
						})]
					}, sec.id);
				}),
				filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-muted",
					children: "Nada coincide con esa búsqueda."
				}) : null
			]
		})]
	});
}
//#endregion
export { GuiaPage as component };
