import { useState, useEffect } from 'react';
import type { TabId, PlanGoal } from './types';
import { CHAPTERS_DATA } from './data/planData';
import { Navbar } from './components/Navbar';
import { ReportView } from './components/ReportView';
import { ChapterLayout } from './components/ChapterLayout';
import { ComingSoonView } from './components/ComingSoonView';
import { GoalDetailModal } from './components/GoalDetailModal';
import { ChapterSearchModal } from './components/ChapterSearchModal';
import { DownloadToast } from './components/DownloadToast';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('report');
  const [activeSectionId, setActiveSectionId] = useState<string | undefined>(undefined);
  const [selectedGoal, setSelectedGoal] = useState<PlanGoal | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [downloadFilename, setDownloadFilename] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Keyboard shortcut for Cmd/Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync dark class on document root (both .dark and .dark-theme)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark', 'dark-theme');
    } else {
      document.documentElement.classList.remove('dark', 'dark-theme');
    }
  }, [isDark]);

  const handleNavigateTab = (tab: TabId, sectionId?: string) => {
    setActiveTab(tab);
    setActiveSectionId(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPdf = (filename: string) => {
    setDownloadFilename(filename);
  };

  const handleDownloadFullPlan = () => {
    setDownloadFilename('Tri-Cities_Area_MPO_PLAN2050_Comprehensive_Final.pdf');
  };

  const currentChapterData = CHAPTERS_DATA.find(c => c.id === activeTab);

  // Adjacent tabs navigation
  const getPrevNextTabs = (current: TabId) => {
    const order: { id: TabId; label: string }[] = [
      { id: 'report', label: 'Report Overview' },
      { id: 'introduction', label: 'Chapter 1: Introduction' },
      { id: 'trends', label: 'Chapter 2: Trends' },
      { id: 'today', label: 'Chapter 3: System Today' },
      { id: 'tomorrow', label: 'Chapter 4: System Tomorrow' },
      { id: 'funding', label: 'Chapter 5: Funding' },
      { id: 'appendices', label: 'Appendices' },
    ];
    const idx = order.findIndex(o => o.id === current);
    const prev = idx > 0 ? order[idx - 1] : undefined;
    const next = idx < order.length - 1 ? order[idx + 1] : undefined;
    return { prev, next };
  };

  const { prev: prevTab, next: nextTab } = getPrevNextTabs(activeTab);

  return (
    <div className="app-root">
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => handleNavigateTab(tab)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onDownloadFullPlan={handleDownloadFullPlan}
      />

      <div className="main-viewport">
        {activeTab === 'report' && (
          <ReportView
            onNavigateTab={handleNavigateTab}
            onSelectGoal={(goal) => setSelectedGoal(goal)}
          />
        )}

        {(activeTab === 'today' || activeTab === 'tomorrow' || activeTab === 'funding' || activeTab === 'appendices') && (
          <ComingSoonView
            tabId={activeTab}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {(activeTab === 'introduction' || activeTab === 'trends') && currentChapterData && (
          <ChapterLayout
            chapter={currentChapterData}
            activeSectionId={activeSectionId}
            onNavigateTab={handleNavigateTab}
            onDownloadChapter={handleDownloadPdf}
            prevTab={prevTab}
            nextTab={nextTab}
          />
        )}
      </div>

      {/* Goal Deep-dive modal */}
      <GoalDetailModal
        goal={selectedGoal}
        onClose={() => setSelectedGoal(null)}
      />

      {/* Global Instant Search modal */}
      <ChapterSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTab={(tab) => handleNavigateTab(tab)}
        onSelectSection={(tab, secId) => handleNavigateTab(tab, secId)}
      />

      {/* PDF Download Toast Notification */}
      <DownloadToast
        filename={downloadFilename}
        onClose={() => setDownloadFilename(null)}
      />
    </div>
  );
}

export default App;
