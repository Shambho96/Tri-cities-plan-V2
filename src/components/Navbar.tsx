import { useState, useEffect } from 'react';
import type { TabId } from '../types';
import { MpoLogo } from './MpoLogo';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSearch?: () => void;
  onDownloadFullPlan?: () => void;
}

const NAV_ITEMS: { id: TabId; label: string }[] = [
  { id: 'report', label: 'Report' },
  { id: 'introduction', label: 'Introduction' },
  { id: 'trends', label: 'Trends and Forecasts' },
  { id: 'today', label: 'System Today' },
  { id: 'tomorrow', label: 'System Tomorrow' },
  { id: 'funding', label: 'Funding' },
  { id: 'appendices', label: 'Appendices' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  isDark,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Left */}
        <div className="brand-group" onClick={() => onTabChange('report')}>
          <h1 className="brand-heading">
            Tri-Cities MPO <span className="brand-highlight">PLAN2050</span>
          </h1>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="desktop-nav-tabs">
          {NAV_ITEMS.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onTabChange(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
                {isActive && <div className="tab-active-glow" />}
              </button>
            );
          })}
        </nav>

        {/* Right Actions & Logo */}
        <div className="header-right-actions">
          <button 
            className="action-icon-btn theme-toggle" 
            onClick={onToggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={17} className="sun-icon" /> : <Moon size={17} />}
          </button>

          <div className="desktop-mpo-logo">
            <MpoLogo variant={isDark ? 'dark' : 'light'} size="sm" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <div className="mobile-tabs-list">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  className={`mobile-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mobile-drawer-footer">
              <div className="mobile-mpo-logo-wrap">
                <MpoLogo variant={isDark ? 'dark' : 'light'} size="md" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
