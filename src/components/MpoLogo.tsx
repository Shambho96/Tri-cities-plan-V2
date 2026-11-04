import React from 'react';

export interface MpoLogoProps {
  variant?: 'light' | 'dark' | 'card' | 'badge' | 'plain';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
  onClick?: () => void;
}

const SIZE_MAP: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', { width: number; height: number }> = {
  xs: { width: 44, height: 26 },
  sm: { width: 68, height: 40 },
  md: { width: 102, height: 60 },
  lg: { width: 144, height: 85 },
  xl: { width: 200, height: 118 },
};

export const MpoLogo: React.FC<MpoLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  style,
  alt = 'Tri-Cities Area MPO',
  onClick,
}) => {
  const dims = SIZE_MAP[size] || SIZE_MAP.md;
  const isCard = variant === 'card';
  const isDark = variant === 'dark';
  const isBadge = variant === 'badge';

  const containerStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    ...(isCard
      ? {
          background: '#ffffff',
          padding: '6px 12px',
          borderRadius: '10px',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }
      : isDark
      ? {
          background: 'rgba(255, 255, 255, 0.96)',
          padding: '3px 8px',
          borderRadius: '7px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(4px)',
        }
      : isBadge
      ? {
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 6px',
          borderRadius: '6px',
          border: '1px solid rgba(226, 232, 240, 0.8)',
        }
      : {}),
    ...style,
  };

  return (
    <div
      className={`mpo-logo-wrap mpo-variant-${variant} mpo-size-${size} ${className}`}
      style={containerStyles}
      onClick={onClick}
    >
      <img
        src="/mpo-logo.png"
        srcSet="/mpo-logo.png 1x, /mpo-logo-hd.png 2x"
        alt={alt}
        width={dims.width}
        height={dims.height}
        className="mpo-logo-img"
        style={{
          width: `${dims.width}px`,
          height: 'auto',
          aspectRatio: '108 / 64',
          objectFit: 'contain',
          display: 'block',
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default MpoLogo;
