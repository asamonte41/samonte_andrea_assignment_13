import React from 'react';

export interface TableHeaderProps {
  headers: string[];
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}