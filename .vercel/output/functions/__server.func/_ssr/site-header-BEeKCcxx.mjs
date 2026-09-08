import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as cn } from "./slides-BMNjH8eX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-BEeKCcxx.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/clase",
		label: "Presentar"
	},
	{
		to: "/guia",
		label: "Guía"
	},
	{
		to: "/atlas",
		label: "Atlas"
	},
	{
		to: "/canva",
		label: "Canva"
	}
];
function SiteHeader({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "no-print sticky top-0 z-30 border-b border-line/40 bg-theatre/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-baseline gap-2 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg tracking-tight",
					children: "Caja torácica"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-xs text-paper/50 sm:inline",
					children: "Equipo 2"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex items-center gap-1 overflow-x-auto",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: cn("rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150", current === l.to ? "bg-paper text-ink" : "text-paper/70 hover:bg-paper/10 hover:text-paper"),
					children: l.label
				}, l.to))
			})]
		})
	});
}
//#endregion
export { SiteHeader as t };
