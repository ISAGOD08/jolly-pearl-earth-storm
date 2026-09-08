import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime, _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getDeck, i as SECTIONS, o as TOTAL_MINUTES, r as CORE_MINUTES, s as cn, t as Button } from "./slides-BMNjH8eX.mjs";
import { n as DIAGRAMS } from "./diagrams-Ds9764XY.mjs";
import { n as structureById } from "./ribs-B3r9xs0p.mjs";
import { a as Minimize2, c as List, f as Clock, l as House, m as ChevronLeft, o as MessageSquareText, p as ChevronRight, s as Maximize2 } from "../_libs/lucide-react.mjs";
import { n as Route$1 } from "./router-ChBGCDgT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clase-faGceU39.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatTime(total) {
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function Deck({ initialN, modo }) {
	const navigate = useNavigate();
	const deck = (0, import_react.useMemo)(() => getDeck(modo), [modo]);
	const [index, setIndex] = (0, import_react.useState)(() => {
		const i = initialN - 1;
		return Math.min(Math.max(i, 0), Math.max(deck.length - 1, 0));
	});
	const [notes, setNotes] = (0, import_react.useState)(true);
	const [toc, setToc] = (0, import_react.useState)(false);
	const [seconds, setSeconds] = (0, import_react.useState)(0);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [wide, setWide] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [touchX, setTouchX] = (0, import_react.useState)(null);
	const slide = deck[index];
	const target = modo === "60" ? CORE_MINUTES : TOTAL_MINUTES;
	const over = seconds > target * 60;
	(0, import_react.useEffect)(() => {
		if (index > deck.length - 1) setIndex(Math.max(deck.length - 1, 0));
	}, [deck.length, index]);
	(0, import_react.useEffect)(() => {
		if (!slide) return;
		navigate({
			to: "/clase",
			search: (prev) => ({
				...prev,
				n: index + 1
			}),
			replace: true
		});
	}, [
		index,
		navigate,
		slide
	]);
	(0, import_react.useEffect)(() => {
		setPicked(slide?.highlight ?? null);
	}, [slide?.id, slide?.highlight]);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = window.setInterval(() => setSeconds((n) => n + 1), 1e3);
		return () => window.clearInterval(id);
	}, [running]);
	const go = (0, import_react.useCallback)((next) => {
		setIndex(Math.min(Math.max(next, 0), deck.length - 1));
		setToc(false);
	}, [deck.length]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
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
			} else if (e.key === "n" || e.key === "N") setNotes((v) => !v);
			else if (e.key === "t" || e.key === "T") setToc((v) => !v);
			else if (e.key === "f" || e.key === "F") {
				if (document.fullscreenElement) document.exitFullscreen();
				else document.documentElement.requestFullscreen();
			} else if (e.key === "Escape") setToc(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		deck.length,
		go,
		index
	]);
	if (!slide) return null;
	const Diagram = slide.diagram ? DIAGRAMS[slide.diagram] : null;
	const pick = structureById(picked);
	const section = SECTIONS.find((s) => s.id === slide.section);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-theatre text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-center gap-2 border-b border-paper/10 px-3 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex size-11 items-center justify-center rounded-md text-paper/70 hover:bg-paper/10 hover:text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Inicio"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-display text-sm tracking-tight",
							children: slide.chapter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-paper/50",
							children: [
								index + 1,
								" / ",
								deck.length,
								" · ",
								section?.label,
								!slide.core ? " · extra" : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setRunning((v) => !v),
						className: cn("flex h-11 items-center gap-2 rounded-md px-3 font-medium tabular-nums", over ? "bg-clinical text-paper" : "bg-paper/10 text-paper"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
							formatTime(seconds),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden text-xs opacity-70 sm:inline",
								children: [
									"/ ",
									target,
									" min"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-md bg-paper/10 p-1",
						children: ["60", "90"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								const kept = getDeck(m).findIndex((s) => s.id === slide.id);
								const n = kept >= 0 ? kept + 1 : 1;
								setIndex(n - 1);
								navigate({
									to: "/clase",
									search: {
										n,
										modo: m
									}
								});
							},
							className: cn("h-9 rounded-sm px-3 text-xs font-medium", modo === m ? "bg-paper text-ink" : "text-paper/70"),
							children: [m, " min"]
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => setNotes((v) => !v),
						"aria-label": "Guion",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => setToc((v) => !v),
						"aria-label": "Índice",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "hidden sm:inline-flex",
						onClick: () => setWide((v) => !v),
						"aria-label": "Ancho",
						children: wide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 overflow-hidden bg-paper/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full origin-left bg-accent transition-transform duration-200 ease-smooth",
					style: { transform: `scaleX(${(index + 1) / deck.length})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mx-auto grid w-full flex-1 gap-4 p-3 sm:p-5", notes ? "max-w-7xl lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]" : "max-w-6xl", wide && "max-w-none"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex min-h-0 flex-col rounded-xl bg-paper p-5 text-ink shadow-slide sm:p-8",
					onTouchStart: (e) => setTouchX(e.changedTouches[0]?.clientX ?? null),
					onTouchEnd: (e) => {
						if (touchX == null) return;
						const dx = e.changedTouches[0].clientX - touchX;
						if (dx > 56) go(index - 1);
						if (dx < -56) go(index + 1);
						setTouchX(null);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-muted",
							children: slide.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl leading-tight tracking-tight sm:text-4xl",
							children: slide.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("mt-6 grid min-h-0 flex-1 gap-6", Diagram ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : ""),
							children: [Diagram ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-56 overflow-hidden rounded-lg bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diagram, {
									highlight: picked,
									onSelect: (id) => setPicked((cur) => cur === id ? null : id)
								})
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-3",
									children: slide.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border-l-2 border-accent pl-4 text-lg leading-snug sm:text-xl",
										children: b
									}, b))
								}), pick ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									className: "mt-6 rounded-md bg-surface p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium uppercase tracking-widest text-muted",
											children: pick.klass
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display text-xl",
											children: pick.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: pick.joints
										})
									]
								}) : null]
							})]
						})
					]
				}), notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex min-h-0 flex-col rounded-xl border border-paper/10 bg-ink/40 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-paper/50",
						children: [
							"Lo que dices · ",
							slide.minutes,
							" min"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex-1 space-y-4 overflow-auto pr-1",
						children: [slide.script.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-paper/90",
							children: p
						}, i)), pick ? pick.speak.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border-l-2 border-accent pl-3 text-sm leading-relaxed text-paper/80",
							children: p
						}, p)) : null]
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-center justify-between gap-3 px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "paper",
						onClick: () => go(index - 1),
						disabled: index === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Anterior"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs text-paper/40 sm:block",
						children: "Flechas · espacio · N guion · T índice · F pantalla"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "paper",
						onClick: () => {
							go(index + 1);
							setRunning(true);
						},
						disabled: index === deck.length - 1,
						children: ["Siguiente", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})
				]
			}),
			toc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-theatre/70 p-4",
				onClick: () => setToc(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-h-full max-w-2xl flex-col overflow-hidden rounded-xl bg-paper text-ink shadow-slide",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-line px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: "Índice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setToc(false),
							children: "Cerrar"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex-1 space-y-1 overflow-auto p-3",
						children: deck.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => go(i),
							className: cn("flex w-full items-start gap-3 rounded-md px-3 py-3 text-left", i === index ? "bg-accent text-accent-fg" : "hover:bg-surface"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 tabular-nums text-sm opacity-60",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-medium",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("block text-xs", i === index ? "opacity-80" : "text-muted"),
									children: [s.chapter, !s.core ? " · extra" : ""]
								})]
							})]
						}) }, s.id))
					})]
				})
			}) : null
		]
	});
}
function ClasePage() {
	const { n, modo } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {
		initialN: n,
		modo
	});
}
//#endregion
export { ClasePage as component };
