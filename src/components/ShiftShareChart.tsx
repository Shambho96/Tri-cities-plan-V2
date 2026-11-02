import { useState } from 'react';

interface SupersectorData {
  name: string;
  nationalGrowth: number;
  industryMix: number;
  regionalShift: number;
  netChange: number;
}

const SHIFT_SHARE_DATA: SupersectorData[] = [
  { name: "Trade, Transportation & Utilities", nationalGrowth: 585, industryMix: 158, regionalShift: 207, netChange: 950 },
  { name: "Professional & Business Services", nationalGrowth: 195, industryMix: 245, regionalShift: 153, netChange: 593 },
  { name: "Manufacturing", nationalGrowth: 60, industryMix: -220, regionalShift: 600, netChange: 440 },
  { name: "Education & Health Services", nationalGrowth: 495, industryMix: 35, regionalShift: -293, netChange: 237 },
  { name: "Construction", nationalGrowth: 120, industryMix: 110, regionalShift: -19, netChange: 211 },
  { name: "Financial Activities", nationalGrowth: 55, industryMix: 25, regionalShift: 77, netChange: 157 },
  { name: "Public Administration", nationalGrowth: 85, industryMix: -155, regionalShift: 170, netChange: 100 },
  { name: "Leisure & Hospitality", nationalGrowth: 230, industryMix: -180, regionalShift: -31, netChange: 19 },
  { name: "Natural Resources & Mining", nationalGrowth: 5, industryMix: -4, regionalShift: 2, netChange: 3 },
  { name: "Information", nationalGrowth: 15, industryMix: -20, regionalShift: -30, netChange: -35 },
  { name: "Other Services", nationalGrowth: 55, industryMix: -45, regionalShift: -64, netChange: -54 },
];

export const ShiftShareChart: React.FC = () => {
  const [hoveredSector, setHoveredSector] = useState<SupersectorData | null>(null);

  // Scale: range is -300 to +1050 (width 600)
  const minVal = -300;
  const maxVal = 1050;
  const range = maxVal - minVal;
  const zeroX = ((-minVal) / range) * 100;

  const toPercent = (val: number) => {
    return (val / range) * 100;
  };

  return (
    <div className="shift-share-container">
      {/* 3 Component Cards matching Image 4 */}
      <div className="shift-components-grid">
        <div className="shift-component-card">
          <h5 className="component-title">National Growth (NGC)</h5>
          <p className="component-desc">Measures growth attributable to overall national employment trends.</p>
        </div>
        <div className="shift-component-card">
          <h5 className="component-title">Industrial Mix (IMC)</h5>
          <p className="component-desc">Reflects industry-specific national growth patterns.</p>
        </div>
        <div className="shift-component-card">
          <h5 className="component-title">Local Share (LSC)</h5>
          <p className="component-desc">Captures competitive growth unique to the Tri-Cities region.</p>
        </div>
      </div>

      {/* Main Shift-Share Chart Box (Figure 12) */}
      <div className="shift-chart-framed-card">
        <div className="chart-header-block">
          <h4 className="chart-main-title">Tri-Cities MPO Shift-Share by Supersector vs. National, 2019–2023</h4>
          <span className="chart-subtitle">Source: BLS Quarterly Census of Employment and Wages (QCEW)</span>
        </div>

        <div className="shift-chart-body">
          {/* Axis Header */}
          <div className="axis-legend-row">
            <div className="legend-items">
              <span className="legend-chip"><span className="color-sq ngc"></span> National Growth</span>
              <span className="legend-chip"><span className="color-sq imc"></span> Industry Mix</span>
              <span className="legend-chip"><span className="color-sq lsc"></span> Regional Shift</span>
              <span className="legend-chip"><span className="diamond-symbol">◆</span> Net Change</span>
            </div>
          </div>

          {/* Chart Grid Rows */}
          <div className="chart-rows-stack">
            {SHIFT_SHARE_DATA.map((item, idx) => {
              const isHovered = hoveredSector?.name === item.name;
              
              // Positioning positive segments
              const ngcWidth = Math.abs(toPercent(item.nationalGrowth));
              const imcWidth = Math.abs(toPercent(item.industryMix));
              const lscWidth = Math.abs(toPercent(item.regionalShift));

              const isImcNegative = item.industryMix < 0;
              const isLscNegative = item.regionalShift < 0;

              return (
                <div
                  key={idx}
                  className={`shift-row-item ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredSector(item)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="sector-name-label" title={item.name}>
                    {item.name}
                  </div>

                  <div className="diverging-bar-track">
                    {/* Zero Reference Line */}
                    <div className="zero-line" style={{ left: `${zeroX}%` }} />

                    {/* Negative Side Segments */}
                    {isImcNegative && (
                      <div
                        className="segment-bar imc-bar"
                        style={{
                          right: `${100 - zeroX}%`,
                          width: `${imcWidth}%`,
                        }}
                        title={`Industry Mix: ${item.industryMix}`}
                      />
                    )}
                    {isLscNegative && (
                      <div
                        className="segment-bar lsc-bar"
                        style={{
                          right: `${100 - zeroX + (isImcNegative ? imcWidth : 0)}%`,
                          width: `${lscWidth}%`,
                        }}
                        title={`Regional Shift: ${item.regionalShift}`}
                      />
                    )}

                    {/* Positive Side Segments */}
                    <div
                      className="segment-bar ngc-bar"
                      style={{
                        left: `${zeroX}%`,
                        width: `${ngcWidth}%`,
                      }}
                      title={`National Growth: +${item.nationalGrowth}`}
                    />
                    {!isImcNegative && item.industryMix > 0 && (
                      <div
                        className="segment-bar imc-bar"
                        style={{
                          left: `${zeroX + ngcWidth}%`,
                          width: `${imcWidth}%`,
                        }}
                        title={`Industry Mix: +${item.industryMix}`}
                      />
                    )}
                    {!isLscNegative && item.regionalShift > 0 && (
                      <div
                        className="segment-bar lsc-bar"
                        style={{
                          left: `${zeroX + ngcWidth + (!isImcNegative ? imcWidth : 0)}%`,
                          width: `${lscWidth}%`,
                        }}
                        title={`Regional Shift: +${item.regionalShift}`}
                      />
                    )}

                    {/* Net Change Diamond Marker */}
                    <div
                      className="net-diamond-marker"
                      style={{
                        left: `${zeroX + toPercent(item.netChange)}%`,
                      }}
                    >
                      ◆
                    </div>
                  </div>

                  <div className={`net-change-value ${item.netChange >= 0 ? 'pos' : 'neg'}`}>
                    {item.netChange >= 0 ? `+${item.netChange}` : item.netChange}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom X-Axis Ticks */}
          <div className="x-axis-ticks">
            <span style={{ left: '0%' }}>-200</span>
            <span style={{ left: `${zeroX}%` }}>0</span>
            <span style={{ left: `${zeroX + toPercent(200)}%` }}>200</span>
            <span style={{ left: `${zeroX + toPercent(400)}%` }}>400</span>
            <span style={{ left: `${zeroX + toPercent(600)}%` }}>600</span>
            <span style={{ left: `${zeroX + toPercent(800)}%` }}>800</span>
            <span style={{ left: `${zeroX + toPercent(1000)}%` }}>1000</span>
          </div>
          <div className="x-axis-label">Employment Change (jobs)</div>
        </div>

        <div className="figure-caption-strip">
          <em>Figure 12. TCAMPO Shift-Share by Supersector vs. National, 2019-2023</em>
        </div>
      </div>
    </div>
  );
};
