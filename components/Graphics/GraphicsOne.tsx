import * as React from 'react';
import styled from 'styled-components';

const Base = styled.span`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 0;
  bottom: 0;
  background: linear-gradient(90deg, #c84e89 0%, rgba(241, 95, 121, 0.61) 100%);
  border-radius: 32px;
`;

const SquareOne = styled.span`
  position: absolute;
  width: 223px;
  height: 223px;
  left: 0;
  bottom: 0;
  background: linear-gradient(90deg, #c84e89 0%, rgba(241, 95, 121, 0.61) 100%);
  border-radius: 32px;
`;

const SquareTwo = styled.span`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 0;
  bottom: 0;
  background: linear-gradient(90deg, #c84e89 0%, rgba(241, 95, 121, 0.61) 100%);
  border-radius: 24px;
`;

const GraphicsOne: React.FC = () => {
  return (
    <Base>
      <SquareOne />
      <SquareTwo />
    </Base>
  );
};

export default GraphicsOne;
