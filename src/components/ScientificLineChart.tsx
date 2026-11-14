import "../charts.css";
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export interface LineChartPoint {
  date: string;
  value: number;
}

interface ScientificLineChartProps {
  data: LineChartPoint[];
  title: string;
  seriesLabel: string;
  units: string;
  source: string;
  period: string;
  caveat: string;
  color?: string;
  baseline?: { value: number; label: string };
  valueDigits?: number;
  tickFormatter?: (value: string) => string;
}

export function ScientificLineChart({ data, title, seriesLabel, units, source, period, caveat, color = "#06b6d4", baseline, valueDigits = 2, tickFormatter }: ScientificLineChartProps) {
  return (
    <section className="chart-panel surface" aria-label={title}>
      <div className="chart-header">
        <div><h3 className="surface-title">{title}</h3><p className="surface-subtitle">{seriesLabel}</p></div>
        <span className="chart-period">{period}</span>
      </div>
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 15, right: 22, bottom: 5, left: 6 }}>
            <CartesianGrid stroke="#243751" strokeDasharray="3 5" vertical={false} />
            <XAxis dataKey="date" tickFormatter={tickFormatter} tick={{ fill: "#7186a0", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }} axisLine={{ stroke: "#263a55" }} tickLine={false} tickMargin={10} minTickGap={40} interval="preserveStartEnd" />
            <YAxis tickFormatter={(value: number) => Number(value).toFixed(valueDigits)} tick={{ fill: "#7186a0", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }} axisLine={false} tickLine={false} tickMargin={8} width={58} domain={["auto", "auto"]} />
            <Tooltip cursor={{ stroke: "#5b7391", strokeDasharray: "3 4" }} contentStyle={{ background: "#101b2d", border: "1px solid #2b4564", borderRadius: 9, color: "#e8f1fc", fontSize: 11 }} labelStyle={{ color: "#91a6bf", fontFamily: "JetBrains Mono, monospace", marginBottom: 4 }} itemStyle={{ color, fontFamily: "JetBrains Mono, monospace" }} formatter={(value) => [typeof value === "number" ? `${value.toFixed(4)} ${units}` : value, seriesLabel]} />
            {baseline && <ReferenceLine y={baseline.value} stroke="#fbbf24" strokeDasharray="5 5" label={{ value: baseline.label, fill: "#f2cf69", fontSize: 9, position: "insideTopRight" }} />}
            <Line type="linear" dataKey="value" name={seriesLabel} unit={units} stroke={color} strokeWidth={2} dot={{ r: data.length < 10 ? 3 : 0, fill: color, strokeWidth: 0 }} activeDot={{ r: 4, stroke: "#d9fbff", strokeWidth: 1 }} isAnimationActive={false} connectNulls={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-axis-note">{units}</div>
      <div className="chart-provenance"><span><b>Source</b>{source}</span><span><b>Caveat</b>{caveat}</span></div>
    </section>
  );
}

