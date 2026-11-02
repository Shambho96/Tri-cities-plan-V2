import React from 'react';

interface MpoLogoProps {
  variant?: 'light' | 'dark' | 'card';
  size?: 'sm' | 'md' | 'lg';
}

export const MpoLogo: React.FC<MpoLogoProps> = ({ variant = 'light', size = 'md' }) => {
  const isCard = variant === 'card';
  const isDark = variant === 'dark';

  const width = size === 'sm' ? 88 : size === 'lg' ? 210 : 150;
  const height = width * 0.4;

  return (
    <div className={`mpo-logo-wrap ${variant}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 200 84" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mpo-svg"
      >
        {/* Subtle background container if card variant */}
        {isCard && (
          <rect width="200" height="84" rx="10" fill="#ffffff" fillOpacity="0.95" />
        )}

        {/* Top curved road arc */}
        <path
          d="M 18,22 C 60,6 140,8 182,24"
          stroke="var(--primary)"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Secondary subtle transit swoosh */}
        <path
          d="M 28,28 C 70,16 135,17 172,30"
          stroke="var(--accent-foreground)"
          strokeWidth="1.8"
          strokeDasharray="4 2"
          opacity="0.9"
        />

        {/* Text: "Tri-Cities Area" */}
        <text
          x="100"
          y="32"
          textAnchor="middle"
          fill={isDark ? 'var(--accent-foreground)' : 'var(--primary)'}
          fontFamily="'Plus Jakarta Sans', serif"
          fontSize="15"
          fontWeight="600"
          fontStyle="italic"
          letterSpacing="0.4"
        >
          Tri-Cities Area
        </text>

        {/* Bold "MPO" */}
        <text
          x="100"
          y="68"
          textAnchor="middle"
          fill={isDark ? '#ffffff' : 'var(--brand-navy-900)'}
          fontFamily="'Outfit', sans-serif"
          fontSize="38"
          fontWeight="900"
          letterSpacing="2"
        >
          MPO
        </text>
      </svg>
    </div>
  );
};
