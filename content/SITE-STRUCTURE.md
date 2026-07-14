# Medwick Construction: Site Structure & On-Page SEO Spec

Build-ready architecture for the rebuild. Reflects the three July 14, 2026 Competitive Authority Reports (roofing, water, remodeling): roofing and water are **primary hubs**, remodeling is a **conditional hub**, and an explicit **answer-engine (AI/AEO) layer** now sits in the architecture because generative search is the single biggest open gap in all three markets. Confirms the tree and adds the per-page on-page layer (titles, metas, H1s, schema, word floors, internal links) plus keyword to URL mapping. Consistent with COMPETITOR-ANALYSIS.md.

---

## 1. URL architecture

```
/                                       Home
                                        --- PRIMARY HUBS (build first, full depth) ---
/roofing/                               Roofing hub  [PRIMARY]
  /roofing/roof-replacement/
  /roofing/roof-repair/
  /roofing/storm-damage/                ← thinnest SERP, build FIRST
  /roofing/emergency/                   emergency tarping
  /roofing/insurance-claims/            ← empty content niche, build FIRST
/water-mitigation/                      Water hub  [PRIMARY]
  /water-mitigation/emergency-water-removal/   ← response-time proof lives here
  /water-mitigation/water-damage-cleanup/
  /water-mitigation/structural-drying/
  /water-mitigation/mold-prevention/
  /water-mitigation/insurance-claims/   ← empty niche, water claim advocacy, build FIRST
                                        --- ANSWER-ENGINE LAYER (AI/AEO, the #1 gap, build alongside primaries) ---
/answers/                               Answer/FAQ hub → Q&A pages carrying FAQPage schema
  /answers/{question-slug}/
/llms.txt                               root-level AI crawl guide (file, not a page)
                                        --- CONDITIONAL HUB (build ONLY if owner elects to contest remodeling; see roadmap decision point) ---
/remodeling/                            Remodeling hub  [CONDITIONAL]
  /remodeling/kitchen/
  /remodeling/bathroom/
  /remodeling/basement/                 ← basement-FINISHING: the unowned seat, top priority if this hub is built
  /remodeling/whole-home/
                                        --- SHARED (build regardless) ---
/service-areas/                         City hub → 14 city pages (phased, §4.3 of audit)
  /service-areas/medina-oh/
  /service-areas/brunswick-oh/  … etc.
/projects/                              real photos + per-project case studies (remodel projects also sync to Houzz)
  /projects/{project-slug}/
/reviews/                               real on-page testimonials + GBP/FB links (review schema once they render)
/about/                                 owner story, MEDina+brunsWICK name, crew, reg #26-731, insured
/financing-warranty/
/guides/                                blog / resource hub
  /guides/{article-slug}/
/contact/                               form + map + hours + ONE phone number
```

URL rules: lowercase, hyphenated, trailing slash consistent, no dates in slugs, city pages always `{city}-oh`. No auto-generated pages. No duplicate self-canonical pairs (the AAPEX failure). Conditional (remodeling) pages ship only if the owner elects to contest that market; do not build the hub speculatively. Answer pages are subject to the same anti-doorway rule as everything else: each is a genuine, unique Q&A, never a templated shell.

## 2. On-page spec by page type

Titles target ≤ 60 chars where possible; metas 150-160. `{City}` is templated but **body content is not**. See the anti-doorway rule.

### Homepage
- **Title:** `Roofing, Storm & Water Restoration in Medina, OH | Medwick`
- **Meta:** `Medina-based roofing, water mitigation & remodeling. Roof to restoration under one roof. Licensed, insured, City of Medina Registered #26-731. Free estimate: (330) 635-3744.`
- **H1:** `Medina County's Storm-to-Restoration Contractor`
- **Must be in server HTML:** 3 service pillars (roofing and water dominant, remodeling supporting), 5.0★ proof band linked to GBP, reg #26-731, real project photos, service-area list, owner block, an answer-optimized FAQ block (feeds the AI layer and `FAQPage` schema), two CTAs (Request Estimate / Emergency Call).
- **Schema:** `RoofingContractor` + `Organization` + `FAQPage`. Consistent NAP in footer and schema (identical name/address/phone) so AI systems resolve one entity.

