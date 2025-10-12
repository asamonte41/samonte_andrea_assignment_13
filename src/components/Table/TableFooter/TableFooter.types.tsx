import React from 'react';

export interface TableFooterProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  colSpan?: number;
}