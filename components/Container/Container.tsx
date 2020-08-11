import * as React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 1.2rem;
`;

const Container: React.FC = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
