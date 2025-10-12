import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;

  span {
    color: red;
    margin-left: 0.25rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  required = false,
  className = '',
  style,
}) => {
  return (
    <label htmlFor={htmlFor} className={className} style={style}>
      {children}
      {required && <span style={{ color: 'red', marginLeft: '0.25rem' }}>*</span>}
    </label>
  );
};

export default Label;
