import React from 'react';
import type { RadioButtonProps } from './RadioButton.types';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 1rem 0;
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #222;

  span {
    color: red;
    margin-left: 0.25rem;
  }
`;

export const StyledOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  input[type='radio'] {
    margin-right: 0.5rem;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  options,
  required = false,
  selectedValue,
  onChange,
}) => {
  return (
    <StyledWrapper>
      {label && (
        <StyledLabel>
          {label}
          {required && <span>*</span>}
        </StyledLabel>
      )}
      {options.map((opt) => (
        <StyledOption key={opt.value}>
          <input
            type="radio"
            id={`${name}-${opt.value}`}
            name={name}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={onChange}
            required={required}
          />
          <label htmlFor={`${name}-${opt.value}`}>{opt.label}</label>
        </StyledOption>
      ))}
    </StyledWrapper>
  );
};

export default RadioButton;