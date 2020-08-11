import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonTypes, ButtonSizes } from './types';
import {
  ButtonPrimary,
  ButtonMedium,
  ButtonDefault,
} from './utils/buttonUtils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonTypes;
  size?: ButtonSizes;
}

const ButtonBase = css`
  margin: 0;
  padding: 0 16px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: white;
  text-decoration: none;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.2px;
  border: 1px solid transparent;
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:focus {
    outline: 0px;
  }
`;

const Button = styled.button`
  ${ButtonBase}
  ${(props) => props.variant == 'default' && ButtonDefault}
  ${(props) => props.variant === 'primary' && ButtonPrimary}

  ${(props) => props.size == 'default' && ButtonMedium}
`;

const Root: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
}: ButtonProps) => {
  return (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  );
};

Root.defaultProps = {
  variant: 'default',
  size: 'default',
};

export default Root;
