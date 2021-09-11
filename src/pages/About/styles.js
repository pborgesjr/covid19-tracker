import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  margin-top: 135px;

  a {
    text-decoration-style: none;
    color: ${PALETTE.vividGreen};
    text-align: justify;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 75px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${PALETTE.neutral.grey};
  border-radius: 4px;
  height: 400px;
  width: 100%;
  max-width: 550px;
  padding: 0 20px;
`;

export const Message = styled.span`
  text-align: justify;
  color: ${PALETTE.neutral.white};
`;

export const API = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SourceCode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
