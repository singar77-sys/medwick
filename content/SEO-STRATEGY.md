# Medwick Construction: SEO Strategy for the New Website

**Client:** Medwick Construction LLC · 7130 Norwalk Rd, Medina, OH 44256 · (330) 635-3744
**Prepared:** July 14, 2026
**Basis:** Rests on three dated Competitive Authority Reports (roofing, water, remodeling) issued July 14, 2026, each scoring every real competitor in its market on one 21-dimension, 100-point scale. These supersede `medwick-digital-audit-2026-07-13.md`; where they disagree, the reports win. This document is the forward-looking SEO plan for the **rebuild**: it specifies the search layer those reports imply but do not engineer. It does not repeat them; read `COMPETITOR-ANALYSIS.md` first.

> **Competitive basis.** Three markets, three different shapes. Roofing authority is split three ways with no holder of all three levers; water is soft, undefended, and content-dark; remodeling is the inverse, a real credentialed top tier. Every section below reflects all three. See `COMPETITOR-ANALYSIS.md` for the digest and Market Intelligence for the full scored reports.

---

## 1. Positioning (the one sentence everything ladders up to)

**"One call. One contractor. Roof to restoration."** The owner-led, Medina-County-native contractor that handles the whole storm (roof → water → rebuild) with documented workmanship and insurance-claim fluency. Premium-practical: never the cheapest, always the most accountable.

Three defensible pillars, all verified as *unoccupied* across the three scored markets:
1. **The trifecta:** three separate scans, and not one firm spans roof + water + rebuild. No local competitor is local, credentialed, cross-category, and digitally strong at once.
2. **Genuinely local across the whole storm:** the credentialed leaders reach Medina from elsewhere (Exteriors Plus from Akron, Hurst from Cleveland, SERVPRO and Roto-Rooter on national templates). The two roofers with real local roots, Gridiron and Fixler, are single-trade. Medwick is in-county at 7130 Norwalk Rd for roof, water, and rebuild alike.
3. **Insurance-claim advocacy:** "water damage insurance claim Ohio contractor" returns adjusters and attorneys, zero Medina contractors, in a market where nobody across roofing or water owns "we fight for you." An empty content lane that maps exactly to the positioning.

## 2. The strategic bet

Medwick cannot out-muscle the market leaders on their own turf in year one (a new domain, 9 reviews) against Gridiron's 928-review volume or Fixler's grip on local identity. It does not have to. Across all three scored markets authority is split, undefended, or beatable on the digital plays no incumbent is running, so the bet is **flanking, not frontal**, tuned to each market's shape:

| Market | Flank here first (thin / undefended) | Leave contested for now |
|---|---|---|
| **Roofing** (13 scored, avg 57.8) | Storm + insurance-claim content, review stars via schema, zero-competition townships (Valley City, Granger, Litchfield, Montville, Hinckley) | Gridiron's 928-review volume; "roofers medina ohio" head term; 4K's "roof replacement cost medina" |
| **Water** (15 scored, avg 53.2) | The vacant "trusted Medina water-damage company" seat, emergency / flooded-basement map pack, a provable in-county response time | SERVPRO's national brand recall; Roto-Rooter's plumbing-to-water SEO domain |
| **Remodeling** (16 scored, avg 58.8) | Cross-category "Medina remodeler", basement-finishing, an active Houzz channel | Cabinet-S-Top's NARI/NKBA + Best of Houzz top tier (earn the credentials first) |

