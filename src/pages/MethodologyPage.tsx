import "../methodology.css";
import { Activity, Check, ClipboardCheck, Database, ShieldAlert } from "lucide-react";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { thermocline } from "../data/realData";

const checks = [
  "Exactly 815 monthly observations",
  "Continuous monthly dates from Jan 1958 through Nov 2025",
  "No duplicate dates or missing month records",
  "Finite numeric source values in every row",
  "Single location: 0°N, 110°W",
];

export function MethodologyPage() {
  return (
    <section className="page-section methodology-page">
      <div className="page-intro">
        <div><div className="eyebrow">Reproducibility · caveats · definitions</div><h2>How the numbers are made</h2><p>Calculations below are deterministic summaries of the preserved observations. Each comparison keeps its source period and variable definition.</p></div>
      </div>

      <article className="method-chapter surface surface-pad">
        <div className="chapter-kicker"><span>01</span><div className="eyebrow">Pacific rainfall calculation</div></div>
        <h3>September 2026 against the September climatological sample</h3>
        <p className="method-lead">The rainfall anomaly compares the NASA Giovanni daily area-averaged precipitation rate for 1–30 September 2026 with the mean of September daily observations from 2001–2019. Both series use the same Niño-3.4 bounding box.</p>
        <div className="method-definition-grid">
          <div><span>Variable</span><strong>GPM_3IMERGDL_07 precipitation</strong></div>
          <div><span>Region</span><strong>170°W–120°W · 5°S–5°N</strong></div>
          <div><span>Unit</span><strong>mm/day</strong></div>
          <div><span>Baseline</span><strong>570 September daily observations · 2001–2019</strong></div>
        </div>
        <div className="formula-block" aria-label="Pacific rainfall calculation">
          <div className="formula-heading"><ClipboardCheck size={15} />Reproducible calculation</div>
          <div className="formula-line"><span>September 2026</span><code>30 daily observations · Σ = 132.9762 mm</code></div>
          <div className="formula-line"><span>Observed daily mean</span><code>132.9762 ÷ 30 = 4.4325 mm/day</code></div>
          <div className="formula-line"><span>September baseline mean</span><code>383.7893 ÷ 570 = 0.6733 mm/day</code></div>
          <div className="formula-line formula-result"><span>Mean departure</span><code>4.4325 − 0.6733 = +3.7592 mm/day</code></div>
          <div className="formula-line"><span>Trend input</span><code>19 annual September means, each computed from 30 daily observations (2001–2019)</code></div>
        </div>
        <div className="method-source"><Database size={14} /><span>Raw source files: NASA Giovanni September 2026 CSV and 2001–2020 CSV in <code>src/data/raw/</code>. The baseline calculation uses only September dates in 2001–2019. A Theil–Sen slope and standard two-sided Mann–Kendall test use the 19 computed annual means; serial autocorrelation is not adjusted.</span></div>
      </article>

      <article className="method-chapter surface surface-pad">
        <div className="chapter-kicker"><span>02</span><div className="eyebrow">ORAS5 data quality</div></div>
        <h3>Historical source values, one location, units unconfirmed</h3>
        <p className="method-lead">The chart series is extracted from the workbook’s “Monthly Data” worksheet. The source field is named “Depth of 20C isotherm (source value; confirm units)”. Its measurement units have not been confirmed, so the chart and annualized Sen slope use source values and never call them metres. The Trend Explorer tests all 815 monthly records with the standard two-sided Mann–Kendall test; there is no seasonal or serial-autocorrelation correction.</p>
        <div className="quality-grid"><div className="quality-count"><strong>815</strong><span>monthly rows</span></div><div className="quality-period"><span className="mono">JAN 1958 — NOV 2025</span><span>{thermocline.location}</span></div></div>
        <ul className="quality-check-list">{checks.map((check) => <li key={check}><Check size={14} />{check}</li>)}</ul>
        <div className="method-source"><Database size={14} /><span>Original source: <code>src/data/raw/ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx</code>. No 2026 ORAS5 values are added.</span></div>
      </article>

      <article className="method-chapter surface surface-pad">
        <div className="chapter-kicker"><span>03</span><div className="eyebrow">NASA GLDAS soil moisture trend</div></div>
        <h3>Two monthly area-averaged records, compared with a documented trend test</h3>
        <p className="method-lead">GLDAS Noah v2.1 soil moisture content for the 0–10 cm layer is extracted from the two original NASA Giovanni CSV files. Each region has 312 monthly observations from January 2000 through December 2025, in kg/m². The source bounding boxes and monthly date sequence are checked before extraction.</p>
        <div className="method-definition-grid">
          <div><span>Variable</span><strong>GLDAS Noah v2.1 · SoilMoi0_10cm_inst</strong></div>
          <div><span>Regions</span><strong>Rajasthan · Assam</strong></div>
          <div><span>Unit</span><strong>kg/m²</strong></div>
          <div><span>Period</span><strong>312 monthly observations per region · 2000–2025</strong></div>
        </div>
        <div className="formula-block" aria-label="GLDAS trend method">
          <div className="formula-heading"><Activity size={15} />Computed from the full monthly series</div>
          <div className="formula-line"><span>Slope</span><code>Theil–Sen median of pairwise slopes, annualized by elapsed calendar time</code></div>
          <div className="formula-line"><span>Test</span><code>Two-sided standard Mann–Kendall · tie-corrected variance · continuity correction</code></div>
          <div className="formula-line"><span>Decision threshold</span><code>α = 0.05 · normal-approximation p-value</code></div>
          <div className="formula-line formula-result"><span>Scope</span><code>No seasonal stratification or serial-autocorrelation correction</code></div>
        </div>
        <div className="method-source"><Database size={14} /><span>Sources: both original GLDAS CSVs under <code>src/data/raw/</code>. Extraction is reproducible with <code>python scripts/extractGldasSoilMoisture.py</code>. A rising annual-mean soil moisture value does not mean droughts did not occur.</span></div>
      </article>

      <article className="method-chapter safeguard-chapter surface-raised surface-pad">
        <div className="chapter-kicker"><span>04</span><div className="eyebrow">Interpretation safeguards</div></div>
        <h3>Keep labels tied to the underlying variable</h3>
        <div className="safeguard-list">
          <div><span className="safeguard-marker">A</span><div><strong>Monthly Niño-3.4 anomaly is not ONI</strong><p>Monthly SST anomaly values are labelled as monthly Niño-3.4 anomalies. ONI is a three-month running index. Significance is not assessed: the September and October values are only two monthly observations, too short for a trend test.</p></div></div>
          <div><span className="safeguard-marker">B</span><div><strong>Subsurface temperature and thermocline depth stay separate</strong><p>The NOAA CPC October 2026 temperature anomaly summary is contextual information and is never appended to the historical ORAS5 isotherm-depth series.</p></div></div>
          <div><span className="safeguard-marker">C</span><div><strong>Sea-surface height is pattern-only</strong><p>No centimetre chart, contour map, or synthetic field is generated for SSH.</p></div></div>
          <div><span className="safeguard-marker">D</span><div><strong>Phase 3 is preparedness education</strong><p>The module provides educational context and official guidance links. It does not predict hazards or issue warnings.</p></div></div>
          <div><span className="safeguard-marker">E</span><div><strong>GLDAS trends do not rule out droughts</strong><p>A trend in monthly soil moisture or a rising annual mean does not show that droughts were absent. The standard Mann–Kendall test here does not correct for serial autocorrelation.</p></div></div>
          <div><span className="safeguard-marker">F</span><div><strong>Monsoon percentages are descriptive</strong><p>The four June–September percentages compare one season with the LPA. They are seasonal percentages, not a comparable multi-year time series for trend testing.</p></div></div>
        </div>
        <div className="method-source"><ShieldAlert size={14} /><span>Trend tests are documented for GLDAS, ORAS5 and annual September baseline means. No test is run on the two-month Niño-3.4 record or the single-season monsoon percentages.</span></div>
      </article>

      <section className="reproduction-panel surface surface-pad">
        <div><div className="eyebrow">Reproduce the chart modules</div><h3 className="surface-title">Run from the repository root</h3><p className="surface-subtitle">The extraction commands validate the GLDAS CSVs and existing CSV/XLSX series.</p></div>
        <div className="code-steps"><code><span>1</span> python -m pip install -r requirements-extraction.txt</code><code><span>2</span> npm run data:extract</code><code><span>3</span> npm run data:check</code></div>
      </section>

      <ScientificCaveat significanceNotAssessed={false}>GLDAS, ORAS5 and annual September baseline means have documented trend tests. The two-month Niño-3.4 series and the one-season monsoon percentages are not tested for significance for the reasons shown above.</ScientificCaveat>
    </section>
  );
}

