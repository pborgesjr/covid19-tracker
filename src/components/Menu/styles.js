import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${PALETTE.opacity.black95};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 5px;
  z-index: 5;
  font-size: 2.4rem;

  a + a {
    padding-top: 20px;
  }

  svg {
    margin-top: 100px;
  }
`;

export const NavLinkCustom = styled(NavLink).attrs(() => ({
  activeStyle: {
    color: PALETTE.vividGreen,
    borderBottom: `1px solid ${PALETTE.vividGreen}`,
    borderBottomWidth: '2px',
  },
}))`
  color: ${PALETTE.neutral.white};
`;
