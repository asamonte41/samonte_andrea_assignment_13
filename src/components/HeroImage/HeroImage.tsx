import React from 'react';
import { HeroImageProps } from './HeroImage.types';

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height = '400px',
  overlay = true,
  className = '',
}) => {
  return (
    <div
      className={`hero-image-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {overlay && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          {title && <h1 style={{ margin: 0 }}>{title}</h1>}
          {subtitle && <p style={{ marginTop: '0.5rem' }}>{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default HeroImage;