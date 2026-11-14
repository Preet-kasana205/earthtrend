// Educational preparedness content and cited retrospective context; not prediction data.

export const phase3Data = {
  scope: "Educational preparedness programme for school and college students in India. Not a predictive hazard model.",
  officialGuidance: [
    { name: "NDMA (National Disaster Management Authority)", url: "https://ndma.gov.in" },
    { name: "IMD (India Meteorological Department)", url: "https://mausam.imd.gov.in" },
    { name: "Indian Red Cross Society", url: "https://www.indianredcross.org" },
  ],
  historicalStats: {
    cseJanSep2026: {
      period: "1 Jan – 30 Sep 2026",
      extremeWeatherDays: "251 of 273 days",
      deaths: 3220,
      housesDamaged: 128334,
      source: "Centre for Science and Environment (CSE) State of India's Environment Report 2026",
    },
    cyclones: [
      { name: "Cyclone Arnab", impact: "9 deaths in Andhra Pradesh, 26+ total" },
      { name: "Cyclone Murasu", impact: "17+ deaths, ≥$203M damage, landfall 2–3 Nov 2026 near Ongole" },
    ],
  },
  modules: [
    { title: "Physics", desc: "Flood forces, earthquake wave mechanics, structural safety limits" },
    { title: "Biology", desc: "Heatstroke triage, dehydration, wound disinfection, CPR basics" },
    { title: "Psychology", desc: "Overcoming emergency cognitive freeze; drills to build situational calm" },
    { title: "Geography", desc: "Reading local district vulnerability maps, elevation & drainage awareness" },
    { title: "Ethics & Info", desc: "Verify before forwarding; combating life-threatening disaster misinformation" },
  ],
  videoNote: "Phase 3 training video (60 sec) available via external Google Drive link. Video binaries are not committed to Git.",
};

