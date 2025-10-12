import React from 'react';

export interface TableRowProps {
  cells: (string | number | React.ReactNode)[];
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}