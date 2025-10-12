import React from 'react';

export interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
  isHeader?: boolean;
  colSpan?: number;
}