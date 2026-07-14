# Medwick Construction: Site Structure & On-Page SEO Spec

Build-ready architecture for the rebuild, aligned to POSITIONING.md: Medwick is **Medina County's Insurance Restoration Advocate.** Insurance advocacy is the brand; roofing, water mitigation, and reconstruction are the services beneath it. The architecture reflects that order. **Storm Damage** and **Insurance Claims** are the top, first-built hubs (the homeowner's problem and the flagship advocacy position), then Roofing, Water Mitigation, and Reconstruction as the trades that deliver the repair, then the shared layers. An explicit **answer-engine (AI/AEO) layer** lives in the architecture because generative search is the single biggest open gap in the market and the fastest path to citation authority. This confirms the tree and adds the per-page on-page layer (titles, metas, H1s, schema, word floors, internal links) plus keyword to URL mapping. Consistent with POSITIONING.md.

---

## 1. URL architecture

```
/                                       Home
                                        --- ADVOCACY HUBS (build first, full depth) ---
/storm-damage/                          Storm Damage hub  [PRIMARY, build FIRST]
  /storm-damage/emergency/              emergency response + roof tarping, first call
  /storm-damage/hail-damage/
  /storm-damage/wind-damage/
/insurance-claims/                      Insurance Claims hub  [PRIMARY, build FIRST]
  /insurance-claims/roof/               roof claim advocacy
  /insurance-claims/water/              water claim advocacy
  /insurance-claims/denied/             denied, underpaid, and supplement help
                                        --- SERVICE HUBS (the trades that deliver the repair) ---
/roofing/                               Roofing hub
  /roofing/roof-replacement/
  /roofing/roof-repair/
  /roofing/emergency/                   emergency tarping
/water-mitigation/                      Water Mitigation hub
  /water-mitigation/emergency-water-removal/   ← response-time proof lives here
  /water-mitigation/water-damage-cleanup/
  /water-mitigation/structural-drying/
  /water-mitigation/mold-prevention/
/reconstruction/                        Reconstruction hub (the insurance-paid rebuild)
  /reconstruction/basement/             ← finished-basement rebuild after water damage
  /reconstruction/kitchen/
  /reconstruction/bathroom/
  /reconstruction/whole-home/
                                        --- ANSWER-ENGINE + SHARED (build alongside the hubs) ---
/service-areas/                         City hub → 14 city pages (phased, §4.3 of audit)
  /service-areas/medina-oh/
  /service-areas/brunswick-oh/  … etc.
/projects/                              real photos + per-project case studies
  /projects/{project-slug}/
/learning-center/                       Learning Center: answer/FAQ hub → Q&A pages carrying FAQPage schema, plus guides
  /learning-center/{question-slug}/     one homeowner question per page
  /learning-center/guides/{article-slug}/
/llms.txt                               root-level AI crawl guide (file, not a page)
/about/                                 owner story, MEDina+brunsWICK name, crew, reg #26-731, insured
/contact/                               form + map + hours + ONE phone number
/reviews/                               real on-page testimonials + GBP/FB links (review schema once they render)
/financing-warranty/
```

URL rules: lowercase, hyphenated, trailing slash consistent, no dates in slugs, city pages always `{city}-oh`. No auto-generated pages. No duplicate self-canonical pairs (the AAPEX failure). Every page, including answer pages and city pages, is subject to the anti-doorway rule: each is a genuine, unique page that answers one homeowner question, never a templated shell.

## 2. On-page spec by page type

Titles target ≤ 60 chars where possible; metas 150-160. `{City}` is templated but **body content is not**. See the anti-doorway rule.

### Homepage
- **Title:** `Medina County's Insurance Restoration Advocate | Medwick`
- **Meta:** `From the first insurance call to the final repair. Medwick guides Medina County homeowners through storm, roof, and water damage claims, then completes the work. Licensed, insured, Registered #26-731. Free help: (330) 635-3744.`
- **H1:** `From the First Insurance Call to the Final Repair`
- **Must be in server HTML:** the advocacy promise up top (we work for homeowners, not the insurer), the storm-recovery path (storm damage → insurance claim → roof, water, and rebuild under one company), 5.0★ proof band linked to GBP, reg #26-731, real project photos, service-area list, owner block, an answer-optimized FAQ block (feeds the AI layer and `FAQPage` schema), two CTAs (Get Claim Help / Emergency Call).
- **Schema:** `GeneralContractor` + `Organization` + `FAQPage`. Consistent NAP in footer and schema (identical name/address/phone) so AI systems resolve one entity.

