import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import styled from 'styled-components';

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  required = false,
  options,
  selectedValue,
  onChange,
  className = '',
  style,
}) => {
  return (
    <div className={`radio-group ${className}`} style={style}>
      {label && (
        <label>
          {label}
          {required && <span style={{ color: 'red', marginLeft: '0.25rem' }}>*</span>}
        </label>
      )}
      {options.map((opt) => (
        <label key={opt.value} style={{ display: 'block', marginTop: '0.5rem' }}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={() => onChange?.(opt.value)}
            required={required}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;

