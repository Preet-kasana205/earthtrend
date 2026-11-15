export type RegionGlobeMarkerName = "Niño-3.4" | "Rajasthan" | "Assam";

export interface RegionGlobeMarker {
  readonly name: RegionGlobeMarkerName;
  readonly lat: number;
  readonly lng: number;
}

export const regionGlobeMarkers: readonly RegionGlobeMarker[];