### Advocacy hubs (Storm Damage + Insurance Claims, build first)
These two hubs carry the brand. They lead with guidance, not a sales pitch, because the position is "you don't have to figure this out anymore."
- **Storm Damage hub Title:** `Storm Damage in Medina County, OH: What to Do First | Medwick`
- **Storm Damage H1:** `Storm Damage in Medina County: Your First Steps`
- **Storm Damage body:** ≥ 800 words, 100% unique. Opens with the plain-English "what to do in the first 24 hours" answer, then routes down to emergency response, the insurance-claim process, and the repair services (roof, water, rebuild). This hub is the orchestrating problem page: it links to everything a storm sets in motion. Sub-service cards, proof, a short answer-optimized FAQ block, CTA.
- **Insurance Claims hub Title:** `Insurance Claim Help in Medina County, OH | Medwick`
- **Insurance Claims H1:** `Insurance Claim Help in Medina County, Ohio`
- **Insurance Claims body:** ≥ 800 words, 100% unique. Leads with the documented, plain-English "no games with your insurer" process: we walk you through the claim, help make the calls, meet the adjuster, review the scope, and challenge incorrect estimates. Everyone bills insurance; nobody owns "we fight for you." This is the flagship position, so this hub gets first-class depth. Sub-pages for roof, water, and denied/underpaid claims. `FAQPage` block, CTA.
- **Schema (both):** `Service` + `LocalBusiness` + `FAQPage`.

### Service hub (Roofing / Water Mitigation / Reconstruction)
The trades sit beneath the advocacy frame: they are how the promise gets delivered.
- **Title (roofing):** `Roofing Contractor in Medina County, OH | Medwick Construction`
- **H1:** `Roofing in Medina County, Ohio`
- **Body:** ≥ 800 words, 100% unique. Sub-service cards linking down; proof; process; a short answer-optimized FAQ block; a link up to the insurance-claims hub (most roof jobs are claims); CTA.
- **Schema:** `Service` + `LocalBusiness` + `FAQPage`.
- **Water hub extra (response-time proof):** the water field has no local champion and no award holder, so speed is the wedge. The water hub and `/water-mitigation/emergency-water-removal/` must carry a "we prove our speed" element: stated in-county response window, timestamped real job examples, 24/7 line, and the in-county-vs-regional contrast (a Medina-based crew beats North Royalton / Akron / Cleveland arrival times).
- **Reconstruction hub:** the natural tail of recovery. After the roof is on and the structure is dry, the rebuild puts the home back together, and it rides on the storm and water jobs Medwick already owns. This is a normal service, framed as continuity: same company, same relationship, no new contractor to vet. It leads with that one-company path (roof, then water, then rebuild) and honest cost/timeline bands, and cross-links up to water mitigation. Sub-pages for basement, kitchen, bathroom, and whole-home rebuilds.

### Answer-engine layer (Learning Center: Q&A hub + guides + llms.txt)
This is the **#1 competitive gap**: across the market, no competitor is the cited answer when a homeowner asks an AI who to call. Build alongside the advocacy hubs, not after. The Learning Center is the authority engine, one homeowner question per page.
- **/learning-center/ hub Title:** `Storm, Roof & Water Damage Questions, Answered | Medwick, Medina OH`
- **H1:** `Medina County Storm, Roof & Water Damage: Answers`
- **Each Q&A page:** the H1 is one real homeowner question phrased the way it is typed; the first paragraph is a direct 40-60 word answer (the citable passage), then ≥ 300 words of supporting detail; `FAQPage` schema; a link down to the money page that converts.
- **Target questions** homeowners actually type or ask an assistant: "does homeowners insurance cover roof storm damage in Ohio", "what should I do after a roof leak", "who do I call for a flooded basement in Medina", "how long before mold grows after water damage", "can I choose my own contractor", "will insurance pay for water mitigation", "a tree fell on my house, what now", "should I tarp my roof". Own the problem, not merely the solution.
- **Guides** (`/learning-center/guides/{article-slug}/`): longer educational and emergency articles that support the money pages; blog and guide pages support, never compete for the canonical URL.
- **llms.txt** at root: plain-text map of the hubs, services, service area, NAP, and the answer pages so AI crawlers can parse who Medwick is and what it covers.
- **Review schema:** add `aggregateRating` / `Review` markup for structured-data / AI parsing, **only once real reviews exist on-page**, and never fabricate the count (see COMPETITOR-ANALYSIS guardrails). This does **not** produce organic star snippets — Google excludes self-serving LocalBusiness reviews from review rich results; stars show via the Google Business Profile / map pack.

