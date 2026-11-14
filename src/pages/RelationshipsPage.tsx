import "../relationships.css";
import { ArrowRight, BookOpenText, CircleHelp, Globe2, Thermometer, Waves } from "lucide-react";
import { ScientificCaveat } from "../components/ScientificCaveat";
import { iod, monsoon2026, nino34, pacificRainfall, thermocline } from "../data/realData";

export function RelationshipsPage({ onNavigate }: { onNavigate: () => void }) {
  return (
    <section className="page-section relationship-page">
      <div className="page-intro">
        <div><div className="eyebrow">Evidence before explanation</div><h2>How the observations relate</h2><p>Compare observations and agency assessments while keeping their periods, variables, and limits distinct.</p></div>
        <span className="badge"><span className="badge-dot" />No significance test reported</span>
      </div>

      <section className="relationship-story surface surface-pad">
        <div className="story-heading"><div className="story-icon"><Globe2 size={19} /></div><div><div className="eyebrow">Pacific observations</div><h3>Several records describe different parts of the system</h3></div></div>
        <div className="observation-list">
          <article className="observation-row">
            <div className="observation-symbol rose"><Thermometer size={17} /></div>
            <div className="observation-main"><div className="observation-title">Monthly Niño-3.4 sea-surface temperature anomaly</div><p>+{nino34.sep2026Monthly}°C in September and +{nino34.oct2026Monthly}°C in October 2026, relative to the {nino34.baseline} baseline.</p></div>
            <div className="observation-meta">NOAA CPC<br />ERSST v5</div>
          </article>
          <article className="observation-row">
            <div className="observation-symbol cyan"><Waves size={17} /></div>
            <div className="observation-main"><div className="observation-title">Daily area-averaged rainfall rate</div><p>{pacificRainfall.sep2026Mean} mm/day in September 2026, compared with a {pacificRainfall.sepBaselineMean} mm/day September mean for 2001–2019.</p></div>
            <div className="observation-meta">NASA Giovanni<br />GPM IMERG v07</div>
          </article>
          <article className="observation-row">
            <div className="observation-symbol teal"><Waves size={17} /></div>
            <div className="observation-main"><div className="observation-title">ORAS5 isotherm-depth source values</div><p>A historical monthly series ends in November 2025. It is not contemporaneous with the 2026 records and its units remain unconfirmed.</p></div>
            <div className="observation-meta">ECMWF ORAS5<br />1958–2025</div>
          </article>
          <article className="observation-row">
            <div className="observation-symbol violet"><Thermometer size={17} /></div>
            <div className="observation-main"><div className="observation-title">CPC subsurface temperature anomalies</div><p>{thermocline.cpcOct2026Update}. This is a temperature anomaly, a separate variable from ORAS5 isotherm depth.</p></div>
            <div className="observation-meta">NOAA CPC<br />October 2026</div>
          </article>
        </div>
        <div className="relationship-footnote"><CircleHelp size={14} />Different variables and time windows should not be merged into a single measured series.</div>
      </section>

      <section className="iod-compare surface surface-pad">
        <div className="story-heading"><div className="story-icon amber"><Globe2 size={19} /></div><div><div className="eyebrow">Indian Ocean Dipole</div><h3>Two agency assessments, reported with their dates</h3></div></div>
        <div className="agency-compare">
          <article className="agency-panel bom-panel"><div className="agency-heading">Australian Bureau of Meteorology <span>BoM</span></div><div className="agency-reading">Positive <strong>+{iod.bomWeeklyTo8Nov2026}°C</strong></div><p>{iod.bomPeriod}</p><small>Weekly Dipole Mode Index assessment</small></article>
          <div className="agency-separator"><span>VS</span><i /></div>
          <article className="agency-panel imd-panel"><div className="agency-heading">India Meteorological Department <span>IMD</span></div><div className="agency-reading">{iod.imdStatus31Oct2026.split(",")[0]} <strong>IOD</strong></div><p>Assessment: {iod.imdDate}</p><small>Assessment and outlook as reported by IMD</small></article>
        </div>
        <div className="iod-note"><BookOpenText size={15} /><span>{iod.note} Assessment dates differ, so both are shown with their reporting periods.</span></div>
      </section>

      <section className="relationship-interpretation surface-raised surface-pad">
        <div className="eyebrow">Reading the evidence</div>
        <h3>What this comparison does — and does not — establish</h3>
        <div className="interpretation-columns">
          <div><span className="interpretation-number">01</span><p>These values are observations or agency assessments, each with its own source, variable, and date.</p></div>
          <div><span className="interpretation-number">02</span><p>The monsoon seasonal total is reported separately: {monsoon2026.percentOfLPA}% of the 1971–2020 LPA for June–September 2026.</p></div>
          <div><span className="interpretation-number">03</span><p>No formal statistical relationship or causal test is reported here. Co-occurrence alone does not establish one.</p></div>
        </div>
        <button className="text-link" type="button" onClick={onNavigate}>Read the calculation and caveats <ArrowRight size={14} /></button>
      </section>

      <ScientificCaveat>Significance not assessed. No p-values or formal hypothesis test are presented on this page.</ScientificCaveat>
    </section>
  );
}

