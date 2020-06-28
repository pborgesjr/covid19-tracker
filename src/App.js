import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'intersection-observer';

import { ToastContainer } from 'react-toastify';

import history from '~/services/history';
import { store } from './store/index';
import Routes from '~/routes/index';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} style={{ fontSize: '2rem' }} />
      </Router>
    </Provider>
  );
}

export default App;
