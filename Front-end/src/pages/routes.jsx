import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';

import PagesRegister from './Register/Register'
const Routes = () => (
  <Router>
    <StoreProvider>
      <Switch>

        <Route path="/login" component={Login} />

        <Route path="/register" component={PagesRegister} />

        <RoutesPrivate path="/" component={Home} />

      </Switch>
    </StoreProvider>
  </Router>
)


export default Routes;
