export interface TraceabilityItem {
  displayedValue: string;
  variableName: string;
  sourceAgency: string;
  productDataset: string;
  spatialDomain: string;
  temporalPeriod: string;
  climatologicalBaseline: string;
  processingCalculation: string;
  destinationComponent: string;
  verificationStatus: "Verified" | "Caution / Caveated" | "Pattern-Only" | "Forecast (Non-Observed)";
}

export const traceabilityData: TraceabilityItem[] = [
  {
    displayedValue: "+2.5°C (Oct 2026), +2.1°C (Sep 2026)",
    variableName: "Monthly Niño-3.4 Sea Surface Temperature Anomaly",
    sourceAgency: "NOAA Climate Prediction Center (CPC)",
    productDataset: "ERSST v5 (Extended Reconstructed Sea Surface Temperature)",
    spatialDomain: "Niño-3.4 Box (5°N–5°S, 170°W–120°W)",
    temporalPeriod: "September & October 2026 (Monthly)",
    climatologicalBaseline: "1991–2020 30-year base period",
    processingCalculation: "Monthly area-weighted average SST departure from 1991–2020 base. Labelled strictly as monthly Niño-3.4 SST anomaly, NOT Oceanic Niño Index (ONI 3-month running mean).",
    destinationComponent: "Overview (Card 1), Trend Explorer (SST Panel)",
    verificationStatus: "Verified",
  },
  {
    displayedValue: "+3.76 mm/day (Sep 2026 anomaly: 4.43 vs 0.67 mm/day)",
    variableName: "Area-averaged daily precipitation rate (GPM_3IMERGDL_07)",
    sourceAgency: "NASA Giovanni / GSFC",
    productDataset: "GPM IMERG v07 Late Run, daily",
    spatialDomain: "Niño-3.4 Box (5°N–5°S, 170°W–120°W)",
    temporalPeriod: "1–30 September 2026 (30 daily observations)",
    climatologicalBaseline: "0.67 mm/day (383.789 mm sum / 570 Sep days, 2001–2019)",
    processingCalculation: "Sep 2026: Sum = 132.9762 mm over 30 days → Mean = 4.4325 mm/day (4.43). Baseline: 570 observations → Mean = 0.6733 mm/day (0.67). Anomaly: 4.4325 - 0.6733 = +3.7592 mm/day (+3.76 mm/day).",
    destinationComponent: "Overview (Card 2), Trend Explorer (Daily Chart), Methodology",
    verificationStatus: "Verified",
  },
  {
    displayedValue: "BoM +0.75°C (week to 8 Nov 2026) vs IMD Neutral (31 Oct 2026)",
    variableName: "Indian Ocean Dipole (IOD) Index / Dipole Mode Index (DMI)",
    sourceAgency: "Australian Bureau of Meteorology (BoM) / India Meteorological Dept (IMD)",
    productDataset: "BoM Climate Driver Update / IMD Climate Diagnostic Bulletin",
    spatialDomain: "Tropical Indian Ocean (Western pole: 50°E–70°E, 10°S–10°N; Eastern pole: 90°E–110°E, 10°S–0°)",
    temporalPeriod: "Week to 8 Nov 2026 (BoM); 31 Oct 2026 (IMD)",
    climatologicalBaseline: "Agency-specific standard climatologies (BoM positive threshold > +0.4°C)",
    processingCalculation: "Both reported separately. BoM declares positive event based on multi-week threshold exceedance; IMD reports neutral. Different index definitions and dates; neither agency is wrong.",
    destinationComponent: "Overview (Card 3), Relationships (IOD Section)",
    verificationStatus: "Verified",
  },
  {
    displayedValue: "87.4% of LPA (759.4 mm observed vs 868.6 mm LPA)",
    variableName: "All-India Southwest Monsoon Seasonal Rainfall",
    sourceAgency: "India Meteorological Department (IMD)",
    productDataset: "IMD Southwest Monsoon 2026 End of Season Statement",
    spatialDomain: "All-India countrywide spatial average",
    temporalPeriod: "1 June – 30 September 2026",
    climatologicalBaseline: "868.6 mm Long Period Average (LPA, 1971–2020)",
    processingCalculation: "(759.4 / 868.6) * 100 = 87.428% → exactly 87.4% of LPA (not 87%). Ranked 4th lowest since 2001. Monthly: Jun 65%, Jul 101%, Aug 84%, Sep 92%.",
    destinationComponent: "Overview (Card 4), India Monsoon (Summary & Monthly Chart)",
    verificationStatus: "Verified",
  },
  {
    displayedValue: "Depth of 20°C Isotherm: 1958–2025 series",
    variableName: "Depth of 20°C isotherm (ORAS5 ocean reanalysis)",
    sourceAgency: "ECMWF / Copernicus Marine Service",
    productDataset: "ORAS5 (Ocean Reanalysis System 5)",
    spatialDomain: "Single geographical point: 0°N, 110°W (Equatorial Eastern Pacific)",
    temporalPeriod: "January 1958 – November 2025 (815 unbroken monthly values)",
    climatologicalBaseline: "Historical time series record (no 2026 values exist in ORAS5)",
    processingCalculation: "Extracted directly from cleaned ORAS5 workbook. Units unconfirmed in source header ('source value; confirm units'). NOT labelled as metres. Axis displayed as 'Unit unconfirmed'.",
    destinationComponent: "Trend Explorer (Historical Thermocline Chart)",
    verificationStatus: "Caution / Caveated",
  },
  {
    displayedValue: "Subsurface anomalies >+10°C at depth, upper-300m east +3.32°C",
    variableName: "Equatorial Pacific Subsurface Ocean Temperature Anomalies",
    sourceAgency: "NOAA Climate Prediction Center (CPC)",
    productDataset: "CPC Ocean Temperature Cross-Section Analysis",
    spatialDomain: "Equatorial Pacific upper 300m ocean column",
    temporalPeriod: "October 2026",
    climatologicalBaseline: "1991–2020 pentad climatology",
    processingCalculation: "Reported as contextual physical evidence. Maintained strictly separate from ORAS5 depth series; NEVER appended to ORAS5 depth curve.",
    destinationComponent: "Trend Explorer (Subsurface Temperature Card)",
    verificationStatus: "Verified",
  },
  {
    displayedValue: "Kelvin wave propagation: East +30–40 cm, West -15–20 cm",
    variableName: "Sea Surface Height (SSH) / Sea Level Pattern",
    sourceAgency: "NASA / CNES Sentinel-6 Michael Freilich / NASA Earth Observatory",
    productDataset: "Satellite radar altimetry qualitative summary",
    spatialDomain: "Equatorial Pacific basin",
    temporalPeriod: "Contextual report 23 Oct 2026 (Kelvin wave transit through April)",
    climatologicalBaseline: "Multi-year altimetric mean surface height",
    processingCalculation: "Descriptive qualitative pattern only. Caveat: reflects Kelvin wave transit to eastern Pacific by early April, NOT a point reading from the 12 Oct 2026 map. No numerical cm chart or contours.",
    destinationComponent: "Trend Explorer (SSH Pattern Card)",
    verificationStatus: "Pattern-Only",
  },
  {
    displayedValue: "3,220 deaths, 251/273 days, 128,334 houses damaged",
    variableName: "India Extreme Weather Events Statistics",
    sourceAgency: "Centre for Science and Environment (CSE) India",
    productDataset: "State of India's Environment 2026 (Disaster Chapter)",
    spatialDomain: "All India (States and Union Territories)",
    temporalPeriod: "1 January – 30 September 2026",
    climatologicalBaseline: "Historical disaster mortality statistics",
    processingCalculation: "Aggregated disaster impact figures from CSE annual tracking report. Cyclone Arnab (9 AP deaths, 26+ total); Cyclone Murasu (17+ deaths, ≥$203M damage). Presented as historical statistics only.",
    destinationComponent: "Phase 3: Preparedness (Disaster Context)",
    verificationStatus: "Verified",
  },
];
