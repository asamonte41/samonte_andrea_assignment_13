import React from 'react';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({
  id,
  children,
  disabled = false,
  className = '',
  style,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <span
      id={id}
      className={`text ${className}`}
      style={{
        color: disabled ? '#999' : '#000',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      onClick={handleClick}
    >
      {children}
    </span>
  );
};

export default Text;