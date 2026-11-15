import "../charts.css";
import { Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export interface BarChartPoint {
  label: string;
  value: number;
}

interface ScientificBarChartProps {
  data: BarChartPoint[];
  title: string;
  seriesLabel: string;
  units: string;
  source: string;
  period: string;
  caveat: string;
  color?: string;
  baseline?: { value: number; label: string };
  valueDigits?: number;
  highlightIndex?: number;
}

export function ScientificBarChart({ data, title, seriesLabel, units, source, period, caveat, color = "#14b8a6", baseline, valueDigits = 1, highlightIndex }: ScientificBarChartProps) {
  return (
    <section className="chart-panel surface" aria-label={title}>
      <div className="chart-header">
        <div><h3 className="surface-title">{title}</h3><p className="surface-subtitle">{seriesLabel}</p></div>
        <span className="chart-period">{period}</span>
      </div>
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 15, right: 18, bottom: 5, left: 6 }}>
            <CartesianGrid stroke="#243751" strokeDasharray="3 5" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: "#7186a0", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }} axisLine={{ stroke: "#263a55" }} tickLine={false} tickMargin={10} interval={data.length < 14 ? 0 : "preserveStartEnd"} minTickGap={18} />
            <YAxis tickFormatter={(value: number) => Number(value).toFixed(valueDigits)} tick={{ fill: "#7186a0", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }} axisLine={false} tickLine={false} tickMargin={8} width={58} domain={[0, "auto"]} />
            <Tooltip cursor={{ fill: "#2A2A2E" }} contentStyle={{ background: "#17171B", border: "1px solid #2A2A2E", borderRadius: 9, color: "#FFFFFF", fontSize: 11 }} labelStyle={{ color: "#91a6bf", fontFamily: "JetBrains Mono, monospace", marginBottom: 4 }} itemStyle={{ color, fontFamily: "JetBrains Mono, monospace" }} formatter={(value) => [typeof value === "number" ? `${value.toFixed(4)} ${units}` : value, seriesLabel]} />
            {baseline && <ReferenceLine y={baseline.value} stroke="#fbbf24" strokeDasharray="5 5" label={{ value: baseline.label, fill: "#f2cf69", fontSize: 9, position: "insideTopRight" }} />}
            <Bar dataKey="value" name={seriesLabel} unit={units} fill={color} radius={[4, 4, 0, 0]} maxBarSize={36} isAnimationActive={false}>
              {data.map((_, index) => <Cell key={`bar-${index}`} fill={index === highlightIndex ? "#14b8a6" : color} fillOpacity={0.85} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-axis-note">{units}</div>
      <div className="chart-provenance"><span><b>Source</b>{source}</span><span><b>Caveat</b>{caveat}</span></div>
    </section>
  );
}

