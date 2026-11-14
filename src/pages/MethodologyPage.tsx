import "../methodology.css";
import { Check, ClipboardCheck, Database, ShieldAlert } from "lucide-react";
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
        </div>
        <div className="method-source"><Database size={14} /><span>Raw source files: NASA Giovanni September 2026 CSV and 2001–2020 CSV in <code>src/data/raw/</code>. The baseline calculation uses only September dates in 2001–2019.</span></div>
      </article>

      <article className="method-chapter surface surface-pad">
        <div className="chapter-kicker"><span>02</span><div className="eyebrow">ORAS5 data quality</div></div>
        <h3>Historical source values, one location, units unconfirmed</h3>
        <p className="method-lead">The chart series is extracted from the workbook’s “Monthly Data” worksheet. The source field is named “Depth of 20C isotherm (source value; confirm units)”. Its measurement units have not been confirmed, so the chart displays source values without calling them metres.</p>
        <div className="quality-grid"><div className="quality-count"><strong>815</strong><span>monthly rows</span></div><div className="quality-period"><span className="mono">JAN 1958 — NOV 2025</span><span>{thermocline.location}</span></div></div>
        <ul className="quality-check-list">{checks.map((check) => <li key={check}><Check size={14} />{check}</li>)}</ul>
        <div className="method-source"><Database size={14} /><span>Original source: <code>src/data/raw/ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx</code>. No 2026 ORAS5 values are added.</span></div>
      </article>

      <article className="method-chapter safeguard-chapter surface-raised surface-pad">
        <div className="chapter-kicker"><span>03</span><div className="eyebrow">Interpretation safeguards</div></div>
        <h3>Keep labels tied to the underlying variable</h3>
        <div className="safeguard-list">
          <div><span className="safeguard-marker">A</span><div><strong>Monthly Niño-3.4 anomaly is not ONI</strong><p>Monthly SST anomaly values are labelled as monthly Niño-3.4 anomalies. ONI is a three-month running index.</p></div></div>
          <div><span className="safeguard-marker">B</span><div><strong>Subsurface temperature and thermocline depth stay separate</strong><p>The NOAA CPC October 2026 temperature anomaly summary is contextual information and is never appended to the historical ORAS5 isotherm-depth series.</p></div></div>
          <div><span className="safeguard-marker">C</span><div><strong>Sea-surface height is pattern-only</strong><p>No centimetre chart, contour map, or synthetic field is generated for SSH.</p></div></div>
          <div><span className="safeguard-marker">D</span><div><strong>Phase 3 is preparedness education</strong><p>The module provides educational context and official guidance links. It does not predict hazards or issue warnings.</p></div></div>
        </div>
        <div className="method-source"><ShieldAlert size={14} /><span>No statistical significance test is documented for these observations.</span></div>
      </article>

      <section className="reproduction-panel surface surface-pad">
        <div><div className="eyebrow">Reproduce the chart modules</div><h3 className="surface-title">Run from the repository root</h3><p className="surface-subtitle">Python extraction requires the pinned openpyxl package listed in <code>requirements-extraction.txt</code>.</p></div>
        <div className="code-steps"><code><span>1</span> python -m pip install -r requirements-extraction.txt</code><code><span>2</span> python scripts/extractChartData.py</code><code><span>3</span> python scripts/extractChartData.py --check</code></div>
      </section>

      <ScientificCaveat>Significance not assessed. Reproducible data extraction and descriptive arithmetic do not constitute a statistical test.</ScientificCaveat>
    </section>
  );
}

