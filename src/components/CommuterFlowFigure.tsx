import { useState } from 'react';
import { ArrowRight, Shuffle, Map, BarChart3 } from 'lucide-react';

interface CommuterPair {
  origin: string;
  destination: string;
  dailyFlow: number;
  direction: string;
  shareNotes: string;
}

const COMMUTER_PAIRS: CommuterPair[] = [
  { origin: "Chesterfield (TCAMPO)", destination: "Rest of Chesterfield", dailyFlow: 5500, direction: "Northbound Outbound", shareNotes: "Largest single flow out of TCAMPO" },
  { origin: "Chesterfield (TCAMPO)", destination: "City of Richmond", dailyFlow: 3000, direction: "Northbound Commute", shareNotes: "Core urban employment commute" },
  { origin: "Chesterfield (TCAMPO)", destination: "Henrico County", dailyFlow: 2600, direction: "Northbound Arterial", shareNotes: "Interstate I-95 / I-295 corridor" },
  { origin: "Rest of Chesterfield", destination: "Chesterfield (TCAMPO)", dailyFlow: 2400, direction: "Inbound to TCAMPO", shareNotes: "Reverse commute to local jobs" },
  { origin: "Prince George County", destination: "City of Petersburg", dailyFlow: 1700, direction: "Intra-TCAMPO Core", shareNotes: "Major intra-MPO urban exchange" },
  { origin: "Hopewell", destination: "Prince George County", dailyFlow: 1500, direction: "Intra-TCAMPO East", shareNotes: "Industrial & defense corridor" },
  { origin: "Petersburg", destination: "Prince George County", dailyFlow: 1030, direction: "Intra-TCAMPO Central", shareNotes: "Fort Gregg-Adams and regional jobs" }
];

export const CommuterFlowFigure: React.FC = () => {
  const [viewMode, setViewMode] = useState<'map2023' | 'map2015' | 'interactive'>('map2023');
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const active = COMMUTER_PAIRS[selectedIdx];

  return (
    <div className="commuter-flow-card">
      <div className="flow-header">
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <button
            className={`density-tab-btn ${viewMode === 'map2023' ? 'active' : ''}`}
            onClick={() => setViewMode('map2023')}
          >
            <Map size={15} />
            <span>Figure 18: 2023 Commute Flows Map</span>
          </button>
          <button
            className={`density-tab-btn ${viewMode === 'map2015' ? 'active' : ''}`}
            onClick={() => setViewMode('map2015')}
          >
            <Map size={15} />
            <span>Figure 20: 2015 Commute Flows Map</span>
          </button>
          <button
            className={`density-tab-btn ${viewMode === 'interactive' ? 'active' : ''}`}
            onClick={() => setViewMode('interactive')}
          >
            <BarChart3 size={15} />
            <span>Interactive Flow Inspector</span>
          </button>
        </div>
      </div>

      {viewMode === 'map2023' && (
        <div className="section-document-figure-card animate-fade-in" style={{ margin: '1rem 0' }}>
          <div className="figure-card-header">
            <span className="figure-card-tag">Figure 18: Commute Flows To, From, and Within TCAMPO (2023)</span>
            <span className="figure-card-source">U.S. Census Bureau, LODES8 2023</span>
          </div>
          <div className="figure-img-container">
            <img 
              src="/assets/figures/fig18_commute_flows_2023.jpg" 
              alt="Figure 18: Commute Flows To, From, and Within TCAMPO 2023" 
              className="figure-rendered-img"
            />
          </div>
          <div className="figure-card-caption">
            <strong>Figure 18:</strong> Shows flows exceeding 100 workers for trips under 50 miles. Orange lines represent outbound commutes to Richmond/Henrico; blue lines show inbound flows; grey lines show internal Tri-Cities commutes.
          </div>
        </div>
      )}

      {viewMode === 'map2015' && (
        <div className="section-document-figure-card animate-fade-in" style={{ margin: '1rem 0' }}>
          <div className="figure-card-header">
            <span className="figure-card-tag">Figure 20: Commute Flows To, From, and Within TCAMPO (2015)</span>
            <span className="figure-card-source">U.S. Census Bureau, LODES8 2015</span>
          </div>
          <div className="figure-img-container">
            <img 
              src="/assets/figures/fig20_commute_flows_2015.jpg" 
              alt="Figure 20: Commute Flows To, From, and Within TCAMPO 2015" 
              className="figure-rendered-img"
            />
          </div>
          <div className="figure-card-caption">
            <strong>Figure 20:</strong> Baseline 2015 commute flows across the Tri-Cities region before post-2015 northern expansion toward Richmond.
          </div>
        </div>
      )}

      {viewMode === 'interactive' && (
        <div className="interactive-flow-widget animate-fade-in">
          <div className="flow-pairs-selector">
            {COMMUTER_PAIRS.map((pair, idx) => (
              <button
                key={idx}
                className={`flow-selector-btn ${idx === selectedIdx ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                <span className="origin-dest">{pair.origin} → {pair.destination}</span>
                <span className="flow-count">~{pair.dailyFlow.toLocaleString()} workers</span>
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
                <Shuffle size={14} /> ~{active.dailyFlow.toLocaleString()} Employed Workers
              </div>
              <div className="flow-line-animated">
                <div className="flow-particle" />
                <div className="flow-particle p2" />
              </div>
              <div className="flow-corridor-tag">
                <ArrowRight size={14} /> {active.direction}
              </div>
            </div>

            <div className="node dest-node">
              <span className="node-tag">Destination</span>
              <h5>{active.destination}</h5>
              <span className="node-sub">{active.shareNotes}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommuterFlowFigure;
