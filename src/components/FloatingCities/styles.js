import styled, { keyframes, css } from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

import { PALETTE } from '~/theme';

/** Move in animation */
const moveIn = keyframes`
from {
  right: -360px;
}
to {
  right: 0;
}
`;

/** Move out animation */
const moveOut = keyframes`
from {
  right: 0;
}
to {
  right: -360px;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: -360px;
  z-index: 15;
  background: ${PALETTE.neutral.grey222};
  height: 100%;
  width: 100%;
  max-width: 360px;
  overflow-y: scroll;
  padding: 10px;

  ${(props) =>
    props.isShowing === true &&
    css`
      animation: ${moveIn} 0.3s ease-in-out forwards;
    `}
  ${(props) =>
    props.isShowing === false &&
    css`
      animation: ${moveOut} 0.3s ease-in-out forwards;
    `}
`;

export const CustomCloseCircle = styled(IoMdCloseCircle)`
  height: 48px;
  width: 48px;
  fill: ${PALETTE.vividGreen};
  margin: 25px 0 45px 220px;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2) rotate(90deg);
  }
`;
