import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import { getLocale } from '~/locale';
import { PALETTE } from '~/theme';

import { Container } from './styles';

const FloatingButton = ({ setIsShowing }) => {
  const { cities } = getLocale();

  return (
    <Container onClick={() => setIsShowing(true)}>
      <MdChevronLeft color={PALETTE.neutral.white} size={40} />
      <span>{cities}</span>
    </Container>
  );
};

export default FloatingButton;
