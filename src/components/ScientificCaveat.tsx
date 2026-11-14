import { ShieldAlert } from "lucide-react";
import type { ReactNode } from "react";

interface ScientificCaveatProps {
  children?: ReactNode;
  text?: string;
  significanceNotAssessed?: boolean;
}

export function ScientificCaveat({ children, text, significanceNotAssessed = true }: ScientificCaveatProps) {
  return (
    <aside className="scientific-caveat" aria-label="Scientific caveat">
      <ShieldAlert size={17} aria-hidden="true" />
      <div className="caveat-copy">
        <div className="caveat-heading">Scientific caveat</div>
        <p>{text ?? children}</p>
      </div>
      {significanceNotAssessed && <span className="caveat-status">Significance not assessed</span>}
    </aside>
  );
}
