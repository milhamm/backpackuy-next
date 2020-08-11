import * as React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from 'utils/variables';

interface ContainerProps {
  children: React.ReactNode;
  display?: 'default' | 'flex';
}

const ContainerFlex = css`
  display: flex;
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;
  display: ${(props) => (props.displayType ? props.displayType : 'default')};
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 1.2rem;
  ${(props) => props.displayType === 'flex' && ContainerFlex};
`;

const Container: React.FC<ContainerProps> = ({
  children,
  display,
}: ContainerProps) => {
  return <ContainerWrapper displayType={display}>{children}</ContainerWrapper>;
};

export default Container;