### Money sub-pages (the advocacy cluster)
| Page | Title | H1 |
|---|---|---|
| Storm damage | `Storm Damage in Medina County, OH: What to Do First \| Medwick` | `Storm Damage in Medina County: Your First Steps` |
| Roof insurance claim | `Roof Insurance Claim Help in Medina, OH \| Medwick` | `Roof Insurance Claim Help in Medina County` |
| Water insurance claim | `Water Damage Insurance Claim Help in Medina, OH \| Medwick` | `Water Damage Insurance Claim Help in Medina County` |
| Denied / underpaid claim | `Denied or Underpaid Insurance Claim? Help in Medina, OH` | `Denied or Underpaid Claim Help in Medina County` |
| Emergency water | `24/7 Emergency Water Removal in Medina County, OH` | `Flooded Basement? Emergency Water Removal in Medina County` |
| Roof replacement | `Roof Replacement in Medina County, OH \| Cost & Options` | `Roof Replacement in Medina County` |
- **Body:** ≥ 800 words unique. Insurance and cost pages carry **FAQ schema**. Include honest price bands (the citable, GEO-friendly format that ranks).
- **Insurance-claim advocacy (the flagship cluster):** the roof, water, and denied-claim pages each lead with the documented, plain-English "no games with your insurer" process, not a sales pitch. Storm-damage, the three claim pages, and emergency-water form the tight "whole storm" advocacy cluster, the differentiator, interlinked.
- **Emergency water page:** carries the response-time proof element described in the water hub spec.

### Reconstruction sub-pages (the insurance-paid rebuild)
Reconstruction is a normal service and the natural tail of recovery, not a market to contest. `/reconstruction/basement/` is the strongest seat because a finished basement is the most common water-damage rebuild, and Medwick already owns the water lane that precedes it.
- **Title:** `Basement Reconstruction in Medina County, OH | Medwick Construction`
- **H1:** `Basement Reconstruction in Medina County, Ohio`
- **Body:** ≥ 800 words unique, real before/after project photos, honest cost/timeline bands, `FAQPage` schema, and a natural link back to water mitigation (the drying and cleanup that comes first) since the rebuild rides on that job. The other reconstruction pages (kitchen, bathroom, whole-home) follow the same pattern: the rebuild that finishes a storm or water recovery.

### City pages (`/service-areas/{city}-oh/`)
- **Title:** `Storm, Roof & Water Restoration in {City}, OH | Medwick Construction`
- **Meta:** `{City}, Ohio storm, roof, and water damage help from a Medina-based advocate. We guide your insurance claim and complete the repair. Real local projects. Free help: (330) 635-3744.`
- **H1:** `Storm, Roof & Water Restoration in {City}, Ohio`
- **Body:** ≥ 500 words, ≥ 40% unique. **Required unique elements** (anti-doorway gate, page does not ship without all four): (1) project photo set from that community, (2) named local testimonial, (3) town-specific housing/storm detail (e.g. 1950s lake-cottage roofs at Chippewa Lake; 2001+ builder-grade shingles aging out in Montville), (4) distinct FAQs (which also feed the answer layer).
- **Schema:** `LocalBusiness` with `geo` for that area.
- **Quality gate:** 14 pages total, well under the 30-page warning threshold. Do not scale past the audited 14.

### Projects / case studies
- **Title:** `{Project Type} in {City}, OH: Before & After | Medwick Projects`
- One page per real project. Every completed job feeds the site + a GBP post + social simultaneously (one asset, many channels), the documentation engine from the positioning: before/after photos, drone photos, testimonial, review, case study, FAQ material. Nothing leaves without documentation.

### Reviews / About / Contact
- Reviews: real on-page testimonials (add `aggregateRating` / `Review` schema **only** once they render, for structured data — not for organic stars, which come from the GBP / map pack). About: owner story + the MEDina+brunsWICK name equity + reg #26-731. Contact: `ContactPage` + `LocalBusiness`, one phone, map, hours, consistent NAP.

