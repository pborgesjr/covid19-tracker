import React from 'react';

import { getLocale } from '~/locale';

import { Container } from './styles';

const Footer = () => {
  const { protectYourself } = getLocale();

  return (
    <Container>
      <span>{protectYourself}</span>
    </Container>
  );
};

export default Footer;
