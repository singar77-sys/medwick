# Medwick Design System — "The Builder's Geometry"

Masonic / Bauhaus direction (approved by Mark, 2026-07-15): **mathematical,
symmetrical, esoteric — everything on the golden ratio.**

## The rule of the system

φ = 1.618 derives every dimension. Nothing is eyeballed.

| Layer | Derivation |
|---|---|
| Type scale | body 17px, half-steps ×√φ (1.272), full steps ×φ — tokens `--t-sm` … `--t-6` |
| Spacing | powers of φ — tokens `--s-3n` … `--s4` (0.236 → 6.854rem) |
| Line-height | 1.618 body, 1.146 display |
| Layout splits | `.golden-split` = 1.618fr / 1fr (61.8 / 38.2) |
| Container / measure | 61.8rem / 38.2rem |
| Ornament dimensions | Fibonacci only: 21, 34, 55, 89, 144, 233, 377, 610 |
| Hero watermark | true golden-spiral construction in a 610×377 φ-rectangle |
| Hero pillar rules | at 9.02% margins (23.6% / φ) |

## Symbol language (the esoterica — kept at builder's-craft level)

Reads as **craftsmanship** to homeowners, as geometry to those who look closer.
**Never use** the actual square-and-compasses emblem (fraternal mark) or the
all-seeing eye (too loaded for a distressed-homeowner audience).

| Glyph | Meaning | Used for |
|---|---|---|
| △ (fire / gable) | the roof | Roofing |
| ▽ (alchemical water) | the flood | Water Mitigation |
| ◻ (the true square) | the rebuild | Reconstruction |
| ○ (the whole) | advocacy containing the trades | Insurance/advocacy contexts |
| Level | balance, the fair scope | Insurance Claims |
| Radiant star / compass rose | the storm and the response | Storm Damage |
| Keystone | the final stone, completion | Projects / completion |
| Golden spiral | the order beneath the chaos | Hero watermark only |
| ◆ lozenge | separator | lists, proof bands |

All glyphs are stroke-only line work, `currentColor`, in
`app/components/ornaments.jsx`.

## Composition rules

1. **Bilateral symmetry.** Every section head is centered on the vertical
   axis (temple-facade logic). Asymmetry is allowed only inside
   `.golden-split`, and only at 61.8/38.2.
2. **Sharp corners everywhere.** No border-radius. Bauhaus discipline.
3. **Roman numerals** number the homepage sections (tracing-board rhythm).
4. **Navy is the anchor, gold earns attention** (90/10 per BRAND.md).
   Small gold text on white always uses `--gold-ink` (#7D6634, WCAG AA).
5. **Ornament is structural or absent** — dividers mark section boundaries;
   glyphs carry meaning; nothing is decoration for its own sake.
6. Chrome is a facade: tagline strip → centered wordmark → nav between
   hairlines → gold ground-line (3px border).

## Files

- Tokens + all styling: `app/globals.css`
- Glyphs/ornaments: `app/components/ornaments.jsx`
- Section frame: `app/components/Section.jsx`
- Reference implementation: `app/page.jsx` (homepage)

Interior pages still render via `Stub.jsx` on the same axis; they get their
full treatments in Weeks 4–8 using these primitives.
