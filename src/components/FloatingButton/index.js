/* eslint-disable react/prop-types */
import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

const FloatingButton = ({ setIsShowing }) => {
  return (
    <Container onClick={() => setIsShowing(true)}>
      <MdChevronLeft color="#fff" size={40} />
      <span>munícipios</span>
    </Container>
  );
};

export default FloatingButton;
