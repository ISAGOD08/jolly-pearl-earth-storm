const TOKENS: Record<string, string> = {
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
  "var(--color-theatre)": "#111318",
};

export function flattenSvg(svg: SVGSVGElement) {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  let src = new XMLSerializer().serializeToString(clone);
  for (const [token, hex] of Object.entries(TOKENS)) {
    src = src.split(token).join(hex);
  }
  return src;
}

export function downloadText(filename: string, text: string, type: string) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadSvg(svg: SVGSVGElement, filename: string) {
  downloadText(filename, flattenSvg(svg), "image/svg+xml;charset=utf-8");
}

export function downloadPng(svg: SVGSVGElement, filename: string, scale = 2) {
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
