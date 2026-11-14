import React from "react";
import { monsoon2026 } from "../data/realData";
import { SvgBarChart, type BarDataPoint } from "../components/SvgBarChart";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const IndiaMonsoonPage: React.FC = () => {
  const monthlyData: BarDataPoint[] = [
    { label: "June", value: monsoon2026.monthlyPercentOfLPA.june, tooltipExtra: "% of LPA (Deficit)" },
    { label: "July", value: monsoon2026.monthlyPercentOfLPA.july, highlight: true, tooltipExtra: "% of LPA (Near Normal)" },
    { label: "August", value: monsoon2026.monthlyPercentOfLPA.august, tooltipExtra: "% of LPA (Deficit)" },
    { label: "September", value: monsoon2026.monthlyPercentOfLPA.september, tooltipExtra: "% of LPA (Below Normal)" },
  ];

  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        India Southwest Monsoon 2026 Performance
      </h2>

      {/* Seasonal Overview Summary */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
          <div>
            <span style={{ fontSize: "13px", color: "#9ca3af", textTransform: "uppercase" }}>Seasonal Rainfall Total (Jun–Sep 2026)</span>
            <div style={{ fontSize: "36px", fontWeight: "bold", color: "#34d399" }}>
              {monsoon2026.percentOfLPA}% of LPA
            </div>
            <div style={{ fontSize: "14px", color: "#9ca3af" }}>
              {monsoon2026.rainfallMm} mm observed vs {monsoon2026.lpaMm} mm Long Period Average (1971–2020)
            </div>
          </div>
          <div style={{ background: "#064e3b", border: "1px solid #059669", padding: "8px 16px", borderRadius: "8px", color: "#a7f3d0", fontWeight: 600 }}>
            {monsoon2026.rank}
          </div>
        </div>

        <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
          The 2026 Southwest Monsoon accumulated <b>{monsoon2026.rainfallMm} mm</b> nationwide, representing exactly <b>87.4%</b> of its Long Period Average (LPA) of <b>{monsoon2026.lpaMm} mm</b>. In scientific reporting, it is crucial to state the precise decimal of <b>87.4%</b> rather than truncating or rounding to 87%.
        </p>
      </div>

      {/* Monthly Progression Chart */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#60a5fa", fontSize: "18px" }}>
          Monthly Rainfall Progression (% of LPA)
        </h3>
        <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "12px" }}>
          Seasonal deficits were heavily driven by extreme sluggishness in June and renewed suppression in August:
        </p>

        <SvgBarChart
          data={monthlyData}
          title="Monsoon 2026 Monthly Rainfall as % of Long Period Average"
          yAxisLabel="% of Monthly LPA"
          source="India Meteorological Department (IMD) End of Season Summary"
          period="June – September 2026"
          benchmarkValue={100}
          benchmarkLabel="Normal LPA: 100%"
          caveat="June (65%) was the most severely suppressed month, July rebounded to 101%, followed by August (84%) and September (92%)."
          height={260}
          barColor="#059669"
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px", marginTop: "16px" }}>
          <div style={{ background: "#1f2937", padding: "10px", borderRadius: "6px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>June</div>
            <div style={{ fontSize: "18px", fontWeight: "bold", color: "#f87171" }}>65% of LPA</div>
          </div>
          <div style={{ background: "#1f2937", padding: "10px", borderRadius: "6px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>July</div>
            <div style={{ fontSize: "18px", fontWeight: "bold", color: "#34d399" }}>101% of LPA</div>
          </div>
          <div style={{ background: "#1f2937", padding: "10px", borderRadius: "6px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>August</div>
            <div style={{ fontSize: "18px", fontWeight: "bold", color: "#fbbf24" }}>84% of LPA</div>
          </div>
          <div style={{ background: "#1f2937", padding: "10px", borderRadius: "6px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>September</div>
            <div style={{ fontSize: "18px", fontWeight: "bold", color: "#60a5fa" }}>92% of LPA</div>
          </div>
        </div>
      </div>

      {/* Crucial Spatial and Temporal Distinctions */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#fbbf24", fontSize: "18px" }}>
          Spatial Anomalies vs Extreme Localized Flooding
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6, marginBottom: "12px" }}>
          <b>Regional Extremes:</b> {monsoon2026.regionalNote}
        </p>
        <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px", fontSize: "13px", color: "#e5e7eb", lineHeight: 1.6 }}>
          <b>Key Meteorological Principle:</b> A dry monsoon season does <b>not</b> preclude devastating flood disasters. A seasonal deficit reflects aggregate temporal rainfall across months, whereas severe floods stem from cloudbursts, intense meso-scale convective systems, and short-duration precipitation extremes concentrated over specific river catchments. Seasonal aggregates and flood events must be evaluated as separate physical phenomena.
        </div>
      </div>

      {/* Post-Monsoon Outlook */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#9ca3af", fontSize: "16px" }}>
          Post-Monsoon IMD Seasonal Outlook
        </h3>
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.6 }}>
          In its seasonal climate update, the IMD projected <b>below-normal rainfall for November 2026</b> across the southern peninsula and the country as a whole, consistent with sustained equatorial Pacific warm anomalies.
        </p>
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance not assessed: Observed aggregate rainfall departures are benchmarked against the 1971–2020 Long Period Average (LPA).
      </ScientificCaveat>
    </section>
  );
};
