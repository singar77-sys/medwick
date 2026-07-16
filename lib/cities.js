// Launch city pages, wave 1 per audit §4.3. Titles/metas are templated per
// the SEO spec; BODY CONTENT IS NOT. The anti-doorway gate (all four required
// before a page ships): local project photos, named local testimonial,
// town-specific housing/storm detail, distinct FAQs.
// Do not add cities here without those inputs. 14 max, ever (audit cap).

export const CITIES = [
  {
    slug: 'medina-oh',
    name: 'Medina',
    detail:
      "Home base, five minutes from the shop. Most houses here went up in the 80s, and the June 2025 windstorm (60 kt gusts) is the most recent claim driver we've seen.",
  },
  {
    slug: 'brunswick-oh',
    name: 'Brunswick',
    detail:
      'The WICK in Medwick. Biggest community in the county, 14,400 households, 75% owner-occupied, and a lot of 1970s roofs aging out right now.',
  },
  {
    slug: 'wadsworth-oh',
    name: 'Wadsworth',
    detail:
      'Rounds out wave one. About 10,500 households, houses built around 1978 on average, and less remodeling competition here than anywhere else in the county.',
  },
];

// The full audited service area (14 communities), listed on the hub now,
// pages added in later waves only as their content gates are met.
export const SERVICE_AREA_COMMUNITIES = [
  'Medina',
  'Brunswick',
  'Wadsworth',
  'Montville Township',
  'Hinckley Township',
  'Valley City',
  'Sharon Center',
  'Granger Township',
  'Litchfield Township',
  'Chippewa Lake',
  'Seville',
  'Lodi',
  'Westfield Center',
  'Spencer',
];
