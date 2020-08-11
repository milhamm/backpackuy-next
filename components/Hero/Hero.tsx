import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'components/Container';

const Wrapper = styled.div`
  width: 100%;
  height: 640px;
  background: linear-gradient(80.18deg, #ec008c 2.48%, #fc6767 92.63%);
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        consequatur, earum porro in voluptatibus minima. Voluptatum temporibus
        soluta vitae unde! Nobis itaque quos, cupiditate excepturi iusto
        voluptate rem optio obcaecati?
      </Container>
    </Wrapper>
  );
};

export default Hero;
