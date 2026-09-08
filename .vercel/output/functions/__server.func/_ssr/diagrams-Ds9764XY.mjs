import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as cn } from "./slides-BMNjH8eX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/diagrams-Ds9764XY.js
var import_jsx_runtime = require_jsx_runtime();
var bone = "var(--color-bone)";
var boneDeep = "var(--color-bone-deep)";
var cart = "var(--color-cartilage)";
var ink = "var(--color-ink)";
var clinical = "var(--color-clinical)";
function Label({ x, y, children, anchor = "start" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x,
		y,
		textAnchor: anchor,
		fill: ink,
		fontSize: "11",
		fontFamily: "Figtree, sans-serif",
		fontWeight: "500",
		children
	});
}
function CageAnterior({ className, highlight, onSelect }) {
	const ribs = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	];
	const yOf = (n) => 58 + n * 28;
	const widthOf = (n) => {
		if (n === 1) return 78;
		if (n <= 7) return 78 + n * 10;
		if (n <= 10) return 148 - (n - 7) * 12;
		return 70 - (n - 11) * 14;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 420 460",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "0",
				width: "420",
				height: "460",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			ribs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "198",
				y: yOf(n) - 8,
				width: "24",
				height: "16",
				rx: "3",
				fill: boneDeep,
				stroke: ink,
				strokeWidth: "0.8"
			}, `v-${n}`)),
			ribs.map((n) => {
				const y = yOf(n);
				const w = widthOf(n);
				const isTrue = n <= 7;
				const isFalse = n >= 8 && n <= 10;
				const selected = highlight === `rib-${n}`;
				const fill = selected ? "var(--color-accent)" : bone;
				const stroke = selected ? "var(--color-accent)" : ink;
				const cartEnd = isTrue ? 28 : isFalse ? 48 : w;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M210 ${y} C ${210 - w * .45} ${y + 6}, ${210 - w * .85} ${y + n * 1.2}, ${210 - w} ${y + 10}`,
						fill: "none",
						stroke,
						strokeWidth: selected ? 7 : 6,
						strokeLinecap: "round",
						opacity: highlight && !selected ? .35 : 1,
						className: "cursor-pointer",
						onClick: () => onSelect?.(`rib-${n}`)
					}),
					n <= 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${210 - w} ${y + 10} C ${210 - w + 8} ${y + 18}, ${200 - cartEnd} ${y + (isTrue ? 4 : 18)}, ${isTrue ? 192 : 168} ${isTrue ? y + 2 : y + 22}`,
						fill: "none",
						stroke: cart,
						strokeWidth: selected ? 6 : 5,
						strokeLinecap: "round",
						opacity: highlight && !selected ? .35 : 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M210 ${y} C ${210 + w * .45} ${y + 6}, ${210 + w * .85} ${y + n * 1.2}, ${210 + w} ${y + 10}`,
						fill: "none",
						stroke,
						strokeWidth: selected ? 7 : 6,
						strokeLinecap: "round",
						opacity: highlight && !selected ? .35 : 1,
						className: "cursor-pointer",
						onClick: () => onSelect?.(`rib-${n}`)
					}),
					n <= 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${210 + w} ${y + 10} C ${210 + w - 8} ${y + 18}, ${220 + cartEnd} ${y + (isTrue ? 4 : 18)}, ${isTrue ? 228 : 252} ${isTrue ? y + 2 : y + 22}`,
						fill: "none",
						stroke: cart,
						strokeWidth: selected ? 6 : 5,
						strokeLinecap: "round",
						opacity: highlight && !selected ? .35 : 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: 210 - w - 2,
						cy: y + 10,
						r: "7",
						fill,
						stroke: ink,
						strokeWidth: "0.7",
						className: "cursor-pointer",
						onClick: () => onSelect?.(`rib-${n}`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: 210 - w - 2,
						y: y + 14,
						textAnchor: "middle",
						fontSize: "8",
						fill: selected ? "var(--color-accent-fg)" : ink,
						fontFamily: "Figtree, sans-serif",
						fontWeight: "600",
						children: n
					})
				] }, n);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M192 52 L228 52 L236 88 L228 96 L224 250 L210 278 L196 250 L192 96 L184 88 Z",
				fill: highlight === "sternum" ? "var(--color-accent)" : bone,
				stroke: ink,
				strokeWidth: "1.2",
				className: "cursor-pointer",
				onClick: () => onSelect?.("sternum")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "196",
				y1: "88",
				x2: "224",
				y2: "88",
				stroke: ink,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "200",
				y1: "132",
				x2: "220",
				y2: "132",
				stroke: ink,
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "200",
				y1: "168",
				x2: "220",
				y2: "168",
				stroke: ink,
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "202",
				y1: "204",
				x2: "218",
				y2: "204",
				stroke: ink,
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "248",
				y: "72",
				children: "Manubrio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "248",
				y: "150",
				children: "Cuerpo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "248",
				y: "272",
				children: "Xifoides"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "22",
				y: "78",
				children: "1.ª verdadera"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "22",
				y: "250",
				children: "7.ª verdadera"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "22",
				y: "310",
				children: "8–10 falsas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "22",
				y: "390",
				children: "11–12 flotantes"
			})
		]
	});
}
function SternumDetail({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 460 420",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "460",
				height: "420",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(70,28)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 8 L120 8 L132 70 L118 82 L112 250 L80 292 L48 250 L42 82 L28 70 Z",
						fill: bone,
						stroke: ink,
						strokeWidth: "1.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 8 Q80 0 120 8",
						fill: "none",
						stroke: ink,
						strokeWidth: "1.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "36",
						y1: "70",
						x2: "124",
						y2: "70",
						stroke: ink,
						strokeWidth: "1.4"
					}),
					[
						118,
						158,
						198,
						238
					].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "50",
						y1: y,
						x2: "110",
						y2: y,
						stroke: ink,
						strokeWidth: "0.7"
					}, y)),
					[
						[
							28,
							38,
							"1"
						],
						[
							24,
							70,
							"2"
						],
						[
							30,
							118,
							"3"
						],
						[
							32,
							158,
							"4"
						],
						[
							34,
							198,
							"5"
						],
						[
							36,
							238,
							"6"
						],
						[
							44,
							268,
							"7"
						]
					].map(([x, y, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: Number(x),
						cy: Number(y),
						r: "5",
						fill: cart,
						stroke: ink,
						strokeWidth: "0.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: Number(x),
						y: Number(y) + 3,
						textAnchor: "middle",
						fontSize: "8",
						fill: ink,
						fontWeight: "700",
						children: n
					})] }, String(n))),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "138",
						y: "22",
						children: "Escotadura yugular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "138",
						y: "48",
						children: "Escotadura clavicular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "138",
						y: "78",
						children: "Ángulo esternal (Louis)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "138",
						y: "168",
						children: "Líneas de soldadura"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "138",
						y: "288",
						children: "Apófisis xifoides"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "80",
						y: "330",
						textAnchor: "middle",
						fontSize: "12",
						fill: ink,
						fontWeight: "600",
						fontFamily: "Figtree, sans-serif",
						children: "Cara anterior"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(300,40)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M20 10 L48 18 L52 78 L44 88 L40 250 L28 290 L18 250 L16 88 L8 70 Z",
						fill: boneDeep,
						stroke: ink,
						strokeWidth: "1.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "10",
						y1: "74",
						x2: "50",
						y2: "82",
						stroke: ink,
						strokeWidth: "1.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "60",
						y: "30",
						children: "Manubrio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "60",
						y: "86",
						children: "Ángulo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "60",
						y: "180",
						children: "Cuerpo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						x: "60",
						y: "292",
						children: "Xifoides"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "34",
						y: "330",
						textAnchor: "middle",
						fontSize: "12",
						fill: ink,
						fontWeight: "600",
						fontFamily: "Figtree, sans-serif",
						children: "Perfil"
					})
				]
			})
		]
	});
}
function TypicalRib({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 520 280",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "520",
				height: "280",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 120 C 70 70, 140 40, 230 58 C 320 76, 390 110, 470 168 C 486 182, 490 200, 470 210 C 380 168, 300 132, 210 122 C 130 112, 80 128, 48 158 C 36 148, 32 134, 40 120 Z",
				fill: bone,
				stroke: ink,
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "48",
				cy: "138",
				rx: "16",
				ry: "20",
				fill: boneDeep,
				stroke: ink,
				strokeWidth: "1.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "138",
				x2: "56",
				y2: "138",
				stroke: ink,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "118",
				cy: "78",
				r: "10",
				fill: boneDeep,
				stroke: ink,
				strokeWidth: "1.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 122 C 300 132, 380 168, 450 200",
				fill: "none",
				stroke: clinical,
				strokeWidth: "1.4",
				strokeDasharray: "4 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "16",
				y: "92",
				children: "Cabeza"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "70",
				y: "64",
				children: "Cuello"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "112",
				y: "54",
				children: "Tubérculo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "210",
				y: "42",
				children: "Ángulo posterior"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "330",
				y: "92",
				children: "Cuerpo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "400",
				y: "230",
				children: "Surco costal (VAN)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "430",
				y: "150",
				children: "Ext. anterior"
			})
		]
	});
}
function FirstRib({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 480 300",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "480",
				height: "300",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 170 C 90 80, 200 40, 320 70 C 400 90, 430 140, 400 190 C 360 230, 250 250, 140 230 C 90 220, 60 200, 70 170 Z",
				fill: bone,
				stroke: ink,
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "78",
				cy: "176",
				rx: "14",
				ry: "16",
				fill: boneDeep,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "150",
				cy: "92",
				r: "9",
				fill: boneDeep,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "250",
				cy: "86",
				r: "8",
				fill: "var(--color-accent)",
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 78 C 230 70, 270 78, 300 96",
				fill: "none",
				stroke: clinical,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M280 100 C 320 108, 360 130, 380 160",
				fill: "none",
				stroke: "var(--color-accent)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "40",
				y: "150",
				children: "Cabeza (1 carilla → T1)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "132",
				y: "68",
				children: "Tubérculo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "220",
				y: "54",
				children: "Tubérculo del escaleno"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "300",
				y: "54",
				children: "Surco a. subclavia + C8–T1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "310",
				y: "184",
				children: "Surco v. subclavia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "160",
				y: "270",
				children: "1.ª costilla derecha · cara superior"
			})
		]
	});
}
function RibClasses({ className }) {
	const items = [
		{
			n: "7",
			t: "Verdaderas",
			d: "Cartílago propio al esternón",
			c: bone
		},
		{
			n: "3",
			t: "Falsas",
			d: "8.ª–10.ª al cartílago común",
			c: cart
		},
		{
			n: "2",
			t: "Flotantes",
			d: "11.ª y 12.ª, extremo libre",
			c: boneDeep
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 480 220",
		className: cn("h-full w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "480",
			height: "220",
			fill: "var(--color-surface)",
			rx: "16"
		}), items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: `translate(${28 + i * 150}, 36)`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "136",
					height: "150",
					rx: "14",
					fill: it.c,
					stroke: ink,
					strokeWidth: "1.1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "68",
					y: "62",
					textAnchor: "middle",
					fontSize: "42",
					fontFamily: "Fraunces, serif",
					fill: ink,
					fontWeight: "600",
					children: it.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "68",
					y: "92",
					textAnchor: "middle",
					fontSize: "14",
					fontFamily: "Figtree, sans-serif",
					fill: ink,
					fontWeight: "700",
					children: it.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "68",
					y: "118",
					textAnchor: "middle",
					fontSize: "11",
					fontFamily: "Figtree, sans-serif",
					fill: ink,
					children: it.d.split(" ").slice(0, 3).join(" ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "68",
					y: "134",
					textAnchor: "middle",
					fontSize: "11",
					fontFamily: "Figtree, sans-serif",
					fill: ink,
					children: it.d.split(" ").slice(3).join(" ")
				})
			]
		}, it.t))]
	});
}
function Costovertebral({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 480 300",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "480",
				height: "300",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "50",
				width: "90",
				height: "70",
				rx: "10",
				fill: bone,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "128",
				width: "90",
				height: "70",
				rx: "10",
				fill: bone,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "78",
				y: "118",
				width: "74",
				height: "14",
				rx: "3",
				fill: cart,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "155",
				y: "148",
				width: "70",
				height: "22",
				rx: "8",
				fill: boneDeep,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 160 C 250 150, 310 130, 400 118",
				fill: "none",
				stroke: boneDeep,
				strokeWidth: "16",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 160 C 250 150, 310 130, 400 118",
				fill: "none",
				stroke: ink,
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "198",
				cy: "158",
				r: "16",
				fill: bone,
				stroke: ink,
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "228",
				cy: "158",
				r: "10",
				fill: boneDeep,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "78",
				y: "40",
				children: "Cuerpo T n"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "78",
				y: "220",
				children: "Cuerpo T n+1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "78",
				y: "116",
				children: "Disco"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "250",
				y: "196",
				children: "Apófisis transversa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "250",
				y: "90",
				children: "Articulación de la cabeza"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "250",
				y: "248",
				children: "Articulación costotransversa"
			})
		]
	});
}
function Sternocostal({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 420 340",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "420",
				height: "340",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M186 30 L234 30 L244 70 L232 82 L226 250 L210 280 L194 250 L188 82 L176 70 Z",
				fill: bone,
				stroke: ink
			}),
			[
				0,
				1,
				2,
				3,
				4,
				5,
				6
			].map((i) => {
				const y = 48 + i * 32;
				const len = 70 + Math.min(i, 4) * 8;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M188 ${y} C 160 ${y + 4}, 140 ${y + 8}, ${188 - len} ${y + 10}`,
					fill: "none",
					stroke: cart,
					strokeWidth: "7",
					strokeLinecap: "round"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M232 ${y} C 260 ${y + 4}, 280 ${y + 8}, ${232 + len} ${y + 10}`,
					fill: "none",
					stroke: cart,
					strokeWidth: "7",
					strokeLinecap: "round"
				})] }, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M118 248 C 150 270, 180 278, 210 278 C 240 278, 270 270, 302 248",
				fill: "none",
				stroke: cart,
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "20",
				y: "52",
				children: "1.ª (casi fibrosa)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "20",
				y: "116",
				children: "2.ª = ángulo de Louis"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "20",
				y: "244",
				children: "7.ª + lig. costoxifoideo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "20",
				y: "300",
				children: "Cartílago costal común"
			})
		]
	});
}
function SuperiorAperture({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 440 300",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "440",
				height: "300",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "220",
				cy: "168",
				rx: "28",
				ry: "22",
				fill: boneDeep,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "220",
				y: "172",
				textAnchor: "middle",
				fontSize: "11",
				fill: ink,
				fontWeight: "700",
				children: "T1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M192 160 C 120 150, 70 170, 80 210 C 90 248, 160 262, 220 258 C 280 262, 350 248, 360 210 C 370 170, 320 150, 248 160",
				fill: "none",
				stroke: ink,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M192 160 C 120 150, 70 170, 80 210 C 90 248, 160 262, 220 258 C 280 262, 350 248, 360 210 C 370 170, 320 150, 248 160",
				fill: "none",
				stroke: bone,
				strokeWidth: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "188",
				y: "248",
				width: "64",
				height: "22",
				rx: "4",
				fill: bone,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "220",
				y: "263",
				textAnchor: "middle",
				fontSize: "10",
				fill: ink,
				fontWeight: "600",
				children: "Manubrio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 176 L168 248",
				stroke: boneDeep,
				strokeWidth: "6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M340 176 L272 248",
				stroke: boneDeep,
				strokeWidth: "6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "220",
				y: "40",
				anchor: "middle",
				children: "Orificio torácico superior"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "70",
				y: "140",
				children: "1.ª costilla"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "310",
				y: "140",
				children: "Clavícula"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "70",
				y: "280",
				children: "Inclinado atrás→adelante y arriba→abajo"
			})
		]
	});
}
function IntercostalSpace({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 420 300",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "420",
				height: "300",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "40",
				width: "280",
				height: "44",
				rx: "10",
				fill: bone,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "196",
				width: "280",
				height: "44",
				rx: "10",
				fill: bone,
				stroke: ink
			}),
			[
				0,
				1,
				2,
				3,
				4,
				5
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 90 + i * 40,
				y1: "88",
				x2: 130 + i * 40,
				y2: "192",
				stroke: "var(--color-accent)",
				strokeWidth: "3",
				opacity: "0.55"
			}, `e-${i}`)),
			[
				0,
				1,
				2,
				3,
				4,
				5
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 130 + i * 40,
				y1: "88",
				x2: 90 + i * 40,
				y2: "192",
				stroke: cart,
				strokeWidth: "3",
				opacity: "0.7"
			}, `i-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "300",
				cy: "96",
				r: "7",
				fill: "#5b6b8a",
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "300",
				cy: "114",
				r: "7",
				fill: clinical,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "300",
				cy: "132",
				r: "7",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "318",
				y: "100",
				children: "Vena"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "318",
				y: "118",
				children: "Arteria"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "318",
				y: "136",
				children: "Nervio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "70",
				y: "32",
				children: "Costilla suprayacente · surco costal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "70",
				y: "260",
				children: "Puncionar por el borde SUPERIOR de la costilla de abajo"
			})
		]
	});
}
function IntercostalMuscles({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 460 240",
		className: cn("h-full w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "460",
			height: "240",
			fill: "var(--color-surface)",
			rx: "16"
		}), [
			{
				t: "Externo",
				s: "Atrás → adelante y abajo",
				x: 24
			},
			{
				t: "Interno",
				s: "Adelante → atrás y abajo",
				x: 168
			},
			{
				t: "Íntimo",
				s: "Fondo · cubre el VAN",
				x: 312
			}
		].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: `translate(${c.x},28)`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "124",
					height: "184",
					rx: "14",
					fill: bone,
					stroke: ink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "62",
					y: "36",
					textAnchor: "middle",
					fontSize: "14",
					fontWeight: "700",
					fill: ink,
					fontFamily: "Figtree, sans-serif",
					children: c.t
				}),
				Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: c.t === "Interno" ? 92 - i : 28 + i * 2,
					y1: 58 + i * 16,
					x2: c.t === "Interno" ? 32 : 96,
					y2: 78 + i * 16,
					stroke: c.t === "Íntimo" ? clinical : "var(--color-accent)",
					strokeWidth: "3"
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "62",
					y: "168",
					textAnchor: "middle",
					fontSize: "10",
					fill: ink,
					fontFamily: "Figtree, sans-serif",
					children: c.s.split(" · ")[0]
				})
			]
		}, c.t))]
	});
}
function DiaphragmHiatus({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 420 360",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "420",
				height: "360",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "210",
				cy: "190",
				rx: "150",
				ry: "120",
				fill: "var(--color-accent)",
				opacity: "0.16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 200 C 90 90, 160 70, 210 86 C 260 70, 330 90, 340 200 C 330 290, 250 310, 210 300 C 170 310, 90 290, 80 200 Z",
				fill: cart,
				stroke: ink,
				strokeWidth: "1.4",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 150 C 186 120, 160 128, 168 158 C 140 170, 150 210, 186 200 C 200 230, 220 230, 234 200 C 270 210, 280 170, 252 158 C 260 128, 234 120, 210 150 Z",
				fill: bone,
				stroke: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "232",
				cy: "168",
				rx: "16",
				ry: "12",
				fill: clinical
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "232",
				y: "172",
				textAnchor: "middle",
				fontSize: "8",
				fill: "white",
				fontWeight: "700",
				children: "VCI"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "210",
				cy: "214",
				rx: "14",
				ry: "10",
				fill: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "210",
				y: "218",
				textAnchor: "middle",
				fontSize: "8",
				fill: "white",
				fontWeight: "700",
				children: "Esof"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "210",
				cy: "256",
				rx: "18",
				ry: "11",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "210",
				y: "260",
				textAnchor: "middle",
				fontSize: "8",
				fill: "white",
				fontWeight: "700",
				children: "Aorta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "258",
				y: "164",
				children: "T8 · vena cava inf."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "258",
				y: "218",
				children: "T10 · esófago + vagos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "258",
				y: "260",
				children: "T12 · aorta + conducto torácico"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "210",
				y: "40",
				anchor: "middle",
				children: "Vista inferior · hiatos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "70",
				y: "330",
				children: "Cúpula derecha más alta"
			})
		]
	});
}
function PhrenicNerve({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 360",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "280",
				height: "360",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "140",
				y: "36",
				textAnchor: "middle",
				fontSize: "13",
				fontWeight: "700",
				fill: ink,
				fontFamily: "Figtree, sans-serif",
				children: "C3 · C4 · C5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "140",
				y: "54",
				textAnchor: "middle",
				fontSize: "10",
				fill: ink,
				fontFamily: "Figtree, sans-serif",
				children: "“keeps the diaphragm alive”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M140 62 L140 300",
				stroke: clinical,
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			[
				90,
				140,
				190,
				240
			].map((y, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "140",
				cy: y,
				r: "5",
				fill: clinical
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "154",
				y: y + 4,
				fontSize: "11",
				fill: ink,
				fontFamily: "Figtree, sans-serif",
				children: [
					"Cuello (escaleno ant.)",
					"Tórax (pericardio)",
					"Raíz pulmonar por delante",
					"Hemidiafragma"
				][i]
			})] }, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 300 C 80 320, 200 320, 240 300",
				fill: "none",
				stroke: cart,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "140",
				y: "344",
				anchor: "middle",
				children: "Nervio frénico"
			})
		]
	});
}
function ThoracicTypes({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 480 200",
		className: cn("h-full w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "480",
			height: "200",
			fill: "var(--color-surface)",
			rx: "16"
		}), [
			{
				t: "Ancho y corto",
				d: "Ángulo infraesternal abierto"
			},
			{
				t: "Normal",
				d: "Intermedio"
			},
			{
				t: "Largo y estrecho",
				d: "Ángulo cerrado · longilíneo"
			}
		].map((tp, i) => {
			const w = [
				70,
				52,
				38
			][i];
			const h = [
				110,
				120,
				140
			][i];
			const x = 70 + i * 150;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: x,
					cy: 120,
					rx: w,
					ry: h / 2,
					fill: bone,
					stroke: ink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x,
					y: 36,
					textAnchor: "middle",
					fontSize: "13",
					fontWeight: "700",
					fill: ink,
					fontFamily: "Figtree, sans-serif",
					children: tp.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x,
					y: 188,
					textAnchor: "middle",
					fontSize: "10",
					fill: ink,
					fontFamily: "Figtree, sans-serif",
					children: tp.d
				})
			] }, tp.t);
		})]
	});
}
function InferiorAperture({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 440 260",
		className: cn("h-full w-full", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "440",
				height: "260",
				fill: "var(--color-surface)",
				rx: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 70 C 90 40, 350 40, 370 70 C 400 120, 360 200, 300 210 C 260 140, 180 140, 140 210 C 80 200, 40 120, 70 70 Z",
				fill: bone,
				stroke: ink,
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M140 210 C 180 150, 260 150, 300 210",
				fill: "none",
				stroke: cart,
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "220",
				y: "64",
				textAnchor: "middle",
				fontSize: "11",
				fill: ink,
				fontWeight: "600",
				children: "Xifoides"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "220",
				y: "130",
				textAnchor: "middle",
				fontSize: "11",
				fill: ink,
				fontWeight: "600",
				children: "Ángulo infraesternal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				x: "40",
				y: "230",
				children: "11.ª–12.ª · T12 atrás · plano oblicuo, diafragma por encima"
			})
		]
	});
}
var DIAGRAMS = {
	cage: CageAnterior,
	sternum: SternumDetail,
	rib: TypicalRib,
	first: FirstRib,
	classes: RibClasses,
	costovertebral: Costovertebral,
	sternocostal: Sternocostal,
	superior: SuperiorAperture,
	inferior: InferiorAperture,
	intercostal: IntercostalSpace,
	muscles: IntercostalMuscles,
	diaphragm: DiaphragmHiatus,
	phrenic: PhrenicNerve,
	types: ThoracicTypes
};
//#endregion
export { DIAGRAMS as n, CageAnterior as t };
