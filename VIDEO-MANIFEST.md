# Video assets — manifest

Stock B-roll for hero backgrounds, transcoded to web-ready MP4 (H.264, 1080p,
audio stripped, `+faststart`) with JPG + WebP poster stills. Source `.mov`
files (Adobe Stock originals, ~1.35 GB) are **not** in `public/` — they live in
`_archive/video-source-mov/` so they never deploy. Keep this file as the
license-traceability record: clean name → Adobe Stock ID.

- **Web videos:** `public/video/<name>.mp4` → referenced as `/video/<name>.mp4`
- **Posters:** `public/video/posters/<name>.jpg` and `.webp`
- **License:** each maps to an Adobe Stock asset ID below — record the license
  under that ID in the Adobe account. Do not use beyond the purchased license.

## Catalog

Grouped by category. ⭐ = strongest hero candidate for that section.

### Roofing
| Name | Adobe ID | Source dims / dur | What it shows |
|---|---|---|---|
| `roofing-dawn-silhouette` ⭐ | 537193532 | 1920×1080 · 16.4s | Roofer silhouette standing on a metal roof at dawn, mountains behind — cinematic; doubles as the **home** hero |
| `roofing-winter-install` | 306615819 | 1920×1080 · 10.7s | Harnessed roofer on a dark shingled roof, exposed timber gable, winter backdrop |
| `roofing-aerial-trusses` | 497677204 | 2048×1080 · 20.1s | Aerial over wood roof-truss framing of a new build |
| `roofing-aerial-decking` | 510106896 | 2048×1080 · 20.5s | Aerial, worker laying plywood roof decking on a timber frame |
| `roofing-aerial-teardown` | 754630691 | 1920×1080 · 28.3s | Aerial top-down of a roof mid tear-off: stripped decking, shingle-debris pile, crew working — the emergency storm-response hero |

### Storm damage
| Name | Adobe ID | Source dims / dur | What it shows |
|---|---|---|---|
| `storm-clouds-rooftop` ⭐ | 436032545 | 1920×1080 · 7.5s | Dark storm clouds rolling over trees and a rooftop — the storm-damage hero |
| `storm-rain-roof` | 398227399 | 1920×1080 · 17.8s | Rain sheeting off a roof edge into the gutter, dark and wet — moody |
| `storm-downspout-runoff` | 478420823 | 1920×1080 · 16.0s | Downspout gushing runoff onto shingles during a storm |

### Water mitigation
| Name | Adobe ID | Source dims / dur | What it shows |
|---|---|---|---|
| `water-damaged-ceiling` ⭐ | 1119578348 | 1920×1080 · 9.6s | Water-damaged ceiling sagging and peeling, exposed wet wood — the water-mitigation hero |
| `water-flood-cleanup` | 574382388 | 1920×1080 · 13.0s | Push-broom sweeping standing water across a flooded floor, water splashing |
| `water-bathroom-ceiling` | 529739792 | 2048×1080 · 9.7s | Trowel patching a water-damaged tiled bathroom ceiling |
| `water-ceiling-repair` | 439687204 | 1920×1080 · 10.0s | Scraping water-damaged drywall off a ceiling with a putty knife |
| `water-drainage-outflow` | 303178478 | 1920×1080 · 18.0s | Mossy outdoor concrete culvert, rusty pipe discharging murky water. **Unused** — tried on emergency-water-removal, swapped out (reads as derelict outdoor drainage, not an in-home response). In the library if a use comes up |

### Reconstruction
| Name | Adobe ID | Source dims / dur | What it shows |
|---|---|---|---|
| `reconstruction-steel-framing` ⭐ | 363350191 | 1920×1080 · 9.3s | Interior steel-stud framing going up, stack of galvanized studs in foreground |
| `reconstruction-saw-cut` | 326690985 | 1920×1080 · 14.5s | Circular saw cutting board by a window, backlit sawdust haze |
| `reconstruction-finished-interior` | 481247390 | 1920×1080 · 7.3s | Finished remodeled apartment interior — the "after" |

### Sitework
| Name | Adobe ID | Source dims / dur | What it shows |
|---|---|---|---|
| `sitework-grading` | 587333271 | 2048×1080 · 20.1s | Hi-vis worker raking/grading red dirt next to a concrete driveway |
| `sitework-groundbreaking` | 304094455 | 1920×1080 · 30.6s | Pick/mattock loosening ground beside a fresh concrete curb |

### Crew / brand
| Name | Adobe ID | Source dims / dur | What it shows |
|---|---|---|---|
| `crew-walkout-silhouette` ⭐ | 449491825 | 1920×1080 · 13.0s | Three-person crew walking out toward a bright bay door, dramatic silhouette — good for **home** or **about** |
| `medwick-storm-response` ⭐ | — (Medwick-branded) | 1280×720 · 12.0s | **Medwick's own footage** — a Medwick-shirted crewman on a storm-damaged roof (fallen branch, torn shingles), then interior flooring work. Source: `Desktop/this_guy_responds_to_storm_dam.mp4` (has audio; stripped for the muted hero). Kept native 720p (not upscaled). The **Projects** hero. Not Adobe Stock — no license ID. |

## Batch 3 (added 2026-07-21)

Eleven more Adobe Stock clips, same pipeline. ⭐ = placed on a hero; the rest
are in the library, ready to swap in.

| Name | Adobe ID | Dur | What it shows | Where it's used |
|---|---|---|---|---|
| `roofing-aerial-neighborhood` ⭐ | 1535802462 | 14.1s | Aerial over a suburban shingled roof and brick chimney, neighborhood around it | **About** hero ("Medina Born, Brunswick Raised") |
| `storm-downpour-roof` | 503957803 | 13.0s | Heavy downpour sheeting off a metal roof edge, lush green behind | library (strong storm alt) |
| `storm-rain-clay-tiles` | 509710001 | 9.7s | Rain streaming off old clay/terracotta roof tiles | library (clay tile is off-region for Ohio) |
| `roofing-aerial-sheathing` | 511763198 | 20.4s | Aerial top-down, worker laying OSB roof sheathing on a new build | library (overlaps existing roofing aerials) |
| `roofing-torch-down` | 503198263 | 30.0s | Torch-applied bitumen membrane on a flat roof, flame and roller | library (reads commercial/flat, not residential) |
| `remodel-spray-insulation` | 513683924 | 13.2s | Spray-foam insulation onto timber framing, worker in full gear | library (good "mid-rebuild" option) |
| `remodel-wall-plaster` | 510270594 | 27.7s | Worker troweling/plastering a concrete wall | library |
| `remodel-wall-smoothing` | 509972546 | 23.8s | Gloved hands smoothing a plaster wall, close up | library |
| `sitework-concrete-screed` | 341207794 | 8.5s | Screeding and leveling a wet concrete floor | library |
| `metal-welding-sparks` | 504863777 | 26.8s | Welding sparks, dark and dramatic close up | library ⚠ off-trade (Medwick does not weld) |
| `crane-night-lights` | 427280562 | 31.8s | Tower crane at night, colored lights and fog | library ⚠ off-brand (commercial high-rise, not residential) |

## Notes / options

- **Format:** MP4 (H.264) is served everywhere including mobile. A VP9 **WebM**
  pass (~30% smaller) is an available follow-up if we want to shave load — it's
  slow to encode, so it wasn't run by default.
- **Duration:** clips are kept full-length; heroes can loop them or a per-hero
  trim can be cut later if a shorter loop is wanted.
- **Mobile:** the 1080p MP4s work on mobile as-is (the browser scales); if hero
  load time is a concern on cellular we can add 720p variants.
