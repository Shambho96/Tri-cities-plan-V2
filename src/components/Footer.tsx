import type { TabId } from '../types';
import { MpoLogo } from './MpoLogo';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: TabId) => void;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, isDark }) => {
  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="footer-container">
          <div className="footer-cols-grid">
            {/* Col 1: Brand & MPO Mission */}
            <div className="footer-col brand-col">
              <div className="footer-mpo-logo">
                <MpoLogo variant={isDark ? 'dark' : 'light'} size="md" />
              </div>
              <p className="footer-bio">
                The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated planning organization directing multimodal transportation policy and funding across south-central Virginia.
              </p>
              <div className="footer-office-info">
                <div className="info-row">
                  <MapPin size={15} />
                  <span>Crater Planning District Commission, 1964 Wakefield St, Petersburg, VA 23805</span>
                </div>
                <div className="info-row">
                  <Phone size={15} />
                  <span>(804) 861-1666</span>
                </div>
                <div className="info-row">
                  <Mail size={15} />
                  <span>info@craterpdc.org</span>
                </div>
              </div>
            </div>

            {/* Col 2: PLAN2050 Chapters */}
            <div className="footer-col">
              <h4 className="footer-col-title">PLAN2050 Chapters</h4>
              <ul className="footer-nav-list">
                <li><button onClick={() => onNavigateTab('report')}>Report Overview</button></li>
                <li><button onClick={() => onNavigateTab('introduction')}>Chapter 1: Introduction</button></li>
                <li><button onClick={() => onNavigateTab('trends')}>Chapter 2: Trends & Forecasts</button></li>
                <li><button onClick={() => onNavigateTab('today')}>Chapter 3: System Today</button></li>
                <li><button onClick={() => onNavigateTab('tomorrow')}>Chapter 4: System Tomorrow</button></li>
                <li><button onClick={() => onNavigateTab('funding')}>Chapter 5: Funding Plan</button></li>
                <li><button onClick={() => onNavigateTab('appendices')}>Technical Appendices</button></li>
              </ul>
            </div>

            {/* Col 3: Member Jurisdictions */}
            <div className="footer-col">
              <h4 className="footer-col-title">Member Localities</h4>
              <ul className="footer-localities-list">
                <li>City of Colonial Heights</li>
                <li>City of Hopewell</li>
                <li>City of Petersburg</li>
                <li>Chesterfield County (Portion)</li>
                <li>Dinwiddie County (Portion)</li>
                <li>Prince George County (Portion)</li>
                <li>Petersburg Area Transit (PAT)</li>
                <li>Virginia Dept. of Transportation (VDOT)</li>
              </ul>
            </div>

            {/* Col 4: Federal Assurance & Title VI */}
            <div className="footer-col">
              <h4 className="footer-col-title">Civil Rights & Compliance</h4>
              <p className="footer-compliance-text">
                TCAMPO fully complies with Title VI of the Civil Rights Act of 1964 and related statutes. No person shall be excluded from participation in or denied the benefits of transportation planning services on the grounds of race, color, or national origin.
              </p>
              <div className="cert-pill">
                <ShieldCheck size={16} /> FHWA & FTA 3-C Planning Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-container bottom-inner">
          <div className="copy-text">
            © 2026 Tri-Cities Area Metropolitan Planning Organization (TCAMPO). All rights reserved.
          </div>
          <div className="bottom-links">
            <span className="privacy-link">Title VI Notice</span>
            <span className="privacy-link">ADA Accessibility</span>
            <span className="privacy-link">Public Participation Plan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