The single biggest lever sits above all three markets: **no competitor anywhere is the cited AI answer** when a homeowner asks who to call. Generative-search readiness (§5) is the first pillar of this plan, not an afterthought. Two further accelerators, both proven in the reports: **review velocity** (the fastest lever in every market) and **storm-reactive publishing within 48h** (4K's playbook, unmatched by incumbents). All three are baked into the roadmap.

Sequencing follows the market shapes: roofing and water are "plant a flag" flanking plays (water is the softest and fastest); remodeling is "earn in, then take the open seat"; and the trifecta itself is the structural moat no single-market rival can defend.

## 3. KPI targets

Baseline today: **1** indexed page, **0** non-brand rankings, **9** Google reviews, effectively **0** organic traffic, ~0 domain authority (6-month domain). Plan on **6-12 months** to real organic traction.

| Metric | Baseline (Jul 2026) | 3 mo (Oct) | 6 mo (Jan 2027) | 12 mo (Jul 2027) |
|---|---|---|---|---|
| Indexed pages | 1 | 25-35 | 45-60 | 70-90 |
| Non-brand keywords ranking (top 20) | 0 | 15-30 | 60-100 | 150-250 |
| Non-brand keywords page 1 | 0 | 3-8 (long-tail/town/storm) | 15-30 | 40-70 |
| Google reviews | 9 | ≥15 | ≥28 | ≥50 |
| GBP-driven calls + direction requests/mo | unmeasured | instrumented baseline | +growth | primary lead source |
| Organic sessions/mo | ~0 | 100-300 | 500-1,200 | 2,000-4,000 |
| Core Web Vitals (field) | unmeasured | all "good" at launch | maintained | maintained |

The review ladder has named rungs: clear Fixler's **34** (roofing's local-identity leader) by month 12 at ≥50, on the way toward SERVPRO's **189** (water's brand-recall leader); Gridiron's **928** is the volume ceiling nobody needs to reach to win. Targets are directional and hedged. The **leading indicators that predict all of the above** are review velocity and pages-shipped-with-real-local-proof. Track those weekly, not rankings.

## 4. Technical SEO foundation (non-negotiable at build)

Replace the GoDaddy one-pager. Requirements for the new stack:

- **Rendering:** server-rendered or static HTML (Next.js/Astro or equivalent). The current site's fatal flaw is that reviews, gallery photos, and services hydrate client-side. Google sees empty slides. **All ranking-critical content must be in the initial server HTML.**
- **Core Web Vitals:** LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1, on mobile, in the field. Self-host all images (kill the hotlinked Getty hero: SEO *and* licensing risk). Descriptive filenames + real alt text: `medwick-roof-replacement-brunswick-oh-after.jpg`.
- **Crawlability:** clean URL hierarchy (§ `SITE-STRUCTURE.md`), per-section XML sitemaps, one canonical per page, no duplicate or self-canonical doorway pairs (the doorway-site failure the audit flagged).
- **One phone number everywhere.** Resolve defect C1 first. Canonical (330) 635-3744 on site, GBP, and all citations. A call-tracking number is ads-only, added later, never on GBP/citations.
- **Instrumentation day one:** GA4 + Search Console + call tracking. Nothing is optimizable until this exists (defect C4).
- **Schema:** per §4.5 of the audit: `RoofingContractor`/`GeneralContractor` org identity with complete NAP + geo + `sameAs`; per-service `Service` with city-level `areaServed` (all served communities, not "Ohio"); FAQ schema on insurance/cost pages. **No `aggregateRating` markup until real reviews render on-page.** Once reviews render, review markup makes Medwick **one of the few local results showing review stars in search.** Schema is also the substrate for §5.
- **Accessibility:** WCAG 2.2-oriented (overlaps with technical SEO and CWV).

## 5. GEO / AI-search readiness (the lead pillar)

This is the strategy's single highest-leverage play. Across all three scored markets the same gap recurs and goes unclaimed: **no competitor is the answer an AI returns** when a Medina homeowner asks who to call for a roof, a flood, or a remodel. The reports rank AI and generative search as the #1 recurring opening in every market. Local keywords see minimal AI-Overview disruption in classic SERPs today (~0.14%), but ChatGPT, Perplexity, and Google's AI answers are rising fast for local recommendations, and the field is publishing nothing (the highest content score anywhere is a 6). First mover takes the citation. The build:

