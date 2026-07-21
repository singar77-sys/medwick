# Self-hosted fonts

All wired in `app/layout.jsx` via `next/font/local` (Plus Jakarta Sans comes
from `next/font/google`, already self-hosted at build).

| File | Brand role | Token |
|---|---|---|
| `eurostile-ext-black.woff2` | **Eurostile Extended Black** — headings (h1/h2). Licensed Monotype font, converted from the web-license `.ttf`. | `--font-heading` → `--font-display` |
| `zodiak-extrabold.woff2` | **Zodiak Extrabold** — quote / promise serif (upright only; the site uses no italics) | `--font-zodiak` → `--font-serif` |

## Notes

- **Eurostile is licensed (Monotype).** These woff2 files are the web-license
  build — keep them out of any public font mirror. Source `.ttf` originals live
  in the brand-assets download, not the repo.
- To update a weight/style: drop the new woff2 here and add/adjust the matching
  `src` entry in `app/layout.jsx`.
- Zodiak is free (Fontshare); the full family (all weights + italics) is in the
  brand download if more styles are ever needed.
