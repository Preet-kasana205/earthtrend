// Real data only — frozen 13 Nov 2026. No formulas, no demo data.
// Sources, periods and baselines are on every value.

export const nino34 = {
  label: "MONTHLY Niño-3.4 SST Anomaly",
  note: "Labelled as monthly Niño-3.4 SST anomalies, NOT ONI (Oceanic Niño Index). Weekly readings are strictly separate and not headlines.",
  oct2026Monthly: 2.5, // °C, CPC relative index, ERSST, 1991-2020 baseline
  sep2026Monthly: 2.1, // °C, CPC relative index, same baseline
  baseline: "1991–2020",
  product: "ERSST v5",
  source: "NOAA CPC ENSO Discussion, Nov 2026",
  forecast: "Strong-to-very-strong El Niño likely through Jan–Mar 2027 (model forecast, not observation)",
};

export const pacificRainfall = {
  variable: "GPM IMERG v07 Late Run, daily, GPM_3IMERGDL precipitation",
  box: "Niño-3.4 box 170°W–120°W, 5°S–5°N",
  sep2026TotalMm: 132.98, // mm total over 30 days (sum: 132.9762 mm)
  sep2026Days: 30,
  sep2026Mean: 4.43, // mm/day (132.9762 / 30 = 4.4325 mm/day)
  sepBaselineObservations: 570, // 570 September daily observations, 2001–2019
  sepBaselineMean: 0.67, // mm/day (sum: 383.7893 mm / 570 = 0.6733 mm/day)
  sep2026Anomaly: 3.76, // mm/day (4.4325 - 0.6733 = +3.7592 mm/day)
  source: "NASA Giovanni, GPM IMERG v07 Late Run, daily, Nino-3.4 box 170W-120W, 5S-5N",
};

export const iod = {
  bomWeeklyTo8Nov2026: 0.75, // °C, BoM, positive IOD declared
  bomPeriod: "Week to 8 Nov 2026",
  imdStatus31Oct2026: "neutral, likely neutral till Dec 2026",
  imdDate: "31 Oct 2026",
  note: "Different methods and assessment dates; neither agency is wrong. Positive IOD is not a uniform shield for India.",
  source: "BoM / IMD, 31 Oct - 8 Nov 2026",
};

export const monsoon2026 = {
  percentOfLPA: 87.4, // exactly 87.4%, not 87%
  rainfallMm: 759.4,
  lpaMm: 868.6,
  rank: "4th lowest since 2001",
  monthlyPercentOfLPA: {
    june: 65,
    july: 101,
    august: 84,
    september: 92,
  },
  regionalNote: "East and Northeast India recorded their driest monsoon season since 1901 on seasonal totals.",
  source: "IMD Southwest Monsoon 2026 statement",
};

export const thermocline = {
  label: "Depth of 20°C isotherm, ORAS5, single point 0°N, 110°W. Unit unconfirmed in file header. Jan 1958–Nov 2025. No 2026 in ORAS5.",
  unitsCaveat: "Unit unconfirmed in file header ('Depth of 20C isotherm (source value; confirm units)'). Not labelled as metres.",
  location: "0°N, 110°W (single point)",
  period: "Jan 1958 – Nov 2025 (815 monthly observations)",
  cpcOct2026Update: "Deeper than average in the east, subsurface anomalies >+10°C at depth, upper-300m eastern half +3.32°C",
  cpcNote: "NOAA CPC Oct 2026 subsurface temperature anomaly is a separate physical variable. NEVER appended to the ORAS5 depth series.",
  source: "ORAS5 (ECMWF) + NOAA CPC Oct 2026",
};

export const ssh = {
  label: "Pattern only — no cm chart, no contours, no animated field. Eastern Pacific 30–40 cm higher, Indonesia / northern Australia 15–20 cm below normal (Sentinel-6, 12 Oct 2026 map context).",
  caveat: "That range reflects localised Kelvin wave changes reaching the eastern Pacific by early April, not a labelled numerical reading off the 12 Oct 2026 Sentinel-6 map.",
  source: "NASA Sentinel-6 / NASA Earth Observatory, 23 Oct 2026",
};

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
