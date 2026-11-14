import { Component, useEffect, useRef, useState } from "react";
import type { MutableRefObject, ReactNode } from "react";
import * as L from "leaflet";
import { MapContainer, Popup, Rectangle, TileLayer, useMap, useMapEvents } from "react-leaflet";
import type { OverviewMapRegion, TrendSelection } from "../lib/overviewMapRegions.js";
import { overviewMapRegions } from "../lib/overviewMapRegions.js";
import { PacificSchematicMap } from "./PacificSchematicMap";
import "leaflet/dist/leaflet.css";

type RegionName = OverviewMapRegion["name"];
type RegionFindings = Record<RegionName, string>;

interface InteractiveOverviewMapProps {
  findings: RegionFindings;
  onNavigate: (selection: TrendSelection) => void;
}

function MapFallback() {
  return (
    <div className="map-fallback-stack">
      <p className="map-fallback-message" role="status">Interactive map unavailable; showing schematic reference.</p>
      <PacificSchematicMap />
    </div>
  );
}

class MapErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <MapFallback /> : this.props.children;
  }
}

function TileErrorMonitor({ onError }: { onError: () => void }) {
  useMapEvents({ tileerror: onError });
  return null;
}

function RegionControls({
  selectedRegion,
  rectangleRefs,
  onSelect,
}: {
  selectedRegion: RegionName | null;
  rectangleRefs: MutableRefObject<Partial<Record<RegionName, L.Rectangle | null>>>;
  onSelect: (name: RegionName) => void;
}) {
  const map = useMap();

  const openRegion = (region: OverviewMapRegion) => {
    onSelect(region.name);
    map.fitBounds(region.bounds, { padding: [36, 36], maxZoom: region.name === "Niño-3.4" ? 4 : 6, animate: false });
    rectangleRefs.current[region.name]?.openPopup();
  };

  return (
    <div className="map-region-controls" aria-label="Select a mapped region">
      {overviewMapRegions.map((region) => (
        <button
          key={region.name}
          type="button"
          aria-pressed={selectedRegion === region.name}
          className={selectedRegion === region.name ? "is-selected" : ""}
          onClick={() => openRegion(region)}
        >
          {region.name}
        </button>
      ))}
    </div>
  );
}

function FitAllRegions() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(overviewMapRegions[0].bounds);
    overviewMapRegions.slice(1).forEach((region) => bounds.extend(region.bounds));
    map.fitBounds(bounds, { padding: [24, 24], maxZoom: 3, animate: false });
  }, [map]);

  return null;
}

function InteractiveMap({ findings, onNavigate }: InteractiveOverviewMapProps) {
  const [tileFailed, setTileFailed] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<RegionName | null>(null);
  const rectangleRefs = useRef<Partial<Record<RegionName, L.Rectangle | null>>>({});

  if (tileFailed) return <MapFallback />;

  return (
    <section className="map-panel surface interactive-overview-map" aria-labelledby="pacific-map-title">
      <div className="map-panel-heading">
        <div><div className="eyebrow">Pacific basin</div><h3 id="pacific-map-title" className="surface-title">Observation area</h3></div>
        <span className="map-schematic-label">3 selectable regions</span>
      </div>
      <div className="map-canvas interactive-map-canvas">
        <MapContainer
          className="interactive-leaflet-map"
          center={[15, -35]}
          zoom={2}
          minZoom={1}
          maxZoom={8}
          scrollWheelZoom={false}
          zoomControl
          aria-label="Interactive reference map with three selectable regions"
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution='Sources: <a href="https://www.esri.com/">Esri</a>, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, and the GIS User Community.'
            eventHandlers={{ tileerror: () => setTileFailed(true) }}
          />
          <TileErrorMonitor onError={() => setTileFailed(true)} />
          <FitAllRegions />
          {overviewMapRegions.map((region) => (
            <Rectangle
              key={region.name}
              ref={(layer) => { rectangleRefs.current[region.name] = layer; }}
              bounds={region.bounds}
              pathOptions={{
                color: "#06b6d4",
                weight: selectedRegion === region.name ? 2 : 1.25,
                opacity: selectedRegion === region.name ? 1 : 0.82,
                fillColor: "#14b8a6",
                fillOpacity: selectedRegion === region.name ? 0.2 : 0.08,
              }}
              eventHandlers={{ click: () => setSelectedRegion(region.name) }}
            >
              <Popup className="overview-map-popup" maxWidth={300}>
                <div className="overview-map-popup-content">
                  <strong>{region.name}</strong>
                  <p>{findings[region.name]}</p>
                  {region.name !== "Niño-3.4" && <small>Seasonality and serial autocorrelation are not adjusted.</small>}
                  <button type="button" className="map-popup-button" onClick={() => onNavigate(region.selection)}>
                    View in Trend Explorer
                  </button>
                </div>
              </Popup>
            </Rectangle>
          ))}
          <RegionControls selectedRegion={selectedRegion} rectangleRefs={rectangleRefs} onSelect={setSelectedRegion} />
        </MapContainer>
      </div>
      <div className="map-panel-foot"><span>Reference only · no anomaly fields or contours</span><span className="mono">3 selectable observation regions</span></div>
    </section>
  );
}

export function InteractiveOverviewMap(props: InteractiveOverviewMapProps) {
  return (
    <MapErrorBoundary>
      <InteractiveMap {...props} />
    </MapErrorBoundary>
  );
}
