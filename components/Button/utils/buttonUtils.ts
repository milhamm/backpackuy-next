import { css } from 'styled-components';
import { colors, radius } from 'utils/variables';

export const ButtonPrimary = css`
  background-color: ${colors.primary};
`;

export const ButtonDefault = css`
  color: ${colors.primary};
`;

export const ButtonMedium = css`
  height: 52px;
  padding: 0 40px;
  border-radius: ${radius.md};
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`;
