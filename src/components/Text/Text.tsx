import React from 'react';
import type { TextProps } from './Text.types';
import styled from 'styled-components';

interface StyledProps {
  size: 'sm' | 'md' | 'lg';
  color: 'default' | 'muted' | 'danger';
  align: 'left' | 'center' | 'right';
}

export const StyledText = styled.p<StyledProps>`
  font-size: ${({ size }) =>
    size === 'sm' ? '0.75rem' :
    size === 'lg' ? '1.25rem' : '1rem'};
  color: ${({ color }) =>
    color === 'muted' ? '#666' :
    color === 'danger' ? '#c00' : '#222'};
  text-align: ${({ align }) => align};
  margin: 0.5rem 0;
`;

const Text: React.FC<TextProps> = ({ children, size = 'md', color = 'default', align = 'left' }) => {
  return (
    <StyledText size={size} color={color} align={align}>
      {children}
    </StyledText>
  );
};

export default Text;