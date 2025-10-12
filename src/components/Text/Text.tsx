import React from 'react';
import { TextProps } from './Text.types';

const sizeMap = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
};

const colorMap = {
  primary: '#007bff',
  danger: '#c00',
  success: '#28a745',
};

const Text: React.FC<TextProps> = ({
  children,
  id,
  size = 'md',
  color = 'primary',
  align = 'left',
  className = '',
  style,
}) => {
  return (
    <span
      id={id}
      className={`text ${className}`}
      style={{
        fontSize: sizeMap[size],
        color: colorMap[color],
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Text;