import { Component, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";
import { overviewMapRegions } from "../lib/overviewMapRegions.js";
import { regionGlobeMarkers } from "../lib/regionGlobeMarkers.js";
import type { RegionGlobeMarkerName } from "../lib/regionGlobeMarkers.js";
import type { TrendSelection } from "../lib/overviewMapRegions.js";

const EARTH_TEXTURE_URL = "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
const GLOBE_HEIGHT_DESKTOP = 380;

let webGlAvailable: boolean | undefined;

function supportsWebGL(): boolean {
  if (webGlAvailable !== undefined) return webGlAvailable;

  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    webGlAvailable = context !== null;
    context?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    webGlAvailable = false;
  }

  return webGlAvailable;
}

class GlobeErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function GlobeSurface({ onNavigate }: { onNavigate: (selection: TrendSelection) => void }) {
  const [textureReady, setTextureReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: GLOBE_HEIGHT_DESKTOP });
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const controlsInitializedRef = useRef(false);
  const cameraInitializedRef = useRef(false);
  const controlErrorLoggedRef = useRef(false);
  const navigateRef = useRef(onNavigate);
  const pointsData = useMemo(() => regionGlobeMarkers.map((marker, index) => ({
    ...marker,
    color: ["#67e8f9", "#2dd4bf", "#a5f3fc"][index],
  })), []);
  const labelsData = useMemo(() => regionGlobeMarkers.map((marker) => ({ ...marker })), []);

  useEffect(() => {
    navigateRef.current = onNavigate;
  }, [onNavigate]);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setTextureReady(true);
    image.onerror = () => setFailed(true);
    image.src = EARTH_TEXTURE_URL;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  useEffect(() => {
    if (!textureReady || failed) return;

    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      const height = Math.round(rect.height);
      setDimensions((current) => {
        const next = { width: Math.round(rect.width), height };
        return current.width === next.width && current.height === next.height ? current : next;
      });
    };

    measure();
    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(measure);
      observer.observe(container);
    } else {
      window.addEventListener("resize", measure);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [failed, textureReady]);

  const initializeControls = useCallback(() => {
    if (controlsInitializedRef.current) return true;

    try {
      const globe = globeRef.current;
      if (!globe) return false;

      const controls = globe.controls();
      if (!controls) return false;

      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.8;
      controls.enableZoom = true;
      controls.enableRotate = true;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;

      if (!cameraInitializedRef.current) {
        globe.pointOfView({ lat: 20, lng: 90, altitude: 2.0 }, 0);
        cameraInitializedRef.current = true;
      }

      controlsInitializedRef.current = true;
      return true;
    } catch (error) {
      if (!controlErrorLoggedRef.current) {
        console.error("EarthTrend globe controls are not available yet; retrying initialization.", error);
        controlErrorLoggedRef.current = true;
      }
      return false;
    }
  }, []);

  useEffect(() => {
    if (!textureReady || failed) return;

    if (initializeControls()) return;

    const retryId = window.setInterval(() => {
      if (initializeControls()) window.clearInterval(retryId);
    }, 100);

    return () => window.clearInterval(retryId);
  }, [failed, initializeControls, textureReady]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || failed) return;

    const handleContextLoss = () => setFailed(true);
    container.addEventListener("webglcontextlost", handleContextLoss, true);
    return () => container.removeEventListener("webglcontextlost", handleContextLoss, true);
  }, [failed, textureReady]);

  const handlePointClick = useCallback((point: object) => {
    const markerName = (point as { name?: RegionGlobeMarkerName }).name;
    const region = overviewMapRegions.find((item) => item.name === markerName);
    if (region) navigateRef.current(region.selection);
  }, []);

  if (failed || !textureReady) return null;

  return (
    <section className="region-globe-section surface surface-pad" aria-label="Interactive 3D reference globe">
      <div className="region-globe-stage" ref={containerRef} role="group" aria-label="Reference globe with three clickable regions: Niño-3.4, Rajasthan, and Assam">
        {dimensions.width > 0 && dimensions.height > 0 && (
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            globeImageUrl={EARTH_TEXTURE_URL}
            backgroundColor="#101b2d"
            showAtmosphere
            atmosphereColor="#4ba8bf"
            atmosphereAltitude={0.12}
            pointsData={pointsData}
            pointLat="lat"
            pointLng="lng"
            pointLabel="name"
            pointColor="color"
            pointAltitude={0.02}
            pointRadius={1.8}
            pointResolution={10}
            pointsTransitionDuration={0}
            labelsData={labelsData}
            labelLat="lat"
            labelLng="lng"
            labelText="name"
            labelSize={0.8}
            labelColor={() => "#e0f7ff"}
            labelAltitude={0.055}
            labelDotRadius={0.2}
            labelResolution={2}
            onPointClick={handlePointClick}
            onGlobeReady={initializeControls}
            animateIn={false}
            waitForGlobeReady={false}
            rendererConfig={{ antialias: true, alpha: true, powerPreference: "low-power" }}
          />
        )}
      </div>
      <p className="region-globe-caption">Reference globe — regions only, no data layer</p>
    </section>
  );
}

export function RegionGlobe({ onNavigate }: { onNavigate: (page: "trend", selection: TrendSelection) => void }) {
  if (!supportsWebGL()) return null;

  return (
    <GlobeErrorBoundary>
      <GlobeSurface onNavigate={(selection) => onNavigate("trend", selection)} />
    </GlobeErrorBoundary>
  );
}
