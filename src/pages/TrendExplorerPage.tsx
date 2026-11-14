import "../trend.css";
import "../charts.css";
import { Activity, Waves, Wind } from "lucide-react";
import { ScientificBarChart } from "../components/ScientificBarChart";
import { ScientificLineChart } from "../components/ScientificLineChart";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { nino34, ssh, thermocline } from "../data/realData";
import { oras5ThermoclineData } from "../data/oras5ThermoclineData";
import { pacificDailyRainfall2026 } from "../data/pacificDailyRainfall2026";

const ninoMonthly = [
  { date: "Sep 2026", value: nino34.sep2026Monthly },
  { date: "Oct 2026", value: nino34.oct2026Monthly },
];

const dailyRainfall = pacificDailyRainfall2026.map((point) => ({
  label: point.date.slice(-2),
  value: point.precipitation,
}));

const oras5Values = oras5ThermoclineData.map((point) => ({
  date: point.date,
  value: point.value,
}));

export function TrendExplorerPage() {
  return (
    <section className="page-section trend-page">
      <div className="page-intro">
        <div><div className="eyebrow">Observed time series</div><h2>Explore the records</h2><p>Every plotted point comes from an observed source series. The charts retain the original periods and values; they do not fill missing dates or interpolate observations.</p></div>
        <div className="trend-observation-count"><Activity size={15} /><span className="mono">30 daily · 815 monthly</span></div>
      </div>

      <ScientificLineChart
        data={ninoMonthly}
        title="Monthly Niño-3.4 sea-surface temperature anomaly"
        seriesLabel="Monthly SST anomaly"
        units="°C"
        source="NOAA CPC · ERSST v5"
        period="Sep–Oct 2026 · 1991–2020 baseline"
        caveat="Monthly anomalies are not ONI, which uses a three-month running mean. Only the two cited monthly observations are plotted."
        color="#fb7185"
        valueDigits={1}
        tickFormatter={(value) => value.replace(" 2026", "")}
      />

      <ScientificBarChart
        data={dailyRainfall}
        title="Pacific area-averaged daily precipitation rate"
        seriesLabel="GPM_3IMERGDL_07 precipitation"
        units="mm/day"
        source="NASA Giovanni · GPM IMERG v07 Late Run · 170°W–120°W, 5°S–5°N"
        period="1–30 Sep 2026 · 30 observations"
        caveat="Full daily series extracted from the original CSV. September 2001–2019 baseline mean: 0.6733 mm/day (570 daily observations)."
        color="#06b6d4"
        baseline={{ value: 0.6733, label: "Sep baseline 0.6733 mm/day" }}
        valueDigits={0}
      />

      <ScientificLineChart
        data={oras5Values}
        title="ORAS5 depth of the 20°C isotherm"
        seriesLabel="Source value · unit unconfirmed"
        units="Source value (unit unconfirmed)"
        source="ECMWF ORAS5 · original workbook, Monthly Data worksheet · single point 0°N, 110°W"
        period="Jan 1958–Nov 2025 · 815 monthly observations"
        caveat="Workbook header says ‘confirm units’. Values are not labelled as metres. No 2026 ORAS5 values are present."
        color="#22d3c5"
        valueDigits={0}
        tickFormatter={(value) => value.slice(0, 4)}
      />

      <div className="trend-context-grid">
        <article className="surface surface-pad trend-context-card">
          <div className="context-icon cyan"><Waves size={17} /></div>
          <div className="eyebrow">Separate physical variable</div>
          <h3>NOAA CPC subsurface temperature context</h3>
          <p>{thermocline.cpcOct2026Update}. The October 2026 CPC temperature anomaly information is presented separately from the ORAS5 isotherm depth series. Temperature anomalies and isotherm depth are different variables.</p>
          <div className="context-source">NOAA CPC · October 2026 · contextual summary</div>
          <span className="data-badge badge-violet"><span className="badge-dot" />Not appended to ORAS5</span>
        </article>
        <article className="surface surface-pad trend-context-card">
          <div className="context-icon teal"><Wind size={17} /></div>
          <div className="eyebrow">Pattern-only context</div>
          <h3>Sea-surface height</h3>
          <p>Altimetry is retained as qualitative source context. This dashboard shows no centimetre chart, contours, or animated fields for sea-surface height.</p>
          <div className="context-source">{ssh.source}</div>
          <span className="data-badge badge-teal"><span className="badge-dot" />No numeric series</span>
        </article>
      </div>

      <ScientificCaveat>Significance not assessed. The plotted observations are descriptive time series and do not establish statistical significance or causation.</ScientificCaveat>
    </section>
  );
}



