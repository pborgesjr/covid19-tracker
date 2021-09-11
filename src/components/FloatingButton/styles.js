import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  border-radius: 6px;
  background: ${PALETTE.vividGreen};
  position: absolute;
  bottom: -20px;
  right: 50px;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;

    span {
      color: ${PALETTE.neutral.darkerGrey};
      font-weight: bold;
    }

    svg {
      fill: ${PALETTE.neutral.darkerGrey};
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }

  span {
    font-size: 2rem;
    color: ${PALETTE.neutral.white};
  }
`;
