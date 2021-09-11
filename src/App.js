import React from 'react';
import { Router } from 'react-router-dom';
import 'intersection-observer';

import { ToastContainer } from 'react-toastify';

import { history } from '~/services';
import Routes from '~/routes/index';

import { GlobalStyle } from '~/theme';

const App = () => {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} style={{ fontSize: '2rem' }} />
    </Router>
  );
};

export default App;
