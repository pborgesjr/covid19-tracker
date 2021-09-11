import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${PALETTE.neutral.darkGrey};
  align-items: center;
  padding: 20px 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 135px;
  transition: box-shadow 0.3s;

  div {
    flex: 1;
  }

  @media (max-width: 500px) {
    padding: 10px 15px;
    height: 75px;
  }
`;

export const Left = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    color: ${PALETTE.neutral.white};
    font-size: 4rem;
  }
  img {
    height: 48px;
    width: 48px;
  }

  @media (max-width: 1000px) {
    flex-direction: row;
  }

  @media (max-width: 500px) {
    span {
      font-size: 3rem;
    }
  }
`;

export const Button = styled.button`
  display: none;
  background: none;
  border: 0;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 2.4rem;

  a {
    padding-right: 20px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const NavLinkCustom = styled(NavLink).attrs(() => ({
  activeStyle: {
    color: PALETTE.vividGreen,
    borderBottom: `1px solid ${PALETTE.vividGreen}`,
    borderBottomWidth: '5px',
  },
}))`
  color: ${PALETTE.neutral.white};
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${PALETTE.neutral.white};
  font-size: 2rem;
  margin-left: 5rem;
`;

export const iconStyle = {
  marginRight: '1rem',
};
