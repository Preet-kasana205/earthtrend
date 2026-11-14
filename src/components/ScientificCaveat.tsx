import React from "react";

interface ScientificCaveatProps {
  children?: React.ReactNode;
  text?: string;
  significanceNotAssessed?: boolean;
}

export const ScientificCaveat: React.FC<ScientificCaveatProps> = ({
  children,
  text,
  significanceNotAssessed = true,
}) => {
  return (
    <div
      style={{
        background: "rgba(31, 41, 55, 0.6)",
        borderLeft: "4px solid #f59e0b",
        padding: "12px 16px",
        borderRadius: "0 8px 8px 0",
        margin: "16px 0",
        fontSize: "14px",
        color: "#d1d5db",
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
        <span style={{ color: "#fbbf24", fontWeight: 600 }}>⚠️ Scientific Caveat & Safeguard</span>
        {significanceNotAssessed && (
          <span
            style={{
              fontSize: "12px",
              background: "#374151",
              color: "#fbbf24",
              padding: "2px 8px",
              borderRadius: "4px",
              fontWeight: 500,
            }}
          >
            Significance not assessed
          </span>
        )}
      </div>
      <div>{text || children}</div>
    </div>
  );
};
