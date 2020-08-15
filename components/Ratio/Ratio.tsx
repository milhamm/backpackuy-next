import React from 'react';
import styled from 'styled-components';

interface RatioProps {
  children: React.ReactElement;
}

const OuterContainer = styled.div`
  height: 0px;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const Content = styled.div`
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
`;

const Ratio: React.FC = ({ children }: RatioProps) => {
  return (
    <OuterContainer>
      <Content>{children}</Content>
    </OuterContainer>
  );
};

export { Ratio };
