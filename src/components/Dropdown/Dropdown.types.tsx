export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label?: string;
  name: string;
  options: DropdownOption[];
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}