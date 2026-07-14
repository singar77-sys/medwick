# Medwick Construction: SEO Implementation Roadmap

Phased build plan with **SEO gates**: each phase has a pass/fail check before the next starts. Aligned to the audit's 90-day plan (§6) and extended to 12 months. The window opens July 13, 2026, inside peak storm season.

**Market sequencing.** Medwick is Medina County's Insurance Restoration Advocate. Insurance advocacy is the brand; roofing, water mitigation, and reconstruction are the services that deliver it. That reframes the order of attack around the homeowner's problem, not the trade. **Insurance advocacy and storm damage lead as the flagship.** The insurance-claim hub and the storm-damage hub are the first-built, highest-priority surfaces: they own the homeowner's actual moment of crisis (a tree through the roof, a denied claim, an adjuster on the way), and no competitor in any of the three markets owns the advocacy position. **Water is the easy, fast win that runs right alongside them**: at a field average of 53.2 it is the softest market, with no local champion, a review desert, and a content-dark, AI-invisible top tier held by national franchises, so it converts quickly and feeds the same insurance story. **Roofing runs in parallel** (average 57.8): authority is split three ways (Gridiron on volume, Exteriors Plus on certifications, Fixler on local identity with only 34 reviews), so the play is to flank the split rather than beat any one leader head-on. **Reconstruction is the insurance-paid rebuild that rides on the water and storm jobs already won** (field average 58.8 among dedicated remodelers): it is the same crew finishing what insurance is already paying for, a warm handoff, not a new competitive fight. Medwick does not enter a remodeling credential contest against defended players (Cabinet-S-Top, Hurst); IICRC plus general contracting is enough to deliver the paid rebuild.

**Cross-market workstreams.** Five levers run through every phase, benchmarked to competitors: (1) **insurance-claim advocacy**, the flagship, the "we fight for you" story that runs across storm, roofing, and water, and that no competitor owns; (2) **water response-time proof**, a guaranteed in-county arrival time the regionals cannot match, the flag-plant for the water win; (3) **AI / answer-engine optimization (AEO)**, the single biggest recurring gap and a compounding first-mover advantage; (4) **review velocity**, milestoned against real competitor counts; (5) **awards**, a Reader's Choice push in roofing (no Best of Houzz arms race: the brand does not enter a remodeling credential fight).

---

## Phase 0: Stop the bleeding (Week 1, on the CURRENT site)

Do not wait for the rebuild. These recover leads and protect assets now.

1. **Fix the hero CTA phone number (C1)**: the button dials an Akron cell, not the displayed line. Confirm what 620-8778 is with the owner, then point `tel:` at (330) 635-3744. One-line fix, immediate lead recovery.
2. **Claim + verify the Google Business Profile (C2)**: it's 5.0★/9 and appears unclaimed. Set categories (General Contractor primary; Roofing / Water Damage Restoration / Remodeler secondaries), add all served communities, link site + socials, upload real project photos, enable messaging.
3. Publish the 12 existing reviews on the current page (replace "Reviews coming soon!"); surface real gallery photos in server HTML; add "City of Medina Registered Contractor #26-731 · Licensed & Insured" to footer.
4. Fix current-page title/meta/JSON-LD (30-min GoDaddy edits).
5. Install GA4 + Search Console: baseline everything before any spend (C4).
6. **AEO groundwork starts here.** Lock one canonical NAP string and confirm it matches the GBP exactly; this consistency is the base signal answer engines read. Nobody in any of the three markets is the cited answer when a homeowner asks an AI who to call, so every early move is aimed at becoming that answer.

**GATE 0:** CTA dials canonical number · GBP claimed (categories set for AI retrieval) · NAP string locked · GA4/GSC recording · reviews visible. → proceed.

## Phase 1: Foundation (Weeks 1-4)

Runs parallel to Phase 0. This is infrastructure, not content.

