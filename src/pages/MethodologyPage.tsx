import React from "react";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const MethodologyPage: React.FC = () => {
  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        Scientific Methodology & Computational Verification
      </h2>

      {/* 1. Rainfall Derivation & Calculation */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#60a5fa", fontSize: "18px" }}>
          1. Pacific Rainfall: Mathematical Derivation & Spatial Consistency
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6, marginBottom: "12px" }}>
          The September 2026 Pacific rainfall anomaly is derived from NASA Giovanni area-averaged daily precipitation estimates. Both the target month and the historical baseline maintain identical spatial, temporal, and algorithmic constraints:
        </p>

        <ul style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
          <li><b>Variable:</b> <code>GPM_3IMERGDL_07_precipitation</code> (Daily mean precipitation rate, combined microwave-IR estimate).</li>
          <li><b>Spatial Bounding Box:</b> Exactly 170°W–120°W, 5°S–5°N (Data bounding box: -169.95°, -4.95°, -120.05°, 4.95°).</li>
          <li><b>Spatial Averaging:</b> Area-weighted arithmetic grid mean across the bounding box.</li>
          <li><b>Units:</b> Millimetres per day (mm/day).</li>
        </ul>

        <div style={{ background: "#1f2937", padding: "16px", borderRadius: "8px", fontFamily: "monospace", fontSize: "13px", color: "#e5e7eb", lineHeight: 1.6 }}>
          <div style={{ color: "#93c5fd", fontWeight: "bold", marginBottom: "8px" }}>// Computational Formula & Execution Audit</div>
          <div>1. September 2026 Observation Total:</div>
          <div>   n = 30 days (1–30 September 2026)</div>
          <div>   Σ P_i = 132.9762 mm</div>
          <div>   Daily Mean = 132.9762 / 30 = 4.43254 mm/day → Displayed as <b>4.43 mm/day</b></div>
          <br />
          <div>2. Climatological Baseline Total (Septembers 2001–2019):</div>
          <div>   n = 19 years × 30 days = 570 daily observations</div>
          <div>   Σ P_base = 383.7893 mm</div>
          <div>   Baseline Mean = 383.7893 / 570 = 0.67331 mm/day → Displayed as <b>0.67 mm/day</b></div>
          <br />
          <div>3. Observational Anomaly Departure:</div>
          <div>   Anomaly = 4.43254 - 0.67331 = +3.75923 mm/day → Displayed as <b>+3.76 mm/day</b></div>
        </div>
      </div>

      {/* 2. Scientific Protocols & Safeguards */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#fbbf24", fontSize: "18px" }}>
          2. Mandatory Scientific Safeguards
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <b style={{ color: "#f87171" }}>Niño-3.4 Monthly SST Anomalies vs ONI:</b>
            <p style={{ margin: "4px 0 0 0", color: "#d1d5db", fontSize: "13px", lineHeight: 1.5 }}>
              Values (+2.5°C Oct 2026, +2.1°C Sep 2026) are strictly labelled as <b>monthly Niño-3.4 SST anomalies</b> (ERSST v5, 1991–2020 base). They are <b>NOT</b> the Oceanic Niño Index (ONI), which requires a 3-month running mean. Weekly values are strictly segregated and never presented as headline anomalies.
            </p>
          </div>

          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <b style={{ color: "#38bdf8" }}>ORAS5 Thermocline Depth & Unconfirmed Units:</b>
            <p style={{ margin: "4px 0 0 0", color: "#d1d5db", fontSize: "13px", lineHeight: 1.5 }}>
              The ORAS5 time series represents the depth of the 20°C isotherm at a single point (0°N, 110°W) from Jan 1958 to Nov 2025. Because the file header explicitly states <code>source value; confirm units</code>, its chart axis is strictly displayed as <b>"Unit unconfirmed"</b>, rather than assuming metres without primary documentation.
            </p>
          </div>

          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <b style={{ color: "#a78bfa" }}>Physical Separation of Subsurface Thermal Anomalies:</b>
            <p style={{ margin: "4px 0 0 0", color: "#d1d5db", fontSize: "13px", lineHeight: 1.5 }}>
              NOAA CPC's October 2026 subsurface temperature anomalies (&gt;+10°C at depth, +3.32°C upper 300m) measure temperature departures, NOT isotherm depth. They are presented in an isolated contextual box and are <b>NEVER appended</b> to the ORAS5 depth series.
            </p>
          </div>

          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <b style={{ color: "#34d399" }}>Multi-Agency Independence (BoM vs IMD):</b>
            <p style={{ margin: "4px 0 0 0", color: "#d1d5db", fontSize: "13px", lineHeight: 1.5 }}>
              BoM's positive IOD declaration (+0.75°C, week to 8 Nov 2026) and IMD's neutral diagnosis (31 Oct 2026) are displayed side-by-side. Different operational thresholds and assessment dates explain the variation; neither agency is deemed erroneous.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Space Apps Project Context & AI Disclosure */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#f3f4f6", fontSize: "16px" }}>
          Project Context & AI Tooling Disclosure
        </h3>
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.6 }}>
          <b>Event:</b> Built during NASA Space Apps Challenge, 14–15 November 2026.<br />
          <b>AI Development Tools Used:</b> Muse, Google AI Studio, Codex (free), Antigravity. All codebase logic and verification routines were authored, independently validated, and regenerated during 14–15 November 2026.
        </p>
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance not assessed: Scientific derivations reflect deterministic data processing against operational baselines.
      </ScientificCaveat>
    </section>
  );
};
