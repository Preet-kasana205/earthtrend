import React from "react";
import { nino34 } from "../data/realData";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const RelationshipsPage: React.FC = () => {
  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        Earth System Relationships & Teleconnections
      </h2>

      {/* Primary Physical Interconnections */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#60a5fa", fontSize: "18px" }}>
          Observed Co-Occurrences in the Equatorial Pacific
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6, marginBottom: "16px" }}>
          In late 2026, multiple independent physical observations co-occur in the equatorial Pacific basin:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "16px" }}>
          <div style={{ background: "#1f2937", padding: "16px", borderRadius: "8px", borderTop: "3px solid #f87171" }}>
            <b style={{ color: "#f87171", fontSize: "15px" }}>Surface SST Warming</b>
            <p style={{ color: "#d1d5db", fontSize: "13px", marginTop: "6px" }}>
              Niño-3.4 monthly anomaly increased from +{nino34.sep2026Monthly}°C (Sep) to +{nino34.oct2026Monthly}°C (Oct).
            </p>
          </div>
          <div style={{ background: "#1f2937", padding: "16px", borderRadius: "8px", borderTop: "3px solid #60a5fa" }}>
            <b style={{ color: "#60a5fa", fontSize: "15px" }}>Deep Atmospheric Convection</b>
            <p style={{ color: "#d1d5db", fontSize: "13px", marginTop: "6px" }}>
              Niño-3.4 box daily rainfall reached 4.43 mm/day (+3.76 mm/day anomaly over September 2001–2019 baseline).
            </p>
          </div>
          <div style={{ background: "#1f2937", padding: "16px", borderRadius: "8px", borderTop: "3px solid #38bdf8" }}>
            <b style={{ color: "#38bdf8", fontSize: "15px" }}>Subsurface Ocean Heat</b>
            <p style={{ color: "#d1d5db", fontSize: "13px", marginTop: "6px" }}>
              Upper 300m eastern half at +3.32°C, subsurface thermal anomalies exceeding +10°C at depth (NOAA CPC).
            </p>
          </div>
        </div>

        <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", padding: "14px", borderRadius: "8px", color: "#fca5a5", fontSize: "14px" }}>
          <b>Vital Epistemic Distinction:</b> While these conditions physically align with classic strong El Niño atmospheric and oceanic coupling, they represent <b>observed associations</b>. Co-occurrence in an empirical record does not constitute statistical or causal proof that one variable mechanically produced the others in isolation.
        </div>
      </div>

      {/* The IOD Split & Indian Teleconnections */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#fbbf24", fontSize: "18px" }}>
          Indian Ocean Dipole (IOD) Discrepancy & India Teleconnections
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6, marginBottom: "12px" }}>
          For India's monsoon circulation, the Indian Ocean Dipole plays a pivotal modulating role. However, international meteorological agencies present differing diagnostic verdicts for late 2026:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "16px 0" }}>
          <div style={{ background: "#1f2937", padding: "16px", borderRadius: "8px" }}>
            <span style={{ fontSize: "12px", color: "#9ca3af", textTransform: "uppercase" }}>Australian Bureau of Meteorology (BoM)</span>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fbbf24", margin: "6px 0" }}>Positive IOD (+0.75°C)</div>
            <p style={{ fontSize: "13px", color: "#d1d5db", margin: 0 }}>
              Sustained index exceedance above the +0.4°C threshold for the week to 8 Nov 2026; positive IOD event declared.
            </p>
          </div>
          <div style={{ background: "#1f2937", padding: "16px", borderRadius: "8px" }}>
            <span style={{ fontSize: "12px", color: "#9ca3af", textTransform: "uppercase" }}>India Meteorological Department (IMD)</span>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#60a5fa", margin: "6px 0" }}>Neutral IOD</div>
            <p style={{ fontSize: "13px", color: "#d1d5db", margin: 0 }}>
              Assessment as of 31 Oct 2026; IMD operational forecast models indicate neutral conditions prevailing through December 2026.
            </p>
          </div>
        </div>

        <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px", fontSize: "13px", color: "#e5e7eb", lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}>
            <b>Why Neither Agency Is Wrong:</b> BoM and IMD use slightly different spatial bounding boxes, baseline periods, SST datasets, and threshold duration requirements. Divergence between operational centers reflects genuine differences in analytical frameworks.
          </p>
          <p style={{ margin: 0, color: "#fca5a5" }}>
            <b>Critical Monsoon Nuance:</b> A positive IOD is <b>not</b> a blanket guarantee of favorable rainfall for India, nor does it offset an El Niño deficit uniformly across all meteorological subdivisions. Furthermore, a positive IOD does <b>not</b> explain catastrophic localized flooding in Assam, northern river basins, or coastal Andhra Pradesh on its own; localized floods are governed by synoptic convective systems and regional orography.
          </p>
        </div>
      </div>

      {/* No Demo P-Values & Strict Safeguards */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#9ca3af", fontSize: "16px" }}>
          Analytical Integrity & Statistical Verification
        </h3>
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.6 }}>
          This platform intentionally omits synthetic correlation coefficients and demo p-values. No formal multi-decadal hypothesis testing has been computed on these specific single-season headline metrics. To claim mathematical statistical significance without a rigorous published test is unscientific.
        </p>
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance not assessed: No p-values or significance levels are asserted. Correlation does not prove causation.
      </ScientificCaveat>
    </section>
  );
};
