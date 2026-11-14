import React, { useState } from "react";
import { nino34, pacificRainfall, thermocline, ssh } from "../data/realData";
import { pacificDailyRainfall2026 } from "../data/pacificDailyRainfall2026";
import { oras5ThermoclineSeries } from "../data/oras5ThermoclineSeries";
import { SvgBarChart, type BarDataPoint } from "../components/SvgBarChart";
import { SvgLineChart, type DataPoint } from "../components/SvgLineChart";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const TrendExplorerPage: React.FC = () => {
  const [oras5Decade, setOras5Decade] = useState<string>("all");

  // Transform 30-day rainfall into bar chart data points
  const rainfallChartData: BarDataPoint[] = pacificDailyRainfall2026.map((pt) => ({
    label: `Sep ${pt.day}`,
    value: pt.precipitation,
    highlight: pt.precipitation > 8.0,
    tooltipExtra: "mm/day",
  }));

  // Filter ORAS5 thermocline data for chart
  const filteredOras5 = oras5ThermoclineSeries.filter((pt) => {
    if (oras5Decade === "all") return true;
    if (oras5Decade === "2000s") return pt.year >= 2000;
    if (oras5Decade === "1990s") return pt.year >= 1990 && pt.year < 2000;
    if (oras5Decade === "1980s") return pt.year >= 1980 && pt.year < 1990;
    return true;
  });

  // Sample points if 'all' to keep SVG rendering performant (e.g., quarterly or bi-monthly)
  const step = oras5Decade === "all" ? 4 : 1;
  const sampledOras5: DataPoint[] = filteredOras5
    .filter((_, idx) => idx % step === 0 || idx === filteredOras5.length - 1)
    .map((pt) => ({
      x: pt.date,
      y: pt.depth,
      label: `${pt.date} (${pt.depth})`,
    }));

  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        Trend Explorer — Multi-Variable Observational Series
      </h2>

      {/* 1. Sea Surface Temperature */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#f87171", fontSize: "18px" }}>
          1. Sea-Surface Temperature (Niño-3.4 Region)
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6, marginBottom: "12px" }}>
          <b>Monthly SST Anomaly:</b> The monthly Niño-3.4 anomaly rose from <b>+{nino34.sep2026Monthly}°C</b> in September 2026 to <b>+{nino34.oct2026Monthly}°C</b> in October 2026 (NOAA CPC, relative index, ERSST v5, 1991–2020 climatological baseline).
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px", margin: "16px 0" }}>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <div style={{ color: "#9ca3af", fontSize: "12px" }}>September 2026 (Monthly)</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#f87171" }}>+{nino34.sep2026Monthly}°C</div>
            <div style={{ fontSize: "12px", color: "#d1d5db", marginTop: "4px" }}>ERSST v5 · 1991–2020 baseline</div>
          </div>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <div style={{ color: "#9ca3af", fontSize: "12px" }}>October 2026 (Monthly)</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#ef4444" }}>+{nino34.oct2026Monthly}°C</div>
            <div style={{ fontSize: "12px", color: "#d1d5db", marginTop: "4px" }}>ERSST v5 · 1991–2020 baseline</div>
          </div>
        </div>
        <p style={{ color: "#9ca3af", fontSize: "13px" }}>
          <b>Forecast distinction:</b> Strong-to-very-strong El Niño is likely through Jan–Mar 2027. This is a model forecast, not an observation. Weekly SST readings are monitored separately and are not headline anomalies.
        </p>
      </div>

      {/* 2. Pacific Rainfall */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#60a5fa", fontSize: "18px" }}>
          2. Pacific Rainfall (Daily Observations & Climatological Anomaly)
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
          September 2026 mean was <b>{pacificRainfall.sep2026Mean} mm/day</b> (total <b>{pacificRainfall.sep2026TotalMm} mm</b> across 30 days) against a September 2001–2019 baseline mean of <b>{pacificRainfall.sepBaselineMean} mm/day</b> (from 570 daily observations).
          The resulting departure is an anomaly of <b>+{pacificRainfall.sep2026Anomaly} mm/day</b>. September is climatologically the driest month in this box, making absolute mm/day figures crucial alongside percentages.
        </p>

        {/* 30-day Chart from raw CSV */}
        <SvgBarChart
          data={rainfallChartData}
          title="Daily Area-Averaged Precipitation Rate (1–30 September 2026)"
          yAxisLabel="Rainfall Rate (mm/day)"
          source="NASA Giovanni, GPM IMERG v07 Late Run, daily, Niño-3.4 box (170°W–120°W, 5°S–5°N)"
          period="1–30 September 2026 (30 observations)"
          benchmarkValue={0.67}
          benchmarkLabel="Baseline: 0.67 mm/day"
          caveat="Daily values derived from official Giovanni GPM_3IMERGDL_07 CSV. Peak observed 9 Sep (13.52 mm/day)."
          height={260}
          barColor="#2563eb"
        />
      </div>

      {/* 3. Thermocline Depth & Subsurface Temperature */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#38bdf8", fontSize: "18px" }}>
          3. Thermocline Depth & Ocean Subsurface Structure
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
          {thermocline.label}
        </p>

        <div style={{ display: "flex", gap: "8px", margin: "12px 0", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: "13px", color: "#9ca3af" }}>Filter historical range:</span>
          {[
            { id: "all", label: "Full Series (1958–2025, 815 pts)" },
            { id: "2000s", label: "2000–2025" },
            { id: "1990s", label: "1990–1999" },
            { id: "1980s", label: "1980–1989" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setOras5Decade(btn.id)}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                border: "1px solid #374151",
                background: oras5Decade === btn.id ? "#0284c7" : "#1f2937",
                color: "#f3f4f6",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* ORAS5 Chart with unconfirmed units label */}
        <SvgLineChart
          data={sampledOras5}
          title="ORAS5 Depth of 20°C Isotherm at 0°N, 110°W"
          yAxisLabel="Isotherm Depth (Unit unconfirmed)"
          source="ECMWF ORAS5 Ocean Reanalysis"
          period="Jan 1958 – Nov 2025 (815 monthly observations)"
          caveat={thermocline.unitsCaveat}
          strokeColor="#38bdf8"
          height={280}
        />

        {/* Dedicated Contextual Panel for CPC Oct 2026 - strictly separated */}
        <div style={{ background: "#1f2937", borderLeft: "4px solid #38bdf8", padding: "16px", borderRadius: "0 8px 8px 0", marginTop: "16px" }}>
          <div style={{ fontWeight: "bold", color: "#7dd3fc", marginBottom: "6px" }}>
            Separate Physical Evidence: NOAA CPC October 2026 Subsurface Temperature Anomaly
          </div>
          <p style={{ color: "#e5e7eb", fontSize: "14px", margin: "0 0 8px 0" }}>
            {thermocline.cpcOct2026Update}.
          </p>
          <div style={{ fontSize: "12px", color: "#fbbf24" }}>
            <b>Crucial Scientific Safeguard:</b> This CPC subsurface temperature anomaly is a different variable from the ORAS5 20°C isotherm depth. It provides contemporary context and is <u>never appended</u> to the ORAS5 depth series.
          </div>
        </div>
      </div>

      {/* 4. Sea Surface Height / Sea Level */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#a78bfa", fontSize: "18px" }}>
          4. Sea Surface Height / Sea Level (Qualitative Pattern)
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
          {ssh.label}
        </p>
        <div style={{ background: "#1f2937", padding: "12px 16px", borderRadius: "8px", margin: "12px 0", fontSize: "13px", color: "#c4b5fd" }}>
          <b>Altimetry Context:</b> {ssh.caveat}
        </div>
        <div style={{ color: "#f59e0b", fontSize: "13px", fontWeight: "500" }}>
          Notice: In adherence to scientific fidelity, no cm chart, contour map, or synthetic animated field is generated for SSH.
        </div>
      </div>

      {/* 5. Policy on Unavailable Datasets */}
      <div style={{ background: "rgba(31, 41, 55, 0.4)", border: "1px dashed #4b5563", padding: "16px", borderRadius: "8px", marginTop: "16px" }}>
        <p style={{ color: "#f59e0b", fontSize: "14px", margin: 0 }}>
          <b>Data Integrity Policy:</b> Where no real dataset or API exists, this platform displays <code>Data unavailable</code>. It never invents, hallucinates, or interpolates artificial series to simulate completeness.
        </p>
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance not assessed: Observed quantities are contextualized against stated climatological baselines. Correlation does not prove causation.
      </ScientificCaveat>
    </section>
  );
};
