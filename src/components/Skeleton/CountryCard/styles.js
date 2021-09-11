import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: ${PALETTE.neutral.grey};
  border-radius: 4px;
  padding: 15px 20px;
  margin-right: 25px;

  span:nth-of-type(1) {
    height: 200px;
    width: 200px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: row;
    margin-right: 0;
    margin-bottom: 15px;

    span:nth-of-type(1) {
      height: 100px;
      width: 100px;
    }

    span:nth-of-type(3) {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    height: 150px;
  }
`;
