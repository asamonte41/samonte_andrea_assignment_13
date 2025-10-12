import React from 'react';
import type { DropdownProps } from './Dropdown.types';
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

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  placeholder = 'Select an option',
  required = false,
  onChange,
}) => {
  return (
    <StyledWrapper>
      {label && (
        <StyledLabel htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </StyledLabel>
      )}
      <StyledSelect id={name} name={name} onChange={onChange} required={required}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
};

export default Dropdown;