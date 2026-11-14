import React from "react";
import { SourceTraceabilityTable } from "../components/SourceTraceabilityTable";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const DatasetsPage: React.FC = () => {
  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        Datasets, Provenance & Traceability
      </h2>
      <p style={{ color: "#d1d5db", lineHeight: 1.6, marginBottom: "20px" }}>
        EarthTrend strictly enforces scientific transparency. Every data point in this dashboard originates from an authoritative, un-simulated earth observation platform or operational meteorological agency.
      </p>

      {/* Raw Data Storage & Preservation */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "24px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#60a5fa", fontSize: "18px" }}>
          Preserved Raw Data Artifacts (in <code>src/data/raw/</code>)
        </h3>
        <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "16px" }}>
          The repository stores the unedited raw source files. The application's typed arrays are directly reproducible from these source files:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px", border: "1px solid #374151" }}>
            <div style={{ fontWeight: "bold", color: "#f3f4f6", fontSize: "14px" }}>
              sep_26g4.areaAvgTimeSeries...csv
            </div>
            <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
              NASA Giovanni GPM IMERG v07 Late Run · 30 daily observations (1–30 Sep 2026) · Sum = 132.9762 mm · Size: 1.25 KB
            </div>
          </div>

          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px", border: "1px solid #374151" }}>
            <div style={{ fontWeight: "bold", color: "#f3f4f6", fontSize: "14px" }}>
              g4.areaAvgTimeSeries...20010101-20200101.csv
            </div>
            <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
              NASA Giovanni GPM IMERG v07 Late Run · 19-year daily series · 570 September baseline days · Size: 156.8 KB
            </div>
          </div>

          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px", border: "1px solid #374151" }}>
            <div style={{ fontWeight: "bold", color: "#f3f4f6", fontSize: "14px" }}>
              ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx
            </div>
            <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
              ECMWF ORAS5 Ocean Reanalysis · 815 monthly values at 0°N, 110°W (Jan 1958–Nov 2025) · Size: 42.2 KB
            </div>
          </div>
        </div>
      </div>

      {/* Complete Traceability Matrix */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#f3f4f6", fontSize: "18px" }}>
          Source-to-Visualization Traceability Matrix
        </h3>
        <p style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "16px" }}>
          Comprehensive lineage linking every displayed figure to its raw source, processing transformation, mathematical calculation, and destination component:
        </p>
        <SourceTraceabilityTable />
      </div>

      {/* Temporal Freeze Notice */}
      <div style={{ background: "#1f2937", borderLeft: "4px solid #f59e0b", padding: "16px", borderRadius: "0 8px 8px 0" }}>
        <div style={{ fontWeight: "bold", color: "#fbbf24", marginBottom: "6px" }}>
          Dataset Freeze & Backend Scope Notice
        </div>
        <p style={{ color: "#e5e7eb", fontSize: "14px", margin: 0, lineHeight: 1.5 }}>
          All observational datasets were frozen on <b>13 November 2026</b> for the NASA Space Apps Challenge. This repository contains no backend server or streaming APIs; where a continuous live observational series is unavailable in official repositories (such as post-2025 ORAS5 reanalysis), the interface displays <code>Data unavailable</code> rather than synthetic demo points.
        </p>
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance not assessed: Metadata documentation confirms observational provenance and baseline integrity.
      </ScientificCaveat>
    </section>
  );
};
