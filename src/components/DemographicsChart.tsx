import { useState } from 'react';
import { TrendingUp, Users, Briefcase, Home } from 'lucide-react';

interface ForecastYear {
  year: number;
  population: number;
  employment: number;
  households: number;
}

const FORECAST_DATA: ForecastYear[] = [
  { year: 2020, population: 167920, employment: 64200, households: 66800 },
  { year: 2030, population: 181500, employment: 71800, households: 72900 },
  { year: 2040, population: 196800, employment: 77500, households: 79200 },
  { year: 2050, population: 212500, employment: 82400, households: 85600 },
];

export const DemographicsChart: React.FC = () => {
  const [metric, setMetric] = useState<'population' | 'employment' | 'households'>('population');
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(3); // 2050

  const activeData = FORECAST_DATA[selectedYearIndex];
  const maxPop = 220000;
  const maxEmp = 90000;
  const maxHouse = 95000;

  const getMetricMax = () => {
    if (metric === 'population') return maxPop;
    if (metric === 'employment') return maxEmp;
    return maxHouse;
  };

  const currentVal = activeData[metric];
  const baselineVal = FORECAST_DATA[0][metric];
  const pctGrowth = (((currentVal - baselineVal) / baselineVal) * 100).toFixed(1);

  return (
    <div className="demographics-chart-card">
      <div className="chart-header">
        <div>
          <span className="figure-badge">
            <TrendingUp size={14} /> SOCIOECONOMIC FORECAST 2020–2050
          </span>
          <h4>Regional Growth Projections & Multimodal Travel Demand</h4>
          <p className="figure-subtext">Source: TCAMPO Travel Demand Model & Virginia Employment Commission</p>
        </div>

        <div className="metric-toggle-group">
          <button 
            className={`metric-btn ${metric === 'population' ? 'active' : ''}`}
            onClick={() => setMetric('population')}
          >
            <Users size={14} /> Population
          </button>
          <button 
            className={`metric-btn ${metric === 'employment' ? 'active' : ''}`}
            onClick={() => setMetric('employment')}
          >
            <Briefcase size={14} /> Employment
          </button>
          <button 
            className={`metric-btn ${metric === 'households' ? 'active' : ''}`}
            onClick={() => setMetric('households')}
          >
            <Home size={14} /> Households
          </button>
        </div>
      </div>

      {/* Visual Chart Bars */}
      <div className="bars-container">
        {FORECAST_DATA.map((item, idx) => {
          const val = item[metric];
          const heightPercent = (val / getMetricMax()) * 100;
          const isSelected = idx === selectedYearIndex;

          return (
            <div 
              key={item.year} 
              className={`bar-column ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedYearIndex(idx)}
            >
              <div className="bar-val-badge">
                {val.toLocaleString()}
              </div>
              <div className="bar-track">
                <div 
                  className="bar-fill" 
                  style={{ height: `${heightPercent}%` }}
                >
                  <div className="bar-glow" />
                </div>
              </div>
              <div className="bar-year-label">
                {item.year}
                {item.year === 2020 && <span className="base-tag">Base</span>}
                {item.year === 2050 && <span className="horizon-tag">Horizon</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Highlight Box */}
      <div className="forecast-summary-bar">
        <div className="summary-stat">
          <span className="summary-title">{activeData.year} Projected {metric.toUpperCase()}</span>
          <span className="summary-number">{currentVal.toLocaleString()}</span>
        </div>
        <div className="summary-stat">
          <span className="summary-title">Net Growth from 2020</span>
          <span className="summary-number growth">+{pctGrowth}%</span>
        </div>
        <div className="summary-stat">
          <span className="summary-title">Equity & EJ Consideration</span>
          <span className="summary-number ej">42% Minority / Low-Income</span>
        </div>
      </div>
    </div>
  );
};