- Choose rebuild platform (SSR/static: Next.js/Astro), sign off sitemap (`SITE-STRUCTURE.md`).
- Stand up analytics/tag plan, call tracking architecture (canonical number on GBP/citations; tracking number reserved for ads only).
- Core citations with canonical NAP: BBB, Yelp, Angi, HomeAdvisor, Houzz, Thumbtack, Nextdoor, Bing Places, Apple Maps. NAP must be byte-identical across all of them (the AEO base signal from Phase 0).
- **AEO foundations (the top competitive gap, so it leads, not trails).** Spec the schema plan for the rebuild (LocalBusiness, Service, FAQPage per market), draft the first FAQ answer-content blocks written to be quotable by an AI (short, direct, question-first), reserve `/llms.txt` for the rebuild, and tune the GBP for AI retrieval (categories, services, attributes, Q&A). No incumbent in any market is doing this; a first mover compounds.
- Join Greater Medina Chamber; submit NMCC Alliance, Wadsworth, MCHBA applications.
- Begin IICRC WRT enrollment; open GAF/Owens Corning territory-rep conversations.
- **Insurance-claim advocacy positioning drafted (the flagship).** Across storm, roofing, and water: a published "we fight for you" process and a "no games with your insurer" policy. Everyone bills insurance; nobody owns the advocacy story, and this is the brand.
- **Water response-time proof designed:** define the guaranteed in-county arrival window the North Royalton / Akron / Cleveland regionals physically cannot match, and the wording to back it. This is the water flag-plant.
- **Reconstruction positioning drafted (no remodeling credential fight).** Reconstruction is the insurance-paid rebuild that rides on the water and storm jobs Medwick already won: same crew, warm handoff, no new competitive market to enter. Draft the reconstruction story as the natural close of the claim ("we finish what insurance is paying for"), backed by IICRC plus general contracting. Do not join NARI or NKBA and do not open a Best of Houzz arms race; those discretionary-remodeling credentials stay optional and future-only, taken up only if the owner ever pursues remodeling as a separate line.
- Launch the review engine (post-job text + `g.page` link; FTC-compliant). First benchmark: the roofing identity leader Fixler sits at only 34 reviews after 15+ years, so that is the beatable near-term target; the water field is even softer.
- Pre-draft the storm-response playbook (August is peak, be ready).
- Start collecting per-town project photos + testimonials as build inputs (gates the city pages).

**GATE 1:** platform chosen · citations live (NAP byte-identical) · AEO schema + FAQ plan speced · review engine running · insurance-advocacy (flagship) and water response-time proof drafted · reconstruction positioning drafted · playbook drafted · ≥ enough project assets for Wave-1 cities. → build.

## Phase 2: Build the ranking surface (Weeks 5-12)

- Launch rebuilt core, flagship surfaces first: the **insurance-claim hub and the storm-damage hub lead the build** (highest priority), then homepage, the roofing and water service hubs, water emergency pages, contact, about, reviews, projects. Reconstruction ships as the close-of-claim page the storm and water jobs hand off to, not as a standalone remodeling pitch.
- **Water gets the flag-plant page:** a dedicated response-time page that states the guaranteed in-county arrival window and the insurance-advocacy process, aimed straight at the vacant "trusted Medina water-damage company" seat.
- **AEO ships with the build, not after.** Publish `/llms.txt`; render FAQPage schema and the question-first answer blocks on every hub and emergency page; carry the locked NAP into all page schema. The goal is to be the retrievable answer while every competitor is still AI-invisible.
- **Technical launch checklist (all must pass):** server-rendered content · CWV all "good" on mobile · one phone number sitewide · schema per §4.5 (no `aggregateRating` until reviews render on-page) · FAQ/answer schema valid and machine-readable · `/llms.txt` live · self-hosted images w/ descriptive alt · per-section sitemaps submitted · GA4/GSC firing on every page.
- City pages **Wave 1**: Medina, Brunswick, Wadsworth, each passing the 4-element anti-doorway gate.
- Publish cornerstone content 1-3 (`CONTENT-CALENDAR.md`).
- First earned-media pitch (Medina Gazette, new owner-led county contractor angle); book Medina County Fair sponsorship.
- Social cadence starts (3/week, geo-tagged).
- Review checkpoint: ≥ 15 total Google reviews, on track to clear Fixler's 34.

**GATE 2:** every launched page passes the technical checklist (AEO items included) · Wave-1 cities each have real local proof · water response-time page live · ≥15 reviews. → expand. *(A page that fails the checklist does not get indexed. Fix before submitting.)*

## Phase 3: Extend into the open field (Weeks 13-24 / Months 4-6)

