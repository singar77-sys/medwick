# Medwick Construction: Site Structure & On-Page SEO Spec

Build-ready architecture for the rebuild. Confirms the audit's §5 tree and adds the per-page on-page layer (titles, metas, H1s, schema, word floors, internal links) plus keyword→URL mapping.

---

## 1. URL architecture

```
/                                       Home
/roofing/                               Roofing hub
  /roofing/roof-replacement/
  /roofing/roof-repair/
  /roofing/storm-damage/                ← thinnest SERP, build FIRST
  /roofing/emergency/                   emergency tarping
  /roofing/insurance-claims/            ← empty content niche, build FIRST
/water-mitigation/                      Water hub
  /water-mitigation/emergency-water-removal/
  /water-mitigation/water-damage-cleanup/
  /water-mitigation/structural-drying/
  /water-mitigation/mold-prevention/
/remodeling/                            Remodeling hub
  /remodeling/kitchen/
  /remodeling/bathroom/
  /remodeling/basement/
  /remodeling/whole-home/
/service-areas/                         City hub → 14 city pages (phased, §4.3 of audit)
  /service-areas/medina-oh/
  /service-areas/brunswick-oh/  … etc.
/projects/                              real photos + per-project case studies
  /projects/{project-slug}/
/reviews/                               real on-page testimonials + GBP/FB links
/about/                                 owner story, MEDina+brunsWICK name, crew, reg #26-731, insured
/financing-warranty/
/guides/                                blog / resource hub
  /guides/{article-slug}/
/contact/                               form + map + hours + ONE phone number
```

URL rules: lowercase, hyphenated, trailing slash consistent, no dates in slugs, city pages always `{city}-oh`. No auto-generated pages. No duplicate self-canonical pairs (the AAPEX failure).

## 2. On-page spec by page type

Titles target ≤ 60 chars where possible; metas 150-160. `{City}` is templated but **body content is not**. See the anti-doorway rule.

### Homepage
- **Title:** `Roofing, Storm & Water Restoration in Medina, OH | Medwick`
- **Meta:** `Medina-based roofing, water mitigation & remodeling. Roof to restoration under one roof. Licensed, insured, City of Medina Registered #26-731. Free estimate: (330) 635-3744.`
- **H1:** `Medina County's Storm-to-Restoration Contractor`
- **Must be in server HTML:** 3 service pillars (roofing dominant), 5.0★ proof band linked to GBP, reg #26-731, real project photos, service-area list, owner block, two CTAs (Request Estimate / Emergency Call).
- **Schema:** `RoofingContractor` + `Organization`.

### Service hub (Roofing / Water / Remodeling)
- **Title (roofing):** `Roofing Contractor in Medina County, OH | Medwick Construction`
- **H1:** `Roofing in Medina County, Ohio`
- **Body:** ≥ 800 words, 100% unique. Sub-service cards linking down; proof; process; CTA.
- **Schema:** `Service` + `LocalBusiness`.

### Money sub-pages (the flanking wins)
| Page | Title | H1 |
|---|---|---|
| Storm damage | `Storm Damage Roof Repair in Medina County, OH \| Medwick` | `Storm Damage Roof Repair, Medina County` |
| Insurance claims | `Roof Insurance Claim Help in Medina, OH \| Medwick` | `Roof Insurance Claim Help in Medina County` |
| Emergency water | `24/7 Emergency Water Removal in Medina County, OH` | `Flooded Basement? Emergency Water Removal in Medina County` |
| Roof replacement | `Roof Replacement in Medina County, OH \| Cost & Options` | `Roof Replacement in Medina County` |
- **Body:** ≥ 800 words unique. Insurance/cost pages carry **FAQ schema**. Include honest price bands (the citable, GEO-friendly format 4K proved ranks).

