import { useState } from 'react';
import { Users, Briefcase, Zap, Layers } from 'lucide-react';

export const DensityMapsFigure: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pop' | 'emp' | 'act' | 'all'>('pop');

  return (
    <div className="density-maps-card-wrapper">
      {/* Tab Switcher */}
      <div className="density-tab-bar" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <button
          className={`density-tab-btn ${activeTab === 'pop' ? 'active pop' : ''}`}
          onClick={() => setActiveTab('pop')}
        >
          <Users size={16} />
          <span>Figure 3: Population Density</span>
        </button>
        <button
          className={`density-tab-btn ${activeTab === 'emp' ? 'active emp' : ''}`}
          onClick={() => setActiveTab('emp')}
        >
          <Briefcase size={16} />
          <span>Figure 4: Employment Density</span>
        </button>
        <button
          className={`density-tab-btn ${activeTab === 'act' ? 'active act' : ''}`}
          onClick={() => setActiveTab('act')}
        >
          <Zap size={16} />
          <span>Figure 5: Activity Density</span>
        </button>
        <button
          className={`density-tab-btn ${activeTab === 'all' ? 'active all' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <Layers size={16} />
          <span>View All 3 Maps</span>
        </button>
      </div>

      {/* Figure 3: Population Density */}
      {(activeTab === 'pop' || activeTab === 'all') && (
        <div className="section-document-figure-card animate-fade-in" style={{ marginBottom: '2rem' }}>
          <div className="figure-card-header">
            <div>
              <span className="figure-card-tag">Figure 3: TCAMPO Population Density by Block Group</span>
            </div>
            <span className="figure-card-source">Source: 2023 ACS 5-Year</span>
          </div>
          <div className="figure-img-container">
            <img 
              src="/assets/figures/fig03_pop_density.jpg" 
              alt="Figure 3: TCAMPO Population Density by Block Group" 
              className="figure-rendered-img"
              loading="lazy"
            />
          </div>
          <div className="figure-card-caption">
            <strong>Figure 3:</strong> Population density (residents per square mile) is highest in the region's core (Petersburg, Colonial Heights, and Hopewell), with additional concentrations in Chesterfield, Dinwiddie, and Prince George along the I-95 and I-85 corridors and near VSU and Fort Lee.
          </div>
        </div>
      )}

      {/* Figure 4: Employment Density */}
      {(activeTab === 'emp' || activeTab === 'all') && (
        <div className="section-document-figure-card animate-fade-in" style={{ marginBottom: '2rem' }}>
          <div className="figure-card-header">
            <div>
              <span className="figure-card-tag">Figure 4: TCAMPO Employment Density by Block Group</span>
            </div>
            <span className="figure-card-source">Source: 2023 LEHD LODES8</span>
          </div>
          <div className="figure-img-container">
            <img 
              src="/assets/figures/fig04_emp_density.jpg" 
              alt="Figure 4: TCAMPO Employment Density by Block Group" 
              className="figure-rendered-img"
              loading="lazy"
            />
          </div>
          <div className="figure-card-caption">
            <strong>Figure 4:</strong> Employment density (jobs per square mile) is concentrated along the I-95 and I-85 corridors through Dinwiddie, Colonial Heights, and Petersburg, with commercial and institutional nodes at Southpark Mall, Temple Ave, South Crater Rd, and VA-36.
          </div>
        </div>
      )}

      {/* Figure 5: Activity Density */}
      {(activeTab === 'act' || activeTab === 'all') && (
        <div className="section-document-figure-card animate-fade-in" style={{ marginBottom: '2rem' }}>
          <div className="figure-card-header">
            <div>
              <span className="figure-card-tag">Figure 5: TCAMPO Activity Density by Block Group</span>
            </div>
            <span className="figure-card-source">Source: 2023 ACS & 2023 LEHD</span>
          </div>
          <div className="figure-img-container">
            <img 
              src="/assets/figures/fig05_activity_density.jpg" 
              alt="Figure 5: TCAMPO Activity Density by Block Group" 
              className="figure-rendered-img"
              loading="lazy"
            />
          </div>
          <div className="figure-card-caption">
            <strong>Figure 5:</strong> Bivariate activity density (residents plus jobs per square mile) highlighting regional trip-generation anchors where population and employment overlap.
          </div>
        </div>
      )}
    </div>
  );
};

export default DensityMapsFigure;
