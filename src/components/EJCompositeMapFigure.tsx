import React from 'react';

export const EJCompositeMapFigure: React.FC = () => {
  return (
    <div className="section-document-figure-card animate-fade-in">
      <div className="figure-card-header">
        <span className="figure-card-tag">Figure 13: Transportation Disadvantaged Composite Index by Block Group</span>
        <span className="figure-card-source">U.S. Census Bureau 2024 ACS 5-Year Estimates; TCAMPO Analysis</span>
      </div>
      <div className="figure-img-container">
        <img 
          src="/assets/figures/fig13_transportation_disadvantaged.jpg" 
          alt="Figure 13: Transportation Disadvantaged Composite Index by Block Group" 
          className="figure-rendered-img"
          loading="lazy"
        />
      </div>
      <div className="figure-card-caption">
        <strong>Figure 13:</strong> Spatial distribution of the Transportation Disadvantaged Composite Index across 291 block groups, identifying 79 high-vulnerability <em>Areas of Concern</em> (dark green) prioritized under Plan2050 access metrics.
      </div>
    </div>
  );
};

export default EJCompositeMapFigure;