### City pages (`/service-areas/{city}-oh/`)
- **Title:** `Roofing & Storm Restoration in {City}, OH | Medwick Construction`
- **Meta:** `{City}, Ohio roofing, water mitigation & remodeling from a Medina-based contractor. Real local projects, insurance-claim help. Free estimate: (330) 635-3744.`
- **H1:** `Roofing, Water & Restoration in {City}, Ohio`
- **Body:** ≥ 500 words, ≥ 40% unique. **Required unique elements** (anti-doorway gate, page does not ship without all four): (1) project photo set from that community, (2) named local testimonial, (3) town-specific housing/storm detail (e.g. 1950s lake-cottage roofs at Chippewa Lake; 2001+ builder-grade shingles aging out in Montville), (4) distinct FAQs.
- **Schema:** `LocalBusiness` with `geo` for that area.
- **Quality gate:** 14 pages total, well under the 30-page warning threshold. Do not scale past the audited 14.

### Projects / case studies
- **Title:** `{Project Type} in {City}, OH: Before & After | Medwick Projects`
- One page per real project. Feeds site + GBP post + social simultaneously (one asset, three channels).

### Reviews / About / Contact
- Reviews: real on-page testimonials (add `aggregateRating` schema **only** once they render). About: owner story + the MEDina+brunsWICK name equity + reg #26-731. Contact: `ContactPage` + `LocalBusiness`, one phone, map, hours.

## 3. Keyword → URL mapping

From audit §4.2 (autocomplete-verified). Each cluster owns one canonical URL; blog supports, never competes.

| Keyword cluster | Canonical URL | Priority |
|---|---|---|
| roof repair / roofers / roofing companies medina ohio | `/roofing/` + `/service-areas/medina-oh/` | High (contested) |
| storm damage roof repair medina county | `/roofing/storm-damage/` | **First: thinnest SERP** |
| roof insurance claim (process/denied/supplement) | `/roofing/insurance-claims/` | **First: empty niche** |
| emergency roof repair medina oh | `/roofing/emergency/` | High |
| roof replacement cost medina | `/roofing/roof-replacement/` + cost guide | Medium (4K owns) |
| water damage restoration / cleanup near me, 24/7 | `/water-mitigation/emergency-water-removal/` | High (map pack) |
| flooded basement who to call | `/water-mitigation/emergency-water-removal/` + guide | High |
| water damage insurance claim tips | `/guides/water-damage-insurance-claim-medina/` | **Empty niche** |
| roofing/roofers {brunswick/wadsworth} ohio | `/service-areas/{city}-oh/` | Medium |
| bathroom/kitchen/basement remodel {town} | `/remodeling/{type}/` + city page | Medium |
| roof repair / remodeling near me **with financing** | `/financing-warranty/` | Open modifier |

Water town-name queries returned empty autocomplete. Cover towns via service-area pages, but win water through GBP + the emergency layer, not by expecting town-query volume.

## 4. Internal linking model

Hub-and-spoke, enforced at build:
- **Home** → 3 service hubs + service-areas hub + reviews + about.
- **Service hub** → all its sub-pages (down) and up to Home; cross-link the trifecta hubs to each other once ("we also handle…").
- **Money sub-pages** → sibling sub-pages + up to hub + relevant city pages. Storm-damage ⇄ insurance-claims ⇄ emergency-water form a tight "the whole storm" cluster (the differentiator, interlinked).
- **City page** → its relevant service hubs (up) + 2-3 genuinely-nearby city pages (not all 14) + a matching project case study.
- **Guides/blog** → always link to the money page they support (insurance-claim guide → `/roofing/insurance-claims/`). This is how supporting content passes equity to converters.
- Descriptive anchor text (`storm damage roof repair in Brunswick`), never "click here."

## 5. Sitemaps & indexation

- One XML sitemap per section (`sitemap-services.xml`, `sitemap-service-areas.xml`, `sitemap-projects.xml`, `sitemap-guides.xml`) + index.
- Submit in Search Console at launch; watch coverage weekly.
- City/project pages enter the sitemap **only when they meet their content gate**, staged, not dumped.
