import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as slides, s as cn, t as Button } from "./slides-BMNjH8eX.mjs";
import { t as CageAnterior } from "./diagrams-Ds9764XY.mjs";
import { t as SiteHeader } from "./site-header-BEeKCcxx.mjs";
import { n as structureById, t as STRUCTURES } from "./ribs-B3r9xs0p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas-DaUgAvFf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AtlasPage() {
	const [id, setId] = (0, import_react.useState)("rib-1");
	const item = structureById(id) ?? STRUCTURES[1];
	const slideIndex = slides.findIndex((s) => s.id === item.slideId);
	const n = slideIndex >= 0 ? slideIndex + 1 : 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-theatre text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/atlas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-paper/50",
					children: "Toca cada arco"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight",
					children: "Atlas de costillas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-paper/70",
					children: "De la 1.ª a la 12.ª, y el esternón. Con quién se articula atrás, qué hace adelante, y el habla de clase."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden rounded-xl bg-paper text-ink shadow-slide",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CageAnterior, {
						highlight: id,
						onSelect: (next) => setId(next)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setId("sternum"),
						className: cn("h-11 rounded-md px-3 text-sm font-medium", id === "sternum" ? "bg-paper text-ink" : "bg-paper/10 text-paper"),
						children: "Esternón"
					}), Array.from({ length: 12 }, (_, i) => i + 1).map((nRib) => {
						const rid = `rib-${nRib}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setId(rid),
							className: cn("size-11 rounded-md text-sm font-medium tabular-nums", id === rid ? "bg-paper text-ink" : "bg-paper/10 text-paper"),
							children: nRib
						}, rid);
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-paper p-6 text-ink shadow-slide sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: item.klass
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl leading-tight",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: item.joints
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: item.speak.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed",
							children: p
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "default",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/clase",
							search: {
								n,
								modo: "90"
							},
							children: "Ver en la clase"
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { AtlasPage as component };
