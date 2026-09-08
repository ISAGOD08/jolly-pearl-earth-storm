#!/usr/bin/env python3
"""Composite exact lockup onto the unlabeled rib-cage plate → 1200×630 PNG."""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

SRC = "/workspace/artifacts/imagine_images/90a2521c-925a-46e6-aa8b-426ef0d37e15.jpg"
OUT = "/workspace/.grok/og-composed.png"

INK = (26, 24, 20)  # #1a1814
PAPER = (246, 239, 222)
SLATE = (44, 74, 82)  # #2c4a52
BONE = (217, 203, 180)  # #d9cbb4

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
SERIF_I = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"

W, H = 1200, 630


def tracked_width(font, text, tracking):
    if not text:
        return 0
    return sum(font.getlength(ch) for ch in text) + tracking * (len(text) - 1)


def draw_tracked(draw, text, cx, y, font, fill, tracking=0):
    total = tracked_width(font, text, tracking)
    x = cx - total / 2
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking
    return total


def paper_field(w, h, base):
    rng = np.random.default_rng(7)
    noise = rng.integers(-4, 5, size=(h, w, 3), dtype=np.int16)
    arr = np.clip(np.array(base, dtype=np.int16) + noise, 0, 255).astype(np.uint8)
    return Image.fromarray(arr, "RGB")


def feather_mask(w, h, fade):
    mask = Image.new("L", (w, h), 255)
    m = np.array(mask)
    for i in range(fade):
        a = int(255 * (i / fade))
        m[i, :] = np.minimum(m[i, :], a)
        m[-1 - i, :] = np.minimum(m[-1 - i, :], a)
        m[:, i] = np.minimum(m[:, i], a)
        m[:, -1 - i] = np.minimum(m[:, -1 - i], a)
    return Image.fromarray(m, "L")


def main():
    src = Image.open(SRC).convert("RGB")
    crop = src.crop((32, 32, src.width - 32, src.height - 32))

    canvas = paper_field(W, H, PAPER)

    target_w = 1020
    scale = target_w / crop.width
    rw, rh = target_w, int(round(crop.height * scale))
    plate = crop.resize((rw, rh), Image.Resampling.LANCZOS).convert("RGBA")
    plate.putalpha(feather_mask(rw, rh, 72))
    paste_x = (W - rw) // 2
    paste_y = 78
    canvas = canvas.convert("RGBA")
    canvas.alpha_composite(plate, (paste_x, paste_y))

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    cx = W / 2

    inset = 28
    d.rectangle([inset, inset, W - inset - 1, H - inset - 1], outline=(*SLATE, 145), width=1)
    d.rectangle(
        [inset + 5, inset + 5, W - inset - 6, H - inset - 6],
        outline=(*BONE, 210),
        width=1,
    )

    font_small = ImageFont.truetype(SERIF, 36)
    font_title = ImageFont.truetype(SERIF, 82)
    font_sub = ImageFont.truetype(SERIF_I, 24)

    draw_tracked(d, "Caja", cx, 46, font_small, (*INK, 255), tracking=16)
    tw = draw_tracked(d, "Torácica", cx, 86, font_title, (*INK, 255), tracking=9)

    rule_w = max(tw, 460)
    d.line([(cx - rule_w / 2, 176), (cx + rule_w / 2, 176)], fill=(*SLATE, 150), width=1)

    sub = "Clase de anatomía · 75–90 min"
    d.line([(cx - rule_w / 2, 558), (cx + rule_w / 2, 558)], fill=(*SLATE, 150), width=1)
    draw_tracked(d, sub, cx, 570, font_sub, (*SLATE, 255), tracking=1.4)

    out = Image.alpha_composite(canvas.convert("RGBA"), overlay).convert("RGB")
    out.save(OUT, "PNG")
    print("wrote", OUT, out.size)


if __name__ == "__main__":
    main()
