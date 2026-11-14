import React, { useState } from "react";

export interface DataPoint {
  x: string | number;
  y: number;
  label?: string;
}

interface SvgLineChartProps {
  data: DataPoint[];
  title: string;
  yAxisLabel: string;
  source: string;
  period: string;
  caveat?: string;
  strokeColor?: string;
  height?: number;
  showPoints?: boolean;
  baselineValue?: number;
  baselineLabel?: string;
}

export const SvgLineChart: React.FC<SvgLineChartProps> = ({
  data,
  title,
  yAxisLabel,
  source,
  period,
  caveat,
  strokeColor = "#38bdf8",
  height = 300,
  showPoints = true,
  baselineValue,
  baselineLabel,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);

  if (!data || data.length === 0) {
    return (
      <div style={{ background: "#111827", padding: "24px", borderRadius: "12px", border: "1px solid #1f2937", textAlign: "center", color: "#9ca3af" }}>
        Data unavailable
      </div>
    );
  }

  const paddingLeft = 65;
  const paddingRight = 30;
  const paddingTop = 40;
  const paddingBottom = 50;
  const svgWidth = 800;
  const svgHeight = height;

  const yValues = data.map((d) => d.y);
  if (baselineValue !== undefined) {
    yValues.push(baselineValue);
  }
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);
  const ySpan = maxY - minY || 1;
  const yBuffer = ySpan * 0.1;
  const chartMinY = Math.floor(minY - yBuffer);
  const chartMaxY = Math.ceil(maxY + yBuffer);
  const chartYSpan = chartMaxY - chartMinY || 1;

  const getX = (index: number) => {
    return paddingLeft + (index / (data.length - 1 || 1)) * (svgWidth - paddingLeft - paddingRight);
  };

  const getY = (val: number) => {
    return svgHeight - paddingBottom - ((val - chartMinY) / chartYSpan) * (svgHeight - paddingTop - paddingBottom);
  };

  const pointsString = data.map((d, i) => `${getX(i)},${getY(d.y)}`).join(" ");

  // X ticks: select up to 8 evenly spaced ticks
  const tickCount = Math.min(8, data.length);
  const xTicks = Array.from({ length: tickCount }, (_, i) => {
    const index = Math.round((i / (tickCount - 1 || 1)) * (data.length - 1));
    return { index, point: data[index] };
  });

  // Y ticks: 5 ticks
  const yTicks = Array.from({ length: 5 }, (_, i) => {
    return chartMinY + (i / 4) * chartYSpan;
  });

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
        {/* Y-axis gridlines and labels */}
        {yTicks.map((val, idx) => {
          const y = getY(val);
          return (
            <g key={idx}>
              <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} stroke="#1f2937" strokeWidth="1" />
              <text x={paddingLeft - 8} y={y + 4} fill="#9ca3af" fontSize="11" textAnchor="end">
                {val.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Y Axis Label */}
        <text
          x={-(svgHeight / 2)}
          y={18}
          fill="#9ca3af"
          fontSize="12"
          transform="rotate(-90)"
          textAnchor="middle"
          fontWeight="500"
        >
          {yAxisLabel}
        </text>

        {/* Baseline line if provided */}
        {baselineValue !== undefined && (
          <g>
            <line
              x1={paddingLeft}
              y1={getY(baselineValue)}
              x2={svgWidth - paddingRight}
              y2={getY(baselineValue)}
              stroke="#eab308"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <text
              x={svgWidth - paddingRight - 6}
              y={getY(baselineValue) - 6}
              fill="#fbbf24"
              fontSize="11"
              textAnchor="end"
              fontWeight="600"
            >
              {baselineLabel || `Baseline: ${baselineValue.toFixed(2)}`}
            </text>
          </g>
        )}

        {/* Path line */}
        <polyline
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pointsString}
        />

        {/* Points & interactive hitboxes */}
        {showPoints &&
          data.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d.y);
            const isHovered = hoveredPoint === d;
            return (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={data.length > 50 ? 1.5 : isHovered ? 6 : 4}
                  fill={isHovered ? "#fff" : strokeColor}
                  stroke={isHovered ? strokeColor : "#111827"}
                  strokeWidth="2"
                  style={{ cursor: "pointer", transition: "r 0.15s ease" }}
                  onMouseEnter={() => setHoveredPoint(d)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              </g>
            );
          })}

        {/* X-axis ticks */}
        {xTicks.map((tick, idx) => {
          const x = getX(tick.index);
          return (
            <g key={idx}>
              <line x1={x} y1={svgHeight - paddingBottom} x2={x} y2={svgHeight - paddingBottom + 5} stroke="#374151" />
              <text x={x} y={svgHeight - paddingBottom + 20} fill="#9ca3af" fontSize="11" textAnchor="middle">
                {String(tick.point.x)}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip / info */}
      {hoveredPoint && (
        <div style={{ marginTop: "8px", fontSize: "13px", color: "#e5e7eb", background: "#1f2937", padding: "6px 12px", borderRadius: "6px", display: "inline-block" }}>
          <b>{hoveredPoint.label || hoveredPoint.x}</b>: {hoveredPoint.y.toFixed(2)}
        </div>
      )}

      {/* Chart Footer metadata */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#9ca3af", marginTop: "12px", borderTop: "1px solid #1f2937", paddingTop: "8px", flexWrap: "wrap", gap: "8px" }}>
        <span><b>Source:</b> {source}</span>
        {caveat && <span style={{ color: "#fbbf24" }}><b>Caveat:</b> {caveat}</span>}
      </div>
    </div>
  );
};
