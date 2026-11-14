import "../phase3.css";
import "../phase3.css";
import { ArrowUpRight, BookOpen, GraduationCap, ShieldCheck } from "lucide-react";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { phase3Data } from "../data/phase3Data";

export function Phase3Page() {
  const impact = phase3Data.historicalStats.cseJanSep2026;
  return (
    <section className="page-section phase3-page">
      <div className="prepared-banner">
        <div className="prepared-symbol"><ShieldCheck size={27} /></div>
        <div><div className="eyebrow">Phase 3 · educational preparedness</div><h2>Prepared. Not panicked.</h2><p>{phase3Data.scope}</p></div>
        <span className="prepared-status">NOT A FORECAST</span>
      </div>

      <section className="official-guidance surface surface-pad">
        <div className="guidance-heading"><div><div className="eyebrow">Start with official sources</div><h3 className="surface-title">Guidance gateways</h3><p className="surface-subtitle">Follow current directions from the relevant official body.</p></div><div className="prepared-icon"><BookOpen size={18} /></div></div>
        <div className="guidance-links">
          {phase3Data.officialGuidance.map((org) => <a key={org.name} href={org.url} target="_blank" rel="noreferrer noopener"><span>{org.name}</span><ArrowUpRight size={15} /></a>)}
        </div>
      </section>

      <section className="learning-section">
        <div className="learning-heading"><div><div className="eyebrow">Learning path</div><h3>Five pillars of preparedness literacy</h3></div><span className="learning-audience"><GraduationCap size={14} />Schools and colleges in India</span></div>
        <ol className="learning-list">
          {phase3Data.modules.map((module, index) => <li key={module.title}><span className="learning-number">{String(index + 1).padStart(2, "0")}</span><div><strong>{module.title}</strong><p>{module.desc}</p></div><span className="learning-arrow">↗</span></li>)}
        </ol>
      </section>

      <section className="impact-section surface surface-pad">
        <div className="eyebrow">Historical retrospective · not a forecast</div>
        <h3 className="surface-title">Reported impacts, January–September 2026</h3>
        <p className="surface-subtitle">{impact.source} · period: {impact.period}</p>
        <div className="impact-strip">
          <div><span>Extreme weather days</span><strong>{impact.extremeWeatherDays}</strong></div>
          <div><span>Deaths reported</span><strong>{impact.deaths.toLocaleString("en-IN")}</strong></div>
          <div><span>Houses damaged</span><strong>{impact.housesDamaged.toLocaleString("en-IN")}</strong></div>
        </div>
        <div className="cyclone-context"><strong>Named event records in the project notes</strong><ul>{phase3Data.historicalStats.cyclones.map((cyclone) => <li key={cyclone.name}><span>{cyclone.name}</span><span>{cyclone.impact}</span></li>)}</ul></div>
      </section>

      <section className="video-note surface surface-pad"><div className="prepared-icon"><BookOpen size={18} /></div><div><div className="eyebrow">Training resource</div><p>{phase3Data.videoNote}</p></div></section>
      <ScientificCaveat>Phase 3 provides educational preparedness context only. It does not generate hazard probabilities, forecasts, or emergency alerts.</ScientificCaveat>
    </section>
  );
}

