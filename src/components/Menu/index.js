import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { Container, NavLinkCustom } from './styles';

const Menu = ({ handleMenuVisibility, isVisible }) => {
  return (
    <Container isVisible={isVisible}>
      <NavLinkCustom to="/brasil" onClick={handleMenuVisibility}>
        brasil
      </NavLinkCustom>
      <NavLinkCustom to="/cidades" onClick={handleMenuVisibility}>
        cidades do brasil
      </NavLinkCustom>
      <NavLinkCustom to="/mundo" onClick={handleMenuVisibility}>
        mundo
      </NavLinkCustom>
      <NavLinkCustom to="/sobre" onClick={handleMenuVisibility}>
        sobre
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
