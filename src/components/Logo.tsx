import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const isLight = variant === 'light';
  
  // Luxury Theme Colors
  const emblemArch = isLight ? '#d6b368' : '#b58d3e';
  const emblemHill = isLight ? '#ffffff' : '#678432';
  const emblemStar = isLight ? '#f2e5c8' : '#c99e46';
  const titleColor = isLight ? '#ffffff' : '#2b3026';
  const subColor = isLight ? '#d6b368' : '#678432';
  const bottomColor = isLight ? 'rgba(255, 255, 255, 0.72)' : '#788075';

  const scale = size === 'sm' ? 0.82 : size === 'lg' ? 1.25 : 1;

  return (
    <div 
      className={`logo-container ${className}`} 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        transform: `scale(${scale})`,
        transformOrigin: 'left center',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      {/* Luxury Hotel Emblem: Arch, Rolling Hills & Golden Sun */}
      <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Classical Hotel Portico / Architectural Arch */}
        <path 
          d="M8 35V20C8 12.268 14.268 6 22 6C29.732 6 36 12.268 36 20V35" 
          stroke={emblemArch} 
          strokeWidth="1.6" 
          strokeLinecap="round" 
        />
        
        {/* Inner Stylized Hill Ridge */}
        <path 
          d="M11 34C16 26 21 21 26 25C30 28 32 31 34 34" 
          stroke={emblemHill} 
          strokeWidth="2.2" 
          strokeLinecap="round" 
        />
        <path 
          d="M17 34C21 28 25 25 30 31" 
          stroke={emblemHill} 
          strokeWidth="1.4" 
          strokeOpacity="0.7" 
          strokeLinecap="round" 
        />

        {/* Golden Sun / Star at Pinnacle */}
        <circle cx="22" cy="14" r="3" fill={emblemStar} />
        <path 
          d="M22 8V10M22 18V20M16 14H18M26 14H28" 
          stroke={emblemStar} 
          strokeWidth="1.2" 
          strokeLinecap="round" 
        />

        {/* Foundation Base Line */}
        <line x1="6" y1="36" x2="38" y2="36" stroke={emblemArch} strokeWidth="1.8" strokeLinecap="round" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span 
          style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: '1.45rem', 
            fontWeight: 700, 
            letterSpacing: '0.4px',
            color: titleColor,
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          Verdant Hills
        </span>
        <span 
          style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '0.62rem', 
            fontWeight: 700, 
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: subColor,
            marginTop: '2px'
          }}
        >
          COUNTRY RESORT
        </span>
        <span 
          style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '0.48rem', 
            fontWeight: 500, 
            letterSpacing: '0.8px',
            color: bottomColor,
            marginTop: '2px'
          }}
        >
          Golf & Spa | Nature Retreat
        </span>
      </div>
    </div>
  );
};
