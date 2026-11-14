import type { ReactNode } from "react";

export function PageSummary({ children }: { children: ReactNode }) {
  return <div className="page-summary"><span className="eyebrow">What this page shows</span><p>{children}</p></div>;
}

export function PageFinding({ value, result, meaning }: { value: ReactNode; result: string; meaning: string }) {
  return (
    <section className="page-finding surface-raised" aria-label="Page finding">
      <div className="page-finding-value mono">{value}</div>
      <div className="page-finding-copy"><strong>{result}</strong><p>{meaning}</p></div>
    </section>
  );
}
