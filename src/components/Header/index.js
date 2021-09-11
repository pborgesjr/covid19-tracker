import React, { useState } from 'react';
import { MdReorder, MdLanguage } from 'react-icons/md';

import { history } from '~/services';
import { getLocale } from '~/locale';
import { PALETTE } from '~/theme';
import { get, set } from '~/storage';
import logo from '~/assets/logo.svg';
import Menu from '../Menu';

import {
  Container,
  Left,
  Middle,
  Button,
  Right,
  NavLinkCustom,
  LanguageButton,
  iconStyle,
} from './styles';

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [language, setLanguage] = useState(get('locale') || 'ptBR');

  const { appName, brazil, world, about } = getLocale();

  const handleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  };

  const handleChangeLocale = () => {
    setLanguage(language === 'ptBR' ? 'en' : 'ptBR');
    set('locale', language === 'ptBR' ? 'en' : 'ptBR');
    window.location.reload();
    /** replace with efficient solution */
    /** it would be better if it wouldn't reload the entire page and its components */
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

        <LanguageButton type="button" onClick={handleChangeLocale}>
          <MdLanguage size={25} style={iconStyle} />
          {language}
        </LanguageButton>
      </Right>

      <Menu
        isVisible={menuVisibility}
        handleMenuVisibility={handleMenuVisibility}
      />
    </Container>
  );
};

export default Header;
