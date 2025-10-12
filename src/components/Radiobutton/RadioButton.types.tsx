export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  label?: string;
  name: string;
  options: RadioOption[];
  required?: boolean;
  selectedValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}