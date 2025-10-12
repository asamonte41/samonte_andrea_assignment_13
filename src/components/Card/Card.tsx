import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  style,
}) => {
  return (
    <div className={`card-container ${className}`} style={{ padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff', ...style }}>
      {(title || subtitle) && (
        <div style={{ marginBottom: '0.5rem' }}>
          {title && <h2 style={{ margin: 0 }}>{title}</h2>}
          {subtitle && <p style={{ margin: 0, color: '#666' }}>{subtitle}</p>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;