export interface TextProps {
  children: React.ReactNode;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'danger' | 'success';
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}