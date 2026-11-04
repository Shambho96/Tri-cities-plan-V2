import { useState, useEffect } from 'react';
import type { ChapterData, TabId, SectionContent } from '../types';
import { Download, ChevronRight, ChevronLeft, BookOpen, Share2, Printer, Check } from 'lucide-react';
import { InteractiveMapFigure } from './InteractiveMapFigure';
import { DemographicsChart } from './DemographicsChart';
import { CommuterFlowFigure } from './CommuterFlowFigure';
import { FundingBreakdown } from './FundingBreakdown';
import { DensityMapsFigure } from './DensityMapsFigure';
import { ShiftShareChart } from './ShiftShareChart';
import { EJCompositeMapFigure } from './EJCompositeMapFigure';

interface ChapterLayoutProps {
  chapter: ChapterData;
  activeSectionId?: string;
  onNavigateTab: (tab: TabId) => void;
  onDownloadChapter: (filename: string) => void;
  prevTab?: { id: TabId; label: string };
  nextTab?: { id: TabId; label: string };
}

export const ChapterLayout: React.FC<ChapterLayoutProps> = ({
  chapter,
  activeSectionId,
  onNavigateTab,
  onDownloadChapter,
  prevTab,
  nextTab,
}) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    activeSectionId || (chapter.sections[0]?.id ?? '')
  );
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (activeSectionId) {
      setSelectedSectionId(activeSectionId);
    } else if (chapter.sections[0]) {
      setSelectedSectionId(chapter.sections[0].id);
    }
  }, [activeSectionId, chapter]);

  const currentSection: SectionContent = 
    chapter.sections.find(s => s.id === selectedSectionId) || chapter.sections[0];

  const currentSectionIndex = chapter.sections.findIndex(s => s.id === selectedSectionId);

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      const prev = chapter.sections[currentSectionIndex - 1];
      setSelectedSectionId(prev.id);
      window.scrollTo({ top: 220, behavior: 'smooth' });
    } else if (prevTab) {
      onNavigateTab(prevTab.id);
    }
  };

  const handleNextSection = () => {
    if (currentSectionIndex < chapter.sections.length - 1) {
      const next = chapter.sections[currentSectionIndex + 1];
      setSelectedSectionId(next.id);
      window.scrollTo({ top: 220, behavior: 'smooth' });
    } else if (nextTab) {
      onNavigateTab(nextTab.id);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="chapter-page-container animate-fade-in">
      {/* Chapter Top Hero Banner (Matches Screenshot 3 & 4) */}
      <div className="chapter-hero-banner">
        <div className="hero-banner-img-wrap">
          <img 
            src="/assets/transit_banner.jpg" 
            alt={chapter.fullTitle} 
            className="hero-banner-img"
          />
          <div className="hero-banner-overlay" />
        </div>

        <div className="hero-banner-content">
          <div className="banner-left-info">
            {chapter.chapterNumber && (
              <div className="chapter-number-pill">
                PLAN2050 • CHAPTER {chapter.chapterNumber.toString().padStart(2, '0')}
              </div>
            )}
            <h2 className="chapter-hero-title">{chapter.fullTitle}</h2>
            <p className="chapter-hero-subtitle">{chapter.subtitle}</p>
          </div>

          <div className="banner-right-actions">
            <button 
              className="download-chapter-btn"
              onClick={() => onDownloadChapter(chapter.pdfFilename)}
            >
              <Download size={18} />
              <span>Download Chapter (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Body: Left TOC Sidebar + Main Content Pane */}
      <div className="chapter-body-container">
        <div className="chapter-content-grid">
          {/* Left Sidebar (Table of Contents from Screenshots) */}
          <aside className="chapter-sidebar">
            <div className="sidebar-sticky-box">
              <div className="sidebar-header">
                <BookOpen size={16} />
                <span>Chapter Sections</span>
              </div>

              <nav className="sidebar-nav-list">
                {chapter.sections.map((sec, idx) => {
                  const isActive = sec.id === selectedSectionId;
                  return (
                    <button
                      key={sec.id}
                      className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedSectionId(sec.id);
                        window.scrollTo({ top: 260, behavior: 'smooth' });
                      }}
                    >
                      <span className="sec-num">{idx + 1}.</span>
                      <span className="sec-title">{sec.title}</span>
                      {isActive && <div className="active-rail-indicator" />}
                    </button>
                  );
                })}
              </nav>

              <div className="sidebar-utilities">
                <button className="util-btn" onClick={handleShare}>
                  {copiedLink ? <Check size={14} /> : <Share2 size={14} />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Section'}</span>
                </button>
                <button className="util-btn" onClick={() => window.print()}>
                  <Printer size={14} />
                  <span>Print Friendly</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content Pane */}
          <main className="chapter-main-content">
            <article className="section-article">
              <header className="article-header">
                <div className="section-meta-strip">
                  <span className="section-index-badge">
                    Section {currentSectionIndex + 1} of {chapter.sections.length}
                  </span>
                  <span className="read-time-badge">3 min read</span>
                </div>
                <h3 className="section-main-heading">{currentSection.title}</h3>
                <div className="heading-accent-line" />
              </header>

              {/* Callout Box if available */}
              {currentSection.callout && (
                <div className={`section-callout ${currentSection.callout.type}`}>
                  <div className="callout-top">
                    <span className="callout-pill">{currentSection.callout.title}</span>
                  </div>
                  <p className="callout-text">{currentSection.callout.content}</p>
                </div>
              )}

              {/* Text Paragraphs */}
              <div className="section-paragraphs">
                {currentSection.text.map((para, pIdx) => (
                  <p key={pIdx} className="content-paragraph">
                    {para}
                  </p>
                ))}
              </div>

              {/* Official Report Document Figure for Goals & Strategic Vision */}
              {currentSection.id === 'goals-objectives' && (
                <div className="report-figure-callout-card" style={{
                  margin: '2rem 0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#0b1626',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}>
                  <div style={{ padding: '0.8rem 1.2rem', background: 'rgba(15, 23, 42, 0.85)', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Official Document Figure 1.2
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Adopted PLAN2050 Strategic Performance Framework</span>
                  </div>
                  <img 
                    src="/assets/plan2050-report-cover-2x.png" 
                    alt="Official Tri-Cities Area MPO PLAN2050 Goals and Report Cover"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                  />
                  <div style={{ padding: '0.9rem 1.2rem', background: 'rgba(15, 23, 42, 0.6)', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                    <strong>Figure 1.2:</strong> Official Tri-Cities Area MPO (TCAMPO) PLAN2050 Long-Range Multimodal Transportation Plan framework affirming the 5 core regional performance goals.
                  </div>
                </div>
              )}

              {currentSection.id === 'purpose-of-plan' && (
                <div className="report-figure-callout-card" style={{
                  margin: '2rem 0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#0b1626',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
                }}>
                  <img 
                    src="/assets/report-card-clean.jpg" 
                    alt="The Tri-Cities Area MPO PLAN2050 Official Plan Document Banner"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '0.75rem 1.2rem', background: 'rgba(15, 23, 42, 0.6)', fontSize: '0.82rem', color: '#94a3b8' }}>
                    <strong>Official LRTP Document:</strong> The Tri-Cities Area MPO PLAN2050 Long-Range Multimodal Transportation Plan.
                  </div>
                </div>
              )}

              {/* Interactive Figures */}
              {currentSection.hasInteractiveFigure === 'figure1_map' && (
                <div className="interactive-figure-wrapper">
                  <InteractiveMapFigure />
                </div>
              )}

              {currentSection.hasInteractiveFigure === 'demographics_chart' && (
                <div className="interactive-figure-wrapper">
                  <DemographicsChart />
                </div>
              )}

              {currentSection.hasInteractiveFigure === 'commuter_flow' && (
                <div className="interactive-figure-wrapper">
                  <CommuterFlowFigure />
                </div>
              )}

              {currentSection.hasInteractiveFigure === 'funding_breakdown' && (
                <div className="interactive-figure-wrapper">
                  <FundingBreakdown />
                </div>
              )}

              {currentSection.hasInteractiveFigure === 'density_maps' && (
                <div className="interactive-figure-wrapper">
                  <DensityMapsFigure />
                </div>
              )}

              {currentSection.hasInteractiveFigure === 'shift_share_chart' && (
                <div className="interactive-figure-wrapper">
                  <ShiftShareChart />
                </div>
              )}

              {currentSection.hasInteractiveFigure === 'ej_composite_map' && (
                <div className="interactive-figure-wrapper">
                  <EJCompositeMapFigure />
                </div>
              )}

              {/* Document Figure (Single) */}
              {currentSection.figure && (
                <div className="section-document-figure-card">
                  <div className="figure-card-header">
                    <span className="figure-card-tag">{currentSection.figure.title}</span>
                    {currentSection.figure.source && (
                      <span className="figure-card-source">{currentSection.figure.source}</span>
                    )}
                  </div>
                  <div className="figure-img-container">
                    <img 
                      src={currentSection.figure.src} 
                      alt={currentSection.figure.title} 
                      className="figure-rendered-img"
                      loading="lazy"
                    />
                  </div>
                  {currentSection.figure.caption && (
                    <div className="figure-card-caption">
                      {currentSection.figure.caption}
                    </div>
                  )}
                </div>
              )}

              {/* Multiple Document Figures */}
              {currentSection.figures && currentSection.figures.map((fig, fIdx) => (
                <div key={fIdx} className="section-document-figure-card">
                  <div className="figure-card-header">
                    <span className="figure-card-tag">{fig.title}</span>
                    {fig.source && <span className="figure-card-source">{fig.source}</span>}
                  </div>
                  <div className="figure-img-container">
                    <img 
                      src={fig.src} 
                      alt={fig.title} 
                      className="figure-rendered-img"
                      loading="lazy"
                    />
                  </div>
                  {fig.caption && (
                    <div className="figure-card-caption">
                      {fig.caption}
                    </div>
                  )}
                </div>
              ))}

              {/* Data Table (Single) */}
              {currentSection.tableData && (
                <div className="section-table-container">
                  <div className="table-header-block">
                    <h4 className="table-title">{currentSection.tableData.title}</h4>
                    {currentSection.tableData.source && (
                      <span className="table-source-tag">{currentSection.tableData.source}</span>
                    )}
                  </div>
                  <div className="table-responsive-scroll">
                    <table className="plan-custom-table">
                      <thead>
                        <tr>
                          {currentSection.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentSection.tableData.rows.map((row, rIdx) => {
                          const isTotalRow = String(row[0]).toLowerCase().includes('total');
                          return (
                            <tr key={rIdx} className={isTotalRow ? 'table-row-total' : ''}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={cIdx === 0 ? 'cell-primary' : 'cell-metric'}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Multiple Data Tables */}
              {currentSection.tables && currentSection.tables.map((tbl, tIdx) => (
                <div key={tIdx} className="section-table-container">
                  <div className="table-header-block">
                    <h4 className="table-title">{tbl.title}</h4>
                    {tbl.source && (
                      <span className="table-source-tag">{tbl.source}</span>
                    )}
                  </div>
                  <div className="table-responsive-scroll">
                    <table className="plan-custom-table">
                      <thead>
                        <tr>
                          {tbl.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tbl.rows.map((row, rIdx) => {
                          const isTotalRow = String(row[0]).toLowerCase().includes('total');
                          return (
                            <tr key={rIdx} className={isTotalRow ? 'table-row-total' : ''}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={cIdx === 0 ? 'cell-primary' : 'cell-metric'}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Section Pager / Navigation */}
              <footer className="article-pager-nav">
                <button 
                  className="pager-btn prev"
                  onClick={handlePrevSection}
                >
                  <ChevronLeft size={18} />
                  <div className="pager-text-block">
                    <span className="pager-sub">Previous</span>
                    <span className="pager-title">
                      {currentSectionIndex > 0 
                        ? chapter.sections[currentSectionIndex - 1].title 
                        : prevTab ? prevTab.label : 'Overview'}
                    </span>
                  </div>
                </button>

                <button 
                  className="pager-btn next"
                  onClick={handleNextSection}
                >
                  <div className="pager-text-block text-right">
                    <span className="pager-sub">Next</span>
                    <span className="pager-title">
                      {currentSectionIndex < chapter.sections.length - 1 
                        ? chapter.sections[currentSectionIndex + 1].title 
                        : nextTab ? nextTab.label : 'Next Chapter'}
                    </span>
                  </div>
                  <ChevronRight size={18} />
                </button>
              </footer>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};
