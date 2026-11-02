import { useState } from 'react';
import { Users, Briefcase, Zap, Eye } from 'lucide-react';

export const DensityMapsFigure: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pop' | 'emp' | 'act'>('all');

  return (
    <div className="density-maps-card-wrapper">
      {/* Tab Switcher & View Mode */}
      <div className="density-tab-bar">
        <button
          className={`density-tab-btn ${activeTab === 'all' ? 'active all' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <Eye size={16} />
          <span>All Figures (3, 4 & 5)</span>
        </button>
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
      </div>

      {/* Figure 3: Population Density */}
      {(activeTab === 'all' || activeTab === 'pop') && (
        <div className="figure-framed-box animate-fade-in" id="figure-3-population">
          <div className="figure-framed-header">
            <h4 className="figure-section-title">Population Density</h4>
            <p className="figure-narrative">
              Figure 3 shows population density (residents per square mile) across the region. Population density is highest in Petersburg, Colonial Heights, and Hopewell, with additional concentrations in Chesterfield, Dinwiddie, and Prince George Counties, particularly along the I-95 and I-85 corridors and near major institutions such as Virginia State University (VSU) and Fort Lee. Notable exceptions to this pattern exist within eastern Hopewell and southwestern Petersburg, where lower population densities are due to industrial, commercial, and park land uses rather than rural or undeveloped land.
            </p>
          </div>

          <div className="density-map-visual">
            <svg viewBox="0 0 760 480" className="density-svg">
              <defs>
                <pattern id="gridPatternPop" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>
              </defs>

              <rect width="760" height="480" fill="#f8fafc" />
              <rect width="760" height="480" fill="url(#gridPatternPop)" opacity="0.6" />

              {/* Water Bodies (James & Appomattox) */}
              <path
                d="M 120,290 Q 280,270 380,240 Q 480,200 520,130 Q 640,150 760,170"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 340,0 Q 420,90 520,130"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="20"
                strokeLinecap="round"
              />

              {/* Surrounding County Boundary Context */}
              <path
                d="M 60,260 L 140,240 L 260,240 L 260,190 L 180,180 L 120,240 Z"
                fill="#f1f5f9"
                stroke="#94a3b8"
                strokeWidth="1"
              />

              {/* TCAMPO Planning Area Base Outline */}
              <g className="tcampo-choropleth-pop">
                {/* Dinwiddie County Block Groups */}
                <path d="M 80,260 L 260,240 L 250,390 L 70,390 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 140,270 L 240,250 L 235,330 L 130,340 Z" fill="#e0f2fe" stroke="#64748b" strokeWidth="1" />
                <path d="M 200,260 L 250,250 L 245,290 L 195,295 Z" fill="#7dd3fc" stroke="#64748b" strokeWidth="1" />

                {/* Chesterfield County (TCAMPO Portion) */}
                <path d="M 150,50 L 400,50 L 410,190 L 280,230 L 140,180 Z" fill="#e0f2fe" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 300,50 L 400,50 L 410,140 L 320,130 Z" fill="#0284c7" stroke="#64748b" strokeWidth="1" />
                <path d="M 320,130 L 410,140 L 410,190 L 330,190 Z" fill="#38bdf8" stroke="#64748b" strokeWidth="1" />
                <path d="M 240,160 L 330,160 L 325,220 L 250,210 Z" fill="#0369a1" stroke="#64748b" strokeWidth="1" />

                {/* Colonial Heights Core */}
                <path d="M 330,180 L 420,180 L 415,240 L 325,240 Z" fill="#0284c7" stroke="#334155" strokeWidth="1.5" />
                <path d="M 345,190 L 400,190 L 395,230 L 340,230 Z" fill="#0369a1" stroke="#fff" strokeWidth="1" />

                {/* Petersburg Core & Urban Corridor */}
                <path d="M 280,240 L 420,240 L 425,340 L 275,325 Z" fill="#0284c7" stroke="#334155" strokeWidth="1.5" />
                <path d="M 320,245 L 390,245 L 385,295 L 315,290 Z" fill="#075985" stroke="#fff" strokeWidth="1" />
                <path d="M 300,290 L 370,295 L 365,335 L 295,330 Z" fill="#0369a1" stroke="#fff" strokeWidth="0.8" />
                <path d="M 390,250 L 420,250 L 420,310 L 385,305 Z" fill="#38bdf8" stroke="#fff" strokeWidth="0.8" />

                {/* Hopewell Core & Waterfront */}
                <path d="M 450,140 L 570,140 L 555,240 L 440,230 Z" fill="#0284c7" stroke="#334155" strokeWidth="1.5" />
                <path d="M 460,150 L 520,150 L 515,210 L 455,205 Z" fill="#075985" stroke="#fff" strokeWidth="1" />
                <path d="M 520,150 L 565,150 L 555,225 L 515,210 Z" fill="#e0f2fe" stroke="#64748b" strokeWidth="0.8" />

                {/* Prince George County (TCAMPO Portion) */}
                <path d="M 440,235 L 555,245 L 680,210 L 710,400 L 420,400 L 425,335 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 430,240 L 510,245 L 505,320 L 425,310 Z" fill="#38bdf8" stroke="#64748b" strokeWidth="1" />
                <path d="M 510,245 L 570,250 L 560,330 L 505,320 Z" fill="#7dd3fc" stroke="#64748b" strokeWidth="1" />
                <path d="M 570,250 L 660,240 L 650,340 L 560,330 Z" fill="#e0f2fe" stroke="#64748b" strokeWidth="1" />
              </g>

              {/* Bold Outer TCAMPO Boundary Line */}
              <path
                d="M 150,50 L 400,50 L 450,140 L 570,140 L 680,210 L 710,400 L 250,390 L 70,390 L 80,260 L 140,180 Z"
                fill="none"
                stroke="#0f172a"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Interstate Corridors */}
              <g className="map-interstates">
                {/* I-95 */}
                <path d="M 370,0 L 370,480" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="6 3" />
                {/* I-85 */}
                <path d="M 340,280 L 100,450" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" />
                {/* I-295 */}
                <path d="M 500,0 Q 530,140 520,240 T 380,420" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="5 3" />

                {/* Shields */}
                <g transform="translate(355, 30)">
                  <rect width="28" height="18" rx="4" fill="#dc2626" />
                  <text x="14" y="13" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">I-95</text>
                </g>
                <g transform="translate(180, 380)">
                  <rect width="28" height="18" rx="4" fill="#2563eb" />
                  <text x="14" y="13" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">I-85</text>
                </g>
                <g transform="translate(515, 80)">
                  <rect width="32" height="18" rx="4" fill="#16a34a" />
                  <text x="16" y="13" fill="#fff" fontSize="8.5" fontWeight="bold" textAnchor="middle">I-295</text>
                </g>
              </g>

              {/* Major Places Labels */}
              <text x="350" y="215" fill="#0f172a" fontSize="12" fontWeight="800">Colonial Heights</text>
              <text x="320" y="275" fill="#ffffff" fontSize="13" fontWeight="800">Petersburg</text>
              <text x="470" y="180" fill="#ffffff" fontSize="12" fontWeight="800">Hopewell</text>
              <text x="220" y="110" fill="#475569" fontSize="11" fontWeight="700">Chesterfield Co.</text>
              <text x="130" y="320" fill="#475569" fontSize="11" fontWeight="700">Dinwiddie Co.</text>
              <text x="560" y="320" fill="#475569" fontSize="11" fontWeight="700">Prince George Co.</text>
              <text x="460" y="270" fill="#0369a1" fontSize="10" fontWeight="700">Fort Gregg-Adams</text>

              {/* Legend Box matching Image 1 */}
              <g transform="translate(30, 335)">
                <rect width="180" height="125" rx="6" fill="rgba(15, 23, 42, 0.90)" stroke="#334155" />
                <text x="12" y="18" fill="#f8fafc" fontSize="11" fontWeight="bold">Residents per sq mi</text>
                
                <rect x="12" y="26" width="18" height="12" fill="#f8fafc" stroke="#64748b" strokeWidth="0.5" />
                <text x="36" y="36" fill="#e2e8f0" fontSize="10">Less than 500</text>
                
                <rect x="12" y="44" width="18" height="12" fill="#7dd3fc" />
                <text x="36" y="54" fill="#e2e8f0" fontSize="10">500 - 1,000</text>
                
                <rect x="12" y="62" width="18" height="12" fill="#38bdf8" />
                <text x="36" y="72" fill="#e2e8f0" fontSize="10">1,000 - 2,500</text>

                <rect x="12" y="80" width="18" height="12" fill="#0284c7" />
                <text x="36" y="90" fill="#e2e8f0" fontSize="10">2,500 - 5,000</text>

                <rect x="12" y="98" width="18" height="12" fill="#0369a1" />
                <text x="36" y="108" fill="#e2e8f0" fontSize="10">More than 5,000</text>
              </g>
            </svg>
          </div>

          <div className="figure-caption-strip">
            <em>Figure 3. TCAMPO Population Density by Block Group (Source: 2023 ACS 5-Year)</em>
          </div>
        </div>
      )}

      {/* Figure 4: Employment Density */}
      {(activeTab === 'all' || activeTab === 'emp') && (
        <div className="figure-framed-box animate-fade-in" id="figure-4-employment">
          <div className="figure-framed-header">
            <h4 className="figure-section-title">Employment Density</h4>
            <p className="figure-narrative">
              Figure 4 illustrates the region’s employment density (jobs per square mile). Employment is primarily concentrated along the I-95 and I-85 corridors through Dinwiddie, Colonial Heights, and Petersburg, with additional dense clusters just north of the TCAMPO boundary in Chester and Meadowville. Other areas of high employment density are evident in the historic downtown cores of Petersburg and Hopewell, near VSU in Ettrick, at Southpark Mall in Colonial Heights, and along arterial principal arterial corridors such as South Crater Road (US-301), Oaklawn Boulevard (VA-36), and East Hundred Road (SR-10). Rural portions of the region, particularly to the west, south, and east, show minimal employment density. Due to limitations in federal jobs reporting within the LEHD dataset, employment associated with Fort Lee is not captured in this map.
            </p>
          </div>

          <div className="density-map-visual">
            <svg viewBox="0 0 760 480" className="density-svg">
              <rect width="760" height="480" fill="#f8fafc" />

              {/* Water Bodies */}
              <path
                d="M 120,290 Q 280,270 380,240 Q 480,200 520,130 Q 640,150 760,170"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="14"
                strokeLinecap="round"
              />

              {/* TCAMPO Choropleth Orange Palette (Matches Image 2) */}
              <g className="tcampo-choropleth-emp">
                {/* Dinwiddie County */}
                <path d="M 80,260 L 260,240 L 250,390 L 70,390 Z" fill="#ffffff" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 140,270 L 240,250 L 235,330 L 130,340 Z" fill="#fed7aa" stroke="#64748b" strokeWidth="1" />
                <path d="M 200,260 L 250,250 L 245,290 L 195,295 Z" fill="#f97316" stroke="#64748b" strokeWidth="1" />

                {/* Chesterfield County (North Clusters: Chester/Meadowville) */}
                <path d="M 150,50 L 400,50 L 410,190 L 280,230 L 140,180 Z" fill="#ffffff" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 300,50 L 400,50 L 410,140 L 320,130 Z" fill="#ea580c" stroke="#64748b" strokeWidth="1" />
                <path d="M 320,130 L 410,140 L 410,190 L 330,190 Z" fill="#fb923c" stroke="#64748b" strokeWidth="1" />
                <path d="M 240,160 L 330,160 L 325,220 L 250,210 Z" fill="#c2410c" stroke="#64748b" strokeWidth="1" />

                {/* Colonial Heights Core (Southpark Mall) */}
                <path d="M 330,180 L 420,180 L 415,240 L 325,240 Z" fill="#ea580c" stroke="#334155" strokeWidth="1.5" />
                <path d="M 345,190 L 400,190 L 395,230 L 340,230 Z" fill="#9a3412" stroke="#fff" strokeWidth="1" />

                {/* Petersburg Core & Downtown Corridor */}
                <path d="M 280,240 L 420,240 L 425,340 L 275,325 Z" fill="#ea580c" stroke="#334155" strokeWidth="1.5" />
                <path d="M 320,245 L 390,245 L 385,295 L 315,290 Z" fill="#7c2d12" stroke="#fff" strokeWidth="1" />
                <path d="M 300,290 L 370,295 L 365,335 L 295,330 Z" fill="#c2410c" stroke="#fff" strokeWidth="0.8" />
                <path d="M 390,250 L 420,250 L 420,310 L 385,305 Z" fill="#fb923c" stroke="#fff" strokeWidth="0.8" />

                {/* Hopewell Core & Waterfront Industrial */}
                <path d="M 450,140 L 570,140 L 555,240 L 440,230 Z" fill="#ea580c" stroke="#334155" strokeWidth="1.5" />
                <path d="M 460,150 L 520,150 L 515,210 L 455,205 Z" fill="#9a3412" stroke="#fff" strokeWidth="1" />
                <path d="M 520,150 L 565,150 L 555,225 L 515,210 Z" fill="#fed7aa" stroke="#64748b" strokeWidth="0.8" />

                {/* Prince George County */}
                <path d="M 440,235 L 555,245 L 680,210 L 710,400 L 420,400 L 425,335 Z" fill="#ffffff" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 430,240 L 510,245 L 505,320 L 425,310 Z" fill="#fb923c" stroke="#64748b" strokeWidth="1" />
                <path d="M 510,245 L 570,250 L 560,330 L 505,320 Z" fill="#fdba74" stroke="#64748b" strokeWidth="1" />
              </g>

              {/* Bold Outer TCAMPO Boundary Line */}
              <path
                d="M 150,50 L 400,50 L 450,140 L 570,140 L 680,210 L 710,400 L 250,390 L 70,390 L 80,260 L 140,180 Z"
                fill="none"
                stroke="#0f172a"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Interstates */}
              <path d="M 370,0 L 370,480" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 3" />
              <path d="M 340,280 L 100,450" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" />
              <path d="M 500,0 Q 530,140 520,240 T 380,420" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="5 3" />

              {/* Legend Box matching Image 2 */}
              <g transform="translate(30, 335)">
                <rect width="180" height="125" rx="6" fill="rgba(15, 23, 42, 0.90)" stroke="#334155" />
                <text x="12" y="18" fill="#f8fafc" fontSize="11" fontWeight="bold">Jobs per sq mi</text>
                
                <rect x="12" y="26" width="18" height="12" fill="#ffffff" stroke="#64748b" strokeWidth="0.5" />
                <text x="36" y="36" fill="#e2e8f0" fontSize="10">Less than 250</text>
                
                <rect x="12" y="44" width="18" height="12" fill="#fed7aa" />
                <text x="36" y="54" fill="#e2e8f0" fontSize="10">250 - 500</text>
                
                <rect x="12" y="62" width="18" height="12" fill="#fb923c" />
                <text x="36" y="72" fill="#e2e8f0" fontSize="10">500 - 1,000</text>

                <rect x="12" y="80" width="18" height="12" fill="#ea580c" />
                <text x="36" y="90" fill="#e2e8f0" fontSize="10">1,000 - 2,500</text>

                <rect x="12" y="98" width="18" height="12" fill="#7c2d12" />
                <text x="36" y="108" fill="#e2e8f0" fontSize="10">More than 2,500</text>
              </g>
            </svg>
          </div>

          <div className="figure-caption-strip">
            <em>Figure 4. TCAMPO Employment Density by Block Group (Source: 2023 LEHD)</em>
          </div>
        </div>
      )}

      {/* Figure 5: Activity Density */}
      {(activeTab === 'all' || activeTab === 'act') && (
        <div className="figure-framed-box animate-fade-in" id="figure-5-activity">
          <div className="figure-framed-header">
            <h4 className="figure-section-title">Activity Density</h4>
            <p className="figure-narrative">
              Figure 5 combines the two measures above to show activity density (residents plus jobs per square mile) across the region. Activity density is highest where population and employment concentrations overlap, most notably in Colonial Heights, Hopewell, and Petersburg and along the I-95 and I-85 corridors. High activity is also illustrated near VSU and Fort Lee. As with population and employment densities individually, activity density is lowest in the rural portions of the region to the west, south, and east.
            </p>
          </div>

          <div className="density-map-visual">
            <svg viewBox="0 0 760 480" className="density-svg">
              <rect width="760" height="480" fill="#f8fafc" />

              {/* Bivariate Choropleth Layer */}
              <g className="tcampo-choropleth-bivariate">
                <path d="M 80,260 L 260,240 L 250,390 L 70,390 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 140,270 L 240,250 L 235,330 L 130,340 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
                <path d="M 200,260 L 250,250 L 245,290 L 195,295 Z" fill="#d97706" stroke="#64748b" strokeWidth="1" />

                <path d="M 150,50 L 400,50 L 410,190 L 280,230 L 140,180 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 300,50 L 400,50 L 410,140 L 320,130 Z" fill="#0284c7" stroke="#64748b" strokeWidth="1" />
                <path d="M 320,130 L 410,140 L 410,190 L 330,190 Z" fill="#0891b2" stroke="#64748b" strokeWidth="1" />
                <path d="M 240,160 L 330,160 L 325,220 L 250,210 Z" fill="#9333ea" stroke="#64748b" strokeWidth="1" />

                {/* Overlap Hotspots: Colonial Heights, Petersburg, Hopewell */}
                <path d="M 330,180 L 420,180 L 415,240 L 325,240 Z" fill="#b45309" stroke="#334155" strokeWidth="1.5" />
                <path d="M 345,190 L 400,190 L 395,230 L 340,230 Z" fill="#78350f" stroke="#fff" strokeWidth="1" />

                <path d="M 280,240 L 420,240 L 425,340 L 275,325 Z" fill="#92400e" stroke="#334155" strokeWidth="1.5" />
                <path d="M 320,245 L 390,245 L 385,295 L 315,290 Z" fill="#451a03" stroke="#fff" strokeWidth="1" />

                <path d="M 450,140 L 570,140 L 555,240 L 440,230 Z" fill="#b45309" stroke="#334155" strokeWidth="1.5" />
                <path d="M 460,150 L 520,150 L 515,210 L 455,205 Z" fill="#78350f" stroke="#fff" strokeWidth="1" />

                <path d="M 440,235 L 555,245 L 680,210 L 710,400 L 420,400 L 425,335 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
                <path d="M 430,240 L 510,245 L 505,320 L 425,310 Z" fill="#f59e0b" stroke="#64748b" strokeWidth="1" />
              </g>

              {/* Boundary */}
              <path
                d="M 150,50 L 400,50 L 450,140 L 570,140 L 680,210 L 710,400 L 250,390 L 70,390 L 80,260 L 140,180 Z"
                fill="none"
                stroke="#0f172a"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Interstates */}
              <path d="M 370,0 L 370,480" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 3" />
              <path d="M 340,280 L 100,450" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" />
              <path d="M 500,0 Q 530,140 520,240 T 380,420" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="5 3" />

              {/* Bivariate Diamond Legend matching Image 3 */}
              <g transform="translate(30, 340)">
                <rect width="210" height="115" rx="6" fill="rgba(15, 23, 42, 0.88)" stroke="#334155" />
                <text x="12" y="22" fill="#f8fafc" fontSize="11" fontWeight="bold">Activity Density</text>
                <text x="12" y="38" fill="#94a3b8" fontSize="9">Residents / sq mi</text>
                <text x="120" y="38" fill="#94a3b8" fontSize="9">Jobs / sq mi</text>

                {/* Bivariate Grid Diamond */}
                <g transform="translate(100, 75) rotate(45)">
                  <rect x="-24" y="-24" width="16" height="16" fill="#f8fafc" stroke="#64748b" strokeWidth="0.5" />
                  <rect x="-8" y="-24" width="16" height="16" fill="#7dd3fc" stroke="#64748b" strokeWidth="0.5" />
                  <rect x="8" y="-24" width="16" height="16" fill="#0284c7" stroke="#64748b" strokeWidth="0.5" />

                  <rect x="-24" y="-8" width="16" height="16" fill="#fed7aa" stroke="#64748b" strokeWidth="0.5" />
                  <rect x="-8" y="-8" width="16" height="16" fill="#c084fc" stroke="#64748b" strokeWidth="0.5" />
                  <rect x="8" y="-8" width="16" height="16" fill="#7c3aed" stroke="#64748b" strokeWidth="0.5" />

                  <rect x="-24" y="8" width="16" height="16" fill="#f97316" stroke="#64748b" strokeWidth="0.5" />
                  <rect x="-8" y="8" width="16" height="16" fill="#b45309" stroke="#64748b" strokeWidth="0.5" />
                  <rect x="8" y="8" width="16" height="16" fill="#451a03" stroke="#64748b" strokeWidth="0.5" />
                </g>
              </g>
            </svg>
          </div>

          <div className="figure-caption-strip">
            <em>Figure 5. TCAMPO Activity Density by Block Group (Source: 2023 ACS 5-Year, 2023 LEHD)</em>
          </div>
        </div>
      )}
    </div>
  );
};
