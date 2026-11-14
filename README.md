# EarthTrend — Earth System Trend Detective

> Built during NASA Space Apps Challenge, 14–15 November 2026.

EarthTrend is a static, source-traceable dashboard for exploring verified Pacific observations and the 2026 Indian Southwest Monsoon record. It includes historical observations and climatological baselines as well as 2026 values. It does not use demo series or a backend feed.

## Pages

1. **Overview** — Niño-3.4 reference map and four verified headline values.
2. **Trend Explorer** — a source selector for monthly Niño-3.4 SST anomalies, September 2026 daily Pacific rainfall, the complete ORAS5 historical series, and NASA GLDAS soil moisture for Rajasthan or Assam, with computed trend statistics.
3. **Relationships** — side-by-side, dated agency assessments and a separation of observed variables; no significance test is reported.
4. **India Monsoon** — the 2026 seasonal total and monthly percentages of the Long Period Average (LPA).
5. **Datasets** — source-to-visualization traceability matrix and the preserved raw-file manifest.
6. **Methodology** — rainfall arithmetic, raw-data checks, definitions, and scientific caveats.
7. **Phase 3: Preparedness** — educational preparedness material and official guidance links. This is not a predictive hazard model.

## Architecture

- React 19, TypeScript, and Vite 8.
- Tailwind CSS v4 through `@tailwindcss/vite`; shared dark design tokens and responsive sidebar/top bar/footer.
- Recharts line and bar charts with tooltips and gridlines; lucide-react icons.
- `src/data/realData.ts` contains verified headline values and their source, period, baseline, and caveat metadata. Preparedness curriculum content is in `src/data/phase3Data.ts`.
- Chart series extracted from original files live in `src/data/pacificDailyRainfall2026.ts`, `src/data/pacificSeptemberBaselineMeans.ts`, `src/data/oras5ThermoclineData.ts`, and `src/data/gldasSoilMoistureData.ts`.
- `src/lib/trendAnalysis.ts` is the shared Theil–Sen slope and two-sided Mann–Kendall engine for monthly series and annual September means. Trend results are computed from observations, not hardcoded.
- `src/data/raw/` stores the original source files unchanged. There is no application backend or live data endpoint.

## Datasets and sources

| Variable | Source and product | Period / baseline | Presentation |
| --- | --- | --- | --- |
| Monthly Niño-3.4 SST anomaly | NOAA CPC, ERSST v5 | September and October 2026; 1991–2020 baseline | Monthly SST anomaly, explicitly not ONI |
| Pacific daily precipitation rate | NASA Giovanni, GPM IMERG v07 Late Run | 1–30 September 2026; September daily baseline 2001–2019 (570 observations) | mm/day; 30 raw daily observations |
| 20°C isotherm source values | ECMWF/Copernicus ORAS5 workbook | January 1958–November 2025; 815 monthly observations; 0°N, 110°W | Unit unconfirmed in source header; never labelled metres |
| Soil moisture content, 0–10 cm | NASA Giovanni, GLDAS Noah v2.1 monthly | January 2000–December 2025; 312 months each for Rajasthan and Assam | kg/m²; raw area-averaged monthly values; computed regional trends |
| Indian Ocean Dipole assessment | Australian Bureau of Meteorology and India Meteorological Department | BoM week to 8 November 2026; IMD assessment 31 October 2026 | Agency assessments shown separately with dates |
| Southwest monsoon rainfall | India Meteorological Department | June–September 2026; 1971–2020 LPA | Seasonal total and monthly percentages of LPA |
| Subsurface temperature anomalies | NOAA CPC | October 2026 | Separate variable from ORAS5 isotherm depth |
| Sea-surface height | NASA/CNES Sentinel-6 context | Source context dated October 2026 | Qualitative pattern only; no centimetre charts or contours |
| Historical disaster context | Centre for Science and Environment report, as cited in project notes | 1 January–30 September 2026 | Retrospective educational context only |

### Preserved raw files

- `src/data/raw/sep_26g4.areaAvgTimeSeries.GPM_3IMERGDL_07_precipitation.20260901-20260930.170W_5S_120W_5N.csv`
- `src/data/raw/g4.areaAvgTimeSeries.GPM_3IMERGDL_07_precipitation.20010101-20200101.170W_5S_120W_5N.csv`
- `src/data/raw/ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx`
- `src/data/raw/g4.areaAvgTimeSeries.GLDAS_NOAH025_M_2_1_SoilMoi0_10cm_inst.20000101-20251231.69E_23N_78E_30N.csv` (Rajasthan)
- `src/data/raw/g4.areaAvgTimeSeries.GLDAS_NOAH025_M_2_1_SoilMoi0_10cm_inst.20000101-20251231.89E_24N_96E_28N.csv` (Assam)

## Methodology and scientific safeguards

- September 2026 rainfall: 30 daily observations sum to **132.9762 mm**, giving a mean of **4.4325 mm/day**.
- September 2001–2019 baseline: 570 daily observations sum to **383.7893 mm**, giving a mean of **0.6733 mm/day**. The extractor also computes 19 separate annual September means (30 daily values each); those means, rather than hardcoded values, feed the baseline trend test.
- Mean departure: **4.4325 − 0.6733 = +3.7592 mm/day**.
- The chart modules are reproducibly generated from the preserved CSV and XLSX sources. The extraction checks dates, record counts, duplicates, missing/nonnumeric values, coordinates, source headers, and reported calculations. No synthetic points or missing-value interpolation is used.
- GLDAS and ORAS5 use Theil–Sen slopes annualized by elapsed calendar time and a two-sided standard Mann–Kendall test with tie-corrected variance and continuity correction at α = 0.05. ORAS5 remains in unconfirmed source-value units. The annual September rainfall trend uses 19 means computed from the 2001–2019 baseline CSV. P-values use a normal approximation and do not adjust for serial autocorrelation; monthly GLDAS/ORAS5 tests also have no seasonal adjustment. A rising annual-mean soil moisture value does not mean droughts did not occur.
- Niño-3.4 significance is not assessed because the available series contains only September (+2.1°C) and October (+2.5°C), too few monthly observations for a trend test. Monsoon percentages remain descriptive because four monthly percentages against LPA describe one season, not a comparable multi-year time series.
- Monthly Niño-3.4 SST anomalies are not ONI. ONI is a three-month running index.
- ORAS5 thermocline source values keep the workbook's unconfirmed-units caveat. NOAA CPC subsurface temperature anomalies remain a separate variable.
- Sea-surface height is pattern-only. Phase 3 provides preparedness education and does not issue predictions or alerts.
- Trend tests are shown for GLDAS, ORAS5 and the 19 annual September baseline means. The two-month SST series and one-season monsoon percentages are not tested; no test result establishes causation.
- Data snapshot frozen as of 13 November 2026.

## Setup

```bash
npm install
npm run dev
```

### Checks

```bash
npm test
npm run build
npm run lint
```

The data test checks headline values, typed series, and dynamically computed GLDAS, ORAS5, and annual September rainfall trend values. To validate the original files and ensure the generated modules match them, install the XLSX extraction dependency and run:

```bash
python -m pip install -r requirements-extraction.txt
npm run data:check
```

To regenerate the typed series from the unchanged raw sources:

```bash
npm run data:extract
```

## AI development tools

AI tools used during project work: **Muse, Google AI Studio, Codex (free), and Antigravity**.
