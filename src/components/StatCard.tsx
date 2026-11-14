import { ArrowDownRight, ArrowRight, ArrowUpRight, Minus } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "cyan" | "teal" | "violet" | "amber" | "rose";
type Trend = "up" | "down" | "steady";

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  description: string;
  badge: string;
  tone?: Tone;
  trend?: Trend;
  trendLabel?: string;
  source?: string;
  icon?: ReactNode;
}

const trendIcon = { up: ArrowUpRight, down: ArrowDownRight, steady: Minus };

export function StatCard({ title, value, unit, description, badge, tone = "cyan", trend = "steady", trendLabel, source, icon }: StatCardProps) {
  const TrendIcon = trendIcon[trend];
  return (
    <article className="stat-card" data-tone={tone}>
      <div className="stat-card-top">
        <span className="stat-title">{title}</span>
        {icon && <span className="stat-icon" aria-hidden="true">{icon}</span>}
      </div>
      <div className="stat-value-row">
        <div className="stat-value">{value}{unit && <span className="stat-unit">{unit}</span>}</div>
        <span className={`trend-mark trend-${trend}`} aria-label={`Trend: ${trend}`}><TrendIcon size={16} strokeWidth={2.2} /></span>
      </div>
      <p className="stat-description">{description}</p>
      <div className="stat-card-bottom">
        <span className={`data-badge badge-${tone}`}><span className="badge-dot" />{badge}</span>
        {trendLabel && <span className="trend-label"><ArrowRight size={12} />{trendLabel}</span>}
      </div>
      {source && <div className="stat-source">{source}</div>}
    </article>
  );
}
