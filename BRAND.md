# Medwick Construction Brand Reference

Colors and type **measured directly from the logo file** (`public/medwick-logo.webp`) by sampling pixels, not eyeballed. Use these tokens for the plan site and for the eventual production website build.

> **Caveat on fonts:** a logo's exact typefaces can't be identified with certainty from a raster image, so the values below are close web-font matches to the letterforms, not confirmed originals. For the exact fonts, ask the logo's designer or run a tight crop of the wordmark through a font-ID tool (WhatTheFont / Fontspring Matcherator).

---

## Colors

| Token | Hex | RGB | Role |
|---|---|---|---|
| Navy (primary) | `#2C3242` | 44, 50, 66 | Logo background. Headers, hero, table headers, headings. |
| Navy (deep) | `#232935` | 35, 41, 53 | Darkened for gradient depth / deep fills. |
| Navy (ink) | `#1A1F29` | 26, 31, 41 | Deepest tone, for text on gold buttons and max contrast. |
| Gold (accent) | `#C0A674` | 192, 166, 116 | Metallic **antique gold** (measured highlight). Rules, buttons, fills, highlights. |
| Gold (mid) | `#A98F5F` | 169, 143, 95 | Large accents. |
| Gold (ink) | `#7D6634` | 125, 102, 52 | **Derived, not in logo.** Darkened so small gold text meets WCAG AA on white. |
| Gold (soft) | `#F2EBDB` | 242, 235, 219 | Tint for callouts / soft backgrounds. |
| White (wordmark) | `#F0F0F2` | 240, 240, 242 | Slightly cool off-white. Logo wordmark. |

Measured gradient range of the navy background: `#293040` → `#2E3545`. Measured gold metallic range: `#B59D6B` → `#C0A674`.

### Contrast notes (important for the production site)
- `#C0A674` gold on white is **~1.9:1**, which fails for text. Use gold only for fills, rules, and large display. For small text on white, use `#7D6634` (gold-ink, ~5:1) or navy.
- White `#F0F0F2` and gold `#C0A674` both read well on the navy background.

### CSS custom properties
```css
:root {
  --navy:       #2C3242;
  --navy-deep:  #232935;
  --navy-ink:   #1A1F29;
  --gold:       #C0A674;
  --gold-deep:  #A98F5F;
  --gold-ink:   #7D6634; /* small gold text on white */
  --gold-soft:  #F2EBDB;
  --white:      #F0F0F2;
}
```

---

## Typography

| Logo element | Letterform observed | Web-font match in use |
|---|---|---|
| **MEDWICK** wordmark | Wide, heavy grotesque, all-caps | **Archivo** (600-800) |
| CONSTRUCTION | Light, widely letter-spaced caps | Archivo, light weight, `letter-spacing: ~0.16em` |
| *"Building Excellence, One Project at a Time."* | Italic serif | **Lora** italic (500-600) |
| Body copy (site only, not from logo) | n/a | Source Sans 3 (400/600/700) |

### Font stacks
```css
--font-display: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; /* headings, wordmark feel */
--font-serif:   'Lora', Georgia, 'Times New Roman', serif;                            /* italic tagline */
--font-body:    'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Google Fonts (self-hosted via `next/font` on this site): [Archivo](https://fonts.google.com/specimen/Archivo), [Lora](https://fonts.google.com/specimen/Lora), [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3).

---

## Usage guidance

- **Navy is the anchor**, gold is the accent, roughly 90/10. Gold earns attention because it's used sparingly (header rule, primary button, active states, key numbers).
- The tagline **"Building Excellence, One Project at a Time."** is part of the brand. Set it in serif italic, gold, on navy where space allows.
- Reading surfaces use a warm off-white (`#F7F6F2`) with dark ink, not the navy. Navy is for chrome and emphasis, not long body text.
- Logo file: `public/medwick-logo.webp` (400×400, navy field baked in, so it sits best on a navy or neutral tile, not on white).
