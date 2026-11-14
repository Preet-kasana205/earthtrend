import React from "react";
import { traceabilityData } from "../data/traceabilityData";

export const SourceTraceabilityTable: React.FC = () => {
  return (
    <div style={{ overflowX: "auto", margin: "20px 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
          textAlign: "left",
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "8px",
        }}
      >
        <thead>
          <tr style={{ background: "#1f2937", color: "#f3f4f6", borderBottom: "2px solid #374151" }}>
            <th style={{ padding: "10px 12px" }}>Displayed Value</th>
            <th style={{ padding: "10px 12px" }}>Variable & Source Agency</th>
            <th style={{ padding: "10px 12px" }}>Domain & Period</th>
            <th style={{ padding: "10px 12px" }}>Baseline & Calculation</th>
            <th style={{ padding: "10px 12px" }}>Destination Component</th>
            <th style={{ padding: "10px 12px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {traceabilityData.map((item, index) => {
            const statusColor =
              item.verificationStatus === "Verified"
                ? "#34d399"
                : item.verificationStatus === "Caution / Caveated"
                ? "#fbbf24"
                : "#60a5fa";

            return (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #1f2937",
                  background: index % 2 === 0 ? "transparent" : "rgba(31, 41, 55, 0.3)",
                }}
              >
                <td style={{ padding: "10px 12px", fontWeight: 600, color: "#f3f4f6" }}>
                  {item.displayedValue}
                </td>
                <td style={{ padding: "10px 12px", color: "#d1d5db" }}>
                  <div><b>{item.variableName}</b></div>
                  <div style={{ color: "#9ca3af", fontSize: "12px" }}>{item.sourceAgency} ({item.productDataset})</div>
                </td>
                <td style={{ padding: "10px 12px", color: "#d1d5db" }}>
                  <div>{item.spatialDomain}</div>
                  <div style={{ color: "#9ca3af", fontSize: "12px" }}>{item.temporalPeriod}</div>
                </td>
                <td style={{ padding: "10px 12px", color: "#d1d5db", maxWidth: "280px" }}>
                  <div style={{ fontSize: "12px", color: "#9ca3af" }}>Baseline: {item.climatologicalBaseline}</div>
                  <div style={{ marginTop: "4px", fontSize: "12px" }}>{item.processingCalculation}</div>
                </td>
                <td style={{ padding: "10px 12px", color: "#93c5fd", fontSize: "12px" }}>
                  {item.destinationComponent}
                </td>
                <td style={{ padding: "10px 12px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(55, 65, 81, 0.6)",
                      color: statusColor,
                      fontSize: "11px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.verificationStatus}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
