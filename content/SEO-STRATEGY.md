# Medwick Construction: SEO Strategy for the New Website

**Client:** Medwick Construction LLC · 7130 Norwalk Rd, Medina, OH 44256 · (330) 635-3744
**Prepared:** July 13, 2026
**Basis:** Builds directly on `medwick-digital-audit-2026-07-13.md` (the authoritative research). This document is the forward-looking SEO plan for the **rebuild**. It specifies the search layer the audit prescribed but did not fully engineer. It does not repeat the audit; read the audit first.

> **Source-conflict note.** The two inputs to this plan name different competitor sets (see `COMPETITOR-ANALYSIS.md`). This strategy is built on the source-verified markdown audit and treats the artifact's regional giants as a second competitive layer. Resolve which SERP each reflects (organic API vs. localized/map-aware Google) before committing ad spend against either.

---

## 1. Positioning (the one sentence everything ladders up to)

**"One call. One contractor. Roof to restoration."** The owner-led, Medina-County-native contractor that handles the whole storm (roof → water → rebuild) with documented workmanship and insurance-claim fluency. Premium-practical: never the cheapest, always the most accountable.

Three defensible pillars, all verified as *unoccupied* in this market:
1. **The trifecta:** no confirmed local competitor offers roofing + water mitigation + remodeling together.
2. **Genuinely local:** the biggest search players serve Medina from Solon, North Canton, Creston, and Maryland. Medwick is physically at 7130 Norwalk Rd.
3. **Insurance-claim content:** "water damage insurance claim Ohio contractor" returns adjusters and attorneys, zero Medina contractors. An empty content lane that maps exactly to the positioning.

## 2. The strategic bet

Medwick cannot out-muscle 2,500-review regional roofers or 201-review 4K on head terms in year one (Jan-2026 domain, 9 reviews). The bet is **flanking, not frontal**:

| Win here first (thin/empty SERPs) | Not here yet (contested) |
|---|---|
| Storm-damage + insurance-claim content | "roofers medina ohio" head term |
| Emergency water / flooded-basement (map pack) | "roof replacement cost medina" (4K owns it) |
| Zero-competition townships (Valley City, Granger, Litchfield, Montville, Hinckley) | Regional-giant financing/scale plays |
| Google review **stars** in SERPs (0 of competitors show them) | National paid-ad saturation (Home Genius) |

Two proven accelerators from the audit's competitive timeline: **review velocity** and **storm-reactive publishing within 48h**. Both are baked into the roadmap.

## 3. KPI targets

Baseline today: **1** indexed page, **0** non-brand rankings, **9** Google reviews, effectively **0** organic traffic, ~0 domain authority (6-month domain). The audit's calibration lesson governs the curve: plan on **6-12 months** to real organic traction.

| Metric | Baseline (Jul 2026) | 3 mo (Oct) | 6 mo (Jan 2027) | 12 mo (Jul 2027) |
|---|---|---|---|---|
| Indexed pages | 1 | 25-35 | 45-60 | 70-90 |
| Non-brand keywords ranking (top 20) | 0 | 15-30 | 60-100 | 150-250 |
| Non-brand keywords page 1 | 0 | 3-8 (long-tail/town/storm) | 15-30 | 40-70 |
| Google reviews | 9 | ≥15 | ≥28 | ≥50 |
| GBP-driven calls + direction requests/mo | unmeasured | instrumented baseline | +growth | primary lead source |
| Organic sessions/mo | ~0 | 100-300 | 500-1,200 | 2,000-4,000 |
| Core Web Vitals (field) | unmeasured | all "good" at launch | maintained | maintained |

Targets are directional and hedged per the audit. The **leading indicators that predict all of the above** are review velocity and pages-shipped-with-real-local-proof. Track those weekly, not rankings.

## 4. Technical SEO foundation (non-negotiable at build)

Replace the GoDaddy one-pager. Requirements for the new stack:

- **Rendering:** server-rendered or static HTML (Next.js/Astro or equivalent). The current site's fatal flaw is that reviews, gallery photos, and services hydrate client-side. Google sees empty slides. **All ranking-critical content must be in the initial server HTML.**
- **Core Web Vitals:** LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1, on mobile, in the field. Self-host all images (kill the hotlinked Getty hero: SEO *and* licensing risk). Descriptive filenames + real alt text: `medwick-roof-replacement-brunswick-oh-after.jpg`.
- **Crawlability:** clean URL hierarchy (§ `SITE-STRUCTURE.md`), per-section XML sitemaps, one canonical per page, no duplicate/self-canonical doorway pairs (AAPEX's cautionary failure).
- **One phone number everywhere.** Resolve defect C1 first. Canonical (330) 635-3744 on site, GBP, and all citations. A call-tracking number is ads-only, added later, never on GBP/citations.
- **Instrumentation day one:** GA4 + Search Console + call tracking. Nothing is optimizable until this exists (defect C4).
- **Schema:** per §4.5 of the audit: `RoofingContractor`/`GeneralContractor` org identity with complete NAP + geo + `sameAs`; per-service `Service` with city-level `areaServed` (all served communities, not "Ohio"); FAQ schema on insurance/cost pages. **No `aggregateRating` markup until real reviews render on-page** (the AAPEX violation to avoid). Once reviews render, adding review markup captures the artifact's #1 opening: **be the only result in the SERP showing stars.**
- **Accessibility:** WCAG 2.2-oriented (overlaps with technical SEO and CWV).

## 5. GEO / AI-search readiness

Local keywords see minimal AI-Overview disruption today (~0.14%), but ChatGPT/Perplexity are rising for local recs. Cheap insurance:
- Complete `LocalBusiness` schema (geo, openingHours, priceRange, areaServed).
- Quotable, self-contained service descriptions and honest price ranges (e.g. roof-replacement cost bands), the format AI engines cite.
- Consistent NAP across Google, Yelp, Apple Maps, Bing.
- Earn presence on curated "best of Medina" lists: the #1 AI-visibility factor in the 2026 local report, and a direct answer to the "best roofing companies" SERP being directory-locked.
- Consider an `llms.txt` and comprehensive FAQ content (Google Maps Q&A is now AI-generated from your GBP + site FAQ).

## 6. Off-site: reviews, citations, authority

The single proven moat in this market is review volume (4K's 201). Off-site work runs parallel to the build:
- **Reviews:** post-job personal ask + `g.page` short link. FTC-compliant (no incentives, no gating). Target ≥8 new in first 90 days, ≥50 total within 12 months.
- **Citations (greenfield, no cleanup):** BBB, Yelp, Angi, HomeAdvisor, Houzz, Thumbtack, Nextdoor, Bing Places, Apple Maps, all with canonical NAP.
- **Local authority links:** Greater Medina Chamber, NMCC Alliance, Wadsworth Chamber, Medina County HBA, Medina County Fair sponsors, Main Street Medina, youth sports.
- **Certification stack (the differentiator):** GAF or Owens Corning tier (roofing) + IICRC WRT/ASD then Certified Firm (water). Every claim is documented, in deliberate contrast to the two competitors currently carrying unsubstantiated-claim BBB problems.
- **Remodeling is a different fight, and it costs more.** The remodeling market scan shows a real, credentialed, defended top tier (Cabinet-S-Top in kitchen & bath, Hurst in design-build) that marketing alone will not beat. There, NARI / NKBA credentials plus a Best of Houzz award are the *price of entry*, not a differentiator: they separate the top five from the invisible fifty-five. So contesting remodeling is an explicit owner decision (real time and money), not a default SEO play. If the answer is yes, the path is: earn the credentials first, then claim the one unowned seat the scan found, the cross-category "Medina remodeler," with basement-finishing authority and an active Houzz profile as the wedge. If the answer is no, treat remodeling as a supporting service to the roofing and water lanes rather than a market to win.

Full citation/link target list with pricing lives in audit §4.6.

## 7. Guardrails

- **Anti-doorway rule:** a city page ships only with real local proof (project photos from that town, a named local testimonial, town-specific housing/storm detail, distinct FAQs). Never templated clones.
- **No fake reviews, no competitor smear pages, never repeat unverified accusations** about AAPEX or anyone else. Counter reputational risk with *policy* (published cancellation terms, "no games with your insurer" process page), not commentary.
- **Only claim 24/7 if operationally true.** Emergency response-time promises only if reliably deliverable.

## Deliverables in this plan
- `SEO-STRATEGY.md`: this document
- `SITE-STRUCTURE.md`: architecture, URL map, per-page on-page spec, keyword→URL mapping, internal linking
- `CONTENT-CALENDAR.md`: publishing plan and cadence
- `IMPLEMENTATION-ROADMAP.md`: phased build roadmap with SEO gates
- `COMPETITOR-ANALYSIS.md`: reconciliation of the two competitor sets + exploitable gaps
