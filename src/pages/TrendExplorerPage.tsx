import "../trend.css";
import "../charts.css";
import { useState } from "react";
import { Activity, Droplets, Waves, Wind } from "lucide-react";
import { ScientificBarChart } from "../components/ScientificBarChart";
import { ScientificLineChart } from "../components/ScientificLineChart";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { nino34, ssh, thermocline } from "../data/realData";
import { oras5ThermoclineData } from "../data/oras5ThermoclineData";
import { pacificDailyRainfall2026 } from "../data/pacificDailyRainfall2026";
import { pacificSeptemberBaselineMeans } from "../data/pacificSeptemberBaselineMeans";
import { gldasSoilMoisture, type SoilMoistureRegion } from "../data/gldasSoilMoistureData";
import { analyzeTrend } from "../lib/trendAnalysis";

type TrendVariable = "nino34" | "pacific-rainfall" | "oras5" | "soil-moisture";
const directionLabels = {
  oras5: { positive: "upward trend in source values", negative: "downward trend in source values" },
  rainfall: { positive: "upward trend in September rainfall rate", negative: "downward trend in September rainfall rate" },
};

const ninoMonthly = [
  { date: "2026-09", value: nino34.sep2026Monthly },
  { date: "2026-10", value: nino34.oct2026Monthly },
];
const dailyRainfall = pacificDailyRainfall2026.map((point) => ({ label: point.date, value: point.precipitation }));
const oras5Values = oras5ThermoclineData.map((point) => ({ date: point.date, value: point.value }));
const baselineSeptemberValues = pacificSeptemberBaselineMeans.map((point) => ({ date: point.date, value: point.value }));
const rajasthanSeries = gldasSoilMoisture.filter((point) => point.region === "Rajasthan");
const assamSeries = gldasSoilMoisture.filter((point) => point.region === "Assam");
const rajasthanTrend = analyzeTrend(rajasthanSeries);
const assamTrend = analyzeTrend(assamSeries);
const oras5Trend = analyzeTrend(oras5ThermoclineData, directionLabels.oras5);
const baselineSeptemberTrend = analyzeTrend(pacificSeptemberBaselineMeans, directionLabels.rainfall);
const regionMean = (points: typeof rajasthanSeries) => points.reduce((sum, point) => sum + point.value, 0) / points.length;
const rajasthanMean = regionMean(rajasthanSeries);
const assamMean = regionMean(assamSeries);
const meanDifference = assamMean - rajasthanMean;

function TrendResult({
  title,
  period,
  result,
  slopeUnits,
  note,
}: {
  title: string;
  period: string;
  result: ReturnType<typeof analyzeTrend>;
  slopeUnits: string;
  note?: string;
}) {
  return (
    <article className="soil-trend-result surface surface-pad">
      <div className="eyebrow">{title} · {period}</div>
      <strong className="soil-trend-slope">{result.senSlopePerYear > 0 ? "+" : ""}{result.senSlopePerYear.toFixed(6)} <span>{slopeUnits}</span></strong>
      <div className="soil-trend-stat-line"><span>Mann–Kendall p</span><strong>{result.mannKendallP.toFixed(6)}</strong></div>
      <span className={`soil-significance ${result.mannKendallP < 0.05 ? "is-significant" : "is-not-significant"}`}>
        {result.significanceLabel}
      </span>
      {note && <p>{note}</p>}
    </article>
  );
}

