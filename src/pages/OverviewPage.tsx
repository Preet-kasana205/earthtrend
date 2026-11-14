import "../overview.css";
import { ArrowUpRight, Database, Globe2, MapPin, MoveRight } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { PacificSchematicMap } from "../components/PacificSchematicMap";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { iod, monsoon2026, nino34, pacificRainfall } from "../data/realData";

type PageId = "overview" | "trend" | "relationships" | "monsoon" | "datasets" | "methodology" | "phase3";

export function OverviewPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <section className="page-section">
      <div className="overview-banner">
        <div className="overview-banner-copy">
          <div className="badge"><span className="badge-dot" />NASA Space Apps Challenge</div>
          <h2>Earth system trend detective</h2>
          <p>Explore verified Pacific and monsoon observations with their sources, baselines, and limits in view.</p>
          <div className="overview-actions">
            <button className="button-primary" type="button" onClick={() => onNavigate("trend")}>Explore the observations <ArrowUpRight size={15} /></button>
            <button className="button-outline" type="button" onClick={() => onNavigate("datasets")}>Browse source data <Database size={14} /></button>
          </div>
        </div>
        <div className="overview-banner-mark" aria-hidden="true"><Globe2 size={94} strokeWidth={0.8} /><span /></div>
        <div className="banner-footnote"><span className="status-dot" />Verified Source Data <i /> Frozen 13 Nov 2026</div>
      </div>

      <div className="map-layout">
        <PacificSchematicMap />
        <aside className="map-context surface surface-pad">
          <div className="eyebrow">Region at a glance</div>
          <h3>Niño-3.4 reference area</h3>
          <p className="surface-subtitle">A geographic reference for the observation box. The map does not show measured anomalies or sea-surface height patterns.</p>
          <div className="map-coordinate"><MapPin size={15} /><span>5°N–5°S</span><span className="coordinate-divider">·</span><span>170°W–120°W</span></div>
          <div className="map-context-divider" />
          <div className="context-row"><span>Monthly SST anomaly</span><strong className="mono text-cyan-300">+{nino34.oct2026Monthly}°C</strong></div>
          <div className="context-row"><span>Rainfall observation period</span><strong className="mono">September 2026</strong></div>
          <button className="text-link" type="button" onClick={() => onNavigate("trend")}>View the full time series <MoveRight size={14} /></button>
        </aside>
      </div>

      <div className="section-heading-row">
        <div><div className="eyebrow">Verified observations</div><h3 className="section-heading">Signals in this snapshot</h3></div>
        <span className="period-chip mono">SEP–OCT 2026</span>
      </div>
      <div className="stat-grid">
        <StatCard title="Monthly Niño-3.4 SST anomaly" value={`+${nino34.oct2026Monthly}`} unit="°C" description={`October 2026 · September was +${nino34.sep2026Monthly}°C`} badge="Monthly · not ONI" tone="rose" trend="up" trendLabel="Sep → Oct" source="NOAA CPC · ERSST v5 · 1991–2020" />
        <StatCard title="Pacific rainfall anomaly" value={`+${pacificRainfall.sep2026Anomaly}`} unit="mm/day" description={`${pacificRainfall.sep2026Mean} vs ${pacificRainfall.sepBaselineMean} mm/day September mean`} badge="GPM IMERG v07" tone="cyan" trend="up" trendLabel="vs baseline" source="NASA Giovanni · Sep 2026 / 2001–2019" />
        <StatCard title="Indian Ocean Dipole" value="Agency split" description={`BoM +${iod.bomWeeklyTo8Nov2026}°C · IMD ${iod.imdStatus31Oct2026}`} badge="Two assessments" tone="amber" trend="steady" trendLabel="different dates" source="BoM · week to 8 Nov / IMD · 31 Oct" />
        <StatCard title="Southwest monsoon" value={`${monsoon2026.percentOfLPA}`} unit="% LPA" description={`${monsoon2026.rainfallMm} mm observed vs ${monsoon2026.lpaMm} mm LPA`} badge="Jun–Sep 2026" tone="teal" trend="down" trendLabel="seasonal total" source="IMD · 1971–2020 LPA" />
      </div>
      <ScientificCaveat>Significance not assessed. These observed values are shown against their stated baselines; co-occurrence does not establish causation.</ScientificCaveat>
    </section>
  );
}

