# Medwick Construction: SEO Implementation Roadmap

Phased build plan with **SEO gates**: each phase has a pass/fail check before the next starts. Aligned to the audit's 90-day plan (§6) and extended to 12 months. The window opens July 13, 2026, inside peak storm season.

**Market sequencing.** The three July 14 Competitive Authority Reports set the order of attack. **Water first and fastest**: at a field average of 53.2 it is the softest market, with no local champion, a review desert, and a content-dark, AI-invisible top tier held by national franchises. **Roofing in parallel** (average 57.8): authority is split three ways (Gridiron on volume, Exteriors Plus on certifications, Fixler on local identity with only 34 reviews), so the play is to flank the split rather than beat any one leader head-on. **Remodeling is conditional** (average 58.8): the top tier is credentialed and defended (Cabinet-S-Top, Hurst), so it is an owner decision with long credential lead times, threaded below as a decision point, not a default.

**Cross-market workstreams.** Five levers run through every phase, benchmarked to competitors: (1) **AI / answer-engine optimization (AEO)**, the single biggest recurring gap and a compounding first-mover advantage; (2) **review velocity**, milestoned against real competitor counts; (3) **awards**, a Reader's Choice push in roofing and a Best of Houzz push if remodeling is contested; (4) **insurance-claim advocacy** in roofing and water; (5) **water response-time proof**, a guaranteed in-county arrival time the regionals cannot match.

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
- **Insurance-claim advocacy positioning drafted** for roofing and water: a published "we fight for you" process and a "no games with your insurer" policy. Everyone bills insurance; nobody owns the advocacy story.
- **Water response-time proof designed:** define the guaranteed in-county arrival window the North Royalton / Akron / Cleveland regionals physically cannot match, and the wording to back it. This is the water flag-plant.
- **Remodeling decision point.** Decide now whether to contest the remodeling top tier. Per the market scan it will not fall to marketing alone, so if the answer is yes this is where it starts, not later: join NARI, begin the NARI Certified Remodeler / NKBA path, stand up and start populating a Houzz profile, and bank kitchen/bath project photos toward Best of Houzz eligibility. These credentials have long lead times; a late start pushes the payoff out by roughly a year.
- Launch the review engine (post-job text + `g.page` link; FTC-compliant). First benchmark: the roofing identity leader Fixler sits at only 34 reviews after 15+ years, so that is the beatable near-term target; the water field is even softer.
- Pre-draft the storm-response playbook (August is peak, be ready).
- Start collecting per-town project photos + testimonials as build inputs (gates the city pages).

**GATE 1:** platform chosen · citations live (NAP byte-identical) · AEO schema + FAQ plan speced · review engine running · insurance-advocacy and water response-time proof drafted · playbook drafted · ≥ enough project assets for Wave-1 cities. → build.

## Phase 2: Build the ranking surface (Weeks 5-12)

- Launch rebuilt core: homepage, 3 service hubs, roofing sub-pages (**storm-damage + insurance-claims first**), water emergency pages, contact, about, reviews, projects.
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

- City pages **Wave 2**, the zero-competition set: Montville, Hinckley, Valley City, Litchfield (remodel emphasis for the high-income two; roof/water for the closer two).
- Remodeling sub-pages + first premium case study (kitchen/bath, budget band + timeline); mirror every remodel to the Houzz profile and request Houzz reviews (the metric Best of Houzz rewards). Local firms underplay Houzz, so it is a fast lane.
- Winter-demand content live (shipped by late October regardless of phase timing).
- Emergency + cost guides (flooded basement, bathroom/basement cost). Each guide doubles as AEO answer-content: question-first headers, direct answers, FAQ schema, so it is quotable by AI Overviews and assistants. Highest content score in any market is a 6, so depth here is uncontested.
- **Reader's Choice campaign (roofing) opens here.** Line up the Medina Gazette Reader's Choice push now so nominations and voting land in-cycle; Fixler's 3x wins are the identity moat to contest, and no other scored roofer holds it. Awards are an AI-visibility signal, not just a badge.
- Youth-sports + Main Street Medina sponsorships (link + brand).
- **Add review markup** once real reviews render → capture the "only SERP result with stars" opening.
- One tightly negative-matched Google Ads test on storm/emergency terms (audit §4.2 negative list), only after tracking + pages + review base are live; LSA/Google Guaranteed application if licensing docs ready.

**GATE 3:** Wave-2 cities live w/ proof · map-pack presence for emergency water · Reader's Choice campaign submitted in-cycle · ≥28 reviews (Fixler's 34 in reach, water on pace toward top-3 by volume) · review stars showing in SERPs · appearing in at least one AI answer for a target query. → authority.

## Phase 4: Authority (Months 7-12)

- City pages Wave 3 (remaining audited communities, demand-driven).
- Thought-leadership + storm-response cadence sustained; insurance-claim hub deepened (the moat lane, roofing and water).
- **AEO leadership consolidated:** own the cited-answer position across roofing and water queries, keep FAQ/answer schema and `/llms.txt` current, and track AI-answer appearances as a standing KPI. This is the compounding first-mover lane.
- Pursue Master Elite / OC tier + IICRC Certified Firm; **land the Reader's Choice win** to convert the roofing identity contest; if contesting remodeling, target NARI Certified Remodeler and the first Best of Houzz award (both draw on the review and portfolio base built in earlier phases). Add earned "best of Medina" list placements (AI-visibility #1 factor).
- Continuous CWV + content refresh; expand what's ranking page 2 → page 1.
- Re-run the competitive SERP + local-pack analysis with a Medina-grid tool (the audit's flagged next-phase gap) to resolve the competitor-set conflict and retarget.

**GATE 4 / 12-month scorecard:** ≥50 reviews and clear of Fixler's 34, with water on a trajectory toward SERVPRO's 189 ceiling · at least one award landed or in final voting (Reader's Choice; Best of Houzz if remodeling contested) · cited in AI answers for target queries · 40-70 non-brand page-1 keywords · organic a primary lead source · all KPI targets in `SEO-STRATEGY.md` §3 reviewed against actuals.

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
| Award-cycle timing (Reader's Choice, Best of Houzz) | roofing identity contest; remodeling award | Calendar-driven, not effort-driven. Line up nominations/voting in Phase 3 to land in-cycle; a missed window costs a full year |
| Water response-time guarantee | the water flag-plant claim | Set an arrival window operations can actually hit, then publish; an unmet guarantee is worse than none |
| Remodeling credentials (NARI/NKBA + Best of Houzz) | remodeling authority; the top tier is credentialed and defended | Owner decision first. Credentials are the entry price, not optional marketing. Start in Phase 1 or accept a ~12-month delay on remodeling traction |
| Jan-2026 domain age | organic traction | 6-12 mo expectation set; lean on GBP + reviews + storm content meanwhile |
| Competitor-set conflict unresolved | ad targeting | Grid/local-pack re-scan in Phase 4 before scaling spend |
