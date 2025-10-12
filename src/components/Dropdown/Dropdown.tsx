import React from 'react';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  required = false,
  options,
  value,
  onChange,
  className = '',
  style,
}) => {
  return (
    <div className={`dropdown ${className}`} style={style}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span style={{ color: 'red', marginLeft: '0.25rem' }}>*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
