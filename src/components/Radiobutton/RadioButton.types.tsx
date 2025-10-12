export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  label?: string;
  name?: string;
  required?: boolean;
  options: RadioOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}