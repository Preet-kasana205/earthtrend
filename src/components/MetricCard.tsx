import React from "react";

interface MetricCardProps {
  headline: string;
  headlineColor?: string;
  title: string;
  description: string;
  baseline?: string;
  source: string;
  badge?: string;
  badgeColor?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  headline,
  headlineColor = "#60a5fa",
  title,
  description,
  baseline,
  source,
  badge,
  badgeColor = "#374151",
}) => {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        padding: "20px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            {title}
          </span>
          {badge && (
            <span
              style={{
                fontSize: "11px",
                background: badgeColor,
                color: "#f3f4f6",
                padding: "2px 8px",
                borderRadius: "9999px",
                whiteSpace: "nowrap",
                fontWeight: 600,
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <div style={{ fontSize: "28px", fontWeight: 700, color: headlineColor, marginBottom: "8px" }}>
          {headline}
        </div>
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.5, margin: "0 0 8px 0" }}>
          {description}
        </p>
      </div>

      <div style={{ borderTop: "1px solid #1f2937", paddingTop: "12px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
        {baseline && (
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#6b7280" }}>Baseline: </span>
            {baseline}
          </div>
        )}
        <div>
          <span style={{ color: "#6b7280" }}>Source: </span>
          {source}
        </div>
      </div>
    </div>
  );
};
