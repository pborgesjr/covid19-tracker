import React, { useState } from 'react';
import { MdReorder } from 'react-icons/md';

import { history } from '~/services';
import { getLocale } from '~/locale';
import { PALETTE } from '~/theme';
import logo from '~/assets/logo.svg';
import Menu from '../Menu';

import {
  Container,
  Left,
  Middle,
  Button,
  Right,
  NavLinkCustom,
} from './styles';

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const { appName, brazil, world, about } = getLocale();

  const handleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  };

  return (
    <Container>
      <Left />
      <Middle onClick={() => history.push('brasil')}>
        <span>{appName}</span>
        <img src={logo} alt="logo" />
      </Middle>
      <Button onClick={handleMenuVisibility}>
        <MdReorder size={48} color={PALETTE.neutral.white} />
      </Button>

      <Right>
        <NavLinkCustom to="/brasil">{brazil}</NavLinkCustom>
        <NavLinkCustom to="/mundo">{world}</NavLinkCustom>
        <NavLinkCustom to="/sobre">{about}</NavLinkCustom>
      </Right>

      <Menu
        isVisible={menuVisibility}
        handleMenuVisibility={handleMenuVisibility}
      />
    </Container>
  );
};

export default Header;
