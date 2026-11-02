import { useState } from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

interface FundingProgram {
  name: string;
  amountM: number;
  source: string;
  focus: string;
  color: string;
}

const FUNDING_PROGRAMS: FundingProgram[] = [
  { name: "Virginia SMART SCALE", amountM: 420, source: "Commonwealth of Virginia", focus: "High-priority capacity & corridor safety", color: "var(--primary)" },
  { name: "STBG / Regional Surface Transport", amountM: 285, source: "Federal Highway Admin (FHWA)", focus: "Multimodal roadways, bridges & bike corridors", color: "var(--accent-foreground)" },
  { name: "CVTA Regional Revenues", amountM: 215, source: "Central VA Transportation Authority", focus: "Regional priority projects & Fall Line Trail", color: "var(--chart-4)" },
  { name: "Bridge Formula & Preservation", amountM: 190, source: "IIJA / Federal Bridge Program", focus: "State of Good Repair for James/Appomattox bridges", color: "color-mix(in oklch, var(--primary) 75%, black)" },
  { name: "Transit Formula (FTA 5307/5311)", amountM: 130, source: "Federal Transit Administration", focus: "Petersburg Area Transit & microtransit operations", color: "color-mix(in oklch, var(--primary) 65%, white)" },
];

export const FundingBreakdown: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const total = FUNDING_PROGRAMS.reduce((acc, curr) => acc + curr.amountM, 0);
  const active = FUNDING_PROGRAMS[selectedIdx];

  return (
    <div className="funding-breakdown-card">
      <div className="funding-header">
        <span className="figure-badge">
          <DollarSign size={14} /> 2026–2050 FISCAL CONSTRAINT PROGRAM
        </span>
        <h4>$1.24 Billion Anticipated Revenue Allocation</h4>
        <p className="figure-subtext">Balanced multi-decade financial constraint adhering to Title 23 CFR Part 450</p>
      </div>

      <div className="funding-progress-stack">
        {FUNDING_PROGRAMS.map((prog, idx) => {
          const pct = ((prog.amountM / total) * 100).toFixed(1);
          return (
            <div
              key={idx}
              className={`stack-segment ${idx === selectedIdx ? 'selected' : ''}`}
              style={{ width: `${pct}%`, backgroundColor: prog.color }}
              onClick={() => setSelectedIdx(idx)}
              title={`${prog.name}: $${prog.amountM}M (${pct}%)`}
            />
          );
        })}
      </div>

      <div className="funding-content-grid">
        <div className="funding-program-list">
          {FUNDING_PROGRAMS.map((prog, idx) => {
            const isSelected = idx === selectedIdx;
            const pct = ((prog.amountM / total) * 100).toFixed(1);
            return (
              <div
                key={idx}
                className={`funding-item-row ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                <div className="row-color-dot" style={{ backgroundColor: prog.color }} />
                <div className="row-text">
                  <div className="row-title">{prog.name}</div>
                  <div className="row-source">{prog.source}</div>
                </div>
                <div className="row-amount">
                  <span className="amount-val">${prog.amountM}M</span>
                  <span className="amount-pct">{pct}%</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="funding-spotlight-card">
          <div className="spotlight-badge" style={{ color: active.color, borderColor: active.color }}>
            {active.source}
          </div>
          <h3>{active.name}</h3>
          <div className="spotlight-large-num">
            ${active.amountM} <span className="m-unit">Million USD</span>
          </div>
          <div className="spotlight-focus">
            <strong>Investment Focus:</strong> {active.focus}
          </div>
          <div className="spotlight-compliance">
            <ShieldCheck size={16} /> Certified Fiscally Constrained under Federal Planning Rules
          </div>
        </div>
      </div>
    </div>
  );
};