### Service hub (Roofing / Water primary; Remodeling conditional)
- **Title (roofing):** `Roofing Contractor in Medina County, OH | Medwick Construction`
- **H1:** `Roofing in Medina County, Ohio`
- **Body:** ≥ 800 words, 100% unique. Sub-service cards linking down; proof; process; a short answer-optimized FAQ block; CTA.
- **Schema:** `Service` + `LocalBusiness` + `FAQPage`.
- **Water hub extra (response-time proof):** the water field has no local champion and no award holder, so speed is the wedge. The water hub and `/water-mitigation/emergency-water-removal/` must carry a "we prove our speed" element: stated in-county response window, timestamped real job examples, 24/7 line, and the in-county-vs-regional contrast (a Medina-based crew beats North Royalton / Akron / Cleveland arrival times).
- **Remodeling hub (conditional):** built only if the owner contests remodeling. If built, it leads with the price-of-entry credentials (NARI/NKBA, Best of Houzz) and embeds a Houzz portfolio widget, because the top tier is genuinely credentialed and Houzz is the underplayed local channel.

### Answer-engine layer (Answers/FAQ hub + Q&A pages + llms.txt)
This is the **#1 competitive gap**: across all three markets, no competitor is the cited answer when a homeowner asks an AI who to call. Build alongside the primary hubs, not after.
- **/answers/ hub Title:** `Roofing & Water Damage Questions, Answered | Medwick, Medina OH`
- **H1:** `Medina County Roofing & Water Damage: Answers`
- **Each Q&A page:** the H1 is one real homeowner question phrased the way it is typed; the first paragraph is a direct 40-60 word answer (the citable passage), then ≥ 300 words of supporting detail; `FAQPage` schema; a link down to the money page that converts.
- **Target questions** homeowners actually type or ask an assistant: "who do I call for a flooded basement in Medina", "does homeowners insurance cover roof storm damage in Ohio", "how fast can someone come out for water damage", "roof replacement cost in Medina Ohio", "what does basement finishing cost / how long does it take" (last one only if remodeling is contested).
- **llms.txt** at root: plain-text map of the hubs, services, service area, NAP, and the answer pages so AI crawlers can parse who Medwick is and what it covers.
- **Review schema:** add `aggregateRating` / `Review` markup so star ratings render in results, but **only once real reviews exist on-page**. Never fabricate the count (see COMPETITOR-ANALYSIS guardrails).

### Money sub-pages (the flanking wins)
| Page | Title | H1 |
|---|---|---|
| Storm damage | `Storm Damage Roof Repair in Medina County, OH \| Medwick` | `Storm Damage Roof Repair, Medina County` |
| Roof insurance claims | `Roof Insurance Claim Help in Medina, OH \| Medwick` | `Roof Insurance Claim Help in Medina County` |
| Water insurance claims | `Water Damage Insurance Claim Help in Medina, OH \| Medwick` | `Water Damage Insurance Claim Help in Medina County` |
| Emergency water | `24/7 Emergency Water Removal in Medina County, OH` | `Flooded Basement? Emergency Water Removal in Medina County` |
| Roof replacement | `Roof Replacement in Medina County, OH \| Cost & Options` | `Roof Replacement in Medina County` |
- **Body:** ≥ 800 words unique. Insurance/cost pages carry **FAQ schema**. Include honest price bands (the citable, GEO-friendly format 4K proved ranks).
- **Insurance-claim advocacy (roofing + water):** everyone bills insurance; nobody owns "we fight for you." Both the roof and water insurance-claim pages lead with a documented, plain-English "no games with your insurer" process, not a sales pitch. The two claim pages plus storm-damage and emergency-water form the "whole storm" advocacy cluster.
- **Emergency water page:** carries the response-time proof element described in the water hub spec.

### Basement-finishing page (conditional, the unowned remodeling seat)
Only if remodeling is contested. `/remodeling/basement/` is positioned as **basement-finishing authority**, the one remodeling seat no local competitor owns.
- **Title:** `Basement Finishing in Medina County, OH | Medwick Construction`
- **H1:** `Basement Finishing in Medina County, Ohio`
- **Body:** ≥ 800 words unique, real before/after project photos (also pushed to Houzz), honest cost/timeline bands, `FAQPage` schema, and a natural link to water mitigation (finished-basement water protection) since Medwick already owns that lane.

### City pages (`/service-areas/{city}-oh/`)
- **Title:** `Roofing & Storm Restoration in {City}, OH | Medwick Construction`
- **Meta:** `{City}, Ohio roofing, water mitigation & remodeling from a Medina-based contractor. Real local projects, insurance-claim help. Free estimate: (330) 635-3744.`
- **H1:** `Roofing, Water & Restoration in {City}, Ohio`
- **Body:** ≥ 500 words, ≥ 40% unique. **Required unique elements** (anti-doorway gate, page does not ship without all four): (1) project photo set from that community, (2) named local testimonial, (3) town-specific housing/storm detail (e.g. 1950s lake-cottage roofs at Chippewa Lake; 2001+ builder-grade shingles aging out in Montville), (4) distinct FAQs (which also feed the answer layer).
- **Schema:** `LocalBusiness` with `geo` for that area.
- **Quality gate:** 14 pages total, well under the 30-page warning threshold. Do not scale past the audited 14.

