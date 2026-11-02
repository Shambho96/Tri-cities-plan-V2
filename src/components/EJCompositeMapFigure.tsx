export const EJCompositeMapFigure: React.FC = () => {
  return (
    <div className="figure-framed-box ej-composite-box animate-fade-in">
      <div className="density-map-visual">
        <svg viewBox="0 0 760 520" className="density-svg">
          {/* Background Canvas */}
          <rect width="760" height="520" fill="#f8fafc" />

          {/* Surrounding Context Roads & Water */}
          <path
            d="M 60,320 Q 240,300 360,260 Q 480,220 520,150 Q 640,160 760,180"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Regional County Boundaries */}
          <path d="M 60,270 L 140,250 L 250,250 L 240,400 L 50,400 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M 140,50 L 400,50 L 410,200 L 260,240 L 130,190 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

          {/* Adjacent Jurisdictions Text */}
          <text x="210" y="110" fill="#94a3b8" fontSize="11" fontWeight="600">Chesterfield</text>
          <text x="170" y="440" fill="#94a3b8" fontSize="11" fontWeight="600">Dinwiddie</text>
          <text x="620" y="380" fill="#94a3b8" fontSize="11" fontWeight="600">Prince George</text>
          <text x="660" y="270" fill="#94a3b8" fontSize="10">Charles City</text>
          <text x="700" y="450" fill="#94a3b8" fontSize="10">Surry</text>
          <text x="100" y="380" fill="#94a3b8" fontSize="10">Amelia</text>

          {/* RRTPO / TCAMPO Boundary Notation */}
          <text x="80" y="200" fill="#0f172a" fontSize="11" fontWeight="bold">RRTPO</text>
          <text x="80" y="215" fill="#0f172a" fontSize="11" fontWeight="bold">TCAMPO</text>

          {/* TCAMPO Block Groups Composite EJ Choropleth (Matches Image 5) */}
          <g className="ej-block-groups">
            {/* Dinwiddie County (TCAMPO Part): mostly Low with moderate in urban fringe */}
            <path d="M 70,270 L 250,250 L 240,400 L 60,400 Z" fill="#ede9fe" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 130,280 L 230,260 L 225,350 L 120,360 Z" fill="#c4b5fd" stroke="#64748b" strokeWidth="0.8" />

            {/* Chesterfield County (TCAMPO Part): Low & Moderate mix */}
            <path d="M 140,60 L 400,60 L 410,200 L 260,240 L 130,190 Z" fill="#ede9fe" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 280,60 L 400,60 L 410,150 L 300,140 Z" fill="#c4b5fd" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 300,140 L 410,150 L 410,200 L 320,200 Z" fill="#ede9fe" stroke="#64748b" strokeWidth="0.8" />

            {/* Colonial Heights: Moderate with high spots */}
            <path d="M 330,190 L 420,190 L 415,250 L 325,250 Z" fill="#c4b5fd" stroke="#475569" strokeWidth="1" />
            <path d="M 345,200 L 395,200 L 390,240 L 340,240 Z" fill="#7c3aed" stroke="#fff" strokeWidth="0.8" />

            {/* Petersburg: Deep Violet (High Vulnerability in center core) */}
            <path d="M 275,250 L 420,250 L 425,350 L 270,335 Z" fill="#c4b5fd" stroke="#475569" strokeWidth="1" />
            <path d="M 290,255 L 410,255 L 405,320 L 285,310 Z" fill="#7c3aed" stroke="#fff" strokeWidth="1" />
            <path d="M 320,260 L 390,260 L 385,310 L 315,305 Z" fill="#5b21b6" stroke="#fff" strokeWidth="1" />

            {/* Hopewell: Deep Violet (High Vulnerability in historic neighborhoods) */}
            <path d="M 440,150 L 560,150 L 545,250 L 430,240 Z" fill="#c4b5fd" stroke="#475569" strokeWidth="1" />
            <path d="M 450,160 L 520,160 L 515,230 L 445,225 Z" fill="#7c3aed" stroke="#fff" strokeWidth="1" />

            {/* Prince George County: Mix of Low, Moderate, and High southern tract */}
            <path d="M 430,245 L 545,255 L 670,220 L 700,410 L 410,410 L 415,345 Z" fill="#ede9fe" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 420,250 L 500,255 L 495,330 L 415,320 Z" fill="#c4b5fd" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 500,255 L 560,260 L 550,340 L 495,330 Z" fill="#ede9fe" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 560,260 L 650,250 L 640,350 L 550,340 Z" fill="#c4b5fd" stroke="#64748b" strokeWidth="0.8" />
            <path d="M 440,335 L 500,340 L 490,410 L 430,405 Z" fill="#7c3aed" stroke="#fff" strokeWidth="1" />
          </g>

          {/* Bold TCAMPO Boundary Outline */}
          <path
            d="M 140,60 L 400,60 L 440,150 L 560,150 L 670,220 L 700,410 L 240,400 L 60,400 L 70,270 L 130,190 Z"
            fill="none"
            stroke="#0f172a"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* Place Names */}
          <text x="350" y="225" fill="#0f172a" fontSize="11" fontWeight="700">Colonial Heights</text>
          <text x="330" y="285" fill="#ffffff" fontSize="12" fontWeight="800">Petersburg</text>
          <text x="460" y="195" fill="#ffffff" fontSize="12" fontWeight="800">Hopewell</text>

          {/* Legend Box Top-Right (Matches Image 5) */}
          <g transform="translate(560, 40)">
            <rect width="180" height="95" rx="6" fill="rgba(255, 255, 255, 0.95)" stroke="#cbd5e1" />
            <text x="12" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Environmental Justice</text>
            <text x="12" y="30" fill="#0f172a" fontSize="10" fontWeight="bold">Composite Index</text>

            <rect x="12" y="38" width="16" height="11" fill="#ede9fe" stroke="#94a3b8" />
            <text x="34" y="47" fill="#334155" fontSize="9.5">Low Vulnerability</text>

            <rect x="12" y="54" width="16" height="11" fill="#c4b5fd" />
            <text x="34" y="63" fill="#334155" fontSize="9.5">Moderate Vulnerability</text>

            <rect x="12" y="70" width="16" height="11" fill="#7c3aed" />
            <text x="34" y="79" fill="#334155" fontSize="9.5">High Vulnerability</text>
          </g>

          {/* North Arrow and Scale Bar Bottom Right */}
          <g transform="translate(620, 390)">
            {/* North Arrow */}
            <circle cx="20" cy="20" r="16" fill="none" stroke="#64748b" strokeWidth="1" />
            <polygon points="20,8 24,20 20,18 16,20" fill="#0f172a" />
            <text x="20" y="34" fill="#0f172a" fontSize="9" fontWeight="bold" textAnchor="middle">N</text>

            {/* Scale Bar */}
            <g transform="translate(-40, 55)">
              <line x1="0" y1="0" x2="120" y2="0" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="#0f172a" strokeWidth="2" />
              <line x1="60" y1="-4" x2="60" y2="4" stroke="#0f172a" strokeWidth="2" />
              <line x1="120" y1="-4" x2="120" y2="4" stroke="#0f172a" strokeWidth="2" />
              <text x="0" y="14" fill="#64748b" fontSize="8" textAnchor="middle">0</text>
              <text x="60" y="14" fill="#64748b" fontSize="8" textAnchor="middle">5</text>
              <text x="120" y="14" fill="#64748b" fontSize="8" textAnchor="middle">10 MI.</text>
            </g>
          </g>
        </svg>
      </div>

      <div className="figure-caption-strip">
        <em>Figure 13. Composite EJ Index by Block Group (Source: 2023 ACS 5-Year Estimates)</em>
      </div>
    </div>
  );
};
