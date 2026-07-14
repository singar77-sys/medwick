# Medwick Construction: SEO Implementation Roadmap

Phased build plan with **SEO gates**: each phase has a pass/fail check before the next starts. Aligned to the audit's 90-day plan (§6) and extended to 12 months. The window opens July 13, 2026, inside peak storm season.

---

## Phase 0: Stop the bleeding (Week 1, on the CURRENT site)

Do not wait for the rebuild. These recover leads and protect assets now.

1. **Fix the hero CTA phone number (C1)**: the button dials an Akron cell, not the displayed line. Confirm what 620-8778 is with the owner, then point `tel:` at (330) 635-3744. One-line fix, immediate lead recovery.
2. **Claim + verify the Google Business Profile (C2)**: it's 5.0★/9 and appears unclaimed. Set categories (General Contractor primary; Roofing / Water Damage Restoration / Remodeler secondaries), add all served communities, link site + socials, upload real project photos, enable messaging.
3. Publish the 12 existing reviews on the current page (replace "Reviews coming soon!"); surface real gallery photos in server HTML; add "City of Medina Registered Contractor #26-731 · Licensed & Insured" to footer.
4. Fix current-page title/meta/JSON-LD (30-min GoDaddy edits).
5. Install GA4 + Search Console: baseline everything before any spend (C4).

**GATE 0:** CTA dials canonical number · GBP claimed · GA4/GSC recording · reviews visible. → proceed.

## Phase 1: Foundation (Weeks 1-4)

Runs parallel to Phase 0. This is infrastructure, not content.

- Choose rebuild platform (SSR/static: Next.js/Astro), sign off sitemap (`SITE-STRUCTURE.md`).
- Stand up analytics/tag plan, call tracking architecture (canonical number on GBP/citations; tracking number reserved for ads only).
- Core citations with canonical NAP: BBB, Yelp, Angi, HomeAdvisor, Houzz, Thumbtack, Nextdoor, Bing Places, Apple Maps.
- Join Greater Medina Chamber; submit NMCC Alliance, Wadsworth, MCHBA applications.
- Begin IICRC WRT enrollment; open GAF/Owens Corning territory-rep conversations.
- **Remodeling decision point.** Decide now whether to contest the remodeling top tier. Per the market scan it will not fall to marketing alone, so if the answer is yes this is where it starts, not later: join NARI, begin the NARI Certified Remodeler / NKBA path, stand up and start populating a Houzz profile, and bank kitchen/bath project photos toward Best of Houzz eligibility. These credentials have long lead times; a late start pushes the payoff out by roughly a year.
- Launch the review engine (post-job text + `g.page` link; FTC-compliant).
- Pre-draft the storm-response playbook (August is peak, be ready).
- Start collecting per-town project photos + testimonials as build inputs (gates the city pages).

**GATE 1:** platform chosen · citations live · review engine running · playbook drafted · ≥ enough project assets for Wave-1 cities. → build.

## Phase 2: Build the ranking surface (Weeks 5-12)

- Launch rebuilt core: homepage, 3 service hubs, roofing sub-pages (**storm-damage + insurance-claims first**), water emergency pages, contact, about, reviews, projects.
- **Technical launch checklist (all must pass):** server-rendered content · CWV all "good" on mobile · one phone number sitewide · schema per §4.5 (no `aggregateRating` until reviews render on-page) · self-hosted images w/ descriptive alt · per-section sitemaps submitted · GA4/GSC firing on every page.
- City pages **Wave 1**: Medina, Brunswick, Wadsworth, each passing the 4-element anti-doorway gate.
- Publish cornerstone content 1-3 (`CONTENT-CALENDAR.md`).
- First earned-media pitch (Medina Gazette, new owner-led county contractor angle); book Medina County Fair sponsorship.
- Social cadence starts (3/week, geo-tagged).
- Review checkpoint: ≥ 15 total Google reviews.

**GATE 2:** every launched page passes the technical checklist · Wave-1 cities each have real local proof · ≥15 reviews. → expand. *(A page that fails the checklist does not get indexed. Fix before submitting.)*

## Phase 3: Extend into the open field (Weeks 13-24 / Months 4-6)

- City pages **Wave 2**, the zero-competition set: Montville, Hinckley, Valley City, Litchfield (remodel emphasis for the high-income two; roof/water for the closer two).
- Remodeling sub-pages + first premium case study (kitchen/bath, budget band + timeline); mirror every remodel to the Houzz profile and request Houzz reviews (the metric Best of Houzz rewards). Local firms underplay Houzz, so it is a fast lane.
- Winter-demand content live (shipped by late October regardless of phase timing).
- Emergency + cost guides (flooded basement, bathroom/basement cost).
- Youth-sports + Main Street Medina sponsorships (link + brand).
- **Add review markup** once real reviews render → capture the "only SERP result with stars" opening.
- One tightly negative-matched Google Ads test on storm/emergency terms (audit §4.2 negative list), only after tracking + pages + review base are live; LSA/Google Guaranteed application if licensing docs ready.

**GATE 3:** Wave-2 cities live w/ proof · map-pack presence for emergency water · ≥28 reviews · review stars showing in SERPs. → authority.

## Phase 4: Authority (Months 7-12)

- City pages Wave 3 (remaining audited communities, demand-driven).
- Thought-leadership + storm-response cadence sustained; insurance-claim hub deepened (the moat lane).
- Pursue Master Elite / OC tier + IICRC Certified Firm; if contesting remodeling, target NARI Certified Remodeler and the first Best of Houzz award (both draw on the review and portfolio base built in earlier phases). Add earned "best of Medina" list placements (AI-visibility #1 factor).
- Continuous CWV + content refresh; expand what's ranking page 2 → page 1.
- Re-run the competitive SERP + local-pack analysis with a Medina-grid tool (the audit's flagged next-phase gap) to resolve the competitor-set conflict and retarget.

**GATE 4 / 12-month scorecard:** ≥50 reviews · 40-70 non-brand page-1 keywords · organic a primary lead source · all KPI targets in `SEO-STRATEGY.md` §3 reviewed against actuals.

---

## Dependencies & risks

| Dependency | Blocks | Mitigation |
|---|---|---|
| Owner confirms 620-8778 | C1 fix | 5-minute conversation; do first |
| GBP verification (video, 2026 standard) | map-pack, all local | Start week 1; can lag build |
| Real per-town project assets | city pages | Collect continuously from Phase 1; gates Wave 1/2 |
| IICRC/GAF/OC enrollment lead times | certification claims | Start early; claim only when documented |
| Remodeling credentials (NARI/NKBA + Best of Houzz) | remodeling authority; the top tier is credentialed and defended | Owner decision first. Credentials are the entry price, not optional marketing. Start in Phase 1 or accept a ~12-month delay on remodeling traction |
| Jan-2026 domain age | organic traction | 6-12 mo expectation set; lean on GBP + reviews + storm content meanwhile |
| Competitor-set conflict unresolved | ad targeting | Grid/local-pack re-scan in Phase 4 before scaling spend |