## 3. Keyword → URL mapping

From audit §4.2 (autocomplete-verified), re-voiced toward insurance, storm, and decision-stage intent. Each cluster owns one canonical URL; blog and answer pages support, never compete.

| Keyword cluster | Canonical URL | Priority |
|---|---|---|
| storm damage / tree hit roof / hail damage medina county | `/storm-damage/` | **First: primary problem hub** |
| does insurance cover roof/storm/hail damage, roof claim process | `/insurance-claims/` + `/insurance-claims/roof/` | **First: flagship advocacy position** |
| insurance denied / underpaid / supplement my claim | `/insurance-claims/denied/` | **First: empty niche, advocacy angle** |
| water damage insurance claim help | `/insurance-claims/water/` | **First: empty niche, advocacy angle** |
| water damage restoration / cleanup near me, 24/7 | `/water-mitigation/emergency-water-removal/` | **High: soft market, response-time wedge** |
| flooded basement who to call | `/water-mitigation/emergency-water-removal/` + `/learning-center/` | High |
| emergency roof repair / tarp medina oh | `/roofing/emergency/` | High |
| roof repair / roofers / roofing companies medina ohio | `/roofing/` + `/service-areas/medina-oh/` | Medium (contested, 3-way split) |
| roof replacement cost medina | `/roofing/roof-replacement/` + cost guide | Medium (copy the price-band format) |
| basement / kitchen / whole-home reconstruction, rebuild after damage {town} | `/reconstruction/{type}/` + city page | Medium (rides on storm/water jobs) |
| conversational / AI questions (who to call, does insurance cover, how fast) | `/learning-center/{question-slug}/` + `/llms.txt` | **First: #1 gap, nobody is the cited answer** |
| roof repair / restoration near me **with financing** | `/financing-warranty/` | Open modifier |

Water town-name queries returned empty autocomplete. Cover towns via service-area pages, but win water through GBP + the emergency/response-time layer + answer pages, not by expecting town-query volume.

## 4. Internal linking model

Hub-and-spoke, enforced at build, with the advocacy hubs at the top of the funnel:
- **Home** → the 2 advocacy hubs (storm damage, insurance claims) first, then the 3 service hubs (roofing, water, reconstruction) + learning center + service-areas hub + reviews + about.
- **Advocacy hubs** → down to their sub-pages, and across to the service hubs that deliver the work. Storm-damage is the orchestrating problem page: it links to the insurance-claim hub, emergency response, roofing storm repair, emergency water, and reconstruction. Storm-damage ⇄ insurance-claims ⇄ emergency-water ⇄ the roof/water claim pages form the tight "whole storm" advocacy cluster (the differentiator, interlinked).
- **Service hub** → all its sub-pages (down), up to Home, and up to the insurance-claims hub (most jobs are claims). Cross-link roofing ⇄ water ⇄ reconstruction once ("we also handle…"). The trifecta cross-link is the moat: one local company doing roof + water + rebuild.
- **Money sub-pages** → sibling sub-pages + up to their hub + relevant city pages, with descriptive anchors.
- **Reconstruction pages** → up to the storm-damage and insurance-claims hubs and across to water mitigation (the drying that precedes the rebuild), since reconstruction rides on those jobs.
- **Learning Center pages** → always link down to the money page they support (flooded-basement answer → `/water-mitigation/emergency-water-removal/`; roof-storm-coverage answer → `/insurance-claims/roof/`). This is how the AI layer passes intent to converters.
- **City page** → its relevant hubs (up) + 2-3 genuinely-nearby city pages (not all 14) + a matching project case study.
- **Guides** → always link to the money page they support (insurance-claim guide → the matching claim page).
- Descriptive anchor text (`storm damage insurance claim help in Brunswick`), never "click here."

## 5. Sitemaps & indexation

- One XML sitemap per section (`sitemap-services.xml` covering storm damage, insurance claims, roofing, water, and reconstruction; `sitemap-learning-center.xml`; `sitemap-service-areas.xml`; `sitemap-projects.xml`) + index.
- Publish `/llms.txt` at the root so AI crawlers can map the entity and its answer pages.
- Submit in Search Console at launch; watch coverage weekly.
- City/project/answer pages enter the sitemap **only when they meet their content gate**, staged, not dumped. Review (`aggregateRating`) schema is added only once real reviews render on-page.
