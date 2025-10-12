import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}