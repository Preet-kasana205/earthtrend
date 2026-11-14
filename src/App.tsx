import { lazy, Suspense, useState } from "react";
import {
  Activity,
  BookOpenCheck,
  CloudRain,
  Database,
  LayoutDashboard,
  Menu,
  Orbit,
  PanelLeftClose,
  PanelLeftOpen,
  ShieldCheck,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TrendSelection } from "./lib/overviewMapRegions.js";
import "./App.css";

type PageId = "overview" | "trend" | "relationships" | "monsoon" | "datasets" | "methodology" | "phase3";
type NavItem = { id: PageId; label: string; badge: string; icon: LucideIcon };

const OverviewPage = lazy(() => import("./pages/OverviewPage").then((module) => ({ default: module.OverviewPage })));
const TrendExplorerPage = lazy(() => import("./pages/TrendExplorerPage").then((module) => ({ default: module.TrendExplorerPage })));
const RelationshipsPage = lazy(() => import("./pages/RelationshipsPage").then((module) => ({ default: module.RelationshipsPage })));
const IndiaMonsoonPage = lazy(() => import("./pages/IndiaMonsoonPage").then((module) => ({ default: module.IndiaMonsoonPage })));
const DatasetsPage = lazy(() => import("./pages/DatasetsPage").then((module) => ({ default: module.DatasetsPage })));
const MethodologyPage = lazy(() => import("./pages/MethodologyPage").then((module) => ({ default: module.MethodologyPage })));
const Phase3Page = lazy(() => import("./pages/Phase3Page").then((module) => ({ default: module.Phase3Page })));

const pages: NavItem[] = [
  { id: "overview", label: "Overview", badge: "01", icon: LayoutDashboard },
  { id: "trend", label: "Trend Explorer", badge: "02", icon: Activity },
  { id: "relationships", label: "Relationships", badge: "03", icon: Orbit },
  { id: "monsoon", label: "India Monsoon", badge: "04", icon: CloudRain },
  { id: "datasets", label: "Datasets", badge: "05", icon: Database },
  { id: "methodology", label: "Methodology", badge: "06", icon: BookOpenCheck },
  { id: "phase3", label: "Preparedness", badge: "07", icon: ShieldCheck },
];

export default function App() {
  const [page, setPage] = useState<PageId>("overview");
  const [trendSelection, setTrendSelection] = useState<TrendSelection | undefined>();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activePage = pages.find((item) => item.id === page) ?? pages[0];

  const navigate = (nextPage: PageId, selection?: TrendSelection) => {
    if (nextPage === "trend") setTrendSelection(selection);
    setPage(nextPage);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""} ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="sidebar-brand">
          <div className="brand-mark" aria-hidden="true">ET</div>
          {!collapsed && <div className="brand-copy"><span>EARTH<span className="brand-accent">TREND</span></span><small>Climate signals, clearly.</small></div>}
          <button className="icon-button sidebar-collapse" type="button" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} title={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <div className="sidebar-section-label">WORKSPACE</div>
        <nav className="nav-list">
          {pages.map(({ id, label, badge, icon: Icon }) => (
            <button key={id} type="button" className={`nav-link ${page === id ? "active" : ""}`} onClick={() => navigate(id)} aria-current={page === id ? "page" : undefined} title={collapsed ? label : undefined}>
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              {!collapsed && <><span className="nav-label">{label}</span><span className="nav-badge">{badge}</span></>}
              {collapsed && <span className="sr-only">{label}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" aria-hidden="true" />{!collapsed && <span>Verified Source Data</span>}</div>
      </aside>
      {mobileMenuOpen && <button className="sidebar-scrim" type="button" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} />}

      <div className="main-panel">
        <header className="topbar">
          <div className="topbar-heading">
            <button className="icon-button mobile-menu-button" type="button" onClick={() => setMobileMenuOpen((value) => !value)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>{mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}</button>
            <div><div className="breadcrumb"><span>EarthTrend</span><span className="breadcrumb-separator">/</span><span>{activePage.label}</span></div><h1>{activePage.label}</h1></div>
          </div>
          <div className="topbar-status"><span className="status-dot" /><span>Verified Source Data</span></div>
        </header>
        <main className="page-main mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="surface surface-pad page-loading">Loading page…</div>}>
            {page === "overview" && <OverviewPage onNavigate={navigate} />}
            {page === "trend" && <TrendExplorerPage initialSelection={trendSelection} />}
            {page === "relationships" && <RelationshipsPage onNavigate={() => navigate("methodology")} />}
            {page === "monsoon" && <IndiaMonsoonPage />}
            {page === "datasets" && <DatasetsPage />}
            {page === "methodology" && <MethodologyPage />}
            {page === "phase3" && <Phase3Page />}
          </Suspense>
        </main>
        <footer className="site-footer"><div className="footer-inner mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>EarthTrend · NASA Space Apps Challenge · 14–15 November 2026</span><span>Sources: NOAA CPC · NASA Giovanni · IMD · BoM · ECMWF ORAS5</span></div></footer>
      </div>
    </div>
  );
}

