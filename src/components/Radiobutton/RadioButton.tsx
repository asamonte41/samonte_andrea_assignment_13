import React from "react";
import { RadioButtonProps } from "./RadioButton.types";

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  className = "",
  style,
  onChange,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange?.(value);
    }
  };

  return (
    <label
      className={`radio-button ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        marginRight: "1rem",
        color: disabled ? "#999" : "#000",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        style={{ marginRight: "0.5rem" }}
      />
      {label}
    </label>
  );
};

export default RadioButton;
