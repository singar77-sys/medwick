# Design decisions — new direction (restart 2026-07-17)

Running log of what Mark has approved, built top-down. The old system
("The Builder's Geometry") is retired and archived at
`_archive/website-design-v1-builders-geometry-2026-07-17` — do not revive it.

## Agreed so far

1. **Colors stay** — navy/gold brand palette (BRAND.md).
2. **Light + dark modes** — semantic tokens in `globals.css`; `data-theme` on
   `<html>`, set pre-paint by the inline script in `layout.jsx`; stored choice
   wins over OS preference; toggle in the header (`ThemeToggle.jsx`).
3. **Official logo assets** (from `Downloads/Medwick Assets`, copied to
   `public/`): `medwick-logo-light.png` (navy text, light header),
   `medwick-logo-dark.png` (white text, dark header). Full SVG brand kit in
   `public/brand/` — trade marks (roofing/water/recon, light+dark variants),
   storm/claim/repair marks, MW monogram — to replace the old inline glyphs
   as sections get rebuilt.
4. **Header on the Solomon temple grid** — three zones at 1 : 4 : 2
   (1 Kings 6, porch : hall : sanctuary): logo | nav | phone + theme toggle.
   Temple vocabulary stays in docs/code comments, never in visible copy.
5. **Nav: fewer options, dropdowns** — grouped NAV in `lib/site.js`:
   Storm & Claims ▾ · Services ▾ · Service Areas ▾ · Company ▾ · Contact.
   Desktop dropdowns (`PrimaryNav.jsx`): hover/click to open, one-open-at-a-time,
   close on hover-out / outside-tap / Escape / navigation.
6. **Mobile = hamburger drawer** (< 64rem). `Header.jsx` is a client component
   owning the drawer state; the hall collapses to a hamburger (⇄ X). The drawer
   drops below the header with a gold **Call** CTA on top, then the four groups
   as tap-to-expand accordions, then Contact. Closes on: link tap, outside tap,
   Escape, and resize back to desktop. Header phone becomes the drawer's Call
   button on mobile; theme toggle stays in the header bar.

7. **Video heroes** — stock B-roll transcoded to web MP4 + posters (see
   `VIDEO-MANIFEST.md`). Reusable `Hero.jsx` component: full-bleed muted/loop/
   inline video, poster still, `prefers-reduced-motion` respected (plays only
   when motion is OK), layered scrim. Always reads dark/cinematic regardless of
   theme. Buttons: `.btn` (gold solid) + `.btn-ghost` (white on hero).
   **Home hero** uses `crew-walkout-silhouette.mp4` (Mark's pick). Scrim is
   tuned for this clip's bright moving doorway — a flat base tint + strong
   bottom-left lift keeps the copy legible even at the brightest loop frame.

8. **Hero rollout + "Reconstruction" → "Remodeling" rename** (2026-07-17, Mark):
   Video heroes added to Home (`roofing-dawn-silhouette`), Contact
   (`crew-walkout-silhouette`), Roofing (`roofing-aerial-trusses`), Roof Claims
   (`roofing-winter-install`), Water Claims (`water-flood-cleanup`),
   Remodeling (`reconstruction-finished-interior`), Learning Center
   (`reconstruction-steel-framing`), Service Areas (`reconstruction-saw-cut`),
   Reviews (`sitework-groundbreaking`), Storm Damage (`storm-clouds-rooftop`,
   a new source clip), and Water Mitigation (`water-damaged-ceiling`, a new
   source clip). Section pages = `Hero` +
   `Stub underHero` (drops the stub's H1 so there's exactly one H1/page).
   The third trade renamed **Reconstruction → Remodeling**: route
   `/reconstruction/` → `/remodeling/` (old URL now 404s), nav label, page
   title/H1/schema, and cross-links from water-claims / water-mitigation /
   storm-damage all updated. Video files keep their `reconstruction-*` names
   (manifest mapping).

9. **Official brand system applied** (2026-07-20, from Mark's branding deck).
   **Colors** (exact): Refined Gold `#c0a675` (primary), Vintage Brass `#696251`
   (alt on dark), Pale Bouillon `#e0ceb1` (alt on light), Off-White `#f0f0f2`
   (text), Midnight Blue `#232935` (BG main), Prussian Blue `#2c3243` (BG alt).
   Dark mode now = Midnight field + Prussian cards. New tokens `--brass`,
   `--bouillon`, `--soft`.
   **Type** (all self-hosted; Mark sent the font files 2026-07-20): headings =
   **Eurostile Extd Black** (licensed Monotype, web-license `.ttf` → woff2),
   sub-headers + body = **Plus Jakarta Sans** (`next/font/google`),
   quotes/promise = **Zodiak Extrabold** + true italic. Files in
   `public/fonts/` (see its README). Tokens: `--font-display` (h1/h2),
   `--font-subhead` (h3 + nav/buttons/eyebrows), `--font-body`, `--font-serif`.

## Open

- ⚠ **Remodeling rename not propagated to strategy docs.** `content/*.md`
  (SITE-STRUCTURE, SEO-STRATEGY, POSITIONING, etc.) still say "reconstruction",
  and those planned `/reconstruction/{basement,kitchen,…}` sub-pages. Also a
  **positioning question**: "reconstruction" = insurance-funded restoration
  (the site's advocate angle); "remodeling" = discretionary home improvement —
  different search intent. Confirm with Mark whether this is a full positioning
  change (propagate everywhere + rethink keywords) or just a friendlier label.
- Nav group names/composition are a first proposal — Mark may reshuffle.
- Hero copy is DRAFT (insurance language pending Ohio counsel).
- Home + section pages below the hero: scaffold only — real content still to build.
