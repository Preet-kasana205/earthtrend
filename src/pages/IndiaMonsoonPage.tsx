import "../monsoon.css";
import "../monsoon.css";
import { CalendarDays, CloudRain, MapPinned } from "lucide-react";
import { ScientificBarChart } from "../components/ScientificBarChart";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { monsoon2026 } from "../data/realData";

const monthlyRainfall = [
  { label: "June", value: monsoon2026.monthlyPercentOfLPA.june },
  { label: "July", value: monsoon2026.monthlyPercentOfLPA.july },
  { label: "August", value: monsoon2026.monthlyPercentOfLPA.august },
  { label: "September", value: monsoon2026.monthlyPercentOfLPA.september },
];

export function IndiaMonsoonPage() {
  return (
    <section className="page-section monsoon-page">
      <div className="page-intro">
        <div><div className="eyebrow">Seasonal rainfall · India</div><h2>Southwest monsoon 2026</h2><p>All-India seasonal rainfall and monthly percentages of the Long Period Average, as reported by the India Meteorological Department.</p></div>
        <span className="period-chip mono">JUN–SEP 2026</span>
      </div>

      <section className="monsoon-total surface-raised">
        <div className="monsoon-total-main"><div className="eyebrow">Seasonal rainfall vs LPA</div><div className="monsoon-total-value">{monsoon2026.percentOfLPA}<span>%</span></div><div className="monsoon-total-caption">of the Long Period Average</div></div>
        <div className="monsoon-total-details">
          <div className="rainfall-comparison"><div><span>Observed</span><strong>{monsoon2026.rainfallMm}<small>mm</small></strong></div><div className="comparison-divider"><span>vs</span></div><div><span>1971–2020 LPA</span><strong>{monsoon2026.lpaMm}<small>mm</small></strong></div></div>
          <div className="monsoon-rank"><CalendarDays size={14} />{monsoon2026.rank}</div>
          <div className="monsoon-source">Source: {monsoon2026.source}</div>
        </div>
      </section>

      <ScientificBarChart
        data={monthlyRainfall}
        title="Monthly rainfall as a percentage of LPA"
        seriesLabel="All-India Southwest Monsoon"
        units="% of LPA"
        source="India Meteorological Department · Southwest Monsoon 2026 statement"
        period="June–September 2026 · 4 reported monthly values"
        caveat="Monthly percentages are reported values; the 100% reference line marks the LPA. Seasonal total is reported separately above."
        color="#06b6d4"
        baseline={{ value: 100, label: "100% of LPA" }}
        highlightIndex={1}
        valueDigits={0}
      />

      <section className="regional-context surface surface-pad">
        <div className="eyebrow">Spatial and temporal context</div>
        <h3 className="surface-title">Seasonal aggregates and local events answer different questions</h3>
        <div className="regional-context-grid">
          <article><span className="context-icon cyan"><MapPinned size={17} /></span><div><strong>Regional seasonal record</strong><p>{monsoon2026.regionalNote}</p><small>IMD Southwest Monsoon 2026 statement</small></div></article>
          <article><span className="context-icon teal"><CloudRain size={17} /></span><div><strong>Scale matters</strong><p>The all-India June–September percentage summarizes a season across the country. It does not describe rainfall at every location or during each short-duration event.</p><small>Seasonal total: {monsoon2026.rainfallMm} mm across the stated period</small></div></article>
        </div>
      </section>

      <ScientificCaveat>Significance not assessed. These four monthly values are seasonal percentages against the IMD LPA for one monsoon season, not a comparable multi-year time series for trend testing.</ScientificCaveat>
    </section>
  );
}

