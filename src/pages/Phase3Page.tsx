import React from "react";
import { phase3Data } from "../data/realData";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const Phase3Page: React.FC = () => {
  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        Phase 3: Disaster Resilience Education — Prepared. Not Panicked.
      </h2>

      {/* Scope definition */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#34d399", fontSize: "18px" }}>
          Programme Mission & Non-Predictive Mandate
        </h3>
        <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
          Phase 3 is an <b>educational preparedness curriculum</b> tailored for school and college students across India. It is <b>NOT</b> a predictive forecasting tool: it generates no synthetic hazard probabilities, no automated panic alerts, and no unverified safety instructions. Its core focus is instilling verified situational literacy before extreme weather strikes.
        </p>
      </div>

      {/* Official Guidance First */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#60a5fa", fontSize: "18px" }}>
          Official Direct Guidance Gateways
        </h3>
        <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "14px" }}>
          In any extreme meteorological event, official emergency directives from statutory bodies take absolute precedence:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
          {phase3Data.officialGuidance.map((org, idx) => (
            <a
              key={idx}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#1f2937",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #374151",
                textDecoration: "none",
                color: "#93c5fd",
                fontWeight: 600,
                transition: "border-color 0.2s ease",
              }}
            >
              <div style={{ fontSize: "15px" }}>{org.name} →</div>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>{org.url}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Historical Disaster Realities (CSE Jan-Sep 2026) */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#f87171", fontSize: "18px" }}>
          Historical Impact Statistics (Jan–Sep 2026)
        </h3>
        <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "14px" }}>
          Documented empirical context from the Centre for Science and Environment (CSE) State of India's Environment Report (1 Jan – 30 Sep 2026):
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "16px" }}>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>Extreme Weather Days</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#f87171" }}>251 of 273 days</div>
            <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>Jan–Sep 2026 record</div>
          </div>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>Lives Lost</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#ef4444" }}>3,220 deaths</div>
            <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>Documented human toll</div>
          </div>
          <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px" }}>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>Houses Damaged</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#fbbf24" }}>128,334 houses</div>
            <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>Structural destruction</div>
          </div>
        </div>

        <div style={{ background: "#1f2937", padding: "14px", borderRadius: "8px", fontSize: "13px", color: "#e5e7eb", lineHeight: 1.6 }}>
          <b>Verified Cyclone Casualty Records:</b>
          <ul style={{ margin: "6px 0 0 0", paddingLeft: "20px" }}>
            <li><b>Cyclone Arnab:</b> 9 deaths in Andhra Pradesh, 26+ total casualties.</li>
            <li><b>Cyclone Murasu:</b> 17+ deaths, ≥$203M estimated damage, landfall 2–3 November 2026 near Ongole.</li>
          </ul>
          <div style={{ color: "#9ca3af", marginTop: "6px", fontSize: "12px" }}>
            *Presented as historical retrospective statistics only, not a forward hazard probability model.
          </div>
        </div>
      </div>

      {/* Five Educational Modules */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", color: "#fbbf24", fontSize: "18px" }}>
          Five Pillars of Educational Resilience
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {phase3Data.modules.map((m, idx) => (
            <div key={idx} style={{ background: "#1f2937", padding: "16px", borderRadius: "8px", borderTop: "3px solid #fbbf24" }}>
              <div style={{ fontWeight: "bold", color: "#fef08a", fontSize: "15px", marginBottom: "6px" }}>
                {idx + 1}. {m.title}
              </div>
              <div style={{ color: "#d1d5db", fontSize: "13px", lineHeight: 1.5 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Resource Guidance */}
      <div style={{ background: "#111827", padding: "20px", borderRadius: "12px", border: "1px solid #1f2937" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#a78bfa", fontSize: "16px" }}>
          🎥 Training Video Deployment
        </h3>
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.6 }}>
          {phase3Data.videoNote}
        </p>
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance not assessed: Historical statistics are empirical records from government and institutional reviews. Phase 3 provides safety education, not hazard prediction.
      </ScientificCaveat>
    </section>
  );
};
