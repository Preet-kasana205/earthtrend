import React from "react";

export const PacificSchematicMap: React.FC = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <svg
        viewBox="0 0 600 260"
        width="100%"
        style={{
          background: "#0e2a47",
          borderRadius: 12,
          border: "1px solid #1e3a5f",
          display: "block",
        }}
      >
        {/* Title */}
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="bold">
          Pacific Ocean — schematic map
        </text>

        {/* Equatorial axis reference line */}
        <line x1="40" y1="120" x2="560" y2="120" stroke="#374151" strokeDasharray="4 4" strokeWidth="1" />
        <text x="565" y="124" fill="#9ca3af" fontSize="11">0° Eq</text>

        {/* Western / Eastern boundary markers */}
        <text x="40" y="60" fill="#93c5fd" fontSize="12">140°E (West)</text>
        <text x="500" y="60" fill="#93c5fd" fontSize="12">80°W (East)</text>

        {/* Nino-3.4 Box */}
        <rect
          x="120"
          y="80"
          width="360"
          height="80"
          fill="rgba(245, 158, 11, 0.12)"
          stroke="#f59e0b"
          strokeWidth="3"
          rx="4"
        />
        <text x="130" y="72" fill="#fbbf24" fontSize="14" fontWeight="600">
          Niño-3.4 box: 5°N–5°S, 170°W–120°W
        </text>
        <text x="240" y="125" fill="#fef08a" fontSize="13" fontWeight="bold">
          Niño-3.4 Index Region
        </text>

        {/* Gradient of SST / SSH indication */}
        <text x="20" y="200" fill="#93c5fd" fontSize="14">
          East: warmer, higher sea level → West: cooler, lower
        </text>
        <text x="20" y="232" fill="#9ca3af" fontSize="13">
          Schematic reference only — not an anomaly map. No contours or fields.
        </text>
      </svg>
    </div>
  );
};
