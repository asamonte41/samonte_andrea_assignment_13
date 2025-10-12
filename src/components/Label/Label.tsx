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

const Label: React.FC<LabelProps> = ({ text, htmlFor, required = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {text}
      {required && <span aria-hidden="true">*</span>}
    </StyledLabel>
  );
};

export default Label;