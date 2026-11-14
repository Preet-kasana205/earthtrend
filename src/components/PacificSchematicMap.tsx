import { MapPin } from "lucide-react";

export function PacificSchematicMap() {
  return (
    <section className="map-panel surface" aria-labelledby="pacific-map-title">
      <div className="map-panel-heading">
        <div><div className="eyebrow">Pacific basin</div><h3 id="pacific-map-title" className="surface-title">Observation area</h3></div>
        <span className="map-schematic-label"><MapPin size={12} />Schematic reference</span>
      </div>
      <div className="map-canvas">
        <svg viewBox="0 0 900 430" role="img" aria-labelledby="map-title map-desc" preserveAspectRatio="xMidYMid meet">
          <title id="map-title">Schematic map of the equatorial Pacific and Niño-3.4 observation area</title>
          <desc id="map-desc">A geographic reference showing the Niño-3.4 area between 170 degrees west and 120 degrees west, five degrees north and south of the equator. It contains no anomaly shading or measured contours.</desc>
          <defs>
            <linearGradient id="oceanFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0c2033" /><stop offset="1" stopColor="#102a40" /></linearGradient>
            <linearGradient id="regionFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#06b6d4" stopOpacity=".2" /><stop offset="1" stopColor="#14b8a6" stopOpacity=".07" /></linearGradient>
          </defs>
          <rect x="0" y="0" width="900" height="430" fill="url(#oceanFill)" />
          {[100, 175, 250, 325].map((y) => <line key={`lat-${y}`} x1="0" y1={y} x2="900" y2={y} className="map-gridline" />)}
          {[130, 260, 390, 520, 650, 780].map((x) => <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="430" className="map-gridline" />)}
          <path d="M0 0H112L143 28 129 55 160 79 141 103 109 113 99 149 72 169 60 207 38 235 0 248Z" className="map-land" />
          <path d="M0 430H102L127 398 153 381 141 352 110 341 98 311 70 295 62 268 0 253Z" className="map-land" />
          <path d="M900 0H820L798 26 772 45 780 73 761 92 780 116 813 126 819 158 840 172 855 209 879 231 900 241Z" className="map-land" />
          <path d="M900 430H841L820 403 790 388 800 358 826 343 832 310 860 293 870 266 900 246Z" className="map-land" />
          <path d="M704 0L682 29 689 56 670 79 681 105 668 128 684 155 674 181 691 209 678 236 694 267 681 296 695 324 683 355 700 387 694 430H900V0Z" className="map-land map-south-america" />
          <line x1="120" y1="215" x2="778" y2="215" className="map-equator" />
          <text x="742" y="205" className="map-label map-label-small">EQUATOR · 0°</text>
          <rect x="300" y="173" width="300" height="84" rx="8" className="map-region" />
          <text x="320" y="160" className="map-region-label">NIÑO-3.4 REFERENCE BOX</text>
          <text x="450" y="208" textAnchor="middle" className="map-center-label">5°N–5°S</text>
          <text x="450" y="231" textAnchor="middle" className="map-sub-label">170°W–120°W</text>
          <text x="166" y="390" className="map-label">Western Pacific</text>
          <text x="641" y="390" className="map-label">Eastern Pacific</text>
          <text x="26" y="39" className="map-label map-label-small">140°E</text>
          <text x="836" y="39" className="map-label map-label-small">80°W</text>
          <circle cx="450" cy="215" r="3" className="map-center-dot" />
        </svg>
      </div>
      <div className="map-panel-foot"><span>Reference only · no anomaly fields or contours</span><span className="mono">5°N–5°S · 170°W–120°W</span></div>
    </section>
  );
}
