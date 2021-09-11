import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Brasil, World, About, Cities } from '~/pages';

import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route path="/brasil" exact component={Brasil} />
      <Route path="/mundo" exact component={World} />
      <Route path="/sobre" exact component={About} />
      <Route path="/cidades" exact component={Cities} />
      <Redirect from="*" to="/brasil" />
    </Switch>
  );
};

export default Routes;
