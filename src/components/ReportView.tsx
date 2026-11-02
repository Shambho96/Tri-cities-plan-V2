import React, { useState } from 'react';
import type { TabId, PlanGoal } from '../types';
import { PLAN_OVERVIEW, PLAN_GOALS, CHAPTERS_DATA } from '../data/planData';
import { 
  ArrowRight, 
  ShieldAlert, 
  Leaf, 
  Bike, 
  TrendingUp, 
  Wrench, 
  ChevronRight,
  Compass,
  MapPin,
  Building2,
  Truck,
  Sparkles,
  Layers,
  FileText,
  Target
} from 'lucide-react';

interface ReportViewProps {
  onNavigateTab: (tab: TabId) => void;
  onSelectGoal: (goal: PlanGoal) => void;
}

export const ReportView: React.FC<ReportViewProps> = ({ onNavigateTab, onSelectGoal }) => {
  const [activeJurisdictionIndex, setActiveJurisdictionIndex] = useState<number>(0);
  const selectedJurisdiction = PLAN_OVERVIEW.jurisdictions[activeJurisdictionIndex];

  const renderGoalIcon = (id: string) => {
    switch (id) {
      case 'safety':
        return <ShieldAlert size={24} />;
      case 'environment':
        return <Leaf size={24} />;
      case 'equity':
        return <Bike size={24} />;
      case 'connectivity':
        return <TrendingUp size={24} />;
      case 'repair':
        return <Wrench size={24} />;
      default:
        return <Target size={24} />;
    }
  };

  const jurisdictionProfiles = [
    {
      corridors: 'I-95, US-1, Boulevard, Temple Ave',
      role: 'Commercial, retail, and medical services anchor of northern Tri-Cities; key Appomattox River crossing.',
      focus: 'Boulevard multimodal safety, Temple Avenue access management, Appomattox River Trail connection.'
    },
    {
      corridors: 'I-295, Route 10, Route 156, Appomattox/James confluence',
      role: 'Deepwater maritime port, advanced chemical manufacturing cluster, and intermodal freight hub.',
      focus: 'Route 10 heavy freight corridor improvements, Hopewell Riverwalk, industrial rail crossing protections.'
    },
    {
      corridors: 'I-95, I-85, US-460, US-301, Amtrak Rail Core',
      role: 'Historic downtown urban core, regional transit transfer center, and passenger rail nexus.',
      focus: 'Old Towne Petersburg revitalization, PAT transit route modernization, multi-use bicycle/pedestrian grid.'
    },
    {
      corridors: 'I-95, Route 10, Chippenham Pkwy, Route 288',
      role: 'Rapidly growing residential and logistics growth sector connecting Tri-Cities to Greater Richmond.',
      focus: 'Route 10 widening & rapid bus transit, Meadowville Technology Park freight access, complete streets.'
    },
    {
      corridors: 'I-85, US-460, US-1, Pamplin Historical Park',
      role: 'Southwestern gateway linking regional agricultural corridors and industrial sites along I-85.',
      focus: 'I-85 safety & incident management, US-460 freight logistics, rural active transportation access.'
    },
    {
      corridors: 'I-295, US-460, Route 156, Fort Gregg-Adams Gates',
      role: 'National defense hub anchored by Fort Gregg-Adams, military logistics, and agricultural reserves.',
      focus: 'Military installation gate security access, Route 460 freight capacity, Templeton interchange expansion.'
    }
  ];

  const currentExtra = jurisdictionProfiles[activeJurisdictionIndex] || jurisdictionProfiles[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="creative-report-root animate-fade-in">
      {/* ── 1. Immersive Creative Hero Section ──────────────────────────── */}
      <section className="creative-hero-section">
        <div className="creative-hero-ambient" />
        
        <div className="creative-hero-content">
          <div className="creative-eyebrow-pill">
            <span className="creative-radar-dot" />
            <span>TRI-CITIES AREA MPO • REGIONAL HORIZON 2050</span>
          </div>

          <h1 className="creative-hero-headline">
            PLAN <span className="creative-gradient-accent">2050</span>: Long-Range Multimodal Transportation Vision
          </h1>

          <p className="creative-hero-lead">
            {PLAN_OVERVIEW.leadParagraph}
          </p>

          <div className="creative-actions-row">
            <button 
              className="creative-primary-btn"
              onClick={() => onNavigateTab('introduction')}
            >
              <span>Explore Chapter 1</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="creative-secondary-btn"
              onClick={() => scrollToSection('goals-section')}
            >
              <Target size={18} />
              <span>Performance Goals</span>
            </button>

            <button 
              className="creative-secondary-btn"
              onClick={() => scrollToSection('jurisdictions-section')}
            >
              <MapPin size={18} />
              <span>Member Localities</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Regional KPI Metric Deck ─────────────────────────────────── */}
      <section className="creative-kpi-grid">
        <div className="creative-kpi-card">
          <div className="creative-kpi-stripe" />
          <div className="creative-kpi-val">167,920</div>
          <div className="creative-kpi-lbl">Regional Population</div>
          <div className="creative-kpi-sub">+18.4% Projected Growth to 2050</div>
        </div>

        <div className="creative-kpi-card">
          <div className="creative-kpi-stripe" />
          <div className="creative-kpi-val">494</div>
          <div className="creative-kpi-lbl">Square Miles Planning Area</div>
          <div className="creative-kpi-sub">South-Central Virginia Territory</div>
        </div>

        <div className="creative-kpi-card">
          <div className="creative-kpi-stripe" />
          <div className="creative-kpi-val">6</div>
          <div className="creative-kpi-lbl">Member Jurisdictions</div>
          <div className="creative-kpi-sub">Coordinated MPO Partnership</div>
        </div>

        <div className="creative-kpi-card">
          <div className="creative-kpi-stripe" />
          <div className="creative-kpi-val">3</div>
          <div className="creative-kpi-lbl">Interstate Arteries</div>
          <div className="creative-kpi-sub">I-95 • I-85 • I-295 Tri-Anchor Nexus</div>
        </div>
      </section>

      {/* ── 3. Creative Asymmetric Showcase ─────────────────────────────── */}
      <section className="creative-showcase-split">
        {/* Left: Media Card with Twilight Bridge */}
        <div className="creative-showcase-media">
          <img 
            src="/assets/bridge.jpg" 
            alt="Tri-Cities Regional Bridge Corridor" 
            className="creative-showcase-img"
          />
          <div className="creative-media-overlay">
            <div className="creative-floating-badge">
              <Sparkles size={14} />
              <span>Key River Crossings & Interstate Hub</span>
            </div>

            <div className="creative-media-footer-info">
              <h3 className="creative-media-footer-title">
                Appomattox & James River Multimodal Gateway
              </h3>
              <p className="creative-media-footer-desc">
                Connecting south-central Virginia's manufacturing clusters, deepwater ports, and military defense centers directly to Greater Richmond and Hampton Roads.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Core Strategic Directives */}
        <div className="creative-directives-card">
          <div>
            <span className="creative-section-tag">Strategic Framework</span>
            <h3 className="creative-directives-title">Core Regional Directives</h3>
          </div>

          <div className="creative-directives-list">
            <div className="creative-directive-item">
              <div className="creative-directive-icon-box">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h4 className="creative-directive-heading">Multimodal Vision Zero</h4>
                <p className="creative-directive-text">
                  Infrastructure redesign targeting zero fatalities across key arterial corridors including US-1, Route 10, and Boulevard.
                </p>
              </div>
            </div>

            <div className="creative-directive-item">
              <div className="creative-directive-icon-box">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="creative-directive-heading">Intermodal Freight Resilience</h4>
                <p className="creative-directive-text">
                  Supporting maritime traffic through the Port of Hopewell, heavy rail links, and defense logistics at Fort Gregg-Adams.
                </p>
              </div>
            </div>

            <div className="creative-directive-item">
              <div className="creative-directive-icon-box">
                <Bike size={20} />
              </div>
              <div>
                <h4 className="creative-directive-heading">Active Transportation & Transit Equity</h4>
                <p className="creative-directive-text">
                  Expanding the continuous Appomattox River Trail, frequency on Petersburg Area Transit (PAT), and zero-emission micro-mobility.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <button 
              className="creative-primary-btn" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => onNavigateTab('trends')}
            >
              <span>Explore Trends & Forecasts</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. Plan 2050 Performance Goals Bento Grid ───────────────────── */}
      <section id="goals-section" className="creative-goals-wrapper">
        <div className="creative-section-header">
          <span className="creative-section-tag">Directives & Benchmarks</span>
          <h2 className="creative-section-title">PLAN 2050 Regional Performance Goals</h2>
          <p className="creative-section-desc">
            Six foundational performance directives establishing long-range investment targets, safety mandates, and accessibility benchmarks through the 2050 horizon.
          </p>
        </div>

        <div className="creative-goals-bento">
          {PLAN_GOALS.map((goal) => (
            <div key={goal.id} className="creative-goal-bento-card">
              <div>
                <div className="creative-goal-top-row">
                  <span className="creative-goal-num-badge">GOAL #{goal.number}</span>
                  <div className="creative-goal-icon-circle">
                    {renderGoalIcon(goal.id)}
                  </div>
                </div>

                <h3 className="creative-goal-title">{goal.title}</h3>
                <p className="creative-goal-desc">{goal.description}</p>
              </div>

              <div>
                <div className="creative-benchmark-snippet">
                  <span>2050 Target:</span>
                  <span className="creative-snippet-target">{goal.metrics[0]?.target || 'Vision Zero Target'}</span>
                </div>

                <button 
                  className="creative-benchmark-btn"
                  onClick={() => onSelectGoal(goal)}
                >
                  <span>Click for Benchmarks</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Interactive 6-Jurisdiction Regional Explorer ─────────────── */}
      <section id="jurisdictions-section" className="creative-jurisdictions-card">
        <div className="creative-section-header">
          <span className="creative-section-tag">Member Localities</span>
          <h2 className="creative-section-title">Explore the 6 Tri-Cities Jurisdictions</h2>
          <p className="creative-section-desc">
            Select a municipality or county to view demographic profiles, critical freight corridors, and targeted 2050 transportation priorities.
          </p>
        </div>

        <div className="creative-locality-pills-row">
          {PLAN_OVERVIEW.jurisdictions.map((j, idx) => (
            <button
              key={j.name}
              className={`creative-locality-pill ${activeJurisdictionIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveJurisdictionIndex(idx)}
            >
              {j.name}
            </button>
          ))}
        </div>

        <div className="creative-locality-detail-box">
          <div className="creative-locality-id-col">
            <h3 className="creative-locality-name">{selectedJurisdiction.name}</h3>
            
            <div className="creative-locality-stats-strip">
              <div className="creative-mini-stat">
                <span className="creative-mini-stat-val">{selectedJurisdiction.population}</span>
                <span className="creative-mini-stat-lbl">Population</span>
              </div>
              <div className="creative-mini-stat">
                <span className="creative-mini-stat-val">{selectedJurisdiction.area}</span>
                <span className="creative-mini-stat-lbl">Land Area</span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', marginTop: '0.5rem', lineHeight: '1.5' }}>
              Member jurisdiction of the Crater Planning District Commission and TCAMPO Policy Committee.
            </p>
          </div>

          <div className="creative-locality-info-col">
            <div>
              <div className="creative-detail-group-title">Primary Transportation Corridors</div>
              <div className="creative-detail-group-text">{currentExtra.corridors}</div>
            </div>

            <div>
              <div className="creative-detail-group-title">Regional Economic & Freight Role</div>
              <div className="creative-detail-group-text">{currentExtra.role}</div>
            </div>

            <div>
              <div className="creative-detail-group-title">PLAN 2050 Key Focus & Priority Projects</div>
              <div className="creative-detail-group-text">{currentExtra.focus}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Chapters Directory Bento ─────────────────────────────────── */}
      <section className="creative-goals-wrapper">
        <div className="creative-section-header">
          <span className="creative-section-tag">Documentation & Analysis</span>
          <h2 className="creative-section-title">PLAN 2050 Report Directory</h2>
          <p className="creative-section-desc">
            Access the complete technical analysis, baseline inventories, travel demand modeling, and long-range funding programs.
          </p>
        </div>

        <div className="creative-chapters-grid">
          {CHAPTERS_DATA.map((ch) => (
            <div 
              key={ch.id} 
              className="creative-chapter-card"
              onClick={() => onNavigateTab(ch.id)}
            >
              <div>
                <div className="creative-chapter-num-tag">
                  {ch.chapterNumber ? `CHAPTER ${ch.chapterNumber.toString().padStart(2, '0')}` : 'APPENDIX'}
                </div>
                <h3 className="creative-chapter-title">{ch.title}</h3>
                <p className="creative-chapter-summary">{ch.subtitle}</p>
              </div>

              <div className="creative-chapter-footer-btn">
                <span>Read Chapter</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
