import { useState } from 'react';
import { ArrowRight, Shuffle, Car } from 'lucide-react';

interface CommuterPair {
  origin: string;
  destination: string;
  dailyFlow: number;
  modeShareAuto: number;
  modeShareTransit: number;
}

const COMMUTER_PAIRS: CommuterPair[] = [
  { origin: "Chesterfield County", destination: "City of Richmond", dailyFlow: 26400, modeShareAuto: 89, modeShareTransit: 4.8 },
  { origin: "City of Petersburg", destination: "Prince George (Ft. Gregg-Adams)", dailyFlow: 9200, modeShareAuto: 91, modeShareTransit: 3.1 },
  { origin: "City of Hopewell", destination: "Chesterfield / Richmond", dailyFlow: 7600, modeShareAuto: 93, modeShareTransit: 2.2 },
  { origin: "Dinwiddie County", destination: "Petersburg Core", dailyFlow: 6100, modeShareAuto: 94, modeShareTransit: 1.5 },
  { origin: "City of Colonial Heights", destination: "Petersburg / Hopewell", dailyFlow: 5400, modeShareAuto: 92, modeShareTransit: 2.8 },
];

export const CommuterFlowFigure: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const active = COMMUTER_PAIRS[selectedIdx];

  return (
    <div className="commuter-flow-card">
      <div className="flow-header">
        <span className="figure-badge">
          <Car size={14} /> COUNTY-TO-COUNTY COMMUTER INTERDEPENDENCE
        </span>
        <h4>Regional Travel Flows & Cross-Jurisdiction Patterns</h4>
        <p className="figure-subtext">ACS Journey-to-Work & VDOT Census Transportation Planning Products (CTPP)</p>
      </div>

      <div className="flow-pairs-selector">
        {COMMUTER_PAIRS.map((pair, idx) => (
          <button
            key={idx}
            className={`flow-selector-btn ${idx === selectedIdx ? 'active' : ''}`}
            onClick={() => setSelectedIdx(idx)}
          >
            <span className="origin-dest">{pair.origin.split(' ')[0]} → {pair.destination.split(' ')[0]}</span>
            <span className="flow-count">{(pair.dailyFlow / 1000).toFixed(1)}k daily</span>
          </button>
        ))}
      </div>

      <div className="flow-visual-box">
        <div className="node origin-node">
          <span className="node-tag">Origin</span>
          <h5>{active.origin}</h5>
          <span className="node-sub">Home Community</span>
        </div>

        <div className="flow-path-indicator">
          <div className="flow-badge-amount">
            <Shuffle size={14} /> {active.dailyFlow.toLocaleString()} Daily Trips
          </div>
          <div className="flow-line-animated">
            <div className="flow-particle" />
            <div className="flow-particle p2" />
          </div>
          <ArrowRight className="flow-arrow" size={24} />
        </div>

        <div className="node dest-node">
          <span className="node-tag">Destination</span>
          <h5>{active.destination}</h5>
          <span className="node-sub">Job & Activity Hub</span>
        </div>
      </div>

      <div className="flow-metric-split">
        <div className="split-item">
          <span className="split-label">Single-Occupancy & Carpool</span>
          <div className="split-bar-bg">
            <div className="split-bar-fill auto" style={{ width: `${active.modeShareAuto}%` }} />
          </div>
          <span className="split-pct">{active.modeShareAuto}% Highway / Arterial</span>
        </div>
        <div className="split-item">
          <span className="split-label">Transit & Multimodal Share</span>
          <div className="split-bar-bg">
            <div className="split-bar-fill transit" style={{ width: `${active.modeShareTransit * 5}%` }} />
          </div>
          <span className="split-pct">{active.modeShareTransit}% (Target 8% by 2050)</span>
        </div>
      </div>
    </div>
  );
};