### Projects / case studies
- **Title:** `{Project Type} in {City}, OH: Before & After | Medwick Projects`
- One page per real project. Feeds site + GBP post + social simultaneously (one asset, three channels). Remodeling projects additionally sync to a Houzz profile, the underplayed channel the credentialed remodelers leave open.

### Reviews / About / Contact
- Reviews: real on-page testimonials (add `aggregateRating` / `Review` schema **only** once they render, so stars show in results). About: owner story + the MEDina+brunsWICK name equity + reg #26-731. Contact: `ContactPage` + `LocalBusiness`, one phone, map, hours, consistent NAP.

## 3. Keyword → URL mapping

From audit §4.2 (autocomplete-verified), updated for the three-market gaps. Each cluster owns one canonical URL; blog and answer pages support, never compete.

| Keyword cluster | Canonical URL | Priority |
|---|---|---|
| roof repair / roofers / roofing companies medina ohio | `/roofing/` + `/service-areas/medina-oh/` | High (contested, 3-way split) |
| storm damage roof repair medina county | `/roofing/storm-damage/` | **First: thinnest SERP** |
| roof insurance claim (process/denied/supplement) | `/roofing/insurance-claims/` | **First: empty niche, advocacy angle** |
| emergency roof repair medina oh | `/roofing/emergency/` | High |
| roof replacement cost medina | `/roofing/roof-replacement/` + cost guide | Medium (4K owns, copy the format) |
| water damage restoration / cleanup near me, 24/7 | `/water-mitigation/emergency-water-removal/` | **High: soft market, response-time wedge** |
| flooded basement who to call | `/water-mitigation/emergency-water-removal/` + `/answers/` | High |
| water damage insurance claim help | `/water-mitigation/insurance-claims/` | **Empty niche, advocacy angle** |
| conversational / AI questions (who to call, does insurance cover, how fast) | `/answers/{question-slug}/` + `/llms.txt` | **First: #1 gap, nobody is the cited answer** |
| basement finishing / finished basement medina | `/remodeling/basement/` | Conditional (unowned remodeling seat) |
| bathroom/kitchen/whole-home remodel {town} | `/remodeling/{type}/` + city page | Conditional |
| roofing/roofers {brunswick/wadsworth} ohio | `/service-areas/{city}-oh/` | Medium |
| roof repair / remodeling near me **with financing** | `/financing-warranty/` | Open modifier |

Water town-name queries returned empty autocomplete. Cover towns via service-area pages, but win water through GBP + the emergency/response-time layer + answer pages, not by expecting town-query volume.

## 4. Internal linking model

Hub-and-spoke, enforced at build:
- **Home** → 2 primary hubs (roofing, water) + answers hub + service-areas hub + reviews + about; remodeling hub only if built.
- **Service hub** → all its sub-pages (down) and up to Home; cross-link roofing ⇄ water (and remodeling if built) once ("we also handle…"). The trifecta cross-link is the moat: one local company doing roof + water + rebuild.
- **Money sub-pages** → sibling sub-pages + up to hub + relevant city pages. Storm-damage ⇄ roof-insurance-claims ⇄ emergency-water ⇄ water-insurance-claims form the tight "whole storm" advocacy cluster (the differentiator, interlinked).
- **Answer pages** → always link down to the money page they support (flooded-basement answer → `/water-mitigation/emergency-water-removal/`; roof-storm-coverage answer → `/roofing/insurance-claims/`). This is how the AI layer passes intent to converters.
- **City page** → its relevant service hubs (up) + 2-3 genuinely-nearby city pages (not all 14) + a matching project case study.
- **Guides/blog** → always link to the money page they support (insurance-claim guide → the matching claim page).
- Descriptive anchor text (`storm damage roof repair in Brunswick`), never "click here."

## 5. Sitemaps & indexation

- One XML sitemap per section (`sitemap-services.xml`, `sitemap-answers.xml`, `sitemap-service-areas.xml`, `sitemap-projects.xml`, `sitemap-guides.xml`) + index. Add `sitemap-remodeling.xml` only if the conditional hub is built.
- Publish `/llms.txt` at the root so AI crawlers can map the entity and its answer pages.
- Submit in Search Console at launch; watch coverage weekly.
- City/project/answer pages enter the sitemap **only when they meet their content gate**, staged, not dumped. Review (`aggregateRating`) schema is added only once real reviews render on-page.
