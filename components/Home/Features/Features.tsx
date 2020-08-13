import React from 'react';
import styled, { css } from 'styled-components';
import { radius, colors, breakpoints } from 'utils/variables';
import Container from 'components/Container';
import { features } from './variables';

const Base = styled.div`
  min-height: 576px;
  padding: 32px 104px;
  background: linear-gradient(
    140.41deg,
    #fce3ec -11.14%,
    #ffd5e4 -11.14%,
    rgba(255, 226, 236, 0) 51.51%
  );
  border-radius: ${radius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 196px;
  margin-bottom: 52px;
  amp-img {
    width: 128px;
    height: 128px;
    margin-bottom: 32px;
  }
  @media (max-width: ${breakpoints.sm}) {
    amp-img {
      width: 96px;
      height: 96px;
    }
    margin-top: 32px;
    padding: 32px 8px;
    border-radius: ${radius.md};
  }
`;

const Text = css`
  font-style: normal;
  font-weight: bolder;
  line-height: 49px;
  text-align: center;
  letter-spacing: -0.015em;
`;

const Title = styled.h2`
  ${Text}
  font-size:2em;
  color: ${colors.black01};
  margin-bottom: 84px;
  strong{
    ${Text}
    color: ${colors.primary}
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 64px;

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const FeatureItems = styled.div`
  width: 100%;
`;

const FeatureTitle = styled.h4`
  font-style: normal;
  font-weight: 900;
  font-size: 1.2em;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${colors.primary};
  margin-bottom: 42px;
`;

const FeatureDescription = styled.p`
  font-style: normal;
  font-weight: 300;
  /* font-size: 18px; */
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${colors.black01};
`;

const Features: React.FC = () => {
  return (
    <section id='features'>
      <Container>
        <Base>
          <amp-img
            src='/logo/icon.svg'
            alt='Backpackuy Icon'
            layout='intrinsic'
            width='128'
            height='128'
          />
          <Title>
            Introducing <strong>Backpackuy</strong>
          </Title>
          <FeatureGrid>
            {features.map((feature) => (
              <FeatureItems key={feature.name}>
                <FeatureTitle>{feature.name}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureItems>
            ))}
          </FeatureGrid>
        </Base>
      </Container>
    </section>
  );
};

export { Features };
