import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { getLocale } from '~/locale';

import { Container, NavLinkCustom } from './styles';

const Menu = ({ handleMenuVisibility, isVisible }) => {
  const { brazil, world, about, brazilCities } = getLocale();

  return (
    <Container isVisible={isVisible}>
      <NavLinkCustom to="/brasil" onClick={handleMenuVisibility}>
        {brazil}
      </NavLinkCustom>
      <NavLinkCustom to="/cidades" onClick={handleMenuVisibility}>
        {brazilCities}
      </NavLinkCustom>
      <NavLinkCustom to="/mundo" onClick={handleMenuVisibility}>
        {world}
      </NavLinkCustom>
      <NavLinkCustom to="/sobre" onClick={handleMenuVisibility}>
        {about}
      </NavLinkCustom>

      <IoMdCloseCircleOutline
        onClick={handleMenuVisibility}
        size={60}
        color="#fff"
      />
    </Container>
  );
};

Menu.propTypes = {
  handleMenuVisibility: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

Menu.defaultProps = {
  isVisible: false,
};

export default Menu;
