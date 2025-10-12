export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label?: string;
  name?: string;
  required?: boolean;
  options: DropdownOption[];
  value?: string; // ✅ Add this line
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}