- **Answer-shaped content:** quotable, self-contained service descriptions and honest price ranges (roof-replacement cost bands, water-mitigation steps, insurance-claim walkthroughs), the format AI engines lift and cite. Pair with a comprehensive FAQ layer; Google Maps Q&A is now AI-generated from your GBP + site FAQ.
- **Complete structured data:** `LocalBusiness` / service schema with geo, openingHours, priceRange, and city-level areaServed, so machines can parse who Medwick is, where it works, and what it does across roof, water, and rebuild.
- **Consistent NAP** across Google, Yelp, Apple Maps, and Bing. Inconsistency is the fastest way to get filtered out of an AI answer.
- **GBP tuned for AI:** complete, category-accurate, review-rich profile with active Q&A; the profile is what the assistants read first.
- **`llms.txt`** at the root to declare crawlable, citation-ready content for AI agents.
- **Curated "best of Medina" list presence:** the #1 AI-visibility factor in the 2026 local report, and the direct answer to the "best roofing companies" SERP being directory-locked. Water has zero award or list holders, so any placement there is pure greenfield.

## 6. Off-site: reviews, citations, authority

Review volume is the fastest proven lever in every market, and off-site work runs parallel to the build.

- **Reviews:** post-job personal ask + `g.page` short link. FTC-compliant (no incentives, no gating). Target ≥8 new in first 90 days and ≥50 within 12 months, clearing Fixler's 34 (roofing's identity leader) and closing on SERVPRO's 189 (water's brand leader); Gridiron's 928 is the ceiling, not the target.
- **Citations (greenfield, no cleanup):** BBB, Yelp, Angi, HomeAdvisor, Houzz, Thumbtack, Nextdoor, Bing Places, Apple Maps, all with canonical NAP.
- **Local authority links:** Greater Medina Chamber, NMCC Alliance, Wadsworth Chamber, Medina County HBA, Medina County Fair sponsors, Main Street Medina, youth sports.
- **Awards to chase:** Medina Gazette Reader's Choice (roofing, where Fixler's 3x hold is challengeable) and Best of Houzz (remodeling, the price-of-entry prize Cabinet-S-Top already carries). Water has no award holder anywhere, so any local recognition is a flag planted first.
- **Certification stack, per market (every claim documented):** roofing, GAF or Owens Corning tier; water, IICRC WRT/ASD then Certified Firm; remodeling, NARI + NKBA plus Best of Houzz (only if remodeling is contested, see below). Documentation is deliberate contrast to the two roofing competitors currently carrying unsubstantiated-claim BBB problems.
- **Remodeling is a different fight, and it costs more.** The remodeling scan shows a real, credentialed, defended top tier (Cabinet-S-Top in kitchen & bath, Hansen in whole-home breadth, Hurst in premium design-build) that marketing alone will not beat. There, NARI / NKBA credentials plus a Best of Houzz award are the *price of entry*, not a differentiator: they separate the top five from the invisible fifty-five. So contesting remodeling is an explicit owner decision (real time and money), not a default SEO play. If yes, the path is: earn the credentials first, then claim the one unowned seat the scan found, the cross-category "Medina remodeler," with basement-finishing authority and an active Houzz profile as the wedge. If no, treat remodeling as a supporting service to the roofing and water lanes rather than a market to win.

Full citation/link target list with pricing lives in audit §4.6.

## 7. Guardrails

- **Anti-doorway rule:** a city page ships only with real local proof (project photos from that town, a named local testimonial, town-specific housing/storm detail, distinct FAQs). Never templated clones.
- **No fake reviews, no competitor smear pages, never repeat unverified accusations** about any competitor. Counter reputational risk with *policy* (published cancellation terms, "no games with your insurer" process page), not commentary. Two roofing competitors already carry open BBB problems over unsubstantiated claims: the mistake to avoid, not imitate.
- **Only claim 24/7 if operationally true.** In water, everyone claims round-the-clock and nobody proves it; an in-county contractor can guarantee an arrival time the North Royalton / Akron / Cleveland regionals physically cannot. Make the promise only if reliably deliverable, then prove it.

## Deliverables in this plan
- `SEO-STRATEGY.md`: this document
- `SITE-STRUCTURE.md`: architecture, URL map, per-page on-page spec, keyword→URL mapping, internal linking
- `CONTENT-CALENDAR.md`: publishing plan and cadence
- `IMPLEMENTATION-ROADMAP.md`: phased build roadmap with SEO gates (includes the remodeling go/no-go decision point)
- `COMPETITOR-ANALYSIS.md`: strategic digest of the three Competitive Authority Reports + exploitable gaps