export function TrendExplorerPage() {
  const [variable, setVariable] = useState<TrendVariable>("soil-moisture");
  const [region, setRegion] = useState<SoilMoistureRegion>("Rajasthan");
  const soilMoistureSeries = region === "Rajasthan" ? rajasthanSeries : assamSeries;
  const soilMoistureChart = soilMoistureSeries.map((point) => ({ date: point.date, value: point.value }));
  const significanceText = {
    "soil-moisture": "GLDAS significance is assessed with the documented standard Mann–Kendall test; serial autocorrelation and seasonality are not adjusted. A rising annual mean does not rule out droughts.",
    "pacific-rainfall": "The 19 annual September means are tested below; they use 30 daily observations for the same calendar month in each year. Serial autocorrelation is not adjusted. The separate September 2026 daily chart is descriptive.",
    oras5: "ORAS5 uses the standard Mann–Kendall test on all 815 monthly source values. Units remain unconfirmed; no seasonal or serial-autorrelation correction is applied.",
    nino34: "Significance not assessed: only two monthly observations are available (September +2.1°C and October +2.5°C), too short for a trend test.",
  }[variable];

  return (
    <section className="page-section trend-page">
      <div className="page-intro">
        <div><div className="eyebrow">Observed time series</div><h2>Explore the records</h2><p>Choose a source series to view its original observations. The charts do not fill missing dates or interpolate values.</p></div>
        <div className="trend-observation-count"><Activity size={15} /><span className="mono">4 source series · GLDAS 312/monthly per region</span></div>
      </div>

      <section className="trend-selector surface surface-pad" aria-label="Trend series selector">
        <label className="trend-select-field" htmlFor="trend-variable">
          <span className="eyebrow">Variable</span>
          <select id="trend-variable" value={variable} onChange={(event) => setVariable(event.target.value as TrendVariable)}>
            <option value="soil-moisture">Soil moisture (NASA GLDAS)</option>
            <option value="nino34">Monthly Niño-3.4 SST anomaly</option>
            <option value="pacific-rainfall">Pacific precipitation (NASA GPM)</option>
            <option value="oras5">ORAS5 depth of 20°C isotherm</option>
          </select>
        </label>
        {variable === "soil-moisture" && (
          <fieldset className="region-select-field">
            <legend className="eyebrow">Region</legend>
            <div className="region-select-options">
              {(["Rajasthan", "Assam"] as const).map((name) => (
                <button key={name} type="button" aria-pressed={region === name} className={region === name ? "is-selected" : ""} onClick={() => setRegion(name)}>
                  <Droplets size={14} />{name}
                </button>
              ))}
            </div>
          </fieldset>
        )}
        <div className="trend-selector-note">
          {variable === "soil-moisture" ? "NASA GLDAS Noah v2.1 · soil moisture content, 0–10 cm · kg/m²" : "The selected chart retains its original source, period, units and caveat."}
        </div>
      </section>

      {variable === "soil-moisture" ? (
        <ScientificLineChart
          data={soilMoistureChart}
          title={`GLDAS soil moisture content (0–10 cm) · ${region}`}
          seriesLabel="NASA GLDAS Noah v2.1 monthly area mean"
          units="kg/m²"
          source={`NASA Giovanni · GLDAS Noah v2.1 · area-averaged box ${region === "Rajasthan" ? "69°E–78°E, 23°N–30°N" : "89°E–96°E, 24°N–28°N"}`}
          period="Jan 2000–Dec 2025 · 312 monthly observations"
          caveat="The displayed trend uses standard two-sided Mann–Kendall on monthly values with tie and continuity correction; no seasonal or serial-correlation adjustment is applied. A rising annual mean does not rule out droughts."
          color={region === "Rajasthan" ? "#06b6d4" : "#14b8a6"}
          valueDigits={1}
          tickFormatter={(value) => value.slice(0, 4)}
        />
      ) : variable === "pacific-rainfall" ? (
        <>
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
            data={baselineSeptemberValues}
            title="September baseline · annual mean precipitation rate"
            seriesLabel="Computed from 30 daily September values per year"
            units="mm/day"
            source="NASA Giovanni · GPM IMERG v07 · 170°W–120°W, 5°S–5°N · original baseline CSV"
            period="Sep 2001–Sep 2019 · 19 computed annual means"
            caveat="Each point is calculated from that year's 30 September daily observations. The test is on these 19 baseline means, not the separate September 2026 series; no serial-autocorrelation correction is applied."
            color="#14b8a6"
            valueDigits={2}
            tickFormatter={(value) => value.slice(0, 4)}
          />
        </>
      ) : variable === "nino34" ? (
        <ScientificLineChart
          data={ninoMonthly}
          title="Monthly Niño-3.4 sea-surface temperature anomaly"
          seriesLabel="Monthly SST anomaly"
          units="°C"
          source="NOAA CPC · ERSST v5"
          period="Sep–Oct 2026 · 1991–2020 baseline"
          caveat="Monthly anomalies are not ONI, which uses a three-month running mean. Only the two cited monthly observations are plotted; the series is too short for a trend test."
          color="#fb7185"
          valueDigits={1}
          tickFormatter={(value) => value.slice(5)}
        />
      ) : (
        <ScientificLineChart
          data={oras5Values}
          title="ORAS5 depth of the 20°C isotherm"
          seriesLabel="Source value · unit unconfirmed"
          units="Source value (unit unconfirmed)"
          source="ECMWF ORAS5 · original workbook, Monthly Data worksheet · single point 0°N, 110°W"
          period="Jan 1958–Nov 2025 · 815 monthly observations"
          caveat="Workbook header says ‘confirm units’. Trend is shown in source-value units per year, not metres; standard test has no seasonal or serial-autocorrelation adjustment."
          color="#22d3c5"
          valueDigits={0}
          tickFormatter={(value) => value.slice(0, 4)}
        />
      )}

      {variable === "soil-moisture" && (
        <section className="soil-trend-section" aria-label="Computed GLDAS trend results">
          <div className="soil-trend-heading"><div><div className="eyebrow">Computed from all monthly observations</div><h3>Regional trend analysis</h3></div><span className="soil-trend-method">Theil–Sen slope · two-sided Mann–Kendall · α = 0.05</span></div>
          <div className="soil-trend-grid">
            <TrendResult title="Rajasthan" period="Jan 2000–Dec 2025" result={rajasthanTrend} slopeUnits="kg/m²/year" />
            <TrendResult title="Assam" period="Jan 2000–Dec 2025" result={assamTrend} slopeUnits="kg/m²/year" />
            <article className="soil-trend-result soil-region-compare surface surface-pad">
              <div className="eyebrow">Same-period regional mean</div>
              <strong className="soil-trend-slope">{meanDifference > 0 ? "+" : ""}{meanDifference.toFixed(2)} <span>kg/m²</span></strong>
              <div className="soil-trend-stat-line"><span>Assam mean</span><strong>{assamMean.toFixed(2)} kg/m²</strong></div>
              <div className="soil-trend-stat-line"><span>Rajasthan mean</span><strong>{rajasthanMean.toFixed(2)} kg/m²</strong></div>
              <p>Assam minus Rajasthan across the shared 312-month period. Higher annual-mean soil moisture does not mean there were no droughts.</p>
            </article>
          </div>
          <p className="soil-trend-footnote">Mann–Kendall p-values use a tie-corrected normal approximation and continuity correction. The standard test does not adjust for seasonality or serial autocorrelation; treat these as trend evidence, not causal attribution.</p>
        </section>
      )}

      {variable === "oras5" && (
        <section className="soil-trend-section" aria-label="Computed ORAS5 trend result">
          <div className="soil-trend-heading"><div><div className="eyebrow">Computed from all 815 monthly observations</div><h3>ORAS5 trend analysis</h3></div><span className="soil-trend-method">Theil–Sen slope · two-sided Mann–Kendall · α = 0.05</span></div>
          <div className="soil-trend-grid single">
            <TrendResult title="ORAS5 source values" period="Jan 1958–Nov 2025" result={oras5Trend} slopeUnits="source-value units/year" note="Unit unconfirmed in the workbook header. This trend is reported on source values and is not labelled metres." />
          </div>
          <p className="soil-trend-footnote">The standard test uses all monthly values, with tie and continuity correction. No seasonal stratification or serial-autocorrelation adjustment is applied.</p>
        </section>
      )}

      {variable === "pacific-rainfall" && (
        <section className="soil-trend-section" aria-label="Computed Pacific baseline trend result">
          <div className="soil-trend-heading"><div><div className="eyebrow">Computed from the original baseline CSV</div><h3>Annual September baseline trend</h3></div><span className="soil-trend-method">19 computed annual means · two-sided Mann–Kendall · α = 0.05</span></div>
          <div className="soil-trend-grid single">
            <TrendResult title="September mean rainfall rate" period="2001–2019" result={baselineSeptemberTrend} slopeUnits="mm/day/year" note="Each point is the mean of 30 raw daily September observations. The trend test applies to these 19 annual baseline means, not the September 2026 daily series." />
          </div>
          <p className="soil-trend-footnote">The annual points are calculated by scripts/extractChartData.py from the baseline CSV. September is held constant across years; serial autocorrelation is not adjusted.</p>
        </section>
      )}

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

      <ScientificCaveat
        significanceNotAssessed={variable === "nino34"}
        text={variable === "nino34" ? significanceText : `${significanceText} Statistical significance does not establish causation.`}
      />
    </section>
  );
}
