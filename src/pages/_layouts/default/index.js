import React from 'react';

import { Header } from '~/components';
import { Wrapper } from './styles';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default DefaultLayout;