- City pages **Wave 2**, the zero-competition set: Montville, Hinckley, Valley City, Litchfield (storm and reconstruction emphasis for the high-income two, where insurance-paid rebuilds run larger; roof and water for the closer two).
- Reconstruction sub-pages + first insurance-paid rebuild case study (a storm or water job carried through to the finished rebuild, showing the same-crew warm handoff and the claim timeline). No Houzz arms race: the reconstruction story sells the complete storm-recovery path, not a discretionary remodel.
- Winter-demand content live (shipped by late October regardless of phase timing).
- Emergency + cost guides (flooded basement, bathroom/basement cost). Each guide doubles as AEO answer-content: question-first headers, direct answers, FAQ schema, so it is quotable by AI Overviews and assistants. Highest content score in any market is a 6, so depth here is uncontested.
- **Reader's Choice campaign (roofing) opens here.** Line up the Medina Gazette Reader's Choice push now so nominations and voting land in-cycle; Fixler's 3x wins are the identity moat to contest, and no other scored roofer holds it. Awards are an AI-visibility signal, not just a badge.
- Youth-sports + Main Street Medina sponsorships (link + brand).
- **Add review markup** once real reviews render → structured data + AI-answer parsing (Google does not show organic stars from self-serving LocalBusiness review markup; stars come from the GBP / map pack).
- One tightly negative-matched Google Ads test on storm/emergency terms (audit §4.2 negative list), only after tracking + pages + review base are live; LSA/Google Guaranteed application if licensing docs ready.

**GATE 3:** Wave-2 cities live w/ proof · map-pack presence for emergency water · Reader's Choice campaign submitted in-cycle · ≥28 reviews (Fixler's 34 in reach, water on pace toward top-3 by volume) · map-pack stars live from real Google reviews · appearing in at least one AI answer for a target query. → authority.

## Phase 4: Authority (Months 7-12)

- City pages Wave 3 (remaining audited communities, demand-driven).
- Thought-leadership + storm-response cadence sustained; insurance-claim hub deepened (the moat lane, roofing and water).
- **AEO leadership consolidated:** own the cited-answer position across roofing and water queries, keep FAQ/answer schema and `/llms.txt` current, and track AI-answer appearances as a standing KPI. This is the compounding first-mover lane.
- Pursue Master Elite / OC tier + IICRC Certified Firm (the certifications that back roofing and the insurance-paid rebuild); **land the Reader's Choice win** to convert the roofing identity contest. No NARI or Best of Houzz chase: reconstruction authority is earned through completed insurance rebuilds and their case studies, not remodeling credentials. Add earned "best of Medina" list placements (AI-visibility #1 factor).
- Continuous CWV + content refresh; expand what's ranking page 2 → page 1.
- Re-run the competitive SERP + local-pack analysis with a Medina-grid tool (the audit's flagged next-phase gap) to resolve the competitor-set conflict and retarget.

**GATE 4 / 12-month scorecard:** ≥50 reviews and clear of Fixler's 34, with water on a trajectory toward SERVPRO's 189 ceiling · at least one award landed or in final voting (Reader's Choice) · cited in AI answers for target queries · 40-70 non-brand page-1 keywords · organic a primary lead source · all KPI targets in `SEO-STRATEGY.md` §3 reviewed against actuals.

---

## Dependencies & risks

| Dependency | Blocks | Mitigation |
|---|---|---|
| Owner confirms 620-8778 | C1 fix | 5-minute conversation; do first |
| GBP verification (video, 2026 standard) | map-pack, all local | Start week 1; can lag build |
| Real per-town project assets | city pages | Collect continuously from Phase 1; gates Wave 1/2 |
| IICRC/GAF/OC enrollment lead times | certification claims | Start early; claim only when documented |
| AEO / schema execution quality | the #1 competitive gap; cited-answer position | Build schema, FAQ answer-content, NAP consistency, and `/llms.txt` into Phase 1-2, not as a bolt-on. It fails silently if malformed, so validate machine-readability at GATE 2 |
| NAP consistency across citations | AEO base signal; map-pack | Lock one canonical string in Phase 0; audit byte-identical before citations go live |
| Award-cycle timing (Reader's Choice) | roofing identity contest | Calendar-driven, not effort-driven. Line up nominations/voting in Phase 3 to land in-cycle; a missed window costs a full year |
| Water response-time guarantee | the water flag-plant claim | Set an arrival window operations can actually hit, then publish; an unmet guarantee is worse than none |
| Reconstruction delivery capacity (IICRC + general contracting) | insurance-paid rebuild; the close of the storm and water claim | Reconstruction rides on jobs already won: same crew, warm handoff, no new competitive fight. IICRC plus general contracting is enough. NARI/NKBA/Best of Houzz stay optional and future-only, taken up only if the owner ever pursues discretionary remodeling as a separate line |
| Jan-2026 domain age | organic traction | 6-12 mo expectation set; lean on GBP + reviews + storm content meanwhile |
| Competitor-set conflict unresolved | ad targeting | Grid/local-pack re-scan in Phase 4 before scaling spend |
