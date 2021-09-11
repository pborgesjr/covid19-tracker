import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${PALETTE.neutral.grey};
  border-radius: 4px;
  font-size: 2rem;
  color: ${PALETTE.neutral.white};
  margin-top: 50px;
  padding: 15px 10px;
  width: 100%;
  max-width: 500px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 15px;
  }
`;

export const Middle = styled.div`
  margin-top: 30px;
  div {
    display: flex;
    justify-content: space-between;
  }

  div + div {
    margin-top: 15px;
  }
`;
