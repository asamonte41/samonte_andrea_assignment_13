import React from 'react';
import { ButtonProps } from './Button.types';
import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>
`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
const Button: React.FC<ButtonProps> = ({ label, disabled = false, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={!disabled ? onClick : undefined}>
      {label}
    </StyledButton>
  );
};

export default Button;