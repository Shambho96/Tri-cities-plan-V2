import React from 'react';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import type { TabId } from '../types';

interface ComingSoonViewProps {
  tabId: TabId;
  onNavigateTab: (tab: TabId) => void;
}

interface ChapterMeta {
  pill: string;
  title: string;
  subtitle: string;
  prevTab: TabId;
  prevLabel: string;
}

const CHAPTER_METAS: Record<string, ChapterMeta> = {
  today: {
    pill: 'PLAN2050 • CHAPTER 03',
    title: 'Chapter 3: Our Transportation System Today',
    subtitle: 'Comprehensive Asset Inventory, Roadway Conditions, Bridge Evaluations, and Transit Operations',
    prevTab: 'trends',
    prevLabel: 'Chapter 2: Trends and Forecasts',
  },
  tomorrow: {
    pill: 'PLAN2050 • CHAPTER 04',
    title: "Chapter 4: Tomorrow's Transportation System",
    subtitle: '2050 Multimodal Needs Assessment, Candidate Projects, and Regional Priority Scenarios',
    prevTab: 'trends',
    prevLabel: 'Chapter 2: Trends and Forecasts',
  },
  funding: {
    pill: 'PLAN2050 • CHAPTER 05',
    title: 'Chapter 5: Funding Our Transportation System',
    subtitle: 'Federal Formula Allocations, State Matching, SMART SCALE, and Long-Range Capital Program',
    prevTab: 'trends',
    prevLabel: 'Chapter 2: Trends and Forecasts',
  },
  appendices: {
    pill: 'PLAN2050 • APPENDICES',
    title: 'Appendices',
    subtitle: 'Public Comments, Title VI Environmental Justice Documentation, and Travel Demand Model Documentation',
    prevTab: 'trends',
    prevLabel: 'Chapter 2: Trends and Forecasts',
  },
};

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({ tabId, onNavigateTab }) => {
  const meta = CHAPTER_METAS[tabId] || {
    pill: 'PLAN2050 • COMING SOON',
    title: 'Content Coming Soon',
    subtitle: 'This section is currently under development.',
    prevTab: 'report',
    prevLabel: 'Plan Overview',
  };

  return (
    <div className="chapter-page-container animate-fade-in">
      {/* Top Hero Banner */}
      <div className="chapter-hero-banner">
        <div className="hero-banner-img-wrap">
          <img 
            src="/assets/future_mobility.jpg" 
            alt={meta.title} 
            className="hero-banner-img"
          />
          <div className="hero-banner-overlay" />
        </div>

        <div className="hero-banner-content">
          <div className="chapter-number-pill">{meta.pill}</div>
          <h2 className="chapter-hero-title">{meta.title}</h2>
          <p className="chapter-hero-subtitle">{meta.subtitle}</p>
        </div>
      </div>

      {/* Main Status Update Card: Only Coming Soon */}
      <div className="coming-soon-wrapper">
        <div className="coming-soon-card">
          <div className="status-badge-pulse">
            <span className="pulsing-radar-dot" />
            <span className="status-badge-text">STATUS UPDATE</span>
          </div>

          <div className="coming-soon-icon-wrap">
            <Clock size={48} className="coming-soon-clock-icon" />
          </div>

          <h3 className="coming-soon-heading">Coming Soon!</h3>

          <p className="coming-soon-body">
            The Tri-Cities MPO PLAN2050 <strong>{meta.title}</strong> content is currently under development and will be published upon final adoption. Please check back soon.
          </p>

          {/* Official Document Reference Preview */}
          <div className="coming-soon-doc-preview" style={{
            margin: '1.25rem 0 1.75rem',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-md)',
            maxWidth: '560px'
          }}>
            <img 
              src="/assets/report-card-clean.jpg" 
              alt="The Tri-Cities Area MPO PLAN2050 Official Report" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="coming-soon-actions">
            <button 
              className="cs-nav-btn"
              onClick={() => onNavigateTab('report')}
            >
              <ArrowLeft size={16} />
              <span>Back to Plan Overview</span>
            </button>
            <button 
              className="cs-nav-btn next"
              onClick={() => onNavigateTab(meta.prevTab)}
            >
              <BookOpen size={16} />
              <span>Explore {meta.prevLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
