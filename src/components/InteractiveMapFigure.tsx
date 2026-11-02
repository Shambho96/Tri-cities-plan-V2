import { useState } from 'react';
import { Info, Compass } from 'lucide-react';
import { PLAN_OVERVIEW } from '../data/planData';

export const InteractiveMapFigure: React.FC = () => {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>(PLAN_OVERVIEW.jurisdictions[0].name);
  const [activeLayer, setActiveLayer] = useState<'all' | 'interstates' | 'waterways'>('all');

  const current = PLAN_OVERVIEW.jurisdictions.find(j => j.name === selectedJurisdiction) || PLAN_OVERVIEW.jurisdictions[0];

  return (
    <div className="interactive-figure-card">
      <div className="figure-header">
        <div className="figure-title-group">
          <div className="figure-badge">
            <Compass size={14} className="spin-slow" />
            FIGURE 1: INTERACTIVE REGIONAL ATLAS
          </div>
          <h4>TCAMPO Planning Area & Member Jurisdictions</h4>
          <p className="figure-subtext">Click any jurisdiction or corridor to inspect demographic and transit metrics</p>
        </div>

        <div className="figure-layer-pills">
          <button 
            className={`layer-pill ${activeLayer === 'all' ? 'active' : ''}`}
            onClick={() => setActiveLayer('all')}
          >
            All Systems
          </button>
          <button 
            className={`layer-pill ${activeLayer === 'interstates' ? 'active' : ''}`}
            onClick={() => setActiveLayer('interstates')}
          >
            Corridors (I-95/85/295)
          </button>
          <button 
            className={`layer-pill ${activeLayer === 'waterways' ? 'active' : ''}`}
            onClick={() => setActiveLayer('waterways')}
          >
            Rivers & Confluence
          </button>
        </div>
      </div>

      <div className="figure-grid">
        {/* SVG Interactive Map */}
        <div className="svg-map-container">
          <svg viewBox="0 0 700 450" className="regional-svg-map">
            <defs>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-foreground)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="areaGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--accent-foreground)" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--card)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>

            {/* Background Grid Lines */}
            <g className="grid-lines" opacity="0.15">
              {[...Array(12)].map((_, i) => (
                <line key={`v-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="450" stroke="#94a3b8" strokeDasharray="3 3" />
              ))}
              {[...Array(8)].map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 60} x2="700" y2={i * 60} stroke="#94a3b8" strokeDasharray="3 3" />
              ))}
            </g>

            {/* Waterways: James & Appomattox Rivers */}
            {(activeLayer === 'all' || activeLayer === 'waterways') && (
              <g className="waterways" filter="url(#glow)">
                {/* James River */}
                <path
                  d="M 280,0 Q 320,80 440,110 T 680,140"
                  fill="none"
                  stroke="url(#waterGrad)"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <text x="500" y="115" fill="#38bdf8" fontSize="11" fontWeight="600" opacity="0.8">James River</text>

                {/* Appomattox River */}
                <path
                  d="M 60,260 Q 220,240 310,210 T 430,110"
                  fill="none"
                  stroke="url(#waterGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <text x="180" y="240" fill="#38bdf8" fontSize="11" fontWeight="600" opacity="0.8">Appomattox River</text>
              </g>
            )}

            {/* Jurisdiction Polygons */}
            {/* Chesterfield County (Northwest) */}
            <path
              d="M 120,40 L 330,40 L 340,170 L 220,210 L 100,160 Z"
              className={`map-poly ${selectedJurisdiction.includes('Chesterfield') ? 'active-poly' : ''}`}
              onClick={() => setSelectedJurisdiction('Chesterfield County (Part)')}
            />
            <text x="200" y="110" className="poly-label">Chesterfield Co.</text>

            {/* Colonial Heights (Center North) */}
            <path
              d="M 270,175 L 340,175 L 335,225 L 265,225 Z"
              className={`map-poly core-city ${selectedJurisdiction.includes('Colonial Heights') ? 'active-poly' : ''}`}
              onClick={() => setSelectedJurisdiction('City of Colonial Heights')}
            />
            <text x="302" y="202" className="poly-label-core">Colonial Hts</text>

            {/* Petersburg (Center South) */}
            <path
              d="M 230,230 L 330,230 L 335,310 L 220,300 Z"
              className={`map-poly core-city ${selectedJurisdiction.includes('Petersburg') ? 'active-poly' : ''}`}
              onClick={() => setSelectedJurisdiction('City of Petersburg')}
            />
            <text x="280" y="270" className="poly-label-core">Petersburg</text>

            {/* Hopewell (East of Appomattox River) */}
            <path
              d="M 370,140 L 450,140 L 440,220 L 360,210 Z"
              className={`map-poly core-city ${selectedJurisdiction.includes('Hopewell') ? 'active-poly' : ''}`}
              onClick={() => setSelectedJurisdiction('City of Hopewell')}
            />
            <text x="405" y="180" className="poly-label-core">Hopewell</text>

            {/* Prince George County (East & South) */}
            <path
              d="M 360,215 L 450,225 L 560,190 L 590,360 L 340,360 L 340,305 Z"
              className={`map-poly ${selectedJurisdiction.includes('Prince George') ? 'active-poly' : ''}`}
              onClick={() => setSelectedJurisdiction('Prince George County (Part)')}
            />
            <text x="450" y="300" className="poly-label">Prince George Co.</text>

            {/* Dinwiddie County (Southwest) */}
            <path
              d="M 80,240 L 220,240 L 215,370 L 60,370 Z"
              className={`map-poly ${selectedJurisdiction.includes('Dinwiddie') ? 'active-poly' : ''}`}
              onClick={() => setSelectedJurisdiction('Dinwiddie County (Part)')}
            />
            <text x="140" y="310" className="poly-label">Dinwiddie Co.</text>

            {/* Corridors: Interstates */}
            {(activeLayer === 'all' || activeLayer === 'interstates') && (
              <g className="interstates">
                {/* I-95 Corridor (North-South spine) */}
                <path
                  d="M 305,0 L 305,450"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="5"
                  strokeDasharray="8 4"
                  className="corridor-pulse"
                />
                <rect x="290" y="15" width="30" height="18" rx="4" fill="var(--primary)" />
                <text x="305" y="28" fill="var(--primary-foreground)" fontSize="10" fontWeight="bold" textAnchor="middle">I-95</text>

                {/* I-85 Corridor (Southwest split from Petersburg) */}
                <path
                  d="M 280,270 L 40,420"
                  fill="none"
                  stroke="var(--accent-foreground)"
                  strokeWidth="4"
                  strokeDasharray="6 3"
                />
                <rect x="120" y="360" width="30" height="18" rx="4" fill="var(--accent-foreground)" />
                <text x="135" y="373" fill="var(--primary-foreground)" fontSize="10" fontWeight="bold" textAnchor="middle">I-85</text>

                {/* I-295 Bypass Corridor */}
                <path
                  d="M 400,0 Q 420,120 420,220 T 310,380"
                  fill="none"
                  stroke="color-mix(in oklch, var(--primary) 70%, white)"
                  strokeWidth="4"
                  strokeDasharray="6 3"
                />
                <rect x="425" y="70" width="36" height="18" rx="4" fill="color-mix(in oklch, var(--primary) 70%, white)" />
                <text x="443" y="83" fill="var(--foreground)" fontSize="9" fontWeight="bold" textAnchor="middle">I-295</text>
              </g>
            )}

            {/* North Arrow and Scale */}
            <g transform="translate(630, 40)">
              <circle cx="20" cy="20" r="18" fill="color-mix(in oklch, var(--card) 85%, transparent)" stroke="var(--primary)" strokeWidth="1.5" />
              <polygon points="20,8 25,24 20,20 15,24" fill="var(--primary)" />
              <text x="20" y="34" fill="var(--foreground)" fontSize="10" fontWeight="bold" textAnchor="middle">N</text>
            </g>
          </svg>
        </div>

        {/* Selected Jurisdiction Detail Card */}
        <div className="jurisdiction-detail-box">
          <div className="j-header">
            <span className="j-type-badge">{current.type}</span>
            <h3>{current.name}</h3>
          </div>

          <div className="j-metrics-grid">
            <div className="j-metric-item">
              <span className="j-metric-label">Population (2020)</span>
              <span className="j-metric-val">{current.population}</span>
            </div>
            <div className="j-metric-item">
              <span className="j-metric-label">MPO Land Area</span>
              <span className="j-metric-val">{current.area}</span>
            </div>
          </div>

          <div className="j-quick-list">
            <div className="j-quick-label">Select Jurisdiction:</div>
            <div className="j-pill-group">
              {PLAN_OVERVIEW.jurisdictions.map(j => (
                <button
                  key={j.name}
                  className={`j-pill ${selectedJurisdiction === j.name ? 'active' : ''}`}
                  onClick={() => setSelectedJurisdiction(j.name)}
                >
                  {j.name.replace(' (Part)', '')}
                </button>
              ))}
            </div>
          </div>

          <div className="figure-caption-box">
            <Info size={16} className="caption-icon" />
            <div className="caption-text">
              <strong>Figure 1 Note:</strong> Depicts the 324-sq-mi TCAMPO planning area within the Richmond MSA. South-central Virginia hub connected by I-95, I-85, and I-295.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
