// Real data only — frozen 13 Nov 2026. No formulas, no demo data.
// Sources, periods and baselines are on every value.

export const nino34 = {
  oct2026Monthly: 2.5, // °C, CPC relative index, ERSST, 1991-2020 baseline
  sep2026Monthly: 2.1, // °C, CPC relative index, same baseline
  weekly25to31Oct2026: 3.4, // °C, conventional index, WEEKLY only — do not mix with monthly
  source: "NOAA CPC ENSO Discussion, Nov 2026",
};

export const pacificRainfall = {
  sep2026Mean: 4.43, // mm/day, 1-30 Sep 2026
  sepBaselineMean: 0.67, // mm/day, Sep 2001-2019 mean
  sep2026Anomaly: 3.76, // mm/day
  source: "NASA Giovanni, GPM IMERG v07 Late Run, daily, Nino-3.4 box 170W-120W, 5S-5N",
};

export const iod = {
  bomWeeklyTo8Nov2026: 0.75, // °C, BoM, positive IOD declared
  imdStatus31Oct2026: "neutral, likely neutral till Dec 2026",
  source: "BoM / IMD, 31 Oct - 8 Nov 2026",
};

export const monsoon2026 = {
  percentOfLPA: 87,
  rainfallMm: 759.4,
  lpaMm: 868.6,
  source: "IMD Southwest Monsoon 2026 statement",
};

export const thermocline = {
  label: "Depth of 20°C isotherm, ORAS5, single point 0°N 110°W, metres (units unconfirmed in file header), Jan 1958-Nov 2025. No 2026 in ORAS5.",
  cpcOct2026Update: "Deeper than average in the east, subsurface anomalies >+10°C at depth, upper-300m eastern half +3.32°C",
  source: "ORAS5 + NOAA CPC Oct 2026",
};

export const ssh = {
  label: "Pattern only — no cm chart. East Pacific 30-40 cm higher, Indonesia / northern Australia 15-20 cm below normal (Sentinel-6, 12 Oct 2026 map). Caveat: that range is from a passage about Kelvin waves reaching the east by early April, not a labelled reading off the 12 Oct map.",
  source: "NASA Sentinel-6 / NASA Earth Observatory, 23 Oct 2026",
};
