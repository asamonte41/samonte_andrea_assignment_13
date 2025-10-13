export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}