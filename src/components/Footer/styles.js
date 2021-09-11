import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  span {
    font-size: 18px;
    color: ${PALETTE.neutral.white};
  }

  @media only screen and (max-height: 1100px) {
    padding-top: 15px;
  }

  @media only screen and (max-height: 950px) {
    padding-top: 5px;
  }
`;
