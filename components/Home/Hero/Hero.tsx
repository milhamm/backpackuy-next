import * as React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Button from 'components/Button';
import { radius, breakpoints } from 'utils/variables';

const Wrapper = styled.div`
  width: 100%;
  height: 640px;
  position: relative;
  background: linear-gradient(80.18deg, #ec008c 2.48%, #fc6767 92.63%);
  @media (max-width: ${breakpoints.sm}) {
    height: 100vh;
  }
`;

const Title = styled.h1`
  padding-top: 200px;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 88px;
  color: #ffffff;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 48px;
    line-height: unset;
  }
`;

const Left = styled.div`
  width: 100%;
  flex: 1 1 60%;
  padding: 0 8px;
`;

const Right = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 40%;
  padding: 0 8px;
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const Description = styled.p`
  max-width: 400px;
  margin-top: 16px;
  font-style: light;
  font-weight: 100;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.015em;
  color: white;
  margin-bottom: 46px;
`;

const ImageFrame = styled.div`
  position: absolute;
  bottom: -170px;
  border-radius: ${radius.lg};
  width: 100%;
  height: 569px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Container display='flex'>
        <Left>
          <Title>Gateway to Indonesia Tour</Title>
          <Description>
            Venture to the beauty of Indonesia with Backpackuy, a travel
            assistant.
          </Description>
          <Button>Get Started</Button>
        </Left>
        <Right>
          <ImageFrame>
            <img src='/images/bromo.jpg' alt='' />
          </ImageFrame>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Hero;
