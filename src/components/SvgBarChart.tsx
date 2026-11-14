import React, { useState } from "react";

export interface BarDataPoint {
  label: string;
  value: number;
  highlight?: boolean;
  tooltipExtra?: string;
}

interface SvgBarChartProps {
  data: BarDataPoint[];
  title: string;
  yAxisLabel: string;
  source: string;
  period: string;
  caveat?: string;
  benchmarkValue?: number;
  benchmarkLabel?: string;
  height?: number;
  barColor?: string;
}

export const SvgBarChart: React.FC<SvgBarChartProps> = ({
  data,
  title,
  yAxisLabel,
  source,
  period,
  caveat,
  benchmarkValue,
  benchmarkLabel,
  height = 280,
  barColor = "#3b82f6",
}) => {
  const [hoveredBar, setHoveredBar] = useState<BarDataPoint | null>(null);

  if (!data || data.length === 0) {
    return (
      <div style={{ background: "#111827", padding: "24px", borderRadius: "12px", border: "1px solid #1f2937", textAlign: "center", color: "#9ca3af" }}>
        Data unavailable
      </div>
    );
  }

  const paddingLeft = 55;
  const paddingRight = 25;
  const paddingTop = 35;
  const paddingBottom = 45;
  const svgWidth = 800;
  const svgHeight = height;

  const maxVal = Math.max(...data.map((d) => d.value), benchmarkValue || 0);
  const chartMaxY = Math.ceil(maxVal * 1.15) || 10;

  const plotWidth = svgWidth - paddingLeft - paddingRight;
  const plotHeight = svgHeight - paddingTop - paddingBottom;

  const barWidth = Math.min(48, Math.max(12, (plotWidth / data.length) * 0.65));
  const slotWidth = plotWidth / data.length;

  const getY = (val: number) => {
    return svgHeight - paddingBottom - (val / chartMaxY) * plotHeight;
  };

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "12px",
        padding: "20px",
        margin: "16px 0",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
        <h4 style={{ margin: 0, fontSize: "16px", color: "#f3f4f6" }}>{title}</h4>
        <span style={{ fontSize: "12px", color: "#9ca3af" }}>Period: {period}</span>
      </div>

      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" style={{ overflow: "visible" }}>
        {/* Y-axis gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
          const val = chartMaxY * pct;
          const y = getY(val);
          return (
            <g key={idx}>
              <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} stroke="#1f2937" strokeWidth="1" />
              <text x={paddingLeft - 8} y={y + 4} fill="#9ca3af" fontSize="11" textAnchor="end">
                {val >= 10 ? Math.round(val) : val.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Y Axis Label */}
        <text
          x={-(svgHeight / 2)}
          y={16}
          fill="#9ca3af"
          fontSize="12"
          transform="rotate(-90)"
          textAnchor="middle"
          fontWeight="500"
        >
          {yAxisLabel}
        </text>

        {/* Benchmark line if provided */}
        {benchmarkValue !== undefined && (
          <g>
            <line
              x1={paddingLeft}
              y1={getY(benchmarkValue)}
              x2={svgWidth - paddingRight}
              y2={getY(benchmarkValue)}
              stroke="#fbbf24"
              strokeDasharray="4 4"
              strokeWidth="2"
            />
            <text
              x={svgWidth - paddingRight - 8}
              y={getY(benchmarkValue) - 6}
              fill="#fbbf24"
              fontSize="11"
              textAnchor="end"
              fontWeight="600"
            >
              {benchmarkLabel || `Benchmark: ${benchmarkValue}`}
            </text>
          </g>
        )}

        {/* Bars */}
        {data.map((d, i) => {
          const x = paddingLeft + i * slotWidth + (slotWidth - barWidth) / 2;
          const y = getY(d.value);
          const barH = svgHeight - paddingBottom - y;
          const isHovered = hoveredBar === d;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={Math.max(0, barH)}
                fill={d.highlight ? "#38bdf8" : isHovered ? "#60a5fa" : barColor}
                rx="3"
                style={{ cursor: "pointer", transition: "fill 0.15s ease" }}
                onMouseEnter={() => setHoveredBar(d)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              {/* Value label on top of bar if small count of bars */}
              {data.length <= 12 && (
                <text
                  x={x + barWidth / 2}
                  y={y - 6}
                  fill="#e5e7eb"
                  fontSize="11"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  {d.value}
                </text>
              )}
              {/* X tick label */}
              {(data.length <= 12 || i % Math.ceil(data.length / 10) === 0) && (
                <text
                  x={x + barWidth / 2}
                  y={svgHeight - paddingBottom + 18}
                  fill="#9ca3af"
                  fontSize="11"
                  textAnchor="middle"
                >
                  {d.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hoveredBar && (
        <div style={{ marginTop: "8px", fontSize: "13px", color: "#e5e7eb", background: "#1f2937", padding: "6px 12px", borderRadius: "6px", display: "inline-block" }}>
          <b>{hoveredBar.label}</b>: {hoveredBar.value} {hoveredBar.tooltipExtra || ""}
        </div>
      )}

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#9ca3af", marginTop: "12px", borderTop: "1px solid #1f2937", paddingTop: "8px", flexWrap: "wrap", gap: "8px" }}>
        <span><b>Source:</b> {source}</span>
        {caveat && <span style={{ color: "#fbbf24" }}><b>Caveat:</b> {caveat}</span>}
      </div>
    </div>
  );
};
