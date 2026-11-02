import { useState } from 'react';
import { Search, X, ChevronRight, FileText } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/planData';
import type { TabId } from '../types';

interface ChapterSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabId) => void;
  onSelectSection?: (tab: TabId, sectionId: string) => void;
}

export const ChapterSearchModal: React.FC<ChapterSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onSelectSection
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Search across all chapters and sections
  const results: { tabId: TabId; chapterTitle: string; sectionTitle: string; snippet: string; sectionId: string }[] = [];

  if (query.trim().length > 1) {
    const q = query.toLowerCase();
    CHAPTERS_DATA.forEach(chap => {
      chap.sections.forEach(sec => {
        const titleMatch = sec.title.toLowerCase().includes(q);
        const textMatch = sec.text.some(t => t.toLowerCase().includes(q));
        if (titleMatch || textMatch) {
          const matchedPara = sec.text.find(t => t.toLowerCase().includes(q)) || sec.text[0] || '';
          results.push({
            tabId: chap.id,
            chapterTitle: chap.fullTitle,
            sectionTitle: sec.title,
            sectionId: sec.id,
            snippet: matchedPara.slice(0, 140) + '...'
          });
        }
      });
    });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="search-modal-container" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <Search className="search-icon-inside" size={20} />
          <input
            type="text"
            className="search-input-field"
            placeholder="Search PLAN2050 (e.g., 'Regional Context', 'EJ', 'Funding', 'Bridges', 'I-95')..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button className="clear-search-btn" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className="search-results-list">
          {query.trim().length <= 1 ? (
            <div className="search-shortcuts">
              <span className="shortcuts-title">Quick Topics:</span>
              <div className="quick-tags">
                {['Regional Context', 'Trends & Demographics', 'Commuter Flows', 'Funding Allocation', 'Fall Line Trail', 'Vision Zero'].map(tag => (
                  <button key={tag} className="quick-tag-btn" onClick={() => setQuery(tag)}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty">
              No results found for "{query}". Try searching for "interstate", "corridor", "population", or "safety".
            </div>
          ) : (
            results.map((res, idx) => (
              <div
                key={idx}
                className="search-result-item"
                onClick={() => {
                  if (onSelectSection) {
                    onSelectSection(res.tabId, res.sectionId);
                  } else {
                    onSelectTab(res.tabId);
                  }
                  onClose();
                }}
              >
                <div className="res-icon">
                  <FileText size={18} />
                </div>
                <div className="res-info">
                  <div className="res-chap">{res.chapterTitle}</div>
                  <div className="res-title">{res.sectionTitle}</div>
                  <div className="res-snippet">{res.snippet}</div>
                </div>
                <ChevronRight size={18} className="res-arrow" />
              </div>
            ))
          )}
        </div>

        <div className="search-modal-footer">
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
