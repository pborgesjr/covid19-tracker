import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${PALETTE.neutral.grey};
  border-radius: 4px;
  padding: 15px 20px;

  color: ${PALETTE.neutral.white};
  font-size: 2.5rem;

  @media only screen and (max-width: 800px) {
    flex-direction: row;
    margin-bottom: 15px;
    padding: 5px 10px;
    font-size: 2rem;
  }
`;

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 10px;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
    img {
      height: 24px;
      width: 24px;
    }
  }
`;

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 200px;
  margin: 0 5px;

  @media only screen and (max-width: 800px) {
    width: 150px;
  }

  @media only screen and (max-width: 535px) {
    width: 120px;
    height: 100px;
  }

  @media only screen and (max-width: 430px) {
    width: 80px;
  }
`;

export const CasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 20px;

  @media (max-width: 800px) {
    padding-bottom: 0;
  }
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 10px;
  }

  @media only screen and (max-width: 800px) {
    span {
      margin-right: 10px;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${PALETTE.neutral.white};
  padding: 20px 0;

  color: ${PALETTE.neutral.white};

  a {
    text-decoration: underline;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
