# 🌍 EarthTrend — Earth System Trend Detective

> **Built during NASA Space Apps Challenge, 14–15 November 2026.**

EarthTrend is a transparent, rigorous Earth observation analytics platform developed to investigate the physical linkages between equatorial Pacific Ocean-atmosphere anomalies in late 2026 and the 2026 Indian Southwest Monsoon.

The platform is built on verified empirical observations only. It enforces strict scientific safeguards: no synthetic data backfilling, no artificial p-values, explicit separation of physical variables, and documented source-to-visualization traceability.

---

## 🧭 The Seven Pages

1. **Overview (Map-First)**:
   - Schematic reference map highlighting the Niño-3.4 equatorial Pacific bounding box ($5^\circ\text{N}–5^\circ\text{S}, 170^\circ\text{W}–120^\circ\text{W}$).
   - Four core headline metric cards: Monthly Niño-3.4 SST anomaly, GPM IMERG Pacific rainfall anomaly, Indian Ocean Dipole (IOD) agency divergence, and Southwest Monsoon 2026 performance.
   - Plain-language epistemic caveat: *Significance not assessed; correlation does not prove causation.*

2. **Trend Explorer**:
   - **Sea Surface Temperature (SST):** Monthly Niño-3.4 anomalies (+2.1°C in Sep, +2.5°C in Oct 2026; ERSST v5, 1991–2020 baseline) with explicit distinction between empirical monthly observations and forward model forecasts.
   - **Pacific Rainfall:** 30 daily observations (1–30 September 2026) totaling 132.98 mm (mean 4.43 mm/day vs 0.67 mm/day baseline; anomaly +3.76 mm/day).
   - **Thermocline Depth (ORAS5):** Historical monthly time series from Jan 1958 to Nov 2025 at $0^\circ\text{N}, 110^\circ\text{W}$ with unconfirmed units strictly noted on the axis.
   - **Subsurface Ocean Temperature (NOAA CPC):** Dedicated contextual card displaying Oct 2026 subsurface thermal anomalies ($>+10^\circ\text{C}$ at depth, upper-300m eastern half $+3.32^\circ\text{C}$) strictly segregated from the ORAS5 depth series.
   - **Sea Surface Height (SSH):** Qualitative altimetry pattern analysis from Sentinel-6 with explicit notice: no synthetic cm charts or animated fields.

3. **Relationships**:
   - Physical synthesis of ocean-atmosphere coupling (SST warming, convective cloud shifts, thermocline depth, and monsoon depressions).
   - Analysis of the IOD divergence between the Australian Bureau of Meteorology (BoM positive at +0.75°C) and India Meteorological Department (IMD neutral). Explains that positive IOD is not a blanket guarantee of good rainfall for India and does not explain localized floods on its own.
   - Distinguishes observed associations from causal explanations; omits misleading demo p-values.

4. **India Monsoon**:
   - All-India Southwest Monsoon 2026 seasonal rainfall: 759.4 mm vs 868.6 mm Long Period Average (LPA) = **87.4% of LPA** (4th lowest since 2001).
   - Monthly breakdown chart: June (65%), July (101%), August (84%), September (92% of LPA).
   - Spatial vs temporal distinctions: East and Northeast India recording their driest season since 1901, and why seasonal deficits can coexist with catastrophic localized flood events.
   - IMD post-monsoon seasonal outlook for November 2026.

5. **Datasets & Provenance**:
   - Preserved raw data repository (`src/data/raw/`) containing original NASA Giovanni CSVs and ECMWF ORAS5 workbook.
   - Full Source-to-Visualization Traceability Matrix mapping every displayed metric to its original agency, product, domain, period, baseline, calculation, and UI destination.
   - Temporal freeze declaration (frozen as of 13 November 2026).

6. **Methodology**:
   - Complete mathematical audit reproducing the Pacific daily rainfall calculations:
     $$\text{Sep 2026 Total} = 132.9762\text{ mm} \rightarrow \text{Mean} = 4.4325\text{ mm/day} \approx 4.43\text{ mm/day}$$
     $$\text{Baseline Mean (2001–2019)} = \frac{383.7893\text{ mm}}{570\text{ obs}} = 0.6733\text{ mm/day} \approx 0.67\text{ mm/day}$$
     $$\text{Anomaly} = 4.4325 - 0.6733 = +3.7592\text{ mm/day} \approx +3.76\text{ mm/day}$$
   - Climatological standards: Monthly Niño-3.4 SST anomaly vs ONI 3-month running mean; ORAS5 unit caveat verification; BoM vs IMD diagnostic criteria.

7. **Phase 3: Disaster Resilience Education (Prepared. Not Panicked.)**:
   - Non-predictive educational curriculum designed for school and university students across India.
   - Direct gateway links to official disaster management agencies: National Disaster Management Authority (NDMA), India Meteorological Department (IMD), and Indian Red Cross Society.
   - Verified historical impact statistics from the Centre for Science and Environment (CSE) Jan–Sep 2026 report: 3,220 deaths, 251/273 extreme weather days, 128,334 houses damaged; Cyclone Arnab and Cyclone Murasu records.
   - Five educational pillars: Physics, Biology, Psychology, Geography, and Ethics.

---

## 📊 Scientific Data Sources

| Parameter | Variable / Product | Source Agency | Baseline Period |
| :--- | :--- | :--- | :--- |
| **Niño-3.4 SST** | ERSST v5 (Monthly Anomaly) | NOAA Climate Prediction Center (CPC) | 1991–2020 |
| **Pacific Rainfall** | GPM_3IMERGDL_07 (IMERG v07 Late) | NASA Giovanni / GSFC | 2001–2019 Septembers |
| **Indian Ocean Dipole** | Weekly DMI / Monthly Climate Bulletin | BoM (Australia) / IMD (India) | Operational Baselines |
| **Southwest Monsoon** | All-India Area Weighted Precipitation | India Meteorological Department (IMD) | 1971–2020 (868.6 mm LPA) |
| **Thermocline Depth** | Depth of 20°C Isotherm (0°N, 110°W) | ECMWF Copernicus ORAS5 | 1958–2025 Historical |
| **Subsurface Temp** | Upper 300m Equatorial Cross-Section | NOAA CPC | 1991–2020 Climatology |
| **Sea Surface Height** | Satellite Altimetry Pattern Analysis | NASA / CNES Sentinel-6 Michael Freilich | Altimetric Mean |
| **Historical Disasters** | State of India's Environment 2026 | Centre for Science and Environment (CSE) | Jan–Sep 2026 |

---

## 🛠️ Technical Architecture & Setup

- **Framework**: React 19 + TypeScript + Vite 8
- **Visualizations**: Native, accessible, responsive SVG chart components (zero external charting dependencies, 100% auditable mathematics)
- **Linter**: Oxlint (0 errors, 0 warnings)
- **Hosting**: Vercel

### Local Development

```bash
# Clone the repository
git clone https://github.com/Preet-kasana205/earthtrend.git
cd earthtrend

# Install dependencies
npm install

# Run development server
npm run dev

# Run Oxlint
npm run lint

# Compile and produce production build
npm run build
```

---

## 🤖 AI Development Disclosure

As required by competition guidelines:
- **Event:** Built during NASA Space Apps Challenge, 14–15 November 2026.
- **AI Development Tools Used:** Muse, Google AI Studio, Codex (free), Antigravity.
- All code, mathematical verification routines, and scientific documentation were developed and audited during 14–15 November 2026.